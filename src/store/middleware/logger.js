export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("pre state: ", store.getState());

  next(action);

  console.log("current state: ", store.getState());
};
