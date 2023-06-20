import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function DetailsScreen({route}) {

    const {item} = route.params;


    const listIngredients = [];
    for (let i = 1; i <= 15; i++) {
        if (item[`strIngredient${i}`] !== null) {
            listIngredients.push(
                <Text style={styles.text} >
                    <Image
                        source={{ uri: `https://www.thecocktaildb.com/images/ingredients/${item[`strIngredient${i}`]}-Small.png` }}
                        style={styles.ingredientImage}
                    />
                    {item[`strIngredient${i}`]} - {item[`strMeasure${i}`]}
                </Text>);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={{ uri: item.strDrinkThumb }}
                style={styles.image}
            />
            <Text style={styles.title}>{item.strDrink}</Text>
            <Text style={styles.subtitle}>Ingredients</Text>
            {listIngredients}
            <Text style={styles.subtitle}>Instructions</Text>
            <Text style={styles.text}>{item.strInstructions}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        marginBottom: 10,
    },
    ingredientImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});

export default DetailsScreen;