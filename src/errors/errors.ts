import httpStatus from "http-status";

export function conflictError() {
  return {
    type: "conflictError",
    message: `Esse campeão já existe.`,
    status: httpStatus.CONFLICT,
  };
}
