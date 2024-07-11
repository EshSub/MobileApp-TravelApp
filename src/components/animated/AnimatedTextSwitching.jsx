import { WIDTH } from "../../helpers/constants";
import GradientText from "../common/gradientText";
import { View, AnimatePresence } from "moti";
import { useState, useEffect } from "react";

export const AnimatedTextSwitching = ({
  texts = ["text1", "text2", "text3"],
  textProps,
  ...props
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        width: "100%",
        // backgroundColor: 'green'
      }}
    >
      <AnimatePresence exitBeforeEnter>
        {texts.map((text, index) => {
          if (currentTextIndex !== index) return null;
          return (
            <View
              // style={{backgroundColor: 'red'}}
              key={index}
              from={{
                opacity: 0,
                // scale: 0.9,
                translateY: -10,
              }}
              animate={{
                opacity: 1,
                // scale: 1,
                translateY: 0,
              }}
              exit={{
                opacity: 0,
                // scale: 0.9,
                translateY: 10,
              }}
              exitTransition={{
                type: "timing",
                duration: 500,
              }}
            >
              <GradientText {...props}>{text}</GradientText>
            </View>
          );
        })}
      </AnimatePresence>
    </View>
  );
};
