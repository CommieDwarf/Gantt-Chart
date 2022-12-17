// @flow
import * as React from 'react';

import styled from 'styled-components';
import {ChangeEvent, useState} from "react";
import {TaskType} from "gantt-task-react/dist/types/public-types";




const StyledContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: blue;
`;


const StyledInput = styled.input`
  width: 100px;
  height: 50px;
`

type Props = {
    addTask: (start: Date, end: Date, name: string, type: TaskType) => void;
};


//start: Date, end: Date, name: string, type: TaskType

export const AddTask = (props: Props) => {

    const [name, setName] = useState<string>("");
    const [start, setStart] = useState<Date>();
    const [end, setEnd] = useState<Date>();
    const [type, setType] = useState<TaskType>();

    function handleNameChange(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
    }

    function handleStartChange(event: React.FormEvent<HTMLInputElement>) {
        setStart(new Date(Date.parse(event.currentTarget.value)));
    }

    function handleEndChange(event: React.FormEvent<HTMLInputElement>) {
        const date = new Date(Date.parse(event.currentTarget.value))
        setEnd(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
    }

    function handleTypeChange(event: React.FormEvent<HTMLSelectElement>) {
        setType(event.currentTarget.value as TaskType);
    }


    function handleClick() {
        if (start && end && name && type) {
            props.addTask(start, end, name, type);
        }
    }
    return (
        <StyledContainer>
            <label htmlFor={"name"}>Name</label>
            <StyledInput id="name" type="text" onChange={handleNameChange}/>
            <label htmlFor={"start"}>Start</label>
            <StyledInput id="start" type="date" onChange={handleStartChange}/>
            <label htmlFor={"end"}>End</label>
            <StyledInput id={"end"} type="date" onChange={handleEndChange}/><
            label htmlFor={"type"}>Task Type</label>
            <StyledInput as="select" name="taskType" id="taskType" defaultValue={"task"} onChange={handleTypeChange}>
                <option value="task" >Task</option>
                <option value="milestone">Milestone</option>
                <option value="project">Project</option>
            </StyledInput>
            <StyledInput type={"button"} onClick={handleClick}/>
        </StyledContainer>
    );
};