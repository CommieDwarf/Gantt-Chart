// @flow
import * as React from "react";
import styled from "styled-components";
import { IProject } from "../Project/IProject";
import { Gantt } from "gantt-task-react";

const StyledContainer = styled.div`
  margin-bottom: 50px;
  background-color: white;
  color: var(--darkBlue);
`;

const StyledHeader = styled.header`
  text-align: center;
`;

type Props = {
  project: IProject;
};

export const Project = (props: Props) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <h2>{props.project.name}</h2>
      </StyledHeader>
      <Gantt tasks={props.project.tasks} />
    </StyledContainer>
  );
};
