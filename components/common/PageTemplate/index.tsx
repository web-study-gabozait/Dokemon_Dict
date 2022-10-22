import { ReactNode } from "react";
import DarkmodeButton from "../DarkmodeButton";
import ScrollTopButton from "../ScrollTopButton";
import { PageTemplateContainer } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      {children}
      <DarkmodeButton />
      <ScrollTopButton />
    </PageTemplateContainer>
  );
};

export default PageTemplate;
