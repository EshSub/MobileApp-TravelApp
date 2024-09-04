import { Box, HStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { Button, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Background } from "../components/background";
import { useDataProvider } from "../apis";
import axios from "axios";
import authAxios from "../apis/axios";
import { useNavigation } from "@react-navigation/native";

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
      <Button title="add new" onPress={addNewConversation}>
        <Text>New conversation</Text>
      </Button>
      <TouchableOpacity
        onPress={() => {
          navigateToConversation(1);
        }}
      >
        <HStack>
          <Box>
            <Text>{"test"}</Text>
            <Text>{"lastMessage"}</Text>
          </Box>
        </HStack>
      </TouchableOpacity>
      <Box>
        {data?.map((conversation) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigateToConversation(conversation.id);
              }}
            >
              <HStack>
                <Box>
                  <Text>{conversation.id}</Text>
                  <Text>{conversation?.lastMessage ?? "lastMessage"}</Text>
                </Box>
              </HStack>
            </TouchableOpacity>
          );
        })}
      </Box>
    </Background>
  );
};
