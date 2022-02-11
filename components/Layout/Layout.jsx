import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div>
        <Header />
        <main className="flex-1  lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
