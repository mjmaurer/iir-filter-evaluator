// import AnimatedFlexBoxExample from "./AnimatedFlexBox";
import Meter from "./Meter";
import Knob from "./Knob";
import React, { Component } from "react";
import { Canvas, Image, Text, TextInput, View } from "react-juce";
import ParameterToggleButton from "./ParameterToggleButton";
import ParameterCoefficient from "./ParameterCoefficient";
import { ParamIds } from "./ParameterValueContext";
import TransferFunction from "./TransferFunction";

function animatedDraw(ctx) {
  let now = Date.now() / 10;
  let width = now % 100;
  let red = Math.sqrt(width / 100) * 255;
  let hex = Math.floor(red).toString(16);

  ctx.fillStyle = `#${hex}ffaa`;
  ctx.fillRect(0, 0, width, 2);
}

// Example of callback for image onLoad/onError
function imageLoaded() {
  console.log("Image is loaded!");
}

function imageError(error) {
  console.log(error.name);
  console.log(error.message);
}

function App() {
  // Uncomment here to watch the animated flex box example in action
  // return (
  //   <View {...styles.container}>
  //     <AnimatedFlexBoxExample />
  //   </View>
  // );

  const logo_url =
    "https://raw.githubusercontent.com/nick-thompson/react-juce/master/examples/GainPlugin/jsui/src/logo.png";

  return (
    <View {...styles.container}>
      <View {...styles.content}>
        {/* <Image
            source={logo_url}
            onLoad={imageLoaded}
            onError={imageError}
            {...styles.logo}
          /> */}
        {/* <Knob paramId="MainGain" /> */}
        <TransferFunction />
        <View {...styles.coeffContainer}>
          <ParameterCoefficient readonly paramId={ParamIds.a0}>
            a0
          </ParameterCoefficient>
          <ParameterCoefficient paramId={ParamIds.a1}>a1</ParameterCoefficient>
          <ParameterCoefficient paramId={ParamIds.a2}>a2</ParameterCoefficient>
          <ParameterCoefficient paramId={ParamIds.a3}>a3</ParameterCoefficient>
          <ParameterCoefficient paramId={ParamIds.a4}>a4</ParameterCoefficient>
        </View>
        <View {...styles.coeffContainer}>
          <ParameterCoefficient readonly paramId={ParamIds.b0}>
            b0
          </ParameterCoefficient>
          <ParameterCoefficient paramId={ParamIds.b1}>b1</ParameterCoefficient>
          <ParameterCoefficient paramId={ParamIds.b2}>b2</ParameterCoefficient>
          <ParameterCoefficient paramId={ParamIds.b3}>b3</ParameterCoefficient>
          <ParameterCoefficient paramId={ParamIds.b4}>b4</ParameterCoefficient>
        </View>
        <ParameterToggleButton paramId={ParamIds.MainMute}>
          MUTED
        </ParameterToggleButton>
        {/* <Meter {...styles.meter} />
        <Canvas {...styles.canvas} animate={true} onDraw={animatedDraw} /> */}
      </View>
    </View>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:
      "linear-gradient(45deg, hsla(225, 15%, 11%, 0.3), #17191f 50%)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1.0,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5.0,
    // maxWidth: 600,
    aspectRatio: 400.0 / 240.0,
  },
  coeffContainer: {
    width: "100%",
    flex: 1.0,
    justifyContent: "center",
    alignItems: "center",
  },
  meter: {
    flex: 0.0,
    width: 100.0,
    height: 16.0,
  },
  canvas: {
    flex: 0.0,
    width: 100.0,
    height: 2,
    marginTop: 10,
  },
};

export default App;
