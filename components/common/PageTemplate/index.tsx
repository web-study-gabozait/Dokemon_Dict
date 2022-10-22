import { ReactNode } from "react";
import DarkmodeButton from "../DarkmodeButton";
import { PageTemplateContainer } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      {children}
      <DarkmodeButton />
    </PageTemplateContainer>
  );
};

export default PageTemplate;
