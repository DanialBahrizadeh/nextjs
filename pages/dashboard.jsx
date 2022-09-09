// old way chack the dashboard-swr to the best way
import { useState, useEffect } from "react";
export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setDashboardData(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts} </h2>
      <h2>Likes - {dashboardData.likes} </h2>
      <h2>Followers - {dashboardData.followers} </h2>
      <h2>following - {dashboardData.following} </h2>
    </div>
  );
}
