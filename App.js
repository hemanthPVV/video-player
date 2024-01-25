import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import VideoPlayer from './components/VideoPlayer';

export default function App() {

  return (
    <View style={styles.container}>
      <VideoPlayer videoUri={ 'https://www.w3schools.com/html/mov_bbb.mp4' } />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
