import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  flex: 1;
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
  font-size:3rem;
  color:white;
`

export const Content = styled.p`
  font-size:2rem;
  display:flex;
  gap:1rem;
  justify-content:center;
  align-items:center;
  color:white;
`

export const Path = styled.code`
  background-color:rgba(200,200,200,0.5);
  display:flex;
  align-items:center;
  justify-content:center;
  color:black;
  font-size:2rem;
  font-style:italic;
  font-weight:200;
  padding:1rem 2rem;
  border-radius:1rem;
`

export const Couter = styled.p`
  font-size:2.5rem;
  margin-top:4rem;
  color:white;
`

export const Button = styled.button`
  font-size:2rem;
  padding:1rem 2rem;
  border:none;
  outline:none;
  background-color:#ccc;
  border-radius:1rem;
  cursor: pointer;
  &:active{
    background-color:#C5C5C5;
  }
`