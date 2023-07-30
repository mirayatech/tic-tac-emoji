import toast from "react-hot-toast";
import LOGO from "../../assets/images/full-logo.svg";
import { useGameStore } from "../../util/use-game-store";

import {
  Button,
  ButtonsContainer,
  Footer,
  FooterLink,
  Logo,
  Wrapper,
} from "./Styles";

export default function Start() {
  const { setNavigate } = useGameStore();
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Logo src={LOGO} alt="XO Rumble Logo" />
      <ButtonsContainer>
        <Button onClick={() => setNavigate("single-player")}>
          Single Player
        </Button>
        <Button
          onClick={() => toast("Coming Soon!", { icon: "🚧" })}
          isMulti={true}
        >
          Multi Player
        </Button>
      </ButtonsContainer>
      <Footer>
        <FooterLink
          href="https://github.com/mirayatech/XO-Rumble"
          target="_blank"
        >
          Created by Miraya
        </FooterLink>
      </Footer>
    </Wrapper>
  );
}
