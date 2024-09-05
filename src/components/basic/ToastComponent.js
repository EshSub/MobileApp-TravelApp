import { Text, View } from "@gluestack-ui/themed"
import { TouchableOpacity } from "react-native"
import Toast from "react-native-toast-message"


export const showErrorToast = (title, description) => {
    console.log({ title, description })
    Toast.show({
        type: 'error',
        text1: title,
        text2: description
    })
}

export const showSuccessToast = (title, description) => {
    Toast.show({
        type: 'success',
        text1: title,
        text2: description
    })
}

export const showInfoToast = (title, description) => {
    Toast.show({
        type: 'info',
        text1: title,
        text2: description,
        topOffset: 60,
        autoHide: true
    })
}

export const showCustomToast = (text1, text2) => {
    Toast.show({
        type: 'custom',
        text1: text1,
        text2: text2,
        topOffset: 60,
        autoHide: true
    })
}

