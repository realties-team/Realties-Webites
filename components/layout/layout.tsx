import { Fragment } from "react";
import MainHeader from "./main-header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Fragment>
      <MainHeader />

      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
