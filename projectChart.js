import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProjectProgressChart = () => {
  // Define your data
  const data = {
    labels: ["NPC Dialogue", "Event Generation", "Storytelling", "AI Integration"],
    datasets: [
      {
        label: "Completion Percentage",
        data: [70, 50, 30, 20], // Update with your progress values
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#F44336"],
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Project Progress",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ProjectProgressChart;