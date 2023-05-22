import { PlusCircle } from 'phosphor-react';

import * as S from './styles';

export function NewToDo() {
  return (
    <S.Container>
      <S.Input type="text" placeholder="Adicione uma nova tarefa" />
      <S.Button>
        Criar
        <PlusCircle size={24} />
      </S.Button>
    </S.Container>
  )
}
