import { styled } from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.5rem;
`;
