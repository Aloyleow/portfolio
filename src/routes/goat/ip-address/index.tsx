import { createFileRoute } from "@tanstack/react-router";
import { Ipaddress } from "../../../components/page/ipaddress/Ipaddress";
import { useLanguage } from "../../../state/language/useLanguage";
import { useMode } from "../../../state/mode/useMode";

export const Route = createFileRoute("/goat/ip-address/")({
  component: RouteComponent,
});

function RouteComponent() {
  //HOOKS
  const { mode } = useMode();
  const { languageDetect } = useLanguage();

  return <Ipaddress mode={mode} languageDetect={languageDetect} />;
}
