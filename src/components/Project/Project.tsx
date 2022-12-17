// @flow
import * as React from "react";
import styled from "styled-components";
import {IProject} from "../../Project/IProject";
import {Gantt, ViewMode} from "gantt-task-react";
import {AddTask} from "./AddTask/AddTask";
import {TaskType} from "gantt-task-react/dist/types/public-types";
import {useState} from "react";
import {Task} from "../../Project/Task/Task";
import {Task as ITask} from "gantt-task-react";
import {Switches} from "./Switches/Switches";
import {ToolTipContent} from "./ToolTipContent/ToolTipContent";

const StyledContainer = styled.div`
  margin-bottom: 50px;
  background-color: white;
  color: var(--darkBlue);
  border: 1px solid var(--darkBlue);
`;

const StyledHeader = styled.header`
  text-align: center;
`;

type Props = {
    project: IProject;
    deleteProject: (id: string) => void;
};

export const Project = (props: Props) => {
    const [tasks, setTasks] = useState<ITask[]>(props.project.tasks);
    const [view, setView] = useState<ViewMode>(ViewMode.Day);
    const [disabled, setDisabled] = useState(false);
    const [listVisible, setListVisible] = useState(true);

    let columnWidth = 65;
    if (view === ViewMode.Year) {
        columnWidth = 350;
    } else if (view === ViewMode.Month) {
        columnWidth = 300;
    } else if (view === ViewMode.Week) {
        columnWidth = 250;
    }

    function addTask(name: string, start: Date, end: Date, type: TaskType) {
        setTasks((state) => [...state, new Task(name, start, end, type)]);
    }

    const handleProgressChange = async (task: ITask) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    };

    const handleExpanderClick = (task: ITask) => {
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    };

    const handleTaskChange = (task: ITask) => {
        let newTasks = tasks.map((t) => (t.id === task.id ? task : t));
        if (task.project) {
            const [start, end] = [task.start, task.end];
            const project =
                newTasks[newTasks.findIndex((t) => t.id === task.project)];
            if (
                project.start.getTime() !== start.getTime() ||
                project.end.getTime() !== end.getTime()
            ) {
                const changedProject = {...project, start, end};
                newTasks = newTasks.map((t) =>
                    t.id === task.project ? changedProject : t
                );
            }
        }

        setTasks(newTasks);
    };

    function handleDblClick(task: ITask) {

        if (!task.isDisabled && task.type !== "project") {
            const confirmed: boolean = window.confirm("Are sure you want to delete " + task.name + " " + task.type);
            if (confirmed) {
                setTasks((state) => {
                    return state.filter((t) => t.id !== task.id);
                })
            }

        }
    }

    function handleDeleteClick() {
        const confirmed = window.confirm("Are you sure you want to delete this project?")
        if (confirmed) {
            props.deleteProject(props.project.id);
        }
    }

    tasks.forEach((task) => task.isDisabled = disabled);

    return (
        <StyledContainer>
            <StyledHeader>
                <h2>{props.project.name}</h2>
            </StyledHeader>
            <Switches
                setDisabled={setDisabled}
                disabled={disabled}
                setView={setView}
                view={view}
                setListVisible={setListVisible}
                listVisible={listVisible}
            />
            <Gantt
                tasks={tasks}
                onProgressChange={handleProgressChange}
                onExpanderClick={handleExpanderClick}
                viewMode={view}
                columnWidth={columnWidth}
                listCellWidth={listVisible ? "155px" : ""}
                onDateChange={handleTaskChange}
                barProgressColor={"green"}
                barProgressSelectedColor={"darkgreen"}
                projectBackgroundColor={"orange"}
                projectBackgroundSelectedColor={"darkorange"}
                TooltipContent={ToolTipContent}
                onDoubleClick={handleDblClick}
            />
            <input type="button" value={"Delete project"} onClick={handleDeleteClick}/>
            <AddTask addTask={addTask}/>
        </StyledContainer>
    );
};


