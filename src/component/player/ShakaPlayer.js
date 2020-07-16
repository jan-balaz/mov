import React, {useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import 'shaka-player/dist/controls.css';
import shaka from 'shaka-player/dist/shaka-player.ui'
import PlayerHeader from './PlayerHeader';

const ShakaPlayer = ({title, onClose}) => {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [container, setContainer] = useState(null)

  useEffect(() => {
    const player = new shaka.Player(videoRef.current)

    const uiConfig = {}
    uiConfig['controlPanelElements'] = ['mute', 'volume', 'time_and_duration', 'fullscreen'];
    const ui = new shaka.ui.Overlay(player, containerRef.current, videoRef.current);
    ui.configure(uiConfig);
    
    setContainer(ui.getControls().getControlsContainer())

    player.load('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
    .catch((e) => console.log(e))
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {container && ReactDOM.createPortal(
        <PlayerHeader
          title={title}
          parent={container}
          onClose={onClose}
        />,
        container
      )}
    <video 
      ref={videoRef}
      autoPlay
      muted
      width="100%"
      height="100%"
    />
    </div>
  )

}

export default ShakaPlayer
