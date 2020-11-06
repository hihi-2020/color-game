import React from 'react'
import Sound from 'react-sound';

class InCorrectWithSound extends React.Component {
  render() {
    return (
    <>
      <Sound
        url="/incorrect.mp3"
        playStatus={Sound.status.PLAYING}
        autoLoad={true}
      />
      <div>
        <h1>WRONG!</h1>
      </div>
    </>
    )
  }
}


export default InCorrectWithSound
