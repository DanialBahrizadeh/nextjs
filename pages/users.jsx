import User from "../components/user";

export default function UserList({ users }) {
  const usersElements = users.map((user) => <User key={user.id} user={user} />);
  return (
    <>
      <h1>List of users</h1>
      {usersElements}
    </>
  );
}
/*
    this function will run on server side and the code you write inside
    won't even be included in the JS bundle that is sent to the browser

    you can write server-side code directly inside this function
    + Accessing the file system using the fs module or querying a database can be done inside 
    you also don't have to worry about including API keys in getStaticProps as that won't make it to the  browser
*/
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
