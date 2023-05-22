import { ChangeEvent, FormEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import * as S from './styles';

interface NewToDoProps {
  onAdd: (content: string) => void,
}

export function NewToDo({ onAdd }: NewToDoProps) {
  const [newTask, setNewTask] = useState('')

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    onAdd(newTask)
    setNewTask('')
  }

  return (
    <S.Container onSubmit={handleAddNewTask}>
      <S.Input
        name="content"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskContentChange}
        required
      />
      <S.Button>
        Criar
        <PlusCircle size={24} />
      </S.Button>
    </S.Container>
  )
}
