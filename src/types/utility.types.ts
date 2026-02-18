export type TypePeeker<T> = T extends infer x ? { [Key in keyof x]: x[Key] } : null;
