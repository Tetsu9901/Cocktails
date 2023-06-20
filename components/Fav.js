import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import FavBtn from './FavBtn';
import { useState, useEffect } from 'react';


export const GetFavList = (favList) => {

    const img = {uri : "https://www.digitalmomblog.com/wp-content/uploads/2023/02/michael-jordan-crying-meme-960x960.jpg.webp"};

    let favListArray = [];
    favListArray = favList;

    console.log(favListArray.favList);

    const [drink, setDrink] = useState([""]);

/*     useEffect(() => {
        const fetchDrinkByIndexFromFavList = () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${favListArray.favList}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDrink(data.drinks);
            })
            .catch((error) => console.error(error));
        }
        fetchDrinkByIndexFromFavList(); 
    }, []); */



    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={img}
            >
            </ImageBackground>   
            <Text style={styles.text}>
                J'arrive a récuperer la liste des favoris mais je n'arrive pas a afficher les cartes
            </Text>
            <Text style={styles.text2}>
                cf le console.log est du coté de GetFavList mais je n'arrive interagir avec la liste
            </Text>
            
        </View>
    );

}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },
    text2: {
        marginTop: 20,
        fontSize: 14,
        textAlign: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
        resizeMode: "cover",
        width: 400,
        height: 500,
    },

});


export default GetFavList;