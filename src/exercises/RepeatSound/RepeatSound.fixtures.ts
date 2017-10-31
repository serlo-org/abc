import { map } from 'ramda';

import { Fixtures } from '../helpers';
import { IState } from './RepeatSound';

export default <Props>(
  fixtures: Array<{ name: string; props: Props }>
): Fixtures<Props, IState> =>
  map(
    fixture => ({
      isCorrect: false,
      state: false,
      ...fixture
    }),
    fixtures
  );
