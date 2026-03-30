import { createFileRoute } from "@tanstack/react-router";
import { Privacy } from "../../components/page/privacy/Privacy";

import { useLanguage } from "../../state/language/useLanguage";

export const Route = createFileRoute("/privacy/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { languageDetect } = useLanguage();
  return <Privacy languageDetect={languageDetect} />;
}
