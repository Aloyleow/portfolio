import { createFileRoute } from "@tanstack/react-router";
import { Ipaddress } from "../../../components/page/ipaddress/Ipaddress";
import { whatsMyIpDetails } from "../../../utils/utils-for-users";
import { useMode } from "../../../state/mode/useMode";
import { useLanguage } from "../../../state/language/useLanguage";

export const Route = createFileRoute("/goat/ip-address/")({
  component: RouteComponent,
});

function RouteComponent() {
  //HOOKS
  const { mode } = useMode()
  const { languageDetect } = useLanguage()

  //DATA
  const data = whatsMyIpDetails()
  
  
  return <Ipaddress mode={mode} languageDetect={languageDetect} data={data}/>;
}
