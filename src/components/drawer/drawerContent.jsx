// import { Text } from "@gluestack-ui/themed";
// import { SafeAreaView } from "react-native";

// export const DrawerContent = () => {
//   return (
//     <SafeAreaView>
//       <Text>DrawerContent</Text>
//     </SafeAreaView>
//   );
// };

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getIsMainDrawerOpen } from "../../redux/selectors";
import { SlideIn } from "../animated/SlideIn";
import { HStack, Icon, VStack } from "@gluestack-ui/themed";
import { House } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { setMainDrawerOpen } from "../../redux/slices/appSlice";

export const DrawerContent = (props) => {
  const open = useSelector(getIsMainDrawerOpen);

  const dispatch = useDispatch();

  const menuItems = [
    // { id: "HomeScreen", label: "Home", icon: House },
    // { id: "Profile", label: "Profile" },
    { id: "Settings", label: "Settings" },
    { id: "PrivacyPolicy", label: "Privacy Policy" },
    { id: "TermsOfService", label: "Terms of Service" },
    { id: "Intro", label: "Intro", path: "Intro" },
    { id: "Logout", label: "Logout", path: "Login" },
  ];

  const navigation = useNavigation();

  const onPress = (item) => {
    if (item.path) {
      dispatch(setMainDrawerOpen(false));
      navigation.navigate(item.path);
    }
  };

  console.log("drawerProps", { props });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <SafeAreaView>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
              }}
            />
          </SafeAreaView>

          <Text style={styles.name}>Subodha K.</Text>
          <Text style={styles.userInfo}>subodha@mail.com </Text>
          <Text style={styles.userInfo}>Colombo, Sri Lanka </Text>
        </View>
      </View>

      <View style={styles.body}>
        <VStack gap={10} pt={"$10"}>
          {open &&
            menuItems.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onPress(item);
                  }}
                >
                  <SlideIn
                    key={item.id}
                    style={styles.item}
                    delay={index * 100}
                  >
                    <HStack
                      p={"$2"}
                      px={"$5"}
                      // backgroundColor="white"
                      // borderRadius={"$10"}
                      //  m={"$3"}
                      w={"100%"}
                      gap={10}
                      alignItems="center"
                    >
                      <Icon as={item.icon ?? House} size="xl" />
                      <Text>{item.label}</Text>
                    </HStack>
                  </SlideIn>
                </TouchableOpacity>
              );
            })}
        </VStack>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 700,
    alignItems: "flex-start",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
});
