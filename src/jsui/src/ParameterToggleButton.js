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

  return (
    <Button
      background-color={muteBackgroundColor}
      borderColor={borderColor}
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...styles.mute_button}
    >
      <Text color={muteTextColor} {...styles.mute_button_text}>
        {children}
      </Text>
    </Button>
  );
}

const styles = {
  mute_button_text: {
    fontSize: 20.0,
    lineSpacing: 1.6,
    fontStyle: Text.FontStyleFlags.bold,
  },
  mute_button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5.0,
    borderWidth: 2.0,
    borderColor: "rgba(102, 253, 207, 1)",
    marginTop: 10,
    minWidth: 30.0,
    minHeight: 30.0,
    width: "20%",
    height: "17.5%",
  },
};

export default memo(ParameterCoefficient);
