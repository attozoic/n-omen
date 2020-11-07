import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import Age, { AgeProps } from './Age';

export const mapStateToProps = ({
  content: {
    nameInfo: { age },
    error,
    isLoading
  }
}: AppState): AgeProps => {
  return {
    data: {
      age
    },
    isLoading,
    error
  };
};

const AgeContainer = connect(mapStateToProps)(Age);

export default AgeContainer;
