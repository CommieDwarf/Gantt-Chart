// @flow
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledContainer = styled.div`
  width: 100%;
  background-color: var(--darkBlue);
  padding-bottom: 5px;
  font-weight: bold;
  border: 2px solid var(--golden);
`;
const StyledHeader = styled.header`
  margin: auto;
  text-align: center;
  height: 50px;
  color: var(--golden);
`;

const StyledInputs = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 100px;
  height: 30px;
  border: 2px solid var(--golden);
  margin-right: 30px;
  border-radius: 5px;
  color: var(--darkBlue);
  font-weight: bold;
`;

const StyledButton = styled(StyledInput)`
  display: block;
  margin: auto;
  font-weight: bold;
`;

const StyledLabel = styled.label`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  text-align: center;
  color: #d8a31a;
`;

const StyledInputPair = styled.div`
  height: 30px;
`;

type Props = {
  createProject: (name: string, start: Date, end: Date) => void;
};
export const CreateProject = (props: Props) => {
  const [name, setName] = useState("");
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());

  function handleNameChange(event: React.FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }
  function handleStartChange(event: React.FormEvent<HTMLInputElement>) {
    setStart(new Date(Date.parse(event.currentTarget.value)));
  }
  function handleEndChange(event: React.FormEvent<HTMLInputElement>) {
    setEnd(new Date(Date.parse(event.currentTarget.value)));
  }
  function handleClick() {
    props.createProject(name, start, end);
    setName("");
    setStart(new Date());
    setEnd(new Date());
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Create New Project</h1>
      </StyledHeader>
      <StyledInputs>
        <StyledInputPair>
          <StyledLabel htmlFor={"name"}>Name</StyledLabel>
          <StyledInput
            type={"text"}
            id={"name"}
            value={name}
            onChange={handleNameChange}
          />
        </StyledInputPair>
        <StyledInputPair>
          <StyledLabel htmlFor={"start"}>Start Date</StyledLabel>
          <StyledInput
            type={"date"}
            id={"start"}
            value={start.toISOString().split("T")[0]}
            onChange={handleStartChange}
          />
        </StyledInputPair>
        <StyledInputPair>
          <StyledLabel htmlFor={"end"}>End Date</StyledLabel>
          <StyledInput
            type={"date"}
            id={"end"}
            value={end.toISOString().split("T")[0]}
            onChange={handleEndChange}
          />{" "}
        </StyledInputPair>
      </StyledInputs>
      <StyledButton type={"button"} value={"Create"} onClick={handleClick} />
    </StyledContainer>
  );
};
