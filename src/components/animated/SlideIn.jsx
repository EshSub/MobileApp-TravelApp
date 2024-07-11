import { MotiView } from "moti";

export const SlideIn = ({ children, style, delay = 0, direction = "left" }) => {
  return (
    <MotiView
      style={style}
      from={{
        scale: 1,
        translateX: -10,
      }}
      animate={{
        scale: 1,
        translateX: 0,
      }}
      delay={delay}
      
    >
      {children}
    </MotiView>
  );
};
