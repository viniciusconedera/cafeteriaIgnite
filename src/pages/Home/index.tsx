import { Intro } from "./Intro";
import { Showcase } from "./showcase";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Showcase />
    </HomeContainer>
  )
}