import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Modal, Router } from 'react-native-router-flux';
import { Home, CardDetail, Search } from './src/screens';
import { colors } from 'res';
import RNBootSplash from 'react-native-bootsplash';
import store from './src/store';
import { Provider } from 'react-redux';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <Router sceneStyle={styles.scene}>
        <Scene>
          <Scene component={Home} initial key="home" title="Anasayfa" />
          <Scene component={CardDetail} key="cardDetail" title="Kartlar" />
          <Scene component={Search} key="search" title="Arama" />
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
});
