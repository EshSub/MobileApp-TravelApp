import {
  Badge,
  BadgeText,
  HStack,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed";
import { AnimatedText } from "../animated/AnimatedText";
import { headerStyles, helpTextStyles, subHeaderStyles } from "./styles";
import { COLORS } from "../../helpers/constants";
import { useState } from "react";
import { Marquee } from "@animatereactnative/marquee";
import { Fade } from "../animated/Fade";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ChooseActivities = () => {
  const [selectedActivities, setSelectedActivites] = useState([]);

  const activitiesList = [
    [
      "Hiking",
      "Mountain Biking",
      "Skiing",
      "Snowboarding",
      "Surfing",
      "Kite Surfing",
      "Windsurfing",
      "Scuba Diving",
      "Snorkeling",
      "Kayaking",
      "Canoeing",
      "Rafting",
      "Fishing",
    ],
    [
      "Hunting",
      "Camping",
      "Backpacking",
      "Rock Climbing",
      "Bouldering",
      "Mountaineering",
      "Caving",
      "Sailing",
      "Boating",
      "Jet Skiing",
      "Parasailing",
      "Hang Gliding",
      "Paragliding",
    ],
    [
      ("Skydiving",
      "Base Jumping",
      "Bungee Jumping",
      "Zip Lining",
      "Horseback Riding",
      "ATV Riding",
      "Motorcycling",
      "Mountain Climbing",
      "Ice Climbing",
      "Ice Skating",
      "Roller Skating",
      "Rollerblading",
      "Skateboarding"),
    ],
  ];

  return (
    <VStack gap={30}>
      <AnimatedText delay={100} style={headerStyles}>
        What kind of{" "}
        <Text color={COLORS.highlightText} style={{ ...headerStyles }}>
          activities
        </Text>{" "}
        do you like?
      </AnimatedText>
      <AnimatedText delay={500} style={helpTextStyles}>
        *Optional. Keep empty to go crazy!
      </AnimatedText>
      <VStack gap={10}>
        {activitiesList.map((activityGroup, index) => (
          <Marquee key={index} speed={0.3 + Math.random() * 0.5}>
            <HStack overflow="scroll" gap={5}>
              {activityGroup
                .filter((a) => !selectedActivities.includes(a))
                .map((activity, i) => (
                  <Fade delay={500 + i * 10 + index * 100}>
                    <Badge
                      size="md"
                      variant="solid"
                      action="success"
                      key={`${i}-${index}`}
                    >
                      <BadgeText
                        fontSize={(Math.random() / 2) * 20 + 12}
                        onPress={() => {
                          setSelectedActivites((a) => [...a, activity]);
                        }}
                      >
                        {activity}
                      </BadgeText>
                    </Badge>
                  </Fade>
                ))}
            </HStack>
          </Marquee>
        ))}
      </VStack>
      {/* <Input></Input> */}
      <AnimatedText delay={1000} style={subHeaderStyles}>
        Heres what you have selected so far
      </AnimatedText>
      <View gap={10}>
        {selectedActivities.map((activity, i) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedActivites((a) => a.filter((act) => act !== activity));
            }}
          >
            <Badge size="md" variant="solid" action="info" key={i} p={5}>
              <BadgeText fontSize={20}>{activity}</BadgeText>
            </Badge>
          </TouchableOpacity>
        ))}
      </View>
    </VStack>
  );
};
