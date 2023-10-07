import express from "express";

export const mockRequestAndResponse = (
  responseValuesConfig?: Record<string, any>
) => {
  const req = {} as express.Request;
  const res = {
    status: jest.fn().mockReturnThis(),
    ...responseValuesConfig,
  };

  return {
    req,
    res,
  };
};
