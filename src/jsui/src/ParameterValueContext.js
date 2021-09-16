import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { EventBridge } from "react-juce";

export const ParamIds = {
  MainMute: "MainMute",
  a0: "a0",
  a1: "a1",
  a2: "a2",
  a3: "a3",
  a4: "a4",
  b0: "b0",
  b1: "b1",
  b2: "b2",
  b3: "b3",
  b4: "b4",
};

const defaultValues = Object.keys(ParamIds).reduce((acc, key) => {
  acc[key] = {};
  return acc;
}, {});

export const ParameterValueContext = createContext(defaultValues);

export const useParameter = (paramId) => {
  return useContext(ParameterValueContext)[paramId];
};

export const ParameterValueProvider = ({ children }) => {
  const [params, setParams] = useState(defaultValues);
  const onParameterValueChange = useCallback(
    (index, changedParamId, defaultValue, currentValue, stringValue) => {
      if (!ParamIds[changedParamId]) return;
      setParams((prevParams) => ({
        ...prevParams,
        [changedParamId]: {
          index,
          defaultValue,
          currentValue,
          stringValue,
        },
      }));
    },
    []
  );
  useEffect(() => {
    EventBridge.addListener("parameterValueChange", onParameterValueChange);
    return () => {
      EventBridge.removeListener(
        "parameterValueChange",
        onParameterValueChange
      );
    };
  }, [onParameterValueChange]);

  return (
    <ParameterValueContext.Provider value={params}>
      {children}
    </ParameterValueContext.Provider>
  );
};
