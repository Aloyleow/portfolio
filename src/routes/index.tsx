// src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";

import { Career } from "../components/feature/career/Career";
import { Contact } from "../components/feature/contact/Contact";
import { Introduction } from "../components/feature/introduction/Introduction";
import { Project } from "../components/feature/projects/Project";
import { Tech } from "../components/feature/tech/Tech";
import { FlowGuide } from "../components/ux/flow-guides/FlowGuide";
import { useLanguage } from "../state/language/useLanguage";
import { useMode } from "../state/mode/useMode";
import type { FlowGuideTargetType } from "../types/components/ux/flow-guide.types";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { mode } = useMode();
  const { languageDetect } = useLanguage();

  const flowGuideTargets: FlowGuideTargetType[] = [
    {
      direction: "T",
      element: "section",
      id: "contact",
    },
    {
      direction: "B",
      element: "section",
      id: "home",
    },
  ];

  return (
    <>
      <Introduction languageDetect={languageDetect} />
      <Tech mode={mode} languageDetect={languageDetect} />
      <Career mode={mode} languageDetect={languageDetect} />
      <Project mode={mode} languageDetect={languageDetect} />
      <Contact mode={mode} languageDetect={languageDetect} />
      <FlowGuide mode={mode} target={flowGuideTargets} />
    </>
  );
}
