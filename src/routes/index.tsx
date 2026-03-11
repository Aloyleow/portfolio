// src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";

import { Career } from "../components/feature/career/Career";
import { Contact } from "../components/feature/contact/Contact";
import { Introduction } from "../components/feature/introduction/Introduction";
import { Project } from "../components/feature/projects/Project";
import { Tech } from "../components/feature/tech/Tech";
import { useLanguage } from "../state/language/useLanguage";
import { useMode } from "../state/mode/useMode";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { mode } = useMode();
  const { languageDetect } = useLanguage();

  return (
    <>
      <Introduction languageDetect={languageDetect} />
      <Tech mode={mode} languageDetect={languageDetect} />
      <Career mode={mode} languageDetect={languageDetect} />
      <Project mode={mode} languageDetect={languageDetect} />
      <Contact mode={mode} languageDetect={languageDetect} />
    </>
  );
}
