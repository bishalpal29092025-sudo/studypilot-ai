import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/sign-in",
  },
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/roadmap/:path*",
    "/chat/:path*",
    "/quiz/:path*",
    "/settings/:path*",
  ],
};