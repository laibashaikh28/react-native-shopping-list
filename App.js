import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setitems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    setitems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an Item', [{text: 'Ok'}]);
    } else {
      setitems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
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
