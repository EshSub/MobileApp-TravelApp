import { useState } from "react";
import Popover from "react-native-popover-view";
import { Place } from "./place";
import { BORDER_RADIUS, WIDTH } from "../../helpers/constants";

export const PlacePopup = ({ renderPressable, place }) => {
  const [render, setRender] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const onPress = () => {
    setRender(true);
    setOpen(true);
  };

  const renderer = () => {
    return renderPressable({ onPress });
  };

  return (
    <>
      {renderer()}
      {render && (
        <Popover
          isVisible={isOpen}
          onRequestClose={onClose}
          style={{ width: WIDTH }}
          onCloseComplete={() => {
            setRender(false);
          }}
          popoverStyle={{
            borderRadius: BORDER_RADIUS,
            width: WIDTH,
            backgroundColor: "#FFF",
          }}
        >
          <Place place={place}/>
        </Popover>
      )}
    </>
  );
};
