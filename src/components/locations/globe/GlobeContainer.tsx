import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import GlobeWrapper, { GlobeWrapperProps } from './GlobeWrapper';

export const mapStateToProps = ({
  content: { isLoading, error },
  locations: { coords }
}: AppState): GlobeWrapperProps => {
  return {
    data: {
      coords
    },
    isLoading,
    error
  };
};

const GlobeContainer = connect(mapStateToProps)(GlobeWrapper);
export default GlobeContainer;
