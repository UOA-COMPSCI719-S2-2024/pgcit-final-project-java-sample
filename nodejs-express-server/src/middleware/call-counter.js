let globalCallCount = 0;

export const callCounterMiddleware = (_, res, next) => {
  globalCallCount += 1;
  res.cookie('callCount', globalCallCount, { maxAge: 900000 });
  next();
};
