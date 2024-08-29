import * as React from "react";
import { View, StyleSheet, Platform, Text } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel, { TAnimationStyle } from "react-native-reanimated-carousel";

import type {
  StyleProp,
  ViewStyle,
  ViewProps,
  ImageSourcePropType,
} from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import type { AnimateProps } from "react-native-reanimated";

import Constants from "expo-constants";

import type { ImageURISource } from "react-native";
import { ActivityIndicator } from "react-native";
import { Image } from "expo-image";

import type { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import type { TransformsStyle } from "react-native";
import type { ScaledSize } from "react-native";
import { Dimensions } from "react-native";

export const isWeb = Platform.OS === "web";

export const HEADER_HEIGHT = 100;

export const ElementsText = {
  AUTOPLAY: "AutoPlay",
};

export const window: ScaledSize = isWeb
  ? {
      ...Dimensions.get("window"),
      width: 700,
    }
  : Dimensions.get("window");

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

const isValidSize = (size: Size): boolean => {
  "worklet";

  return size && size.width > 0 && size.height > 0;
};

const defaultAnchorPoint = { x: 0.5, y: 0.5 };

export const withAnchorPoint = (
  transform: TransformsStyle,
  anchorPoint: Point,
  size: Size
) => {
  "worklet";

  if (!isValidSize(size)) return transform;

  let injectedTransform = transform.transform;
  if (!injectedTransform) return transform;

  if (anchorPoint.x !== defaultAnchorPoint.x && size.width) {
    const shiftTranslateX = [];

    // shift before rotation
    shiftTranslateX.push({
      translateX: size.width * (anchorPoint.x - defaultAnchorPoint.x),
    });
    injectedTransform = [...shiftTranslateX, ...injectedTransform];
    // shift after rotation
    injectedTransform.push({
      translateX: size.width * (defaultAnchorPoint.x - anchorPoint.x),
    });
  }

  if (!Array.isArray(injectedTransform))
    return { transform: injectedTransform };

  if (anchorPoint.y !== defaultAnchorPoint.y && size.height) {
    const shiftTranslateY = [];
    // shift before rotation
    shiftTranslateY.push({
      translateY: size.height * (anchorPoint.y - defaultAnchorPoint.y),
    });
    injectedTransform = [...shiftTranslateY, ...injectedTransform];
    // shift after rotation
    injectedTransform.push({
      translateY: size.height * (defaultAnchorPoint.y - anchorPoint.y),
    });
  }

  return { transform: injectedTransform };
};

export interface ISButtonProps {
  visible?: boolean;
  onPress?: () => void;
}

const SButton: React.FC<PropsWithChildren<ISButtonProps>> = (props) => {
  const { children, visible = true, onPress } = props;

  if (!visible) return <></>;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#26292E",
            borderRadius: 50,
            paddingHorizontal: 20,
            padding: 10,
          }}
        >
          <Text style={{ color: "white" }}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

interface Props {
  style?: StyleProp<ViewStyle>;
  index?: number;
}

export const SBTextItem: React.FC<Props> = ({ style, index }) => {
  return (
    <View style={[styles.container, style]}>
      {typeof index === "number" && (
        <Text style={{ fontSize: 30, color: "black" }}>{index}</Text>
      )}
    </View>
  );
};

interface Props {
  style?: StyleProp<ViewStyle>;
  index?: number;
  showIndex?: boolean;
  img?: ImageSourcePropType;
}

