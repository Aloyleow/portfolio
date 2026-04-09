import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

export type WhatsMyIpDetailsResponseType = {
  forwardIp: string | null;
  xRealIp: string | null;
  cfConnectingIp: string | null;
};
export const whatsMyIpDetails = createServerFn().handler(async () => {
  const request = getRequest();

  const headers = Object.fromEntries(request.headers.entries());

  const forwardIp = headers["x-forwarded-for"]?.toString() ?? null;
  const xRealIp = headers["x-real-ip"] ?? null;
  const cfConnectingIp = headers["cf-connecting-ip"] ?? null; 
  // This runs only on the server
  return {
    forwardIp,
    xRealIp,
    cfConnectingIp,
  };
});
