import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
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

class CollectionScreen extends Component() {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch(`${process.env.MY_ADDRESS}/users/collection/sawtooth`) //eventually replace with ${bbgUsername}
      .then((games) => 
        this.setState({
          isLoading: false,
          gameCollection: games,
      })
      .catch((error) => {
        console.error(error);
      })
      )
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
    <View style={styles.container}>
      <FlatList
        // data is the source of information for the list
        data={this.state.gameCollection}
        // renderItem takes one item from the source and returns a formatted component to render.
        renderItem={({ game }) => <Text>{game.title}</Text>} //TODO: render a syled component for each game in collection
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
      </FlatList>
    </View>
    );
  };
}

HomeScreen.navigationOptions = {
  title: 'Collection',
};

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


export default CollectionScreen;