import { Badge, BadgeText } from "@gluestack-ui/themed"
import { TouchableOpacity } from "react-native"

export const Chip = ({text, color, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Badge size="lg" variant="outline" action={color} p={"$1"}>
                <BadgeText>{text}</BadgeText>
            </Badge>
        </TouchableOpacity>
    )
}