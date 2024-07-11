import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { SharedElement } from "react-navigation-shared-element";

const items = [
  {
    id: "queenmaeve",
    title: "Queen Maeve",
    image: "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    description:
      "Queen Maeve is a long-time member of the Seven; her powers include super-strength, flight, and invulnerability. It is suggested that Queen Maeve was more passionate about the Seven's mission than the other superheroes at one point, but found her spirit broken by the team's disastrous handling of the 9/11 attacks. It is also suggested that the 9/11 debacle is the source of her alcoholism.",
  },
  {
    id: "thedeep",
    title: "The Deep",
    image: "https://lemonicks.com/wp-content/uploads/2023/02/Sigiriya-royal-garden-HL-ASC00170.jpg",
    description:
      'A long-time member of the Seven, The Deep is marketed by Vought-American as the "King of the Seas" and claims he cannot remove his helmet due to an Atlantean curse. The Deep is actually a man in a diving suit. His powers include super-strength, flight, and durability. The Deep is the most mature, civilized member of the team and often bears the brunt of other characters\' contempt, disregard, and racism.',
  },
  {
    id: "starlight",
    title: "Starlight",
    image: "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
    description:
      "Starlight, aka Annie January, is the latest member of the Seven. Her known powers are flight and the ability to project blinding light, though she is also hinted to have super-hearing. Starlight was formerly a member of the Young Americans superhero organization, and a conservative Christian. Upon joining the Seven, she is shocked to discover the other members' true nature. On her first visit, the Homelander gives her the choice of providing him, A-Train, and Black Noir with oral sex, or leaving the group.",
  },
];

const Stack = createSharedElementStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [`item.${item.id}.photo`];
        }}
      />
    </Stack.Navigator>
  );
};

class ListScreen extends React.Component {
  renderItem(item) {
    const { navigation } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.push("Detail", { item })}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image source={item.photoUrl} />
        </SharedElement>
      </TouchableOpacity>
    );
  }
}

// DetailScreen.js
const DetailScreen = (props) => {
  const { item } = props.route.params;
  return (
    <SharedElement id={`item.${item.id}.photo`}>
      <Image source={item.photoUrl} />
    </SharedElement>
  );
};
