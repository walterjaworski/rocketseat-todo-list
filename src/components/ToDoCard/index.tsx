import { Circle, CheckCircle, Trash } from 'phosphor-react';

import * as S from './styles';

export interface TaskType {
  id: string,
  checked: boolean,
  content: string,
  publishedAt: Date,
}

interface TaskProps {
  task: TaskType,
}

export function ToDoCard({ task }: TaskProps) {
  return (
    <>
      <S.Container>
        <S.CheckboxButton
          type="button"
          title={task.checked ? 'Marcar como não concluída' : 'Marcar como concluída'}
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
        >
          <Trash size={20} />
        </S.DeleteButton>
      </S.Container>
    </>
  )
}
