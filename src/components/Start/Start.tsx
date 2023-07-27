import LOGO from "../../assets/images/full-logo.svg";
import { useGameStore } from "../../util/use-game-store";

import {
  Container,
  Top,
  Logo,
  ButtonsContainer,
  Button,
  Footer,
  FooterLink,
} from "./Styles";

export default function Start() {
  const { setNavigate } = useGameStore();
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Top>
        <Logo src={LOGO} alt="XO Rumble Logo" />
        <ButtonsContainer>
          <Button onClick={() => setNavigate("single-player")}>
            Single Player
          </Button>
          <Button onClick={() => setNavigate("multi-player")} isMulti={true}>
            Multi Player
          </Button>
        </ButtonsContainer>
      </Top>
      <Footer>
        <FooterLink
          href="https://github.com/mirayatech/XO-Rumble"
          target="_blank"
        >
          Created by Miraya
        </FooterLink>
      </Footer>
    </Container>
  );
}
