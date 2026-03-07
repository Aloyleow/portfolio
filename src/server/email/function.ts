import { createServerFn } from "@tanstack/react-start";

export const sendEmail = createServerFn({ method: "POST" })
  .inputValidator((data: { content: string }) => data)
  .handler(async ({ data }) => {
    console.log(`EH REACH HERE SIA ${data.content}`);
    return data;
  });
