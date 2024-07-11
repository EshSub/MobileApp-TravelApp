import { motifySvg } from "moti/svg";
// import { Line, Svg } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import { getIsMainDrawerOpen } from "../../redux/selectors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { setMainDrawerOpen } from "../../redux/slices/appSlice";
import { AnimatePresence, MotiView } from "moti";
import { CloseIcon, Icon, MenuIcon } from "@gluestack-ui/themed";

// const MotiLine = motifySvg(Line)();

// const transition = {
//   type: "timing",
// };

const DrawerIcon = ({ color = "black", size = 24, ...otherProps }) => {
  const open = useSelector(getIsMainDrawerOpen);
  const dispatch = useDispatch();

  const setOpen = (isOpen) => {
    dispatch(setMainDrawerOpen(isOpen));
  };

  const iconProps = { h: "$8", w: "$8", color: "$text900" };

  const Anim = ({ children }) => (
    <MotiView
      from={{
        transform: [{ translateX: -10 }],
      }}
      animate={{
        transform: [{ translateX: 0 }],
      }}
    >
      {children}
    </MotiView>
  );

  return (
    <TouchableOpacity onPress={() => setOpen(!open)} style={{ width: "100%" }}>
      <AnimatePresence>
        {open ? (
          <Anim>
            <Icon as={CloseIcon} {...iconProps} />
          </Anim>
        ) : (
          <Anim>
            <Icon as={MenuIcon} {...iconProps} />
          </Anim>
        )}
      </AnimatePresence>
      {/* <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={`${color}`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...otherProps}
      >
        <MotiLine
          x1="4"
          x2="20"
          y1="6"
          y2="6"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            // translateY: !open ? 6 : 0,
            rotation: !open ? "45deg" : "0deg",
          }}
          origin={[12, 12]}
          transition={transition}
        />
        <MotiLine
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            scaleX: !open ? 0.1 : 1,
            opacity: !open ? 0 : 1,
          }}
          origin={[12, 12]}
          transition={transition}
        />
        <MotiLine
          x1="4"
          x2="20"
          y1="18"
          y2="18"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            // translateY: !open ? -6 : 0,
            rotation: !open ? "-45deg" : "0deg",
          }}
          origin={[12, 12]}
          transition={transition}
        />
      </Svg> */}
    </TouchableOpacity>
  );
};

export default DrawerIcon;
