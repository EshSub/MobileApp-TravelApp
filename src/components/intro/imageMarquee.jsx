import React from "react";
import { VStack, Image, HStack, View } from "@gluestack-ui/themed";
import { Background } from "../background";
import { Marquee } from "@animatereactnative/marquee";
import { useSelector } from "react-redux";
import { getPlaces } from "../../redux/selectors";

export const ImageMarquee = () => {

  const places = useSelector(getPlaces)

  const images = places.map((place) => place.images.map(i => i.url)).flat();

  const imagesGroups = [
    images.slice(0, 5),
    images.slice(5, 10),
    images.slice(10, 15),
    // [
    //   "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
    //   "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    //   "https://upload.wikimedia.org/wikipedia/commons/4/4c/Beauty_of_Sigiriya_by_Binuka.jpg",
    //   "https://www.storiesbysoumya.com/wp-content/uploads/2021/11/sigiriya-rock-fortress.jpg",
    // ],
    // [
    //   "https://www.talesofceylon.com/wp-content/uploads/2019/10/Art-Sculpture-and-Poetry-800x1000.jpg",
    //   "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    //   "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
    //   "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    // ],
    // [
    //   "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
    //   "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    //   "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
    //   "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    // ],
  ];

  return (
    // <Background>
      <VStack
        justifyContent="center"
        alignItems="flex-start"
        space="sm"
        // p={"$6"}
        pt={"$10"}
      >
        {imagesGroups.map((images, index) => (
          <Marquee key={index} speed={0.5 + Math.random()/2}>
            <HStack translateX={100}>
              {images.map((image, i) => {
                const isEdge = i == 0 || i == images.length - 1;
                const width = isEdge && index % 2 == 0 ? 100 : 100;
                return (
                  <View style={{ borderRadius: 10, backgroundColor: 'red', overflow: 'hidden' }} mx={"$1"} >
                    <Image
                      key={`${index}-${i}`}
                      source={{ uri: image }}
                      height={100}
                      width={width + Math.random() * 100}
                      alt="homePage"
                      resizeMethod="center"
                      style={{backgroundColor: 'white'}}
                    />
                  </View>
                );
              })}
            </HStack>
          </Marquee>
        ))}
      </VStack>
    // </Background>
  );
};
