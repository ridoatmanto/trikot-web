// import { Outlet, useLoaderData } from "react-router-dom";
// import { CookiesProvider } from "react-cookie";

// import { SiteNavigation } from "@/components/shared/site-navigation";
// import { SiteFooter } from "@/components/shared/site-footer";
import { auth } from "../../libs/auth";

export async function loader() {
  const user = await auth.checkUser();
  if (!auth.isAuthenticated) {
    await auth.checkUser();
  }

  return {
    isAuthenticated: auth.isAuthenticated,
    user: user,
  };
}

import { Outlet, useLoaderData } from "react-router-dom";

import { Header } from "./header";
import { Footer } from "./footer";

export function Layout() {
  const { isAuthenticated, user } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} user={user} />
      <Outlet />
      <Footer />
    </div>
  );
}
