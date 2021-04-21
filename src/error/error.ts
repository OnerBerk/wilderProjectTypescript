import { Request, Response, NextFunction } from 'express';

const runAsyncWrapper = (callback: (arg0: Request, arg1: Response, arg2: NextFunction) => void) => function (req: Request, res: Response, next: NextFunction) {
  callback(req, res, next);
};

module.exports = { runAsyncWrapper };
