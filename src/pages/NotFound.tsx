import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Message = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

const HomeLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: white;
  background-color: #000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: .7;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Message>Sorry, page not found!</Message>
      <HomeLink to="/">Go to template page</HomeLink>
    </Container>
  );
};

export default NotFound;
