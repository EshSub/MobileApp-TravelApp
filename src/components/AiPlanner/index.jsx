import React, { Component } from "react";
import { View, Text } from "react-native";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { WelcomeScreen } from "../../views/Intro/WelcomeScreen";
import { WelcomeStep } from "./welcomeStep";
import { ChooseDates } from "./ChooseDates";
import { ChooseActivities } from "./chooseActivities";
import { GeneralDescription } from "./generalDescription";
import LottieView from "lottie-react-native";
import { BORDER_RADIUS, WIDTH } from "../../helpers/constants";
import GeneratingResponse from "./generatingResponse.jsx";

const AiPlanner = () => {
  const navigationOptions = {
    header: null,
  };

  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center",
    },
  };

  const onNextStep = () => {
    console.log("called next step");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

  const onSubmitSteps = () => {
    console.log("called on submit step.");
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: "#FAA916",
    activeLabelColor: "#FAA916",
    activeStepNumColor: "white",
    activeStepIconColor: "#FAA916",
    completedStepIconColor: "#FAA916cc",
    completedProgressBarColor: "#FAA916",
    completedCheckColor: "#4bb543",
    disabledStepNumColor: "white",
    disabledStepIconColor: "#AB6F00cc",
  };

  const buttonTextStyle = {
    color: "white",
    fontWeight: "bold",
    margin: 10
  };

  const viewStyle = {
    alignItems: "center",
    padding: 15,
  };

  const buttonStyle = {
    backgroundColor: "#FAA916",
    padding: 5,
    borderRadius: BORDER_RADIUS
  }
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <LottieView
        source={require("../../assets/animations/aiWave.json")}
        style={{ height: 100, width: WIDTH, position: "absolute", top: 0 }}
        autoPlay
        loop
      />
      <LottieView
        source={require("../../assets/animations/aiWave.json")}
        style={{
          height: 100,
          width: WIDTH,
          position: "absolute",
          bottom: 0,
          transform: [{ rotate: "180deg" }],
        }}
        autoPlay
        loop
      />
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep
          label="First"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
          nextBtnStyle={buttonStyle}
        >
          <View style={viewStyle}>
            <WelcomeStep />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Second"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
          nextBtnStyle={buttonStyle}
          previousBtnStyle={buttonStyle}
        >
          <View style={viewStyle}>
            <ChooseDates />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Third"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
          nextBtnStyle={buttonStyle}
          previousBtnStyle={buttonStyle}
        >
          <View style={viewStyle}>
            <ChooseActivities />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Fourth"
          onNext={onNextStep}
          onPrevious={onPrevStep}
          scrollViewProps={defaultScrollViewProps}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
          nextBtnStyle={buttonStyle}
          previousBtnStyle={buttonStyle}
        >
          <View style={viewStyle}>
            <GeneralDescription />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Fifth"
          onPrevious={onPrevStep}
          // onSubmit={onSubmitSteps}
          scrollViewProps={defaultScrollViewProps}
          // nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
          // nextBtnStyle={buttonStyle}
          nextBtnDisabled={true}
          previousBtnStyle={buttonStyle}
        >
          <View style={viewStyle}>
            <GeneratingResponse />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default AiPlanner;
