import {Task} from "gantt-task-react";
import React from "react";
import styled from "styled-components";

const TooltipDefaultContainer = styled.div`
    background: #fff;
    padding: 12px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const TooltipDefaultContainerParagraph = styled.p `
    font-size: 12px;
    margin-bottom: 6px;
    color: #666;
`


export const ToolTipContent: React.FC<{
    task: Task;
    fontSize: string;
    fontFamily: string;
}> = ({ task, fontSize, fontFamily }) => {
    const style = {
        fontSize,
        fontFamily,
    };
    return (
        <TooltipDefaultContainer style={style}>
            <b style={{ fontSize: fontSize + 6 }}>{`${
                task.name
            }: ${task.start.getDate()}-${
                task.start.getMonth() + 1
            }-${task.start.getFullYear()} - ${task.end.getDate()}-${
                task.end.getMonth() + 1
            }-${task.end.getFullYear()}`}</b>
            {task.end.getTime() - task.start.getTime() !== 0 && (
                <TooltipDefaultContainerParagraph>{`Duration: ${~~(
                    (task.end.getTime() - task.start.getTime()) /
                    (1000 * 60 * 60 * 24)
                )} day(s)`}</TooltipDefaultContainerParagraph>
            )}

            <TooltipDefaultContainerParagraph>
                {!!task.progress && `Progress: ${task.progress} %`}
            </TooltipDefaultContainerParagraph>
            {!task.isDisabled && task.type !== "project" && <TooltipDefaultContainerParagraph>
                Double click to delete
            </TooltipDefaultContainerParagraph>}
        </TooltipDefaultContainer>
    );
};