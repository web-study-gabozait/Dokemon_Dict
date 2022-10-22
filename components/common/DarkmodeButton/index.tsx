import { ETheme } from "../../../enums/theme/theme.enum";
import useTheme from "../../../hooks/theme/useTheme";
import { DarkmodeButtonContainer, DarkmodeButtonIcon } from "./style";
import { HiOutlineSun } from "@react-icons/all-files/hi/HiOutlineSun";
import { HiOutlineMoon } from "@react-icons/all-files/hi/HiOutlineMoon";

const DarkmodeButton = () => {
  const { enumTheme, toggleTheme } = useTheme();

  const { LIGHT } = ETheme;

  return (
    <DarkmodeButtonContainer onClick={toggleTheme}>
      <DarkmodeButtonIcon>
        {enumTheme === LIGHT ? <HiOutlineSun /> : <HiOutlineMoon />}
      </DarkmodeButtonIcon>
    </DarkmodeButtonContainer>
  );
};

export default DarkmodeButton;
