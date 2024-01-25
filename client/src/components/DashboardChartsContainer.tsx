import DashboardCharts from "./DashboardCharts/DashboardCharts";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading/Loading";

const DashboardChartsContainer = () => {
  // export interface ChartContent {
  //   title: string;
  //   labels: Array<string>;
  //   dataset: Array<number>;
  // }

  const data = {
    left: {
      title: "Teams",
      labels: ["Frontend", "Backend", "Mobile", "Data Science"],
      dataset: [10, 20, 30, 40],
    },
    right: {
      title: "Employees",
      labels: ["Frontend", "Backend", "Mobile", "Data Science"],
      dataset: [30, 20, 10, 40],
    },
  };

  return <DashboardCharts left={data.left} right={data.right} />;
};

export default DashboardChartsContainer;
