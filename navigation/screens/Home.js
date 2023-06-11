import * as React from 'react';
import { View } from 'react-native';
import Card from '../../components/card';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Card/>
        </View>
    );
}

export default HomeScreen;
