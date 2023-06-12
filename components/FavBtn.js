import * as React from 'react';
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import { useState } from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';


const FavBtn = ({setFavList, name}) => {

    
    const [isFav, setIsFav] = useState(false);
    
    const currentlyFav = <Iconicons name={'heart'} size={30} color={'red'} />;
    const notFav = <Iconicons name={'heart-outline'} size={30} color={'lightgrey'} />;
    
    const addToFavList = () => {
        console.log(name);
        if(isFav) removeFromFavList(
        );
        else setFavList( previousState => [...previousState,name]);
        setIsFav(!isFav);
    }
    const removeFromFavList = () => {
        setIsFav(!isFav);
        setFavList( previousState => previousState.filter(item => item !== name));
    }
    
    return (
        <TouchableHighlight
            onPress={() => addToFavList()}
        >
            <View>
                {isFav ? currentlyFav : notFav}
            </View>
        </TouchableHighlight>
    );
}

export default FavBtn;