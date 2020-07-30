/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}
          <View style={styles.body}>
            <Text style={styles.text}>Scan Project</Text>
          </View>
        {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1,

  },

  body: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems : 'center',
    justifyContent: 'center',
  },

  text: {
    color: Colors.black,
    fontSize: 18,
  }
});

export default App;
