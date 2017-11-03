import { filter, identity } from 'ramda';
import React from 'react';

import loadImage from '../../assets/images';
import loadSounds from '../../assets/sounds';
import { playAll } from '../../helpers/audio';
import { LoadSounds } from '../helpers/Audio';
import RoundImageWithButton from './RoundImageWithButton';

const speakerImage = loadImage['speaker']();

const doNothing = () => {
  // do nothing
};
const WordImageWithSounds = ({
  onPlayStart = doNothing,
  onPlayEnd = doNothing,
  word,
  longSound = false,
  isRepeat = false
}) => {
  const sounds = filter(identity, [
    word.getSound(),
    longSound && word.getLongSound(),
    isRepeat && loadSounds['repeat']()
  ]);

  return (
    <LoadSounds
      sounds={sounds}
      render={sounds => (
        <RoundImageWithButton
          image={word.getImage()}
          imageSize={200}
          icon={speakerImage}
          buttonSize={40}
          onPress={() => {
            onPlayStart();
            playAll(sounds).then(() => {
              onPlayEnd();
            });
          }}
        />
      )}
    />
  );
};

export default WordImageWithSounds;