export const SBImageItem: React.FC<Props> = ({
  style,
  index: _index,
  showIndex = true,
  img,
}) => {
  const index = _index ?? 0;
  const source = React.useRef<ImageURISource>({
    uri: `https://picsum.photos/id/${index}/400/300`,
  }).current;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" />
      <Image
        cachePolicy={"memory-disk"}
        key={index}
        style={styles.image}
        source={img ?? source}
      />
      {showIndex && (
        <Text
          style={{
            position: "absolute",
            color: "#6E6E6E",
            fontSize: 40,
            backgroundColor: "#EAEAEA",
            borderRadius: 5,
            overflow: "hidden",
            paddingHorizontal: 10,
            paddingTop: 2,
          }}
        >
          {index}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container_2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "red",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

interface Props extends AnimateProps<ViewProps> {
  style?: StyleProp<ViewStyle>;
  index?: number;
  pretty?: boolean;
  showIndex?: boolean;
  img?: ImageSourcePropType;
}

export const SBItem: React.FC<Props> = (props) => {
  const {
    style,
    showIndex = true,
    index,
    pretty,
    img,
    testID,
    ...animatedViewProps
  } = props;
  const enablePretty = Constants?.expoConfig?.extra?.enablePretty || false;
  const [isPretty, setIsPretty] = React.useState(pretty || enablePretty);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}
    >
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        {isPretty || img ? (
          <SBImageItem
            style={style}
            index={index}
            showIndex={typeof index === "number" && showIndex}
            img={img}
          />
        ) : (
          <SBTextItem style={style} index={index} />
        )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};

// import { SBItem } from "../../components/SBItem";
// import SButton from "../../components/SButton";
// import { ElementsText, window } from "../../constants";
// import { withAnchorPoint } from "../../utils/anchor-point";

const PAGE_WIDTH = window.width / 5;
const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

function VerticalCarousel() {
  const headerHeight = 100;
  const scale = 0.9;

  const RIGHT_OFFSET = window.width * (1 - scale);

  const ITEM_WIDTH = window.width * scale;
  const ITEM_HEIGHT = 120;

  const PAGE_HEIGHT = window.height - headerHeight;
  const PAGE_WIDTH = window.width;

  const animationStyle: TAnimationStyle = React.useCallback(
    (value: number) => {
      "worklet";

      const translateY = interpolate(
        value,
        [-1, 0, 1],
        [-ITEM_HEIGHT, 0, ITEM_HEIGHT]
      );
      const right = interpolate(
        value,
        [-1, -0.2, 1],
        [RIGHT_OFFSET / 2, RIGHT_OFFSET, RIGHT_OFFSET / 3]
      );
      return {
        transform: [{ translateY }],
        right,
      };
    },
    [RIGHT_OFFSET]
  );

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: `https://ychef.files.bbci.co.uk/1280x720/p0b7n6dm.jpg`,
        }}
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          position: "absolute",
        }}
      />
      {/* <BlurView
        intensity={80}
        tint="dark"
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          position: "absolute",
        }}
      /> */}
      <Carousel
        loop
        vertical
        style={{
          justifyContent: "center",
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
        }}
        width={ITEM_WIDTH}
        pagingEnabled={false}
        height={ITEM_HEIGHT}
        data={[...new Array(10).keys()]}
        renderItem={({ index }) => {
          return (
            <View key={index} style={{ flex: 1, padding: 10 }}>
              <View
                style={{
                  alignItems: "flex-start",
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      marginRight: 5,
                    }}
                    source={{
                      uri: `https://ychef.files.bbci.co.uk/1280x720/p0b7n6dm.jpg`,
                    }}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      maxWidth: ITEM_WIDTH * 0.3 - 40,
                      color: "white",
                    }}
                  >
                    dog
                  </Text>
                </View>
                <View
                  style={{
                    width: ITEM_WIDTH * 0.6,
                    height: ITEM_HEIGHT - 20,
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{
                      width: ITEM_WIDTH * 0.6,
                      height: ITEM_HEIGHT - 20,
                      borderRadius: 10,
                      marginRight: 5,
                    }}
                    source={{
                      uri: `https://ychef.files.bbci.co.uk/1280x720/p0b7n6dm.jpg`,
                    }}
                  />
                </View>
              </View>
            </View>
          );
        }}
        customAnimation={animationStyle}
      />
    </View>
  );
}

export default VerticalCarousel;
