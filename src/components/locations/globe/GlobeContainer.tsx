import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../../state/initialState';
import GlobeWrapper, {
  GlobeWrapperStateProps,
  GlobeWrapperDispatchProps
} from './GlobeWrapper';
import { updateCoords } from '../state/actions';

export const mapStateToProps = ({
  content: {
    nameInfo: { countryIds },
    isLoading,
    error
  },
  locations: { coords }
}: AppState): GlobeWrapperStateProps => {
  return {
    data: {
      coords,
      countryIds
    },
    isLoading,
    error
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch
): GlobeWrapperDispatchProps => {
  return {
    updateCoords: (coords: number[]) => dispatch(updateCoords(coords))
  };
};

const GlobeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobeWrapper);
export default GlobeContainer;
