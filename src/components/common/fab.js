import { Text, View, StyleSheet, Pressable, TouchableOpacity, Platform } from "react-native";
import { AnimatePresence, MotiView } from "moti";
import { useState } from "react";
import {
  CalendarIcon,
  PlusIcon,
  SearchIcon,
  ShuffleIcon,
} from "lucide-react-native";
import { Icon } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';

export function Fab() {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: 'white', textAlign: 'center' }}>
        Click the button in the bottom right!
      </Text> */}
      <Pressable
        onPress={() => 
          setExpanded(!expanded)}
        style={[
          styles.button2,
          {
            backgroundColor: expanded ? "#2F4EB2" : "#10243E",
            borderColor: "#2F4EB2",
          },
        ]}
      >
        <MotiView
          style={{ position: "absolute" }}
          animate={{ scale: expanded ? 1.5 : 1 }}
          transition={{
            duration: 150,
            type: "timing",
          }}
        >
          {/* <Text>🎁</Text> */}
          <Entypo name="plus" size={24} color="white" />
        </MotiView>
      </Pressable>
      <AnimatePresence>
        {expanded && (
          <View style={{ position: "absolute", bottom: 0, right: 0 }}>
            {actions.map((action, i) => (
              <ActionButton key={i.toString()} action={action} index={i} />
            ))}
          </View>
        )}
      </AnimatePresence>
    </View>
  );
}

const transitionValueByIndex = (index) => {
  if (index === 0) {
    return {
      opacity: 1,
      translateX: 0,
      translateY: -80,
    };
  } else if (index === 1) {
    return {
      opacity: 1,
      translateX: -60,
      translateY: -60,
    };
  } else if (index === 2) {
    return {
      opacity: 1,
      translateX: -80,
      translateY: 0,
    };
  }
};

function ActionButton({ action, index }) {
  const navigation = useNavigation();

  return (
    <MotiView
      transition={{ delay: index * 100, damping: 15, mass: 1 }}
      from={{
        opacity: 0,
        translateX: 0,
        translateY: 0,
      }}
      animate={transitionValueByIndex(index)}
      exit={{
        opacity: 0,
        translateX: 0,
        translateY: 0,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          
          if (action.path) {
            navigation.navigate(action.path);
          }
        }}
        style={[
          styles.button,
          {
          backgroundColor: action.color,
          shadowColor: action.color,
          borderColor: action.border,
        }, styles.button]}
      >
        <Text style={{ fontSize: 18 }}>{action.emoji}</Text>
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // backgroundColor: '#111',
    // padding: 8,
    position: "absolute",
    bottom: 0,
    right: 5,
  },
  button2: {
    borderRadius: 100,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 1,
    borderWidth: 2,
  },
  button: {
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    bottom: 0,
    right: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 1,
    borderWidth: 2,
  },
});

const iconProps = {
  size: 18,
  color: "white",
};

const actions = [
  {
    type: "Search",
    color: "#341A34",
    emoji: <Icon as={SearchIcon} {...iconProps} />,
    border: "#692D6F",
    path: 'RandomSearch'
  },
  {
    type: "Random",
    color: "#16301D",
    emoji: <Icon as={ShuffleIcon} {...iconProps} />,
    border: "#2F6E3B",
    path: 'Plan'
  },

  {
    type: "Planner",
    color: "#3B1813",
    emoji: <Icon as={CalendarIcon} {...iconProps} />,
    border: "#7F2315",
    path: "Planner",
  },
];
