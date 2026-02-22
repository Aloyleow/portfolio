// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Administrative } from "../components/feature/administrative/Administrative";
import { Settings } from "../components/feature/settings/Settings";
import { ResumeSelection } from "../components/toggles/resumeSelection/ResumeSelection";
import { useMode } from "../state/mode/useMode";
import { usePoppers } from "../state/poppers/usePoppers";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { popper, setPopper } = usePoppers();
  const { mode } = useMode();
  return (
    <>
      {popper.RESUME && <ResumeSelection mode={mode} />}

      <Administrative mode={mode} popper={popper} setPopper={setPopper} />
      <Settings mode={mode} />
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </h1>
    </>
  );
}
