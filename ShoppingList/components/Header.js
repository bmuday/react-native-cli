import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
      />
    </View>
  );
};

Header.defaultProps = {
  title: 'Hello World',
};

const styles = StyleSheet.create({
  header: {height: 60, padding: 15, backgroundColor: 'darkslateblue'},
  text: {color: '#fff', fontSize: 24, textAlign: 'center'},
});

export default Header;
