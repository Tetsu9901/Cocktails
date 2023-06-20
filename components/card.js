import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import FavBtn from "./FavBtn";
import { useState, useEffect } from "react";
import { GetFavList } from "./Fav";

const Card = ({ navigation}) => {
  
  const [drink, setDrink] = useState([""]);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const fetchDrink = () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDrink(data.drinks);
      })
      .catch((error) => console.error(error));
    }
    fetchDrink();
  }, []);
  
  const goToDetailsScreen = async (item) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${item.idDrink}`
      );
      const data = await response.json();
      navigation.navigate('Details', { item: data.drinks[0] });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
        {drink.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.card} 
              onPress={() => goToDetailsScreen(item)}
            >
              <Image style={styles.cardImage} source={{ uri: item.strDrinkThumb }} />
              <View style={styles.bandeau}>
              <Text style={styles.cardText}>{item.strDrink}</Text>
              <FavBtn setFavList={setFavList} name={item.strDrink} />
              </View>
            </TouchableOpacity>
          );
        })}
        <GetFavList favList={favList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scroll: {
    width: 400,
  },
  bandeau: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    padding: 5,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    margin: "2%",
    marginLeft: "5%",
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    borderRadius: 10,
    width: "95%",
    marginLeft: "2.5%",
    marginTop: "2.5%",
    height: 300,
    resizeMode: "cover",
  },
  fav: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    position: "absolute",
    right: 10,
    top: 10,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 16,
  },

});


export default Card;




