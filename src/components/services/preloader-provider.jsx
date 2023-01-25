import { createContext, useContext, useReducer } from "react";
const PreloaderStateContext = createContext({ type: "hide" });
const PreloaderDispatchContext = createContext(() => {});

const preloaderReducer = (state, action) => {
  switch (action.type) {
    case "show": {
      return { isShow: true };
    }
    case "hide": {
      return { isShow: false };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const usePreloaderState = () => {
  const context = useContext(PreloaderStateContext);
  if (context === undefined) {
    throw new Error(
      "usePreloaderState должен использоваться вместе PreloaderProvider",
    );
  }
  return context;
};

const usePreloaderDispatch = () => {
  const context = useContext(PreloaderDispatchContext);
  if (context === undefined) {
    throw new Error(
      "usePreloaderDispatch должен использоваться вместе PreloaderProvider",
    );
  }
  return context;
};

const usePreloader = () => {
  return [usePreloaderState(), usePreloaderDispatch()];
};

const PreloaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(preloaderReducer, { isShow: false });
  return (
    <PreloaderStateContext.Provider value={state}>
      <PreloaderDispatchContext.Provider value={dispatch}>
        {children}
      </PreloaderDispatchContext.Provider>
    </PreloaderStateContext.Provider>
  );
};

export { PreloaderProvider, usePreloader,usePreloaderState, usePreloaderDispatch };
