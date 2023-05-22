import { ToDoCard } from '../ToDoCard';

import * as S from './styles';

export function ToDoList() {
  return (
    <>
      <S.Header>
        <S.TasksCreated>
          <strong>Tarefas criadas</strong> <S.CounterContainer>5</S.CounterContainer>
        </S.TasksCreated>
        <S.TasksFinished>
          <strong>Concluídas</strong> <S.CounterContainer>2 de 5</S.CounterContainer>
        </S.TasksFinished>
      </S.Header>
      <main>
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
      </main>
    </>
  )
}
