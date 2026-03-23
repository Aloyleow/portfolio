import { createServerFn } from "@tanstack/react-start";
/**
 * Example of server functions
 */
export const getServerTime = createServerFn()
  .inputValidator((data: { something?: string }) => data)
  .handler(async ({ data }) => {
    if (data.something === "error") {
      throw new Error("???");
    }
    // This runs only on the server
    return new Date().toISOString();
  });
