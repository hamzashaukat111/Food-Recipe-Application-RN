import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
// import Scan from "../screens/Scan";
import Scan from "../../screens/Scan";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
     


        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SCAN"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Scan");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
         <MenuButton
          title="REGISTER"
          source={require("../../../assets/icons/reg.png")}
          onPress={() => {
          navigation.navigate("Signup");
            navigation.closeDrawer();
          }}
        />

<MenuButton
          title="WELCOME"
          source={require("../../../assets/icons/home1.png")}
          onPress={() => {
          navigation.navigate("Welcome");
            navigation.closeDrawer();
          }}
        />

      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
