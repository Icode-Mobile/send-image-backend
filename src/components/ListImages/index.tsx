import { FlatList, Image, Text } from 'react-native';

import keys from '../../config/keys/index.json';

export const ListImage = ({ data }: { data: Array<string> }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <Image
          source={{
            uri: `http://${keys.IPMachineLocal}:8080/${item}`,
          }}
          defaultSource={{
            uri: `http://${keys.IPMachineLocal}:8080/${item}`,
          }}
          style={{
            width: 100,
            height: 150,
            borderRadius: 10,
            marginHorizontal: 5,
            marginTop: 5,
          }}
        />
      )}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => String(index)}
      style={{
        marginTop: 20,
        marginLeft: 10,
      }}
    />
  );
};
