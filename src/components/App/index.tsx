import { ThemeProvider } from "styled-components";

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import * as S from './styles'

import { NewToDo } from "../NewToDo";
import { Header } from "../Header";
import { ToDoList } from "../ToDoList";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <S.Container>
        <NewToDo />
        <ToDoList />
      </S.Container>
    </ThemeProvider>
  )
}
