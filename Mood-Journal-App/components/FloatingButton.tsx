import { TouchableOpacity,Text,StyleSheet,ViewStyle } from "react-native";
import * as Haptics from 'expo-haptics'; // a vibração é colocadad dentro do 
import React from "react";

interface FloatingButtonProps {
    onPress: ()  => void;
    label?: String;
    style?: ViewStyle;
}

export default function FloatingButton({onPress, label = "+", style}:FloatingButtonProps){
    return(
        <TouchableOpacity style={[styles.fab,style]} onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onPress?.();
          }} >
            <Text style={styles.fabText}>{label}</Text>
         
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        bottom:30,
        right: 30,
        backgroundColor: "#007AFF",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset:{ width:0,height:2},
        shadowOpacity:0.3,
        shadowRadius:3,
    },
    fabText:{
        fontSize:30,
        color: "#fff",
    },
})