import { View } from "@gluestack-ui/themed"

export const Background = ({children}) => {
    return(
        <View height={"100%"} p={"$6"} backgroundColor="#F4FEFF">
            {children}
        </View>
    )
}