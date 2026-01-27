import React from "react";
import ExcelJS from "exceljs";
import apidata from "./api.json" 
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/* ---------- Column Configuration ---------- */
const columnConfig = [
  { key: "newlyAdded", label: "Newly Added RC", children: ["rc", "units"] },
  { key: "deleted", label: "Deleted RC", children: ["rc", "units"] },
  { key: "addedMember", label: "Added Member" },
  { key: "deletedMember", label: "Deleted Member" },
  { key: "modified", label: "Modified / Re-modified", children: ["rc", "units"] },
] as const;

/* ---------- API Response Type ---------- */
interface SchemeWiseData {
  cardDesc: string;
  newRcCount: number;
  newRcMemberCount: number;
  modifiedRcCount: number;
  modifiedRcMemberCount: number;
  deletedRcCount: number;
  deletedRcMemberCount: number;
  addedMemberCount: number;
  deletedMemberCount: number;
}

interface AuthorityData {
  authorityId: number;
  authorityName: string;
  schemeWiseData: SchemeWiseData[];
}

interface Props {
  data: AuthorityData[];
}

/* ---------- Normalize API → UI ---------- */
const normalizeSchemeData = (scheme?: SchemeWiseData) => ({
  newlyAdded: {
    rc: scheme?.newRcCount ?? 0,
    units: scheme?.newRcMemberCount ?? 0,
  },
  deleted: {
    rc: scheme?.deletedRcCount ?? 0,
    units: scheme?.deletedRcMemberCount ?? 0,
  },
  modified: {
    rc: scheme?.modifiedRcCount ?? 0,
    units: scheme?.modifiedRcMemberCount ?? 0,
  },
  addedMember: scheme?.addedMemberCount ?? 0,
  deletedMember: scheme?.deletedMemberCount ?? 0,
});



