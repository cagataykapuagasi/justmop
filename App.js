import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Modal, Router } from 'react-native-router-flux';
import { Home } from './src/screens';
import { colors } from 'res';
import RNBootSplash from 'react-native-bootsplash';
import store from './src/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router
        sceneStyle={styles.scene}
        titleStyle={styles.title}
        tintColor={colors.headerTint}
        headerTintColor={colors.headerTint}>
        <Scene>
          <Scene hideNavBar component={Home} initial key="home" />
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  scene: {
    backgroundColor: colors.background,
  },
  tab: {
    backgroundColor: colors.lightGray,
  },
});
