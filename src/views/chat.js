import { useCallback, useEffect, useState } from "react";
import { Background } from "../components/background";
import { GiftedChat } from "react-native-gifted-chat";
import {
  Button,
  ButtonIcon,
  Input,
  InputField,
  Text,
  View,
} from "@gluestack-ui/themed";
import { HEIGHT, WIDTH } from "../helpers/constants";
import { SendHorizonalIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useDataProvider } from "../apis";
import authAxios from "../apis/axios";
import { currentDateString } from "../helpers/utils";
import { useRoute } from "@react-navigation/native";

export const ChatView = ({ route }) => {
  const [messages, setMessages] = useState([]);
  // const [conversationId, setConversationId] = useState(6);

  const { conversationId } = route.params;

  useEffect(() => {
    console.log({ conversationId });
  }, [conversationId]);

  const getMessageObjectFromResponse = (message) => {
    const user = message.guide ? "guide" : "user";
    const dateObj = new Date(message.date + "T" + message.time);
    const timezoneOffset = new Date().getTimezoneOffset() * 60 * 1000;

    console.log({ dateObj, timezoneOffset });

    dateObj.setTime(dateObj.getTime() - timezoneOffset);

    return {
      _id: message.id,
      text: message.message,
      createdAt: dateObj,
      user: {
        _id: user,
        name: user,
        avatar: (props) => {
          console.log({ props });
          return (
            <View
              style={{
                height: props[0].height,
                width: props[0].width,
                backgroundColor: "red",
              }}
            />
          );
        },
      },
    };
  };

  useEffect(() => {
    if (conversationId) {
      authAxios
        .get(`/message/`, { params: { conversation: conversationId } })
        .then((response) => {
          // console.log({ messages_get: response.data });
          const data = response.data;

          if (data) {
            setMessages(
              data
                .reverse()
                .map((message) => getMessageObjectFromResponse(message))
            );
          }
        });
    }
  }, [conversationId]);

  const onSend = useCallback((messages = []) => {
    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, messages),
    // )

    const previousMessages = [...messages];

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [
        {
          _id: (Math.random()* 1000000).toString(),
          text: messages[0].text,
          createdAt: new Date(),
          user: {
            _id: "user",
            name: "user",
          },
        },
      ])
    );

    // setMessages([
    //   ...previousMessages,
    //   {
    //     _id: "new",
    //     text: messages[0].text,
    //     createdAt: new Date(),
    //     user: {
    //       _id: "user",
    //       name: "user",
    //     },
    //   },
    // ]);

    authAxios
      .post(`/message/`, {
        conversation: conversationId,
        message: messages[0].text,
      })
      .then((response) => {
        console.log({ data: response.data });
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, 
            getMessageObjectFromResponse(response.data.res_message),
          )
        );
        // setMessages([
        //   ...previousMessages,
        //   getMessageObjectFromResponse(response.data.message),
        //   getMessageObjectFromResponse(response.data.res_message),
        // ]);

        // setMessages((prev) => GiftedChat.append(prev, response));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Background>
      <View width={WIDTH} height={"100%"}>
        {/* <Text>
          {JSON.stringify(messages)}
        </Text> */}
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: "user",
          }}
        />
      </View>
    </Background>
  );
};
