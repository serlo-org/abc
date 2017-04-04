import { addIndex, forEach, map, toUpper } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';
import { loadSounds } from '../helpers/audio';
import { RoundImageWithButton } from '../Components';

const mapIndexed = addIndex(map);

const highlightStyle = {
  backgroundColor: 'rgba(255,255,255,0.42)',
  borderRadius: 20
};

const ShowWord = ({ image, sounds, text, letter }) => {
  const play = () => {
    const playAll = ([sound, ...rest]) => {
      sound.playAsync();
      sound.setPlaybackFinishedCallback(() => {
        sound.setPositionAsync(0);
        if (rest.length > 0) {
          setTimeout(() => playAll(rest), 1000);
        }
      });
    };
    playAll(sounds);
  };

  const letters = mapIndexed(
    (char, key) => (
      <View
        key={key}
        style={[
          { padding: 5 },
          toUpper(char) === toUpper(letter) ? highlightStyle : null
        ]}
      >
        <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>
          {char}
        </Text>
      </View>
    ),
    text
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00B4D5',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <RoundImageWithButton
        image={image}
        imageSize={200}
        icon={speakerImage}
        buttonSize={40}
        onPress={play}
      />
      <View style={{ flexDirection: 'row' }}>
        {letters}
      </View>
    </View>
  );
};

export default loadSounds(ShowWord);
