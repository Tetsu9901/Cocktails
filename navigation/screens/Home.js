import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/card';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scroll}>
            <Card
                navigation={navigation}
            />
        </ScrollView >
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
export default HomeScreen;
