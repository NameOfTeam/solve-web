import styled from "@emotion/styled";
import ThemedContainer from "../../components/common/ThemedContainer";
import ThemedText from "../../components/common/ThemedText";
import ThemedLink from "../../components/common/ThemedLink";

export const Container = styled(ThemedContainer)`
  justify-content:center;
  align-items:center;
  gap:1rem;
  height:100vh;
`

export const Text = styled(ThemedText)`
  font-size:2rem;
`

export const Redirect = styled(ThemedLink)`
  font-size:1.2rem;
`