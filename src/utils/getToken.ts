import { Request } from "express";

export const getToken = (req: Request) => {
  if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};
