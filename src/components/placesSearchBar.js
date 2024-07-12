import { InputSlot, Input, InputIcon, InputField, SearchIcon, FlatList, Text, View, Box } from "@gluestack-ui/themed"
import { useState } from "react"
import { useSelector } from "react-redux"
import { getPlaces } from "../redux/selectors"
import { TouchableOpacity } from "react-native"

export const PlacesSearchBar = ({searchPlace, setSearchPlace}) => {
    const [filteredPlaces, setFilteredPlaces] = useState([])
    const places = useSelector(getPlaces)
    const [searchText, setSearchText] = useState("")
    const filterPlaces = (input) => {
        if (input) {
            const filtered = places.filter((place) => place.place_name.toLowerCase().includes(input.toLowerCase()))
            setFilteredPlaces(filtered)
        } else {
            setFilteredPlaces([])
        }
    }
    return (
        <View>
            <Input borderRadius={"$2xl"} bgColor="white" opacity={0.5}>
                <InputSlot pl="$3">
                    <InputIcon as={SearchIcon} />
                </InputSlot>
                <InputField value={searchText} autoComplete="additional-name" borderStyle={"none"} placeholder="Search..."
                    onChangeText={(text) => {
                        setSearchText(text)
                        filterPlaces(text)
                    }} />
            </Input>
            {filteredPlaces.length > 0 &&
                <Box bgColor="white" opacity={0.7} borderRadius={"$10"}>
                    <FlatList
                        data={filteredPlaces}
                        keyExtractor={(item) => item.id}
                        
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => {
                                setSearchText(item.place_name)
                                setSearchPlace(item)
                                setFilteredPlaces([])
                            }}>
                                <Box width={"100%"} p={"$4"}>
                                <Text>{item.place_name}</Text>
                                </Box>
                            </TouchableOpacity>} />
                </Box>
            }
        </View>
    )
}