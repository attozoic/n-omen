import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import GlobeWrapper, { GlobeWrapperProps } from './GlobeWrapper';

export const mapStateToProps = ({
  locations: { coords }
}: AppState): GlobeWrapperProps => {
  return {
    data: {
      coords
    }
  };
};

const GlobeContainer = connect(mapStateToProps)(GlobeWrapper);
export default GlobeContainer;
