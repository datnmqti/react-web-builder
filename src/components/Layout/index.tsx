import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Main = styled.main`
  height: calc(100vh - 60px);
`;

interface Props {
  breadcrumbs?: { title: string; path: string }[];
  children?: React.ReactNode;
  onExport?: () => void
}

const Layout: React.FC<Props> = ({ breadcrumbs, children, onExport }) => {
  return (
    <>
      <Navbar breadcrumbs={breadcrumbs} onExport={onExport} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
