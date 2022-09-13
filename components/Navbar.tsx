import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar: FunctionComponent = () => {
  const { status } = useSession();
  let auth: React.ReactNode = null;
  if (status === "unauthenticated") {
    auth = (
      <li>
        <Link href="/api/auth/signin">
          <a
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Sign In
          </a>
        </Link>
      </li>
    );
  } else if (status === "authenticated") {
    auth = (
      <li>
        <Link href="/api/auth/signout">
          <a
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </a>
        </Link>
      </li>
    );
  } else if (status === "loading") {
    auth = (
      <li>
        <Link href="/">
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sign In
          </a>
        </Link>
      </li>
    );
  } else {
    auth = (
      <li>
        <a>Something went wrong!</a>
      </li>
    );
  }

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className="main-nav">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        {auth}
      </ul>
    </nav>
  );
};
export default Navbar;