/* ---------- Main Component ---------- */
const SchemeTable: React.FC<Props> = () => {
  const data = apidata.data

  /* Get unique scheme names (AAY, APL, BPL, etc.) */
  const schemes = Array.from(
    new Set(
      data.flatMap((a) => a.schemeWiseData?.map((s) => s?.cardDesc))
    )
  );

  /* Count sub columns per scheme */
  const subColumnCount = columnConfig.reduce(
    (sum:any, col:any) => sum + (col.children ? col.children.length : 1),
    0
  );

  
  /* ---------- Export Excel using ExcelJS ---------- */
  /* ---------- Export Excel without file-saver ---------- */
  const exportExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Scheme Report");

    let rowNumber = 1;

    // ---------- Row 1: Scheme Names ----------
    const row1: string[] = ["", ""];
    schemes.forEach(() => {
      columnConfig.forEach((col:any) => {
        if (col.children) {
          col.children.forEach(() => row1.push(col.label));
        } else {
          row1.push(col.label);
        }
      });
    });
    worksheet.addRow(row1);

    // Merge scheme header cells
    let colIndex = 3;
    schemes.forEach(() => {
      columnConfig.forEach((col:any) => {
        if (col.children) {
          worksheet.mergeCells(rowNumber, colIndex, rowNumber, colIndex + col.children.length - 1);
          colIndex += col.children.length;
        } else {
          worksheet.mergeCells(rowNumber, colIndex, rowNumber + 1, colIndex);
          colIndex++;
        }
      });
    });

    rowNumber++;

    // ---------- Row 2: Sub-columns ----------
    const row2: string[] = ["SL.No", "DFSO"];
    schemes.forEach(() => {
      columnConfig.forEach((col:any) => {
        if (col.children) col.children.forEach((c:any) => row2.push(c.toUpperCase()));
      });
    });
    worksheet.addRow(row2);
    rowNumber++;

    // ---------- Body ----------
    data.forEach((authority, idx) => {
      const row: any[] = [idx + 1, authority.authorityName];
      schemes.forEach((schemeName) => {
        const schemeData = authority.schemeWiseData.find((s) => s.cardDesc === schemeName);
        const normalized: any= normalizeSchemeData(schemeData);
        columnConfig.forEach((col:any) => {
          if (col.children) col.children.forEach((child:any) => row.push(normalized[col.key][child]));
          else row.push(normalized[col.key]);
        });
      });
      worksheet.addRow(row);
    });

    // Styling
    worksheet.eachRow((row) => {
      row.alignment = { vertical: "middle", horizontal: "center" };
      row.font = { name: "Arial", size: 10 };
      row.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });
    worksheet.columns.forEach((col) => (col.width = 15));

    // Generate Blob and download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "SchemeReport.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  /* ---------- Export PDF without file-saver ---------- */
  // const exportPDF = () => {
  //   const doc = new jsPDF();

  //   const tableColumns: string[] = ["SL.No", "DFSO"];
  //   schemes.forEach(() => {
  //     columnConfig.forEach((col:any) => {
  //       if (col.children) col.children.forEach((c:any) => tableColumns.push(col.label + " " + c.toUpperCase()));
  //       else tableColumns.push(col.label);
  //     });
  //   });

  //   const tableRows: any[] = [];
  //   data.forEach((authority, idx) => {
  //     const row: any[] = [idx + 1, authority.authorityName];
  //     schemes.forEach((schemeName) => {
  //       const schemeData = authority.schemeWiseData.find((s) => s.cardDesc === schemeName);
  //       const normalized:any = normalizeSchemeData(schemeData);
  //       columnConfig.forEach((col:any) => {
  //         if (col.children) col.children.forEach((child:any) => row.push(normalized[col.key][child]));
  //         else row.push(normalized[col.key]);
  //       });
  //     });
  //     tableRows.push(row);
  //   });
  //   autoTable(doc, {
  //         body: tableRows,
  //         head: [tableColumns],
  //         startY: 20,
  //         theme: 'landscap',
  //         styles: {
  //           fontSize: 8,
  //           cellPadding: 2,
  //         },
  //         headStyles: { fillColor: [220, 220, 220] }
  //       }
  //     )

  //   doc.save("SchemeReport.pdf");
  // };


  const exportPDF = () => {
  // Set landscape mode for wide tables
  const doc = new jsPDF({ orientation: "landscape" });

  // ---------- Prepare header rows ----------
  // First row: Scheme Names (merged by children)
  const headRow1: any[] = ["SL.No", "DFSO"];
  const headRow2: any[] = ["", ""];

  schemes.forEach((scheme) => {
    columnConfig.forEach((col:any) => {
      if (col.children) {
        // Add one column per child
        col.children.forEach(() => {
          headRow1.push(scheme); // parent scheme name
          headRow2.push(col.label + " (" + col.children.join(",") + ")");
        });
      } else {
        headRow1.push(scheme);
        headRow2.push(col.label);
      }
    });
  });

  // ---------- Prepare body rows ----------
  const tableRows: any[] = [];
  data.forEach((authority, idx) => {
    const row: any[] = [idx + 1, authority.authorityName];
    schemes.forEach((schemeName) => {
      const schemeData = authority.schemeWiseData.find((s) => s.cardDesc === schemeName);
      const normalized: any = normalizeSchemeData(schemeData);
      columnConfig.forEach((col:any) => {
        if (col.children) {
          col.children.forEach((child:any) => row.push(normalized[col.key][child]));
        } else {
          row.push(normalized[col.key]);
        }
      });
    });
    tableRows.push(row);
  });

  // ---------- Use autoTable ----------
  autoTable(doc, {
    head: [headRow1, headRow2], // double header
    body: tableRows,
    startY: 20,
    styles: {
      fontSize: 9,
      cellPadding: 3,
      halign: "center",
      valign: "middle",
    },
    headStyles: {
      fillColor: [200, 200, 200],
      textColor: 20,
      fontStyle: "bold",
    },
    theme: "grid",
  });

  doc.save("SchemeReport.pdf");
};


  return (
    <div className="p-4 overflow-x-auto">

      <div className="mb-2 flex gap-2">
        <button
          onClick={exportExcel}
          className="px-4 py-2 bg-green-500 text-dark rounded hover:bg-green-600"
        >
          Export Excel
        </button>
        <button
          onClick={exportPDF}
          className="px-4 py-2 bg-blue-500 text-dark rounded hover:bg-blue-600"
        >
          Export PDF
        </button>
      </div>
      <table className="min-w-full border border-gray-300 text-sm text-center bg-white">
        <thead>
          {/* ---------- Row 1: Scheme Names ---------- */}
          <tr className="bg-gray-100 font-semibold">
            <th colSpan={2} className="border"></th>
            {schemes.map((scheme:any) => (
              <th
                key={scheme}
                colSpan={subColumnCount}
                className="border px-4 py-2"
              >
                {scheme}
              </th>
            ))}
          </tr>

          {/* ---------- Row 2: Categories ---------- */}
          <tr className="bg-gray-50 font-semibold">
            <th rowSpan={2} className="border px-2 py-1">
              SL.No
            </th>
            <th rowSpan={2} className="border px-2 py-1">
              DFSO
            </th>

            {schemes.map((scheme:any) =>
              columnConfig.map((col:any) =>
                col.children ? (
                  <th
                    key={`${scheme}-${col.key}`}
                    colSpan={col.children.length}
                    className="border px-2 py-1"
                  >
                    {col.label}
                  </th>
                ) : (
                  <th
                    key={`${scheme}-${col.key}`}
                    rowSpan={2}
                    className="border px-2 py-1"
                  >
                    {col.label}
                  </th>
                )
              )
            )}
          </tr>

          {/* ---------- Row 3: RC / Units ---------- */}
          <tr className="bg-gray-50 font-medium">
            {schemes.map((scheme:any) =>
              columnConfig.map((col:any) =>
                col.children
                  ? col.children.map((child:any) => (
                      <th
                        key={`${scheme}-${col.key}-${child}`}
                        className="border px-2 py-1"
                      >
                        {child.toUpperCase()}
                      </th>
                    ))
                  : null
              )
            )}
          </tr>
        </thead>

        {/* ---------- Body ---------- */}
        <tbody>
          {data.map((authority:any, index:any) => (
            <tr key={authority.authorityId} className="hover:bg-gray-50">
              <td className="border px-2 py-2">{index + 1}</td>
              <td className="border px-2 py-2">
                {authority.authorityName}
              </td>

              {schemes.map((schemeName:any) => {
                const schemeData = authority.schemeWiseData.find(
                  (s:any) => s.cardDesc === schemeName
                );

                const normalized:any = normalizeSchemeData(schemeData);

                return columnConfig.map((col:any) =>
                  col.children
                    ? col.children.map((child:any) => (
                        <td
                          key={`${authority.authorityId}-${schemeName}-${col.key}-${child}`}
                          className="border px-2 py-2"
                        >
                          {normalized[col.key][child]}
                        </td>
                      ))
                    : (
                        <td
                          key={`${authority.authorityId}-${schemeName}-${col.key}`}
                          className="border px-2 py-2"
                        >
                          {normalized[col.key]}
                        </td>
                      )
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchemeTable;

