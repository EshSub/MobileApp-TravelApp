import { Marquee } from "@animatereactnative/marquee";
import React from "react";
import { HStack, Heading, Text, VStack } from "@gluestack-ui/themed";
import { Background } from "../background";

export const TextMarquee = () => {
  const travelWords = [
    "Travel",
    "Explore",
    "Discover",
    "Adventure",
    "Journey",
    "Roam",
    "Wander",
    "Voyage",
    "Trip",
    "Tour",
    "Excursion",
    "Safari",
    "Trek",
    "Pilgrimage",
    "Odyssey",
    "Expedition",
    "Cruise",
    "Hike",
    "Jaunt",
    "Stroll",
    "Ramble",
    "Drive",
    "Ride",
    "Flight",
    "Sail",
    "Climb",
    "Tumble",
    "Plunge",
    "Dive",
    "Leap",
    "Jump",
    "Hop",
    "Skip",
    "Run",
    "Walk",
    "Swim",
    "Float",
    "Fly",
    "Soar",
    "Glide",
    "Drift",
    "Ski",
    "Skate",
    "Snowboard",
    "Surf",
    "Paddle",
    "Row",
    "Canoe",
    "Kayak",
    "Raft",
    "Tube",
    "Sled",
    "Bike",
    "Cycle",
    "Motorcycle",
    "Scooter",
    "Moped",
    "Car",
    "Bus",
    "Train",
    "Subway",
    "Tram",
    "Ferry",
    "Boat",
    "Ship",
    "Yacht",
    "Sailboat",
    "Catamaran",
    "Canoe",
    "Kayak",
    "Raft",
    "Tube",
    "Sled",
    "Bike",
    "Cycle",
    "Motorcycle",
    "Scooter",
    "Moped",
    "Car",
    "Bus",
    "Train",
    "Subway",
    "Tram",
    "Ferry",
    "Boat",
    "Ship",
    "Yacht",
    "Sailboat",
    "Catamaran",
    "Canoe",
    "Kayak",
    "Raft",
    "Tube",
    "Sled",
    "Bike",
    "Cycle",
    "Motorcycle",
    "Scooter",
    "Moped",
    "Car",
    "Bus",
    "Train",
    "Subway",
    "Tram",
  ];

  const marquees = [
    {
      speed: 1,
      size: 15, // 20
    },
    {
      speed: 0.7,
      size: 28, //50
    },
    {
      speed: 1,
      size: 20, //30
    },
    {
      speed: 0.8,
      size: 25,
    },
    {
      speed: 1,
      size: 15, // 10
    },
    {
      speed: 0.5,
      size: 29, //30
    },
    {
      speed: 0.8,
      size: 17, //20
    },
    {
      speed: 1,
      size: 27, //30
    }
  ];

  return (
      <VStack gap={5} >
        {marquees.map((marquee, index) => {
          return (
            <Marquee key={index} spacing={marquee.size * 2} speed={marquee.speed}>
              <Text fontSize={marquee.size} m={0} lineHeight={"$xl"}>
                {travelWords.sort((a, b) => Math.random() - 0.5).join(" ")}
              </Text>
            </Marquee>
          );
        })}
      </VStack>
  );
};
