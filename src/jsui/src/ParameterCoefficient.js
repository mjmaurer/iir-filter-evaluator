import React, { Component, useState, useEffect, memo } from "react";
import { Button, Text, TextInput, View } from "react-juce";
import {
  beginParameterChangeGesture,
  endParameterChangeGesture,
  setParameterValueNotifyingHost,
} from "./nativeMethods";
import { useParameter } from "./ParameterValueContext";

function ParameterCoefficient(props) {
  const { paramId, readonly } = props;
  const { currentValue, defaultValue } = useParameter(paramId);
  const [input, setInput] = useState(defaultValue);

  const denormalize = (normValue) => {
    return normValue * 4 - 2;
  };

  useEffect(() => {
    setInput(denormalize(currentValue).toString());
  }, [currentValue]);

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
    setInput(event.value.replace(/[^\d.-]/g, ""));
  };

  return (
    <View {...styles.wrapper}>
      <TextInput
        placeholder={currentValue ? currentValue.toString() : ""}
        value={input ? input.toString() : ""}
        onInput={onInput}
        readonly={readonly}
        {...styles.text_input}
      ></TextInput>
      <Text {...styles.text}>{paramId}</Text>
    </View>
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
    justification: 36,
  },
  text: {
    color: "white",
    fontSize: 17.0,
    fontFamily: "Menlo",
    marginTop: 4,
  },
  wrapper: {
    flex: 1.0,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: 600,
  },
};

export default memo(ParameterCoefficient);
