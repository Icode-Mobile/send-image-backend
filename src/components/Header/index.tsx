import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

import keys from '../../config/keys/index.json';

export const Header = ({ fetchImages }: { fetchImages: Function }) => {
  const handlePickerImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert(
        'Permissão necessária',
        'Permita que sua aplicação acesse as imagens'
      );
    } else {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: false,
        aspect: [4, 4],
        quality: 1,
      });

      if (canceled) {
        ToastAndroid.show('Operação cancelada', ToastAndroid.SHORT);
      } else {
        return;
      }
    }
  };

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          width: 100,
          flexDirection: 'row',
          marginLeft: 20,
        }}
      >
        <View
          style={{
            width: 90,
            height: 40,
          }}
        >
          <Image
            source={require('../../images/google.png')}
            defaultSource={require('../../images/google.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode='contain'
          />
        </View>
        <Text style={{ color: '#111', fontSize: 23, left: 5, top: 2 }}>
          Fotos
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginLeft: 35,
          borderWidth: 0.5,
          borderColor: '#222',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          borderRadius: 10,
        }}
        activeOpacity={0.7}
        onPress={handlePickerImage}
      >
        <Text> Upload </Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: 'https://github.com/Icode-Mobile.png',
        }}
        defaultSource={{
          uri: 'https://github.com/Icode-Mobile.png',
        }}
        style={{
          width: 38,
          height: 38,
          borderRadius: 20,
          right: 15,
        }}
      />
    </View>
  );
};
