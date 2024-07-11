import { Drawer } from "react-native-drawer-layout";
import { useDispatch, useSelector } from "react-redux";
import { getIsMainDrawerOpen } from "../../redux/selectors";
import { setMainDrawerOpen } from "../../redux/slices/appSlice";
import { DrawerContent } from "./drawerContent";

export const MainDrawer = ({ children }) => {
  const open = useSelector(getIsMainDrawerOpen);
  const dispatch = useDispatch();

  const setOpen = (isOpen) => {
    dispatch(setMainDrawerOpen(isOpen));
  };

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={DrawerContent}
    >
      {children}
    </Drawer>
  );
};
