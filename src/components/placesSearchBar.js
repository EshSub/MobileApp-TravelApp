import { InputSlot, Input, InputIcon, InputField, SearchIcon, FlatList, Text, View, Box } from "@gluestack-ui/themed"
import { useState } from "react"
import { useSelector } from "react-redux"
import { getPlaces } from "../redux/selectors"
import { TouchableOpacity } from "react-native"
import { useDataProvider } from "../apis"

export const PlacesSearchBar = ({searchPlace, setSearchPlace}) => {
    const [filteredPlaces, setFilteredPlaces] = useState([])
    // const places = useSelector(getPlaces)
    const dataprovider = useDataProvider()
    const { data: places , loading : placeLoading } = dataprovider.places.get();
    const [searchText, setSearchText] = useState("")
    const filterPlaces = (input) => {
        if (input) {
            const filtered = places?.filter((place) => place.place_name.toLowerCase().includes(input.toLowerCase()))
            setFilteredPlaces(filtered)
        } else {
            setFilteredPlaces([])
        }
    }
    return (
        <View>
            <Input style={{borderRadius: 10}} bgColor="white" opacity={0.5} mx="$2">
                <InputSlot pl="$3">
                    <InputIcon as={SearchIcon} />
                </InputSlot>
                <InputField value={searchText} autoComplete="additional-name" placeholder="Search..."
                    onChangeText={(text) => {
                        setSearchText(text)
                        filterPlaces(text)
                    }} />
            </Input>
            {filteredPlaces?.length > 0 &&
                <Box bgColor="white" opacity={0.7} style={{borderRadius: 10}}>
                    <FlatList
                        data={filteredPlaces}
                        keyExtractor={(item) => item.id}
                        height={300}
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