import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import Gender, { GenderProps } from './Gender';

export const mapStateToProps = ({
  content: {
    nameInfo: { maleShare },
    isLoading,
    error
  }
}: AppState): GenderProps => {
  return {
    data: { maleShare },
    isLoading,
    error
  };
};

const GenderContainer = connect(mapStateToProps)(Gender);

export default GenderContainer;
