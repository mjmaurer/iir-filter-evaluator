import React, { Component, useState, useEffect, memo } from "react";
import { Button, Text, TextInput } from "react-juce";
import {
  beginParameterChangeGesture,
  endParameterChangeGesture,
  setParameterValueNotifyingHost,
} from "./nativeMethods";
import { useParameter } from "./ParameterValueContext";

function ParameterCoefficient(props) {
  const { paramId, children } = props;
  const { currentValue } = useParameter(paramId);

  const muteBackgroundColor = currentValue
    ? "#66FDCF"
    : "hsla(162, 97%, 70%, 0)";
  const muteTextColor = currentValue ? "#17191f" : "hsla(162, 97%, 70%, 1)";

  const hoverBorderColor = "#66CFFD";
  const defaultBorderColor = "#66FDCF";
  const [borderColor, setBorderColor] = useState(defaultBorderColor);

  const handleEnter = (e) => {
    beginParameterChangeGesture(paramId);
    setBorderColor(hoverBorderColor);
  };

  const handleLeave = (e) => {
    endParameterChangeGesture(paramId);
    setBorderColor(defaultBorderColor);
  };

  const handleClick = (e) => {
    setParameterValueNotifyingHost(paramId, !currentValue);
  };

  const onInput = (event) => {
    console.log(`onInput: ${event.value}`);
    console.log(currentValue);
  };

  return (
    <TextInput
      placeholder="init message"
      value="init"
      onInput={onInput}
      {...styles.text_input}
    ></TextInput>
  );
}

const styles = {
  text_input: {
    backgroundColor: "ff303030",
    color: "ff66FDCF",
    fontSize: 15.0,
    fontFamily: "Menlo",
    fontStyle: Text.FontStyleFlags.bold,
    "placeholder-color": "ffAAAAAA",
    height: 30,
    width: 75,
  },
};

export default memo(ParameterCoefficient);
