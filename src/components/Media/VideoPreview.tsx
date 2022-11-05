import * as React from 'react'
import type { FC } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Video, AVPlaybackStatus, AVPlaybackStatusError } from 'expo-av'
import { ResizeMode } from 'expo-av'

import { VideoProps } from './types'

export const VideoPreview: FC<VideoProps> = (props) => {
  const video = React.useRef<Video>(null)
  const [status, setStatus] = React.useState<AVPlaybackStatus>()

  const playVideoBtn = () => {
    if (video.current !== null && status !== undefined && status.isLoaded)
      status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
  }
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: props.pickedVideo.uri,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {status !== undefined && status.isLoaded && (
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={playVideoBtn}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default VideoPreview
