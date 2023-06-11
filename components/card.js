import * as React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

const renderCocktail = ({ item }) => (
    <TouchableOpacity key={item.idDrink} >
      <Image
        source={{ uri: item.strDrinkThumb }}
      />
      <Text >{item.strDrink}</Text>
    </TouchableOpacity>
  );

const Card = () => {

    const [drink, setDrink] = useState([""]);

    useEffect(() => {
        const fetchDrink = () => {
            fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDrink(data.drinks);
            })
            .catch((error) => console.error(error));
        }
        fetchDrink();
    }, []);

    return (
        <View>
          <FlatList
            data={drink}
            renderItem={renderCocktail}
            keyExtractor={(item) => item.idDrink}
            numColumns={2}
            contentContainerStyle={styles.container}
          />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    FlatList: {
        flex: 1,
        backgroundColor: "#fff",
    },
});


export default Card;



  
