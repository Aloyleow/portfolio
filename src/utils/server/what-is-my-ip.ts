import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
/**
 * Example of server functions
 */
export const whatIsMyIP = createServerFn().handler(async () => {
  const request = getRequest();

  const headers = Object.fromEntries(request.headers.entries());

  const forwardIp = headers["x-forwarded-for"]?.split(",")[0] ?? "";
  const xRealIp = headers["x-real-ip"] ?? "";
  const cfConnectingIp = headers["cf-connecting-ip"] ?? "";
  // This runs only on the server
  return {
    forwardIp,
    xRealIp,
    cfConnectingIp,
  };
});
