import styled from "@emotion/styled";

export const Container = styled.div<{ background: string }>`
  width: 100%;
  background-color: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Line = styled.div<{background: string}>`
  width: 0.0625rem;
  height: 12rem;
  background-color: ${props=>props.background};
`;

export const LogoWrap = styled.div`
  flex: 1;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  object-position: center;
`;
export const Logo = styled.img`
  height: 3rem;
  object-fit: cover;
  object-position: center;
`;

export const SiteMapWrap = styled.div`
  flex: 3;
  height: 15rem;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
`

export const ContactWrap = styled.div`
  flex: 2;
  height: 15rem;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
`;

export const SectionTitle = styled.i<{color: string}>`
  font-size: 1.4rem;
  color: ${props=>props.color};
`