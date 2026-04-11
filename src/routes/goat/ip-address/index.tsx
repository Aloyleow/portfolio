import { createFileRoute } from "@tanstack/react-router";
import { Ipaddress } from "../../../components/page/ipaddress/Ipaddress";
import { useLanguage } from "../../../state/language/useLanguage";

export const Route = createFileRoute("/goat/ip-address/")({
  component: RouteComponent,
});

function RouteComponent() {
  //HOOKS
  const { languageDetect } = useLanguage();

  return <Ipaddress languageDetect={languageDetect} />;
}
