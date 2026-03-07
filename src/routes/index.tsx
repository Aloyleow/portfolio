// src/routes/index.tsx

import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Administrative } from "../components/feature/administrative/Administrative";
import { Career } from "../components/feature/career/Career";
import { Contact } from "../components/feature/contact/Contact";
import { Introduction } from "../components/feature/introduction/Introduction";
import { Project } from "../components/feature/projects/Project";
import { Settings } from "../components/feature/settings/Settings";
import { Tech } from "../components/feature/tech/Tech";
import { LangSelection } from "../components/toggles/langSelection/LangSelection";
import { ResumeSelection } from "../components/toggles/resumeSelection/ResumeSelection";
import { sendEmail } from "../server/email/function";
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
  const [test, setTest] = useState<{ content: string }>({ content: "" });
  const { mutateAsync } = useMutation({
    mutationFn: async (data: { content: string }) => await sendEmail({ data }),
    onSuccess: (response) => response,
  });
  const handleTest = async () => {
    try {
      const wagg = await mutateAsync(test);
      console.log(wagg);
    } catch (error) {
      console.log(error);
    }
  };
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
      <Career mode={mode} languageDetect={languageDetect} />
      <Project mode={mode} languageDetect={languageDetect} />
      <Contact mode={mode} languageDetect={languageDetect} />
      {/* <div>
        <input onChange={(event) => {setTest({...test, content: event.target.value})}}/>
        <button type="button" onClick={() => handleTest()}>
          ASDASDASD
        </button>
      </div> */}
    </>
  );
}
