import { Button, ButtonIcon, ButtonText } from "@gluestack-ui/themed"
import { AntDesign } from '@expo/vector-icons';

export const GoogleLogin = () => {
    return(
        <Button variant="outline" borderColor="#425884" size="xl">
            <ButtonIcon mr={"$3"} >
                <AntDesign name="google" size={20} color="#425884" />
            </ButtonIcon>
            <ButtonText color="#425884">
                Login with google
            </ButtonText>
        </Button>
    )
}