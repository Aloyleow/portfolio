import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/goat/ip-address/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/goat/ip-address/"!</div>;
}
