import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Form() {
    return (

        <View>
            <View>
                <Text>Altura</Text>
                <TextInput></TextInput>
                placeholder="Ex. 1,75"
                <Text>Peso</Text>
                <TextInput></TextInput>
            </View>

        </View>
    );
}
