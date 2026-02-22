import { TypePeeker } from "./utility.types";

export type LanguageTypes = "en" | "cn" | "my"
export type LocaleSettingType<T> = Record<LanguageTypes, T>

export type ModeTypes = "dark" | "light"
export type ThemeSettingType<T extends PropertyKey> = Record<
  ModeTypes,
  TypePeeker<Record<T, string>>
>;
export type PopperListTypes = "RESUME" | "LANGUAGE"
export type PopperTypes = Record<PopperListTypes, boolean>