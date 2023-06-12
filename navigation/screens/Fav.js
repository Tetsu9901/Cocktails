import * as React from 'react';
import { View, Text } from 'react-native';

const listOfFavorites = [];

const showFav = (props) => {
    return (
        <View>
            {listOfFavorites.map((item) => {
                <Text>{item}</Text>
            })}
        </View>
    )
}


function FavScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Favorite Screen</Text>
            {showFav()}
        </View>
    );
}

export default FavScreen;