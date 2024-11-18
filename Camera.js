import {View, StyleSheet, TouchableOpacity,Button} from 'react-native'
import { CameraView, useCameraPermissions } from 'expo-camera'
import React, {useEffect, useRef} from 'react'
import * as MediaLibrary from 'expo-media-library'


const Camera = function() {
    const cameraRef = useRef(null)
    const [permissions, solicitaPermissions] = useCameraPermissions()
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions()

    const tirarFoto = function() {
    cameraRef.current.takePictureAsync()
        .then((foto) => MediaLibrary.saveToLibraryAsync(foto.uri))
        .then()
        .catch ((err) => console.log(err))
    }
    
    useEffect(()=>{solicitaPermissions(), requestMediaPermission()}, [])
    return(<View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Tirar Foto" onPress={tirarFoto} />
         </View>
      </CameraView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Camera
