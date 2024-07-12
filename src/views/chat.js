import { useCallback, useEffect, useState } from "react"
import { Background } from "../components/background"
import { GiftedChat } from "react-native-gifted-chat"
import { Button, ButtonIcon, Input, InputField, View } from "@gluestack-ui/themed"
import { HEIGHT, WIDTH } from "../helpers/constants"
import { SendHorizonalIcon } from "lucide-react-native"
import { TouchableOpacity } from "react-native"

export const ChatView = () => {
    const [messages, setMessages] = useState([])
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )
      }, [])
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png',
                },
                sent: true,
                received: true,
                pending: true
            },
            {
                _id: 2,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png',
                },
            },
        ])
    }, [])
    return (
        <Background>
            <View width={WIDTH} height={"100%"}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1
                }}
                />
            </View>
        </Background>
    )
}