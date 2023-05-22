import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 0.5rem;
  margin-top: calc(0px - 1.5rem - 6px);
  margin-bottom: 4rem;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.gray[500]};
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 8px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray[100]};

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary.main};
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.gray[100]};
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
