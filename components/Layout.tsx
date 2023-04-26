import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nprogress from "nprogress";

type LayoutProps = {
  children: ReactNode;
  footer?: boolean;
  dark?: boolean;
};

const Layout = ({ children, footer = true, dark = false }: LayoutProps) => {
  return (
    <div className={dark? 'bg-dark' :'' }>
      <Navbar />
      <main className="container py-4">{children}</main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Dvincy, Digital Clover</h1>
            <p>2022-{new Date().getFullYear()}</p>
            <p>All rigths Reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
