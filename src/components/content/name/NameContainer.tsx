import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import Name, { NameProps } from './Name';

export const mapStateToProps = ({
  content: {
    nameInfo: { name },
    isLoading,
    error
  }
}: AppState): NameProps => {
  return {
    data: { name },
    isLoading,
    error
  };
};

const NameContainer = connect(mapStateToProps)(Name);
export default NameContainer;
