import { ScrollTopButtonContainer, ScrollTopButtonIcon } from "./style";
import { IoIosArrowUp } from "@react-icons/all-files/io/IoIosArrowUp";
import useTopScroll from "../../../hooks/common/useTopScroll";

const ScrollTopButton = () => {
  const { onGoToTopScroll } = useTopScroll();

  return (
    <ScrollTopButtonContainer onClick={onGoToTopScroll}>
      <ScrollTopButtonIcon>
        <IoIosArrowUp />
      </ScrollTopButtonIcon>
    </ScrollTopButtonContainer>
  );
};

export default ScrollTopButton;
