import useTheme from "../../../hooks/theme/useTheme";
import { DarkmodeButtonContainer, DarkmodeButtonIcon } from "./style";

const DarkmodeButton = () => {
  const { enumTheme, toggleTheme } = useTheme();

  return (
    <DarkmodeButtonContainer onClick={toggleTheme}>
      <DarkmodeButtonIcon></DarkmodeButtonIcon>
    </DarkmodeButtonContainer>
  );
};

export default DarkmodeButton;
