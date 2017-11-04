import AbstractExercise from '../AbstractExercise';

export type IState = boolean;

class RepeatSound<Props> extends AbstractExercise<Props, IState> {
  public getInitialState() {
    return false;
  }

  public isCorrect(state: IState) {
    return state;
  }

  public isSubmitDisabled(state: IState) {
    return !state;
  }
}

export default RepeatSound;
