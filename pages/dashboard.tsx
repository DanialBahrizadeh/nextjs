import { signIn, useSession } from "next-auth/react";
const Dashboard = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <h2>Loading...</h2>;
  }
  if (status === "unauthenticated") {
    // signIn();
    return <h2>Pls signin</h2>;
  }
  console.log(session?.user);
  return <h1>dashboard</h1>;
};
export default Dashboard;
