import React from "react";
import { Link, NavLink, useLocation, matchPath } from "react-router-dom";
import styled from "styled-components";
import dlIcon from "./../../images/common/dl.svg";

const Container = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 30px;
  background-color: #333;
`;

const Breadcrumbs = styled.ul`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BreadcrumbItem = styled.li`
  font-size: 16px;
  margin-right: 8px;

  &:not(:first-of-type) {
    &:before {
      content: "/";
      margin-right: 8px;
      font-weight: bold;
      color: #f0f0f0;
    }
  }
`;

const BreadcrumbLink = styled(NavLink)`
  color: #c7c7c7;
  text-decoration: none;
  transition: color .3s ease-in;

  &.active {
    color: #fff;
    font-weight: bold;
    pointer-events: none;
  }

  &:hover {
    color: #fff;
  }
`;

const LogoLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-decoration: none; ;
`;

const ExportButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c9c9c9;
  color: #333;
  padding: 8px 15px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in;
  font-weight: bold;

  &:before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background: url(${dlIcon}) no-repeat;
    background-size: 100% 100%;
  }

  &:hover {
    background-color: #fff;
  }
`;

interface Props {
  breadcrumbs?: { title: string; path: string }[];
  onExport?: () => void;
}

const Navbar: React.FC<Props> = ({ breadcrumbs, onExport }) => {
  const location = useLocation();
  const match = matchPath("/design/:templateID", location.pathname);
  const isDesignPage = !!match;

  return (
    <Container>
      <h1>
        <LogoLink to="/">Static Web Builder</LogoLink>
      </h1>
      {breadcrumbs && (
        <Breadcrumbs>
          {breadcrumbs.map(({ title, path }, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink to={path}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumbs>
      )}
      {isDesignPage ? (
        <ExportButton onClick={onExport}>Export</ExportButton>
      ) : null}
    </Container>
  );
};

export default Navbar;
