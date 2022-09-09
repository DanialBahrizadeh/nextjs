/*
  new way to fetch 
  you need to install swr first
  it is the prefer way from Next.js him self to client side fetch data 
  it update the data Immediately with no need for even refresh
 */
import useSWR from "swr";

const fethcer = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

export default function DashboardSWR() {
  // (key, function/fetcher)
  const { data, error } = useSWR("dashboard", fethcer);

  if (error) return "An error has occured";
  if (!data) return "Loading...";

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts} </h2>
      <h2>Likes - {data.likes} </h2>
      <h2>Followers - {data.followers} </h2>
      <h2>following - {data.following} </h2>
    </div>
  );
}
