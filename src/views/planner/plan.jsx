import {
  BedDoubleIcon,
  BeefIcon,
  CookingPotIcon,
  HandPlatterIcon,
  HomeIcon,
  SunIcon,
  SunsetIcon,
} from "lucide-react-native";
import React from "react";
import { View, Text } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import { plan } from "../../helpers/data";
import { useEffect } from "react";

import {
  HStack,
  Heading,
  VStack,
  Card,
  Badge,
  BadgeText,
} from "@gluestack-ui/themed";
import { Background } from "../../components/background";
import { randomSort } from "../../helpers/utils";
import { BORDER_RADIUS, WIDTH } from "../../helpers/constants";
import { TimelineItem } from "./timelineItem";
import { useSelector } from "react-redux";
import { getAiPlan } from "../../redux/selectors";

const ActivityIcon = ({ time, props }) => {
  switch (time) {
    case "breakfast":
      return <BeefIcon {...props} />;
    case "morning":
      return <SunIcon {...props} />;
    case "lunch":
      return <CookingPotIcon {...props} />;
    case "evening":
      return <SunsetIcon {...props} />;
    case "dinner":
      return <HandPlatterIcon {...props} />;
    case "accommodation":
      return <BedDoubleIcon {...props} />;
    default:
      return <HomeIcon {...props} />;
  }
};

export const Plan = () => {
  const [data, setData] = React.useState([]);
  const aiPlan = useSelector(getAiPlan) || plan;
  console.log({aiPlan})
  const planTemplate = {
    
  }

  const activityTimes = [
    "breakfast",
    "morning",
    "lunch",
    "evening",
    "dinner",
    "accommodation",
  ];

  useEffect(() => {
    const d = [];
    Object.keys(aiPlan).map((day) => {
      d.push({
        time: `Day ${day}`,
        title: <TimeLineDate day={day} items={aiPlan[day]} />,
      });
      activityTimes.map((time) => {
        d.push({
          time: time,
          // description: 'test',
          // title: "test2",
          title: <TimelineItem item={aiPlan[day][time]} />,
          icon: (
            <ActivityIcon
              time={time}
              props={{ size: 20, style: { backgroundColor: "white" } }}
            />
          ),
        });
      });
    });
    setData(d);
    console.log({d})
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Background>
      <View style={{ height: "100%" }}>
        <Timeline
          style={{
            flex: 1,
            marginTop: 20,
            width: WIDTH,
          }}
          circleSize={20}
          circleColor="rgba(0,0,0,0)"
          lineColor="rgb(45,156,219)"
          options={{
            style: { paddingTop: 5 },
          }}
          data={data}
          showTime={false}
          innerCircle={"icon"}
        />
      </View>
    </Background>
  );
};

const TimeLineDate = ({ items, day }) => {
  // console.log({ items });
  console.log({items, day})
  const allTags = Object.values(items)
    .map((item) => item?.Tags)
    .flat()
    .filter((f) => f)
    .sort(randomSort);

  console.log({ allTags });

  return (
    <Card
      size="md"
      variant="elevated"
      className="m-3 w-70"
      borderRadius={BORDER_RADIUS}
      variant="filled"
      // style={{ width: WIDTH * 0.7 }}
    >
      <VStack
        style={{
          // flexDirection: "row",
          borderRadius: BORDER_RADIUS,
          flex: 1,
        }}
        gap={5}
      >
        <Heading>Day {parseInt(day)+1}</Heading>
        <Text>{items.activities}</Text>
        <HStack gap={3} flex={1}>
          {allTags.slice(0, 3).map((tag, index) => (
            <Badge size="md" variant="solid" action="success" key={index}>
              <BadgeText>{tag}</BadgeText>
            </Badge>
          ))}
          <Badge size="md" variant="solid" action="info" key={"more"}>
            <BadgeText>+ others</BadgeText>
          </Badge>
        </HStack>
      </VStack>
    </Card>
  );
};
