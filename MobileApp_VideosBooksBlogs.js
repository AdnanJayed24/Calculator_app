// Mobile App: Share Videos, Books, and Blogs

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

// Mock data
const videos = ['Video 1', 'Video 2', 'Video 3'];
const books = ['Book 1.pdf', 'Book 2.pdf', 'Book 3.pdf'];
const blogs = [
  { title: 'Blog Post 1', content: 'Content of Blog Post 1' },
  { title: 'Blog Post 2', content: 'Content of Blog Post 2' },
];

// Screens
const VideosScreen = () => (
  <View style={styles.screenContainer}>
    <FlatList
      data={videos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
    />
  </View>
);

const BooksScreen = () => (
  <View style={styles.screenContainer}>
    <FlatList
      data={books}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Button title={item} onPress={() => alert(`Opening ${item}`)} />
      )}
    />
  </View>
);

const BlogsScreen = () => (
  <View style={styles.screenContainer}>
    <FlatList
      data={blogs}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.blogItem}>
          <Text style={styles.blogTitle}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      )}
    />
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Videos" component={VideosScreen} />
        <Tab.Screen name="Books" component={BooksScreen} />
        <Tab.Screen name="Blogs" component={BlogsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  listItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  blogItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  blogTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});
