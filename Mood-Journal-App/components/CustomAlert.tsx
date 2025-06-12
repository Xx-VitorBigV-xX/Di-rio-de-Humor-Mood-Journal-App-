import React,{useState} from "react";
import { Modal,View,StyleSheet,Pressable,Text } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme.web";


//definição da função
export function CustomAlert({visible,onClose,title,message}:{
    visible:boolean;
    onClose:()=> void;
    title: string;
    message: string;
}){
    const colorScheme = useColorScheme() ?? 'light'; //pega o tema do dispositivo
    //retorno dessa função
    return(
        <Modal transparent visible={visible} animationType="fade">
        <Pressable style={styles.overlay} onPress={onClose}>
            <Pressable style={[styles.alertBox,{ backgroundColor: colorScheme === 'dark' ? '#1D3D47' : '#fff' }]} onPress={() => {}}>
            <ThemedText style={styles.title}>{title}</ThemedText>
            <ThemedText style={styles.message}>{message}</ThemedText>
            <Pressable style={styles.button} onPress={onClose}>
                <ThemedText style={styles.buttonText}>Fechar</ThemedText>
            </Pressable>
            </Pressable>
        </Pressable>
        </Modal>


    );
}
//style
    const styles= StyleSheet.create({
        overlay: { //sobre posição
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems:'center',
        },
        alertBox:{
            width: 300,
            borderRadius:12,
            padding:20,
            backgroundColor:'#fff',
            alignItems:'center',
            elevation:4,
        },
        title:{
            fontSize:18,
            fontWeight:'bold',
            marginBottom:8,
        },
        message:{
            fontSize:16,
            marginBottom:16,
            textAlign:'center',
        },
        button:{
            backgroundColor:'#4eadeb',
            paddingHorizontal:20,
            paddingVertical:10,
            borderRadius:8,
        },
        buttonText:{
            color:'#fff',
            fontSize:16,
        },
    })
