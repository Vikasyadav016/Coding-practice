import { Pie } from "react-chartjs-2";

const CoursePieChart = ({ data }: any) => {
  return (
    <div>
      <h5 className="fw-bold mb-3">🎯 Course Popularity</h5>
      <Pie
        data={{
          labels: data.map((d: any) => d.name),
          datasets: [
            {
              data: data.map((d: any) => d.value),
              backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
            },
          ],
        }}
      />
    </div>
  );
};

export default CoursePieChart;
