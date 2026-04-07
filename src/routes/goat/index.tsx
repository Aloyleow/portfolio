import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { whatIsMyIP } from "../../utils/server/what-is-my-ip";

export const Route = createFileRoute("/goat/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [test, setTest] = useState({
    forwardIp: "",
    xRealIp: "",
    cfConnectingIp: "",
  });

  const clicklll = async () => {
    const toto = await whatIsMyIP();
    setTest(toto);
  };
  return (
    <div>
      <button type="button" onClick={clicklll}>
        OIOI
      </button>
      <h1>FORWARD IP {test.forwardIp}</h1>
      <h1>X REAL IP {test.xRealIp}</h1>
      <h1>cfConnectingIp {test.cfConnectingIp}</h1>
    </div>
  );
}
