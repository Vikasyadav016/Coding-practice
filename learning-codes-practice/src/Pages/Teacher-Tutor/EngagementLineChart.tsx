import { Line } from "react-chartjs-2";

const EngagementLineChart = ({ data }: any) => {
  return (
    <div>
      <h5 className="fw-bold mb-3">📊 Weekly Engagement</h5>
      <Line
        data={{
          labels: data.map((d: any) => d.day),
          datasets: [
            {
              label: "Minutes Watched",
              data: data.map((d: any) => d.minutes),
              borderColor: "#28a745",
              backgroundColor: "rgba(40,167,69,0.3)",
            },
          ],
        }}
      />
    </div>
  );
};

export default EngagementLineChart;
