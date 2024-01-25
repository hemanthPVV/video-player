import React, { useState, useEffect } from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View, Text } from 'react-native';

const VideoPlayer = ({ videoUri }) => {
  const [videoRef, setVideoRef] = useState(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    if (videoRef) {
      videoRef.playAsync();
    }
  }, [videoRef]);

  return (
    <View style={styles.container}>
      <Video
        ref={(ref) => setVideoRef(ref)}
        source={{ uri: videoUri }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <Text>Status: {status.isPlaying ? 'Playing' : 'Paused'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '600%',
    height: 300,
  },
});

export default VideoPlayer;