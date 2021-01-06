import { connect } from 'react-redux';
import { AppState } from '../../state/initialState';
import Instructions, { InstructionsProps } from './Instructions';

export const mapStateToProps = ({
  content: { firstSearchDone, error }
}: AppState): InstructionsProps => {
  return {
    firstSearchDone,
    error
  };
};

const InstructionsContainer = connect(mapStateToProps)(Instructions);

export default InstructionsContainer;
