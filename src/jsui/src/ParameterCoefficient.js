import ParameterValueStore from "./ParameterValueStore";
import React, { Component, useState, useEffect } from "react";
import { Button } from "react-juce";
import {
  beginParameterChangeGesture,
  endParameterChangeGesture,
  setParameterValueNotifyingHost,
} from "./nativeMethods";

export default function ParameterCoefficient(props) {
    const { paramId, onToggled, children, ...other } = props;

    const paramState = ParameterValueStore.getParameterState(
      paramId
    );
    const initialDefaultValue =
      typeof paramState.defaultValue === "number"
        ? paramState.defaultValue
        : 0.0;

    const initialValue =
      typeof paramState.currentValue === "number"
        ? paramState.currentValue
        : 0.0;

    const [defaultValue, setDefaultValue] = useState(initialDefaultValue);
    const [value, setValue] = useState(initialValue);
    const hoverBorderColor = "#66CFFD";
    const defaultBorderColor = "#66FDCF";
    const [borderColor, setBorderColor] = useState(defaultBorderColor);

    const onParameterValueChange = (updatedParamId) => {
      const shouldUpdate =
        typeof paramId === "string" &&
        paramId.length > 0 &&
        paramId === updatedParamId;

      if (shouldUpdate) {
        const state = ParameterValueStore.getParameterState(paramId);

        const newDefaultValue = state.defaultValue;
        const newValue = state.currentValue;

        setDefaultValue(newDefaultValue);
        setValue(newValue);

        if (typeof onToggled === "function") {
          onToggled(newValue !== 0.0);
        }
      }
    }

    useEffect(() => {
      if (typeof onToggled === "function") {
        console.log("here");
        onToggled(initialValue !== 0.0);
      }
    }, [onToggled])

    useEffect(() => {
      ParameterValueStore.addListener(
        ParameterValueStore.CHANGE_EVENT,
        onParameterValueChange
      );
      return () => {
        ParameterValueStore.removeListener(
          ParameterValueStore.CHANGE_EVENT,
          onParameterValueChange
        );
      }
    }, []);

    const handleEnter = (e) => {
      beginParameterChangeGesture(paramId);
      setBorderColor(hoverBorderColor);
    }

    const handleLeave = (e) => {
      endParameterChangeGesture(paramId);
      setBorderColor(defaultBorderColor);
    }

    const handleClick = (e) => {
      const newValue = value === 0.0 ? 1.0 : 0.0;
      setValue(newValue);

      if (
        typeof paramId === "string" &&
        paramId.length > 0
      ) {
        setParameterValueNotifyingHost(paramId, newValue);
      }

      if (typeof onToggled === "function") {
        onToggled(newValue !== 0.0);
      }
    }

    return (
      <Button
        {...other}
        borderColor={borderColor}
        onClick={handleClick}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
      </Button>
    );
}
