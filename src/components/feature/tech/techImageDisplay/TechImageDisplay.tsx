import { useState } from "react";
import aws from "../../../../assets/tech/aws.svg";
import azure from "../../../../assets/tech/azure.svg";
import bun from "../../../../assets/tech/bun.svg";
import rust from "../../../../assets/tech/corro.svg";
import cpp from "../../../../assets/tech/cpp.svg";
import css from "../../../../assets/tech/css.svg";
import digital_ocean from "../../../../assets/tech/digitalocean.svg";
import docker from "../../../../assets/tech/docker.svg";
import fastify from "../../../../assets/tech/fastify.svg";
import dfastify from "../../../../assets/tech/fastify-d.svg";
import openai from "../../../../assets/tech/gpt.svg";
import dopenai from "../../../../assets/tech/gpt-d.svg";
import html from "../../../../assets/tech/html.svg";
import java_script from "../../../../assets/tech/js.svg";
import next from "../../../../assets/tech/next.svg";
import node_js from "../../../../assets/tech/node.svg";
import postgres from "../../../../assets/tech/postgresql.svg";
import react from "../../../../assets/tech/react.svg";
import redis from "../../../../assets/tech/redis.svg";
import tailwind from "../../../../assets/tech/tailwind.svg";
import type_script from "../../../../assets/tech/ts.svg";
import tan_stack from "../../../../assets/tech/tss.svg";
import dtan_stack from "../../../../assets/tech/tss-d.svg";
import vercel from "../../../../assets/tech/vercel.svg";
import dvercel from "../../../../assets/tech/vercel-d.svg";
import type {
  ModeTypes,
  ThemeSettingType,
} from "../../../../types/state.types";
import styles from "./TechImageDisplay.module.css";

const themeSetting: ThemeSettingType<string> = {
  light: {
    type_script,
    fastify,
    node_js,
    bun,
    postgres,
    redis,
    tan_stack,
    aws,
    azure,
    docker,
    digital_ocean,
    java_script,
    html,
    css,
    next,
    react,
    vercel,
    tailwind,
    openai,
    rust,
    cpp,
  },
  dark: {
    type_script,
    dfastify,
    node_js,
    bun,
    postgres,
    redis,
    dtan_stack,
    aws,
    azure,
    docker,
    digital_ocean,
    java_script,
    html,
    css,
    next,
    react,
    dvercel,
    tailwind,
    dopenai,
    rust,
    cpp,
  },
};

export function TechImageDisplay({ mode }: { mode: ModeTypes }) {
  const [description, setDescription] = useState<string>("");
  return (
    <main className={styles.container}>
      {Object.entries(themeSetting[mode]).map(([key, value], index) => (
        <button
          type="button"
          key={key}
          className={`button-as-div ${styles.imageHolder}`}
          onMouseEnter={() => setDescription(`${key}`)}
          onMouseLeave={() => setDescription("")}
        >
          <img alt={key} src={value} className={styles.image} />
        </button>
      ))}
      <footer>
        <p>{description}</p>
      </footer>
    </main>
  );
}
