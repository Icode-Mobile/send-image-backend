import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { AntDesign } from '@expo/vector-icons';

import keys from './src/config/keys/index.json';

import { Header } from './src/components/Header';

import { ListImage } from './src/components/ListImages';

export default function App() {
  const [images, setImages] = useState<Array<string>>([]);

  async function fetchImages() {
    const response = await fetch(`http://${keys.IPMachineLocal}:8080/image`);
    const json = await response.json();
    setImages(json);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='dark' backgroundColor='#fff' translucent />
      <Header fetchImages={fetchImages} />
      {images.length ? (
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 38,
            }}
          >
            <Text
              style={{
                color: '#222',
                fontSize: 18,
                width: '100%',
                right: 15,
              }}
            >
              Hoje
            </Text>
            <AntDesign name='checkcircleo' size={22} color='#222' />
          </View>

          <ListImage data={images} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(true) + 20,
  },
});
