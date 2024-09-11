/**
 * width: 250
 * Height: 250
 * padding: 10
 * title fontsize 25
 * divider of width 2
 * text: 8 lines
 */

import React from "react"
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

const SimpleCard = () :React.JSX.Element =>{
    return (
        <View style ={style.card}>
            {/*title*/}
            <Text>


            </Text>

            {/*divider*/}
            <View>


            </View>

            {/*Subtext*/}
            <Text>
                
            </Text>


        </View>
    );
}

const style = StyleSheet.create({
    card: {
        width: 250,
        height: 250,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '1E2A5E',
    }
});

export default SimpleCard;