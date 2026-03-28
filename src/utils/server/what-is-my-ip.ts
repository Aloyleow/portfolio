import { createServerFn } from "@tanstack/react-start";
import { requestLogger } from "../../middleware/server";
/**
 * Example of server functions
 */
export const getServerTime = createServerFn()
  
  .handler(async ({ request }) => {
    
    // This runs only on the server
    return Object.fromEntries(request.headers.entries());
  });
