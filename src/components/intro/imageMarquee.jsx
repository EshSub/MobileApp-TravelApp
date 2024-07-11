import React from "react";
import { VStack, Image, HStack, View } from "@gluestack-ui/themed";
import { Background } from "../background";
import { Marquee } from "@animatereactnative/marquee";

export const ImageMarquee = () => {
  const imagesGroups = [
    [
      "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
      "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
      "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
      "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    ],
    [
      "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
      "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
      "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
      "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    ],
    [
      "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
      "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
      "https://live.staticflickr.com/3165/2379255017_92e6c7a4ae_n.jpg",
      "https://media.funalive.com/article/tb_social/179631617_297809918491520_474324617186027743_n.jpg",
    ],
  ];

  return (
    <Background>
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
                    />
                  </View>
                );
              })}
            </HStack>
          </Marquee>
        ))}
      </VStack>
    </Background>
  );
};
