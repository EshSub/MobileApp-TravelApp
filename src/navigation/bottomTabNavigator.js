import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { HomeScreen } from '../views/home';
import { PlaceDetails } from '../views/placeDetails';
import { HomeScreenHeader } from '../components/headers/HomeScreenHeader';
import { PlacesAndActivitiesScreen } from '../views/placesAndActivities';
import { DayPlanner } from '../views/dayPlanner';
import { MainDrawer } from '../components/drawer';
import { BACKGROUND_COLOR } from '../helpers/constants';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Map } from '../views/Map';
import { ChatView } from '../views/chat';
import { ChatList } from '../views/chatList';
import { ChatNavigator } from './chatNavigator';
import { Entypo } from '@expo/vector-icons';
import { MessageCircleIcon } from '@gluestack-ui/themed';
import Profile from '../views/profile';

export const BottomTabNavigator = () => {
  // const navigation = useNavigation()

  // useEffect(() => {
  //   navigation.navigate("Planner")
  // }, []);

  const Tab = AnimatedTabBarNavigator();
  return (
    <Tab.Navigator
      // default configuration from React Navigation
      tabBarOptions={{
        activeTintColor: '#2F7C6E',
        inactiveTintColor: '#222222',
      }}
      appearance={{
        whenActiveShow: 'icon-only',
        whenInactiveShow: 'icon-only',
        tabBarBackground: BACKGROUND_COLOR,
        tabButtonLayout: 'vertical',
        tabBarLabel: '',
        dotSize: 'small',
      }}
    >
      <Tab.Screen
        name='H'
        component={PlacesAndActivitiesScreen}
        options={{
          // headerTransparent: true,
          // header: HomeScreenHeader,
          headerShown: true,
          tabBarIcon: () => <Entypo name='home' size={24} color='black' />,
          // showLabel: false,
        }}
      />
      <Tab.Screen
        name='A'
        component={Map}
        options={{
          headerShown: true,
          label: '',
          tabBarIcon: () => <Entypo name='map' size={24} color='black' />,
        }}
      />
      {/* <Tab.Screen
        name="P"
        component={PlaceDetails}
        options={{ headerTitle: "", tabBarIcon: () => <MessageCircleIcon /> }}
      /> */}
      <Tab.Screen
        name='C'
        component={ChatNavigator}
        options={{
          headerTitle: '',
          tabBarIcon: () => <Entypo name='chat' size={24} color='black' />,
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="D"
        component={DayPlanner}
        options={{ tabBarIcon: () => <HomeIcon /> }}
      /> */}
      <Tab.Screen
        name='D'
        component={Profile}
        options={{
          headerTitle: '',
          tabBarIcon: () => <Entypo name='user' size={24} color='black' />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
