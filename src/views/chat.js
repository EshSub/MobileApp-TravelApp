import { useCallback, useEffect, useState } from "react";
import { Background } from "../components/background";
import { GiftedChat } from "react-native-gifted-chat";
import {
  Button,
  ButtonIcon,
  Input,
  InputField,
  View,
} from "@gluestack-ui/themed";
import { HEIGHT, WIDTH } from "../helpers/constants";
import { SendHorizonalIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useDataProvider } from "../apis";
import authAxios from "../apis/axios";
import { currentDateString } from "../helpers/utils";

export const ChatView = () => {
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(1);

  //   const { data, loading } = useDataProvider().message.get({
  //     conversation: conversationId,
  //   })();

  useEffect(() => {
    authAxios
      .get(`/message/`, { query: { conversation: conversationId } })
      .then((response) => {
        console.log({ data: response.data });
        const data = response.data;
        if (data) {
          console.log({ data });
          setMessages(
            data?.map((message) => {
              return {
                _id: message.id,
                text: message.text,
                createdAt: new Date(date + "T" + time),
                user: {
                  _id: 1,
                  name: "test",
                },
              };
            })
          );
        }
      }, []);
  }, [conversationId]);

  const dataprovider = useDataProvider();

  //   useEffect(() => {
  //     console.log({ data });
  //     if (data) {
  //     //   console.log({ data });
  //       //   setMessages(
  //       //     data?.map((message) => {
  //       //       return {
  //       //         _id: message.id,
  //       //         text: message.text,
  //       //         createdAt: new Date(message.createdAt),
  //       //         user: {
  //       //           _id: message.user.id,
  //       //           name: message.user.name,
  //       //           avatar: message.user.avatar,
  //       //         },
  //       //       };
  //       //     })
  //       //   );
  //     }
  //   }, [data]);

  const onSend = useCallback((messages = []) => {
    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, messages),
    // )

    console.log({messages});

    authAxios.post(`/message/`, {
        conversation: conversationId,
        date: currentDateString(),
        time: new Date().toISOString(),
        message: messages[0].text,
    }).then((response) => {
        console.log({ response });
        // setMessages((prev) => GiftedChat.append(prev, response));
    }).catch((error) => {
        console.error(error);
    });


    // const hardCodedReplies = [
    //     `Sigiriya, often referred to as the "Lion Rock," is a stunning ancient fortress located in Sri Lanka.
    //     It's famous for its impressive rock summit, which features the ruins of a 5th-century palace complex.
    //      Visitors can explore beautiful frescoes, landscaped gardens, and a mirror wall with ancient graffiti.
    //      Climbing to the top offers breathtaking panoramic views of the surrounding countryside.
    //     It's a UNESCO World Heritage site and a must-visit for history buffs and adventure seekers!`,
    //     'Welcome to TourAcross'
    // ]
    // const userMessage = messages[0].text
    // const botReplyText = hardCodedReplies[0]

    // const botMessage = {
    //     _id: 1,
    //     text: botReplyText,
    //     createdAt: new Date(),
    //     user: {
    //         _id: 1,
    //         name: 'React Native',
    //         avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png',
    //     },
    //     sent: true,
    //     received: true,
    //     pending: true
    // }
    // setTimeout(() => {
    //   setMessages((prev) => GiftedChat.append(prev, botMessage));
    // }, 1000);
  }, []);

  useEffect(() => {
    const msgs = [
      {
        conversation: 1,
        date: "2024-09-04",
        guide: null,
        id: 1,
        message: "Test message",
        place: 1,
        time: "07:59:41",
      },
    ];
    setMessages(
      msgs.map((message) => {
        const userId = message.guide ? message.guide : "user";
        return {
          _id: message.id,
          text: message.message,
          createdAt: new Date(message.date + "T" + message.time),
          user: {
            _id: userId,
            name: "test",
          },
        };
      })
    );
  }, []);

  //   useEffect(() => {
  //     setMessages([
  //       {
  //         _id: 1,
  //         text: "Hello developer",
  //         createdAt: new Date(),
  //         user: {
  //           _id: 1,
  //           name: "React Native",
  //           avatar:
  //             "https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png",
  //         },
  //         sent: true,
  //         received: true,
  //         pending: true,
  //       },
  //     ]);
  //   }, []);

  return (
    <Background>
      <View width={WIDTH} height={"100%"}>
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
