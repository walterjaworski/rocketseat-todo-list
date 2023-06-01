import { FormEvent } from 'react';
import { TaskType, ToDoCard } from '../ToDoCard';

import * as S from './styles';

interface ToDoListProps {
  list: TaskType[],
  taskToDelete: (id: string) => void,
  taskToToggleCheck: (id: string) => void,
}

export function ToDoList({ list, taskToDelete, taskToToggleCheck }: ToDoListProps) {
  const totalTaskCounter = list.length;
  const totalTasksFinished = list.filter((task) => task.checked === true).length;

  function handleToggleCheckTask(value: string) {
    taskToToggleCheck(value);
  }

  function handleDeleteTask(value: string) {
    taskToDelete(value)
  }

  return (
    <>
      <S.Header>
        <S.TasksCreated>
          <strong>Tarefas criadas</strong>
          <S.CounterContainer>
            {totalTaskCounter}
          </S.CounterContainer>
        </S.TasksCreated>
        <S.TasksFinished>
          <strong>Concluídas</strong>
          <S.CounterContainer>
            {`${totalTasksFinished} de ${totalTaskCounter}`}
          </S.CounterContainer>
        </S.TasksFinished>
      </S.Header>
      <main>
        {list.map((task) => (
          <ToDoCard
            key={task.id}
            task={task}
            onDeleteTask={handleDeleteTask}
            onToggleCheckTask={handleToggleCheckTask}
          />
        ))}
      </main>
    </>
  )
}
