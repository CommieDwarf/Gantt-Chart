// @flow
import * as React from "react";
import { CreateProject } from "./components/CreateProject";
import styled from "styled-components";
import { IProject } from "./Project/IProject";
import { useState } from "react";
import { Project as ProjectClass } from "./Project/Project";
import "gantt-task-react/dist/index.css";
import { Project } from "./components/Project/Project";
import {Credits} from "./components/Credits";

type Props = {};

const StyledContainer = styled.div`
  width: 100%;
`;

export const App = (props: Props) => {
  const [projects, setProject] = useState<IProject[]>([]);

  function createProject(name: string, start: Date, end: Date) {
    setProject((state) => {
      return [...state, new ProjectClass(name, start, end)];
    });
  }

  function deleteProject(id: string) {
      setProject((state) => state.filter((project) => project.id !== id) )
  }

  return (
    <StyledContainer>
      <Credits/>
      {projects.map((project, i) => {
        return <Project project={project} key={i} deleteProject={deleteProject}/>;
      })}
      <CreateProject createProject={createProject} />
    </StyledContainer>
  );
};
