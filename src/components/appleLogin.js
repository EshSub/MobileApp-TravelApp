import { Button, ButtonIcon, ButtonText } from "@gluestack-ui/themed"
import { AntDesign } from '@expo/vector-icons';

export const AppleLogin = () => {
    return(
        <Button variant="outline" borderColor="black" size="xl">
            <ButtonIcon mr={"$3"} >
                <AntDesign name="apple1" size={20} color="black" />
            </ButtonIcon>
            <ButtonText color="black">
                Login with apple
            </ButtonText>
        </Button>
    )
}