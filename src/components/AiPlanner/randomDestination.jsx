import {
  Input,
  InputField,
  VStack,
  TextareaInput,
  Textarea,
  HStack,
  Text,
  Box,
} from "@gluestack-ui/themed";
import { AnimatedText } from "../animated/AnimatedText";
import { headerStyles, subHeaderStyles } from "./styles";
import { Fade } from "../animated/Fade";
import { useState } from "react";
import { GradientButton } from '../common/gradientButton';
import { useSelector } from 'react-redux';
import { getPlaces } from '../../redux/selectors';
import { PlaceCard } from '../common/placeCard';
import { Background } from "../background";

const getRandomObject = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const RandomDestination = () => {
  
  const [destination, setDestination] = useState();
  const places = useSelector(getPlaces);
  const getNewDestination = () => {
    console.log("pressed")
    
    console.log("Fetching places")
    const place = getRandomObject(places);
    

    setDestination(place);
  }

  return (
    <Background>
    <VStack gap={0}>
      <AnimatedText delay={100} style={headerStyles}>
        Lets Go Wild!
      </AnimatedText>
      <AnimatedText delay={500} style={subHeaderStyles}>
        Hungry for adventure but don't know where to go?{'\n'} Let fate decide your next destination.
      </AnimatedText>
      <Fade delay={1000} style={{ marginTop: 40 ,gap: 5 }}>
      {!destination ? (
          <GradientButton title={"Get a Random Destination"} onPress={getNewDestination} />
        ) : (
        
          <>
            <PlaceCard 
              name={destination.place_name} 
              rating={4} // Adjust if needed
              location={destination.place_name} // Adjust if needed
              image={destination.header_image.url}
            />
            <GradientButton title={"Try Again"} onPress={getNewDestination} />
          </>
             )}
      </Fade>
    </VStack>
    </Background>
  );
};
