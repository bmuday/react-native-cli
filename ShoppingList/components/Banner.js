import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: 100, height: 100, borderRadius: 100 / 2},
});

export default Banner;
