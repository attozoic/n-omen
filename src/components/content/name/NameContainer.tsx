import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import Name, { NameProps } from './Name';

export const mapStateToProps = ({
  content: {
    nameInfo: { name }
  }
}: AppState): NameProps => {
  return {
    data: { name }
  };
};

const NameContainer = connect(mapStateToProps)(Name);
export default NameContainer;
