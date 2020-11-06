import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import Age, { AgeProps } from './Age';

export const mapStateToProps = (state: AppState): AgeProps => {
  return {
    data: {
      age: state.content.nameInfo.age
    },
    isLoading: state.content.isLoading,
    error: state.content.error
  };
};

export default connect(mapStateToProps)(Age);
