import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const handleChange = textValue => {
    setText(textValue);
  };
  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Add item..."
        onChangeText={handleChange}></TextInput>
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {margin: 50},
  input: {height: 60, padding: 8, fontSize: 16},
  btn: {backgroundColor: '#c2bad8', padding: 9, margin: 5},
  btnText: {color: 'darkslateblue', fontSize: 20, textAlign: 'center'},
});

export default AddItem;
