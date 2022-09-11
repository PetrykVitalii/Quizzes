import CreateQuiz from "@/components/me/CreateQuiz";
import React from "react";
import styled from "styled-components";

const createPage: React.FC = () => {
  return <FormStyled>
    <CreateQuiz />
  </FormStyled>;
};

const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export default createPage;
