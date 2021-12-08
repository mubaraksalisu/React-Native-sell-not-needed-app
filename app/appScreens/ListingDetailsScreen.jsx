import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/pic-1.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Couples Shirt For Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/me-1.jpg")}
            title="Mubarak Salisu"
            subtitle="8 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    marginVertical: 10,
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.black,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
