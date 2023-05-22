import { Circle, CheckCircle, Trash } from 'phosphor-react';

import * as S from './styles';

export function ToDoCard() {
  return (
    <>
      <S.Container>
        <S.CheckboxButton
          type="button"
          title="Marcar como concluída"
        >
          <Circle size={24} />
        </S.CheckboxButton>
        <S.Content>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</S.Content>
        <S.DeleteButton
          type="button"
          title="Apagar"
        >
          <Trash size={20} />
        </S.DeleteButton>
      </S.Container>
      <S.Container>
        <S.CheckboxButton
          type="button"
          title="Marcar como não concluída"
        >
          <CheckCircle size={24} />
        </S.CheckboxButton>
        <S.Content>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</S.Content>
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
