import { MotiView } from "moti";

export const Fade = ({ delay, children, ...props }) => {
  return (
    <MotiView
      delay={delay}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    >
      {children}
    </MotiView>
  );
};
