import { Administrative } from "../components/feature/administrative/Administrative";
import { Navigation } from "../components/feature/navigation/Navigation";
import { Settings } from "../components/feature/settings/Settings";
import { UserUtils } from "../components/feature/user-utils/UserUtils";
import { LangSelection } from "../components/toggles/langSelection/LangSelection";
import { ResumeSelection } from "../components/toggles/resumeSelection/ResumeSelection";
import { useLanguage } from "../state/language/useLanguage";
import { useMode } from "../state/mode/useMode";
import { usePoppers } from "../state/poppers/usePoppers";

export function RootLayout() {
  const { popper, setPopper } = usePoppers();
  const { mode } = useMode();
  const { languageDetect } = useLanguage();
  return (
    <>
      {popper.RESUME && (
        <ResumeSelection mode={mode} languageDetect={languageDetect} />
      )}
      {popper.LANGUAGE && <LangSelection />}
      <Navigation mode={mode} languageDetect={languageDetect} />
      <Administrative mode={mode} popper={popper} setPopper={setPopper} />
      <UserUtils mode={mode} languageDetect={languageDetect} />
      <Settings mode={mode} />
    </>
  );
}
