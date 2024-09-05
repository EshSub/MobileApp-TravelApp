import { Dimensions } from 'react-native';
import Constants from "expo-constants";
const version = Constants.expoConfig.version;

export const VERSION = version+"U8";
export const BACKEND_URL = "https://api.touracross.com";

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const BORDER_RADIUS = 20;
export const BACKGROUND_COLOR = '#F4FEFF';

export const SELECTED_BACKGROUND_COLOR = "#F4FEFF";

export const ROUTES = {
  HOME: 'H',
  PLACES_ACTIVITIES: 'A',
  PLACES: 'P',
  DAY_PLANNER: 'D',
};

export const COLORS = {
  highlightText: 'teal',
};
export const USER_LOGOUT = 'User logout';
