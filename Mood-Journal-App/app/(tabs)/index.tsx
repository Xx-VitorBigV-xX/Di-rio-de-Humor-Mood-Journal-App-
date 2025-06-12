import { Image } from 'expo-image';
import { Platform, StyleSheet,View} from 'react-native';
import  FloatingButton from '@/components/FloatingButton';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Contanier } from  '@/components/Contanier';
import { CustomAlert } from '@/components/CustomAlert';
import { useState } from 'react';

export default function HomeScreen() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
          <Contanier>
          </Contanier>



        <CustomAlert
          visible={showAlert}
          onClose={() => setShowAlert(false)}
          title="Alerta Personalizado"
          message="Este é um alerta com estilo próprio!"/>
      



      
    </ParallaxScrollView>

          
      <FloatingButton onPress={()=> setShowAlert(true)} />
      


    </>

  );
}


const styles = StyleSheet.create({

  overlay: { //sobre posição
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems:'center',
 },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
