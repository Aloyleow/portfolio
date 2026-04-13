import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { marco, trolltest } from "../../utils/utils-for-users";

export const Route = createFileRoute("/goat/")({
  component: RouteComponent,
});

function RouteComponent() {
  // const [test, setTest] = useState({
  //   forwardIp: "",
  //   xRealIp: "",
  //   cfConnectingIp: "",
  // });
  const [speed, setSpeed] = useState<number>(0);

  const clicklll = async () => {
    const toto = await trolltest();
    console.log(toto);
  };

  const clieee = async () => {
    const timenow = Date.now();
    const timeTotEnd = timenow + 1000 * 5;
    const diff: number[] = [];
    let total = 0;

    while (true) {
      const start = Date.now();
      const speeeed = await marco();
      if (speeeed === "polo") {
        const end = Date.now();
        diff.push(end - start);

        if (end >= timeTotEnd) {
          break;
        }
      }
    }

    if (diff.length > 0) {
      for (let y = 0; y < diff.length; y++) {
        total = total + diff[y]!;
      }
      setSpeed(total / diff.length);
    }
    console.log(total);
    console.log(diff);
    console.log(speed);
  };
  return (
    <div>
      <button type="button" onClick={clicklll}>
        OIOI
      </button>
      <button type="button" onClick={clieee}>
        tototot
      </button>
      {/* <h1>FORWARD IP {test.forwardIp}</h1>
      <h1>X REAL IP {test.xRealIp}</h1>
      <h1>cfConnectingIp {test.cfConnectingIp}</h1> */}
      <h1>SPEEEED {speed}</h1>
    </div>
  );
}
