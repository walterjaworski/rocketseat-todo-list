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

const tasks: TaskType[] = [
  {
    id: 'ee68d754-89b2-4f4d-81b0-241f05ed764a',
    content: 'Esta é a primeira task de exemplo. Se desejar, pode excluí-la',
    checked: false,
    publishedAt: new Date('2023-05-22 16:00:00'),
  },
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    content: 'Esta é a segunda task de exemplo. Se desejar, pode excluí-la',
    checked: true,
    publishedAt: new Date('2023-05-22 17:00:00'),
  },
];

export function App() {
  const uuid = uuidv4();
  const [tasksList, setTasksList] = useState(tasks);

  function handleAddNewTask(value: string) {
    const newTask = {
      id: uuid,
      content: value,
      checked: false,
      publishedAt: new Date(),
    };

    setTasksList([...tasksList, newTask]);
  }

  function handleRemoveTask() {
    console.log('handleRemoveTask');
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
        />
      </S.Container>
    </ThemeProvider>
  )
}
