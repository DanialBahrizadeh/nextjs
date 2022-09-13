import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
});
