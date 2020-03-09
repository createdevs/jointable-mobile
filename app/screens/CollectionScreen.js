import * as WebBrowser from 'expo-web-browser';
import React, { Component, useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,

} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function CollectionScreen() {
  const [collection, setCollection] = useState({});
  const [isLoading, setLoading]= useState(true);

  //this Hook, you tell React that your component needs to do something after render.
  useEffect(() => {
    async function fetchCollection() {
      const collection = await fetch(`${process.env.MY_ADDRESS}/users/collection/sawtooth`); //eventually replace with ${bbgUsername}
      collection 
      // once the bbg user collection has been retreived, set the collection object to state. 
      .then((games) => setCollection(games))
      .then(() => setLoading(false))
      .catch((error) => {console.error(error);})
    }
    fetchCollection();
  });

    // upon load, while we wait for the bbg fetch request to return, show spinner....
    if (isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          // REQUIRED: data is the source of information for the list
          data={collection}
          // renderItem takes one item from the source and returns a formatted component to render.
          renderItem={({ game }) => <Text>{game.title}</Text>} //TODO: render a syled component for each game in collection
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
        </FlatList>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});
