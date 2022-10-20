import { ReactNode } from "react";
import { PageTemplateContainer } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return <PageTemplateContainer>{children}</PageTemplateContainer>;
};

export default PageTemplate;
