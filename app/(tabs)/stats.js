import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from '../components/Task';

const DATA = [
  {
    id: '1',
    title: 'Item 1',
  },
  {
    id: '2',
    title: 'Item 2',
  },
  {
    id: '3',
    title: 'Item 3',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Title</Text>
        <View style={styles.items}>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
          <Task text={'Task 3'} />
        </View>
      </ScrollView>
    </View>
  );
};

{
  /* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 32,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});

export default App;
