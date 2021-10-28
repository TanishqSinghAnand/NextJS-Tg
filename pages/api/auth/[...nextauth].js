import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      let tempToken = token.sub;
      let lastFour = tempToken.toString().slice(-4);
      let username = session.user.name.split(" ").join("").toLocaleLowerCase();
      username = username.concat(lastFour)
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

        session.user.uid = token.sub;
        session.user.usernameID = username;
        return session
    },
  },
});
