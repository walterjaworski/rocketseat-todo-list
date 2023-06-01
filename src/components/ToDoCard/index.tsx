import { Circle, CheckCircle, Trash } from 'phosphor-react';

import * as S from './styles';
import { FormEvent } from 'react';

export interface TaskType {
  id: string,
  checked: boolean,
  content: string,
  publishedAt: Date,
}

interface TaskProps {
  task: TaskType,
  onDeleteTask: (id: string) => void,
  onToggleCheckTask: (id: string) => void,
}

export function ToDoCard({ task, onDeleteTask, onToggleCheckTask }: TaskProps) {
  function handleToggleCheckTask(event: FormEvent) {
    event.preventDefault();
    onToggleCheckTask(task.id);
  }

  function handleDeleteTask(event: FormEvent) {
    event.preventDefault();
    onDeleteTask(task.id);
  }

  return (
    <>
      <S.Container>
        <S.CheckboxButton
          type="button"
          title={task.checked ? 'Marcar como não concluída' : 'Marcar como concluída'}
          onClick={handleToggleCheckTask}
        >
          {task.checked ?
            <CheckCircle size={24} /> :
            <Circle size={24} />
          }
        </S.CheckboxButton>
        <S.Content>
          {task.content}
        </S.Content>
        <S.DeleteButton
          type="button"
          title="Apagar"
          onClick={handleDeleteTask}
        >
          <Trash size={20} />
        </S.DeleteButton>
      </S.Container>
    </>
  )
}
