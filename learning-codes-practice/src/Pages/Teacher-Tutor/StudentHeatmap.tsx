import React from "react";
import "./heatmap.css";

interface HeatmapProps {
  data: number[];
}

const StudentHeatmap: React.FC<HeatmapProps> = ({ data }) => {
  const max = Math.max(...data);

  return (
    <div>
      <h5 className="fw-bold mb-3">📅 Student Activity Heatmap</h5>
      <div className="heatmap-grid">
        {data.map((v, i) => (
          <div
            key={i}
            className="heatmap-cell"
            style={{
              backgroundColor: `rgba(0, 123, 255, ${v / max})`,
              borderRadius: "3px",
            }}
            title={`Activity: ${v}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StudentHeatmap;
