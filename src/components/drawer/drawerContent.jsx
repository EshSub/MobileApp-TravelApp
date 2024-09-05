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
import { getIsMainDrawerOpen, getLastName, gettFirstName, getUser, getUserEmail } from "../../redux/selectors";
import { SlideIn } from "../animated/SlideIn";
import { HStack, Icon, VStack } from "@gluestack-ui/themed";
import { House , Settings , Shield , FileText , PlayCircle, LogOut, AlertTriangle, LogIn} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { setMainDrawerOpen } from "../../redux/slices/appSlice";
import { BACKGROUND_COLOR, USER_LOGOUT } from "../../helpers/constants";
import { VERSION } from "../../helpers/constants";
import { selectAccessToken } from "../../redux/slices/userSlice";
import { useIsAuthenticated } from "../../hooks/auth";

export const DrawerContent = (props) => {
  const open = useSelector(getIsMainDrawerOpen);
  const authenticated = useIsAuthenticated()
  const dispatch = useDispatch();
  console.log({authenticated})
  const menuItems = [
    { id: "Settings", label: "Settings" , path: "Settings" , icon: Settings},
    { id: "PrivacyPolicy", label: "Privacy Policy", path: "PrivacyPolicy" , icon: Shield},
    { id: "TermsOfService", label: "Terms of Service" , icon: FileText},
    { id: "Intro", label: "Intro", path: "Intro", icon: PlayCircle},
    { id: "Emergency", label: "Emergency", path: "Emergency" , icon: AlertTriangle , color: "orange"},
    { id: "Logout", label: "Logout", path: "Login" , icon: LogOut},
    { id: "SignIn", label: "SignIn", path: "Login", icon: LogOut}
  ];

  const navigation = useNavigation();
  const user = useSelector(getUser)
  const onPress = (item) => {
    if (item.path) {
      dispatch(setMainDrawerOpen(false));
      navigation.navigate(item.path);
    }
    if(item.id == "Logout"){
      dispatch({type: USER_LOGOUT})
    }
  };
  const filteredMenuItem = authenticated ? menuItems.slice(0,6) : [...menuItems.slice(0,5), menuItems[6]] ;

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

          { authenticated ? <Text style={styles.name}>{user?.username}</Text> : <Text style={styles.name}>{"Guest"}</Text>}
          <Text style={styles.userInfo}>{""}</Text>
        </View>
      </View>

      <VStack style={styles.body} justifyContent="space-between" flex={1} >
        <VStack gap={10} pt={"$10"}>
          {open &&
            filteredMenuItem?.map((item, index) => {
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
                      <Icon as={item.icon ?? House} size="xl" color={item.color ?? "black"} />
                      <Text style={{color:item.color}}>{item.label}</Text>
                    </HStack>
                  </SlideIn>
                </TouchableOpacity>
              );
            })}
        </VStack>
        <Text style={{textAlign: 'center'}}>{VERSION}</Text>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: BACKGROUND_COLOR,
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
    // color: "#778899",
    fontWeight: "600",
  },
  body: {
    // backgroundColor: "#778899",
    // height: 700,
    // alignItems: "flex-start",
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
