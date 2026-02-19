import React from "react";

export type TypePeeker<T> = T extends infer x ? { [Key in keyof x]: x[Key] } : null;

// For css types
export type CustomCssVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
}