import React from "react";
import {View,StyleSheet,ViewProps,Text} from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';


export function Contanier({style, ...props}: ViewProps){
    const theme = useColorScheme();
    const backgroundColor = theme === 'dark' ? '#1D3D47' : '#A1CEDC';   
    const moods = [
        { emoji: '😊', label: 'Feliz' },
        { emoji: '😢', label: 'Triste' },
        { emoji: '😡', label: 'Bravo' },
        { emoji: '😴', label: 'Cansado' },
        { emoji: '😨', label: 'Assustado' },
        { emoji: '😍', label: 'Apaixonado' },
        { emoji: '🤔', label: 'Pensativo' },
        { emoji: '😎', label: 'Confiante' },
        { emoji: '😭', label: 'Chorando' },
        { emoji: '😁', label: 'Animado' },
      ];
          
    return (
        //Para cada item (emoji), ele está criando um componente <View> que mostra o emoji e o texto.
       <View style={[styles.container,style]}>
        {moods.map((emoji,index)=>(
            <View key={index} style={[styles.square, { backgroundColor }]}{... props}>
                <Text style={styles.emoji}>{emoji.emoji}</Text>
                <Text style={styles.label}>{emoji.label}</Text>
            </View>
        ))}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 1,
        justifyContent: 'space-between',
    },
    square:{
        width: 100,
        height: 100,
        backgroundColor:'#A1CEDC',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:16,
    },
    emoji: {
        fontSize: 48,
        marginBottom: 8,
      },
      label: {
        fontSize: 16,
        color: '#000', // ou branco se o tema for escuro
      },
      
});