import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const EnrollmentBarChart = ({ data }: any) => {
  return (
    <div>
      <h5 className="fw-bold mb-3">📈 Monthly Enrollments</h5>
      <Bar
        data={{
          labels: data.map((d: any) => d.month),
          datasets: [
            {
              label: "Enrollments",
              data: data.map((d: any) => d.value),
              backgroundColor: "rgba(0, 123, 255, 0.6)",
            },
          ],
        }}
        height={90}
      />
    </div>
  );
};

export default EnrollmentBarChart;
