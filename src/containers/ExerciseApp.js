'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExerciseLayout from '../components/ExerciseLayout';
import exercises from '../components/exercises';
import * as exerciseActions from '../actions/exerciseActions';

const exerciseWrapper = (exercise, state, actions) => {
  const Component = exercises[exercise.component];
  return (
    <Component
      changeAnswer={actions.changeAnswer}
      currentAnswer={state.currentAnswer}
      exerciseComplete={exercise.complete}
      exerciseSuccess={exercise.success}
      {...exercise.props}
    />
  );
};

class ExerciseApp extends React.Component {
  render() {
    const { state, actions } = this.props;
    const section = state.course.sections[state.currentExercise.section];
    const chapter = section.chapters[state.currentExercise.chapter];
    const exercise = chapter.exercises[state.currentExercise.exercise];
    return (
      <ExerciseLayout
        course={state.course}
        currentExerciseComplete={exercise.complete}
        currentExerciseSuccess={exercise.success}
        currentExercise={state.currentExercise}
        currentAnswer={state.currentAnswer}
        nextExercise={actions.nextExercise}
        changeExercise={actions.changeExercise}
        submitExercise={actions.submitExercise}
      >
        {exerciseWrapper(exercise, state, actions)}
      </ExerciseLayout>
    );
  }
}

const mapStateToProps = state => ({
  state: state.exercise
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(exerciseActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseApp);
