import { styled } from "styled-components";

export const Container = styled.article`
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  gap: 0.75rem;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[400]};
  border-radius: 8px;
  padding: 1rem;

  & + & {
    margin-top: 0.75rem;
  }
`;

export const CheckboxButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary.main};
  width: 1.5rem;
  height: 1.5rem;

  // quando checado
  // background secondary.dark
  // color gray[100]
`;

export const Content = styled.p``;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.gray[100]};
  width: 1.5rem;
  height: 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.red.main};
  }
`;
