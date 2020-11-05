import React from 'react'
import Sound from 'react-sound';

class CorrectWithSound extends React.Component {
  render() {
    return (
    <>
      <Sound
        url="correct.wav"
        playStatus={Sound.status.PLAYING}
        autoLoad={true}
      />;
      <div>
        <h1>Correct</h1>
      </div>
    </>
    )
  }
}


export default CorrectWithSound
