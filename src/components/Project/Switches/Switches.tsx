// @flow
import * as React from 'react';
import styled from "styled-components";
import {ViewMode} from "gantt-task-react";

const StyledContainer = styled.div`
  height: 50px;
`

const StyledInput = styled.input`
  height: 20px;
  margin-right: 20px;
  margin-left: 10px;
`

const StyledCheckbox = styled(StyledInput)`
  position: relative;
  top: 5px;
`

const StyledLabel = styled.label`
  line-height: 20px;
  height: 20px;
  position: relative;
`


type Props = {
    setView: React.Dispatch<React.SetStateAction<ViewMode>>;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    setListVisible: React.Dispatch<React.SetStateAction<boolean>>;
    listVisible: boolean;
    view: ViewMode;
    disabled: boolean;
};



export const Switches = (props: Props) => {


    function handleDisabledCheck() {
        props.setDisabled((state) => !state)
    }

    function handleViewChange(event: React.FormEvent<HTMLSelectElement>) {
        props.setView(event.currentTarget.value as ViewMode);
    }

    function handleVisibleCheck() {
        props.setListVisible((state) => !state);
    }



    return (
        <StyledContainer>
            <StyledLabel htmlFor={"lock"}>Lock Tasks:</StyledLabel>
            <StyledCheckbox id={"lock"} type={"checkbox"} checked={props.disabled} onChange={handleDisabledCheck}/>

            <StyledLabel htmlFor={"view"}>View:</StyledLabel>
            <StyledInput as={"select"} value={props.view} onChange={handleViewChange}>
                <option value={ViewMode.Hour}>Hour</option>
                <option value={ViewMode.Day}>Day</option>
                <option value={ViewMode.QuarterDay}>Quarter Day</option>
                <option value={ViewMode.HalfDay}>Half Day</option>
                <option value={ViewMode.Week}>Week</option>
                <option value={ViewMode.Month}>Month</option>
                <option value={ViewMode.Year}>Year</option>
            </StyledInput>

            <StyledLabel htmlFor={"listVisible"}>Hide List</StyledLabel>
            <StyledCheckbox id={"listVisible"} type={"checkbox"} checked={!props.listVisible} onChange={handleVisibleCheck}/>
        </StyledContainer>
    );
};