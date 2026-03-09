import type { UiContentType } from "../types/locale.types";
import type { LocaleSettingType } from "../types/state.types";
import uicn from "./cn/ui_cn.json";
import uien from "./en/ui_en.json";
import uimy from "./my/ui_my.json";

export const uiLocaleSettings: LocaleSettingType<UiContentType> = {
  en: uien,
  cn: uicn,
  my: uimy,
};
