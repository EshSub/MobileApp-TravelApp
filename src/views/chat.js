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

        const hardCodedReplies = [
            `Sigiriya, often referred to as the "Lion Rock," is a stunning ancient fortress located in Sri Lanka. 
            It's famous for its impressive rock summit, which features the ruins of a 5th-century palace complex.
             Visitors can explore beautiful frescoes, landscaped gardens, and a mirror wall with ancient graffiti. 
             Climbing to the top offers breathtaking panoramic views of the surrounding countryside. 
            It's a UNESCO World Heritage site and a must-visit for history buffs and adventure seekers!`,
            'Welcome to TourAcross'
        ]
        const userMessage = messages[0].text
        const botReplyText = hardCodedReplies[0]

        const botMessage = {
            _id: 1,
            text: botReplyText,
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png',
            },
            sent: true,
            received: true,
            pending: true
        }
        setTimeout(() => {
            setMessages((prev) => GiftedChat.append(prev, botMessage))
        }, 1000)
      }, [])
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png',
                },
                sent: true,
                received: true,
                pending: true
            }
        ])
    }, [])

    return (
        <Background>
            <View width={WIDTH} height={"100%"}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 2
                }}
                isTyping={true}
                />
            </View>
        </Background>
    )
}