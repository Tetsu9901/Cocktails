import * as React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { GetFavList } from '../../components/Fav';

function Favorites({ navigation }) {
    return (
    <View style={styles.container}>
            <GetFavList />
    </View >

    );
}

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
    });

export default Favorites;
