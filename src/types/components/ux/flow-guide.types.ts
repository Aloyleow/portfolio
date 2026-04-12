export type FlowGuideTargetType = {
  direction: "T" | "B";
  element: keyof HTMLElementTagNameMap;
  id: string;
};
