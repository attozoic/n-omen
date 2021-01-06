import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import Age, { AgeProps } from './Age';

export const mapStateToProps = ({
  content: {
    nameInfo: { age, name }
  }
}: AppState): AgeProps => {
  return {
    data: {
      age,
      name
    }
  };
};

const AgeContainer = connect(mapStateToProps)(Age);

export default AgeContainer;
