import { v4 as uuidv4 } from 'uuid';

import { ThemeProvider } from "styled-components";

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import * as S from './styles'

import { NewToDo } from "../NewToDo";
import { Header } from "../Header";
import { ToDoList } from "../ToDoList";

import { TaskType } from "../ToDoCard";
import { useState } from "react";

export function App() {
  const uuid = uuidv4();
  const [tasksList, setTasksList] = useState<TaskType[]>([]);

  function handleAddNewTask(value: string) {
    const newTask = {
      id: uuid,
      content: value,
      checked: false,
      publishedAt: new Date(),
    };

    setTasksList([...tasksList, newTask]);
  }

  function toggleCheckTask(id: string) {
    const updatedList = [...tasksList];
    const taskToUpdate = updatedList.find((task) => task.id === id);

    if (taskToUpdate) {
      taskToUpdate.checked = !taskToUpdate.checked;
    }

    setTasksList(updatedList);
  }

  function removeTask(id: string) {
    const filteredTaskList = tasksList.filter((task) => task.id !== id);
    setTasksList(filteredTaskList);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <S.Container>
        <NewToDo
          onAdd={handleAddNewTask}
        />
        <ToDoList
          list={tasksList}
          taskToDelete={removeTask}
          taskToToggleCheck={toggleCheckTask}
        />
      </S.Container>
    </ThemeProvider>
  )
}
