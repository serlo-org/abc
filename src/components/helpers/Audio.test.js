import { shallow } from 'enzyme';
import { forEach, xprod } from 'ramda';
import React from 'react';

import { createLoadSounds, createLoadSound } from './Audio';

class Sound {
  constructor() {
    this.loadAsync = jest.fn();
    this.unloadAsync = jest.fn();
    this.stopAsync = jest.fn();
  }
}

const Audio = { Sound };

const LoadSounds = createLoadSounds(Audio);
const LoadSound = createLoadSound(Audio);

describe('LoadSounds', () => {
  let sounds;

  beforeEach(() => {
    sounds = [
      require('../../assets/sounds/a.mp3'),
      require('../../assets/sounds/b.mp3')
    ];
  });

  it('works without passing sounds', done => {
    const render = sounds => {
      expect(sounds).toEqual([]);
      done();
    };

    shallow(<LoadSounds render={render} />);
  });

  it('works without passing a render prop', () => {
    const rendered = shallow(<LoadSounds sounds={sounds} />);

    expect(rendered.isEmptyRender()).toBeTruthy();
  });

  it('passes the sounds down to render prop', done => {
    const render = sounds => {
      expect(sounds).toHaveLength(2);
      expect(sounds[0]).toBeInstanceOf(Audio.Sound);
      expect(sounds[1]).toBeInstanceOf(Audio.Sound);
      done();
    };

    shallow(<LoadSounds sounds={sounds} render={render} />);
  });

  it('loads all passed sounds', done => {
    const render = passedSounds => {
      forEach(([sound, source]) => {
        expect(sound.loadAsync).toHaveBeenCalledWith(source);
      }, xprod(passedSounds, sounds));

      done();
    };

    shallow(<LoadSounds sounds={sounds} render={render} />);
  });

  it('unloads all sounds on unmount', () => {
    let passedSounds;

    const render = sounds => {
      passedSounds = sounds;
    };

    const rendered = shallow(<LoadSounds sounds={sounds} render={render} />);

    rendered.unmount();

    forEach(sound => {
      expect(sound.unloadAsync).toHaveBeenCalled();
    }, passedSounds);
  });

  it('stops all sounds on unmount', () => {
    let passedSounds;

    const render = sounds => {
      passedSounds = sounds;
    };

    const rendered = shallow(<LoadSounds sounds={sounds} render={render} />);

    rendered.unmount();

    forEach(sound => {
      expect(sound.stopAsync).toHaveBeenCalled();
    }, passedSounds);
  });
});

describe('LoadSound', () => {
  let rendered, sound;

  beforeEach(() => {
    sound = require('../../assets/sounds/a.mp3');
  });

  it('works without passing a sound', done => {
    const render = sound => {
      expect(sound).toEqual(null);
      done();
    };

    shallow(<LoadSound render={render} />);
  });

  it('works without passing a render prop', () => {
    const rendered = shallow(<LoadSound sound={sound} />);

    expect(rendered.isEmptyRender()).toBeTruthy();
  });

  it('passes the sound down to render prop', done => {
    const render = sound => {
      expect(sound).toBeInstanceOf(Audio.Sound);
      done();
    };

    shallow(<LoadSound sound={sound} render={render} />);
  });

  it('loads the sound', done => {
    const render = passedSound => {
      expect(passedSound.loadAsync).toHaveBeenCalledWith(sound);
      done();
    };

    shallow(<LoadSound sound={sound} render={render} />);
  });

  it('unloads the sound on unmount', () => {
    let passedSound;

    const render = sound => {
      passedSound = sound;
    };

    rendered = shallow(<LoadSound sound={sound} render={render} />);

    rendered.unmount();

    expect(passedSound.unloadAsync).toHaveBeenCalled();
  });

  it('stops the sound on unmount', () => {
    let passedSound;

    const render = sound => {
      passedSound = sound;
    };

    rendered = shallow(<LoadSound sound={sound} render={render} />);

    rendered.unmount();

    expect(passedSound.stopAsync).toHaveBeenCalled();
  });
});