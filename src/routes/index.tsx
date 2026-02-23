// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Administrative } from "../components/feature/administrative/Administrative";
import { Introduction } from "../components/feature/introduction/Introduction";
import { Settings } from "../components/feature/settings/Settings";
import { Tech } from "../components/feature/tech/Tech";
import { LangSelection } from "../components/toggles/langSelection/LangSelection";
import { ResumeSelection } from "../components/toggles/resumeSelection/ResumeSelection";
import { useLanguage } from "../state/language/useLanguage";
import { useMode } from "../state/mode/useMode";
import { usePoppers } from "../state/poppers/usePoppers";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { popper, setPopper } = usePoppers();
  const { mode } = useMode();
  const { languageDetect } = useLanguage();
  return (
    <>
      {popper.RESUME && (
        <ResumeSelection mode={mode} languageDetect={languageDetect} />
      )}
      {popper.LANGUAGE && <LangSelection />}
      <Administrative mode={mode} popper={popper} setPopper={setPopper} />
      <Settings mode={mode} />
      <Introduction languageDetect={languageDetect} />
      <Tech mode={mode} languageDetect={languageDetect} />
    </>
  );
}
