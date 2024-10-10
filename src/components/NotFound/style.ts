import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background: linear-gradient(
    45deg,
    rgba(140, 89, 247, 1) 35%,
    rgba(0, 0, 0, 0.8982186624649859) 100%
  );
`;

export const Title = styled.p`
  font-size: 3rem;
  color: white;
`;
