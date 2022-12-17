// @flow
import * as React from "react";

import styled from "styled-components";
import { useState } from "react";
import { TaskType } from "gantt-task-react/dist/types/public-types";

const StyledContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
`;

const StyledInput = styled.input`
  width: 100px;
  height: 20px;
  margin-right: 20px;
  margin-left: 5px;
  vertical-align: top;
  background-color: var(--lightBlue);
  border: none;
`;

const StyledHeader = styled.header`
  text-align: left;
  color: var(--darkBlue);
`;

type Props = {
  addTask: (name: string, start: Date, end: Date, type: TaskType) => void;
};


export const AddTask = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());
  const [type, setType] = useState<TaskType>("task");

  function handleNameChange(event: React.FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }

  function handleStartChange(event: React.FormEvent<HTMLInputElement>) {
    setStart(new Date(Date.parse(event.currentTarget.value)));
  }

  function handleEndChange(event: React.FormEvent<HTMLInputElement>) {
    const date = new Date(Date.parse(event.currentTarget.value));
    setEnd(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
  }

  function handleTypeChange(event: React.FormEvent<HTMLSelectElement>) {
    setType(event.currentTarget.value as TaskType);
  }

  function handleClick() {
    if (start && end && name && type) {
      props.addTask(name, start, end, type);
    }
  }
  return (
    <StyledContainer>
      <StyledHeader>
        <h3>Add Task</h3>
      </StyledHeader>
      <label htmlFor={"name"}>Name:</label>
      <StyledInput
        id="name"
        type="text"
        onChange={handleNameChange}
        value={name}
      />
      <label htmlFor={"start"}>Start Date:</label>
      <StyledInput
        id="start"
        type="date"
        onChange={handleStartChange}
        value={start.toISOString().split("T")[0]}
      />
      <label htmlFor={"end"}>End Date:</label>
      <StyledInput
        id={"end"}
        type="date"
        onChange={handleEndChange}
        value={end.toISOString().split("T")[0]}
      />
      <label htmlFor={"type"}>Type:</label>
      <StyledInput
        as="select"
        name="taskType"
        id="taskType"
        value={type}
        onChange={handleTypeChange}
      >
        <option value="task">Task</option>
        <option value="milestone">Mile stone</option>
      </StyledInput>
      <StyledInput type={"button"} onClick={handleClick} value={"Add"} />
    </StyledContainer>
  );
};
