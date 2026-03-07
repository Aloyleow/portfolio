import * as z from "zod";
import cn from "../../../../locale/cn/contact_cn.json";
import en from "../../../../locale/en/contact_en.json";
import my from "../../../../locale/my/contact_my.json";
import { SharedConstants } from "../../../../state/constants";
import type {
  LanguageTypes,
  LocaleSettingType,
} from "../../../../types/state.types";

type ContentType = {
  error: {
    un: {
      min: string;
      max: string;
    };
    me: {
      min: string;
      max: string;
    };
    ce: {
      min: string;
      max: string;
    };
  };
};
const localeSetting: LocaleSettingType<ContentType> = {
  en,
  cn,
  my,
};
const {
  EMAIL_INPUT_CONTACT_MAX,
  EMAIL_INPUT_MESSAGE_MAX,
  EMAIL_INPUT_USERNAME_MAX,
} = SharedConstants;
export const emailPayloadParser = (language: LanguageTypes) => {
  return {
    payload: z.object({
      user_name: z
        .string()
        .min(1, localeSetting[language].error.un.min)
        .max(EMAIL_INPUT_USERNAME_MAX, localeSetting[language].error.un.max),
      message: z
        .string()
        .min(5, localeSetting[language].error.me.min)
        .max(EMAIL_INPUT_MESSAGE_MAX, localeSetting[language].error.me.max),
      contactemail: z
        .string()
        .min(1, localeSetting[language].error.ce.min)
        .max(EMAIL_INPUT_CONTACT_MAX, localeSetting[language].error.ce.max),
    }),

    user_name: z
      .string()
      .min(1, localeSetting[language].error.un.min)
      .max(EMAIL_INPUT_USERNAME_MAX, localeSetting[language].error.un.max),
    message: z
      .string()
      .min(5, localeSetting[language].error.me.min)
      .max(EMAIL_INPUT_MESSAGE_MAX, localeSetting[language].error.me.max),
    contactemail: z
      .string()
      .min(1, localeSetting[language].error.ce.min)
      .max(EMAIL_INPUT_CONTACT_MAX, localeSetting[language].error.ce.max),
  };
};
