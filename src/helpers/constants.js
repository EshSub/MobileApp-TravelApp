import { Dimensions } from 'react-native';

export const VERSION = "v1.0.0";
export const BACKEND_URL = "https://api.touracross.com";

export const HEIGHT = Dimensions.get('window').height;
export const WIDTH = Dimensions.get('window').width;

export const BORDER_RADIUS = 20;
export const BACKGROUND_COLOR = '#F4FEFF';

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
