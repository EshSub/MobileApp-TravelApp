import { Box, Divider, HStack, Text, View } from "@gluestack-ui/themed";
import { useState } from "react";
import { Button } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Background } from "../components/background";
import { useDataProvider } from "../apis";
import axios from "axios";
import authAxios from "../apis/axios";
import { useNavigation } from "@react-navigation/native";
import { WIDTH } from "../helpers/constants";
import {
  getDateObjFromDateAndTime,
  humanReadableDateTimeFromObj,
  sliceStringIfLong,
} from "../helpers/utils";

export const ChatList = () => {
  const [conversations, setConversations] = useState([]);
  const dataProvider = useDataProvider();
  const navigation = useNavigation();

  const navigateToConversation = (conversationId) => {
    navigation.navigate("Chat", { conversationId });
  };

  const { data, isLoading } = dataProvider.conversation.get();

  const addNewConversation = () => {
    authAxios.post("/conversation/", {}).then((response) => {
      setConversations([...conversations, response]).catch((error) => {
        console.error(error);
      });
    });
  };

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <Background>
      <Box style={{ width: WIDTH, height: "100%" }}>
        {data?.map((conversation) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigateToConversation(conversation.id);
              }}
            >
              <ListItem
                title={sliceStringIfLong(
                  conversation?.last_message?.message,
                  50,
                  "No previous messages"
                )}
                subtitle={
                  conversation?.last_message
                    ? `${
                        conversation?.last_message?.guide ? "Guide" : "User"
                      } | ${humanReadableDateTimeFromObj(
                        getDateObjFromDateAndTime(
                          conversation?.last_message?.date,
                          conversation?.last_message?.time
                        )
                      )}`
                    : "Click to start the chat"
                }
              />
            </TouchableOpacity>
          );
        })}
      </Box>
    </Background>
  );
};

const ListItem = ({ title, subtitle, avatar_url }) => (
  <View style={styles.itemContainer}>
    {/* <Image source={{ uri: avatar_url }} style={styles.avatar} /> */}
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Divider style={{ width: WIDTH }} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
});
