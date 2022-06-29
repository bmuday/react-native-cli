import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import Banner from './components/Banner';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [articles, setArticles] = useState([
    {id: 0, text: 'Milk'},
    {id: 1, text: 'Eggs'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Juice'},
  ]);

  const addItem = text => {
    if (!text) {
      Alert.alert('Error, please enter an article', {text: 'Ok'});
    } else {
      setArticles(prevArticles => {
        return [...prevArticles, {id: articles.length, text}];
      });
    }
  };

  const deleteItem = id => {
    setArticles(prevArticles => {
      return prevArticles.filter(article => article.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <Banner />
      <AddItem addItem={addItem} />
      <FlatList
        data={articles}
        renderItem={article => (
          <ListItem item={article.item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
