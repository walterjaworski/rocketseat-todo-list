import { styled } from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TasksCreated = styled.div`
  strong {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 0.875rem;
  }
`;

export const TasksFinished = styled.div`
  text-align: right;

  strong {
    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 0.875rem;
  }
`;

export const CounterContainer = styled.span`
  background: ${({ theme }) => theme.colors.gray[400]};
  padding: 0.125rem 0.5rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 0.5rem;
`;

