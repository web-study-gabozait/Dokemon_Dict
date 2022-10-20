import { atom } from "recoil";
import { ETheme } from "../../enums/theme/theme.enum";
import { getTheme } from "../../utils/theme/getTheme";
import { v1 } from "uuid";

export const themeMode = atom<ETheme>({
  key: `themeMode/${v1()}`,
  default: getTheme(),
});
