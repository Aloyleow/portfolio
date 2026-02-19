// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Administrative } from "../components/administrative/Administrative";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Administrative />
      <h1>???</h1>
    </>
  );
}
