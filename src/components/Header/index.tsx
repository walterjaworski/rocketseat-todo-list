import * as S from "./styles";

import logo from '../../assets/images/logo-todo.svg';

export function Header() {
  return (
    <S.Container>
      <img src={logo} alt="ToDo List" />
    </S.Container>
  )
}
