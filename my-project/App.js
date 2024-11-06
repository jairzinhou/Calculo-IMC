import { StyleSheet, View } from 'react-native';
import Titulo from './src/components/Titulo';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 100,
  },
});
