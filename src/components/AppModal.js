import { View } from "react-native";
import { deviceHeight, deviceWidth } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";


function AppModal({ children }) {
  const { isAppModalActive } = useSelector((state) => state.app);

  return (
    <>
      {isAppModalActive && (
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            height: deviceHeight,
            width: deviceWidth,
            zIndex: 999999,
            position: "absolute",
          }}
        >
          {children}
        </View>
      )}
    </>
  );
}

export default AppModal;
