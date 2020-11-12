import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../../state/initialState';
import MapWrapper, {
  MapWrapperDispatchProps,
  MapWrapperStateProps
} from './MapWrapper';
import { updateCoords } from '../state/actions';

export const mapStateToProps = ({
  content: {
    nameInfo: { countryIds },
    isLoading,
    error
  }
}: AppState): MapWrapperStateProps => {
  return {
    data: {
      countryIds
    },
    isLoading,
    error
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch
): MapWrapperDispatchProps => {
  return {
    updateCoords: (coords: number[]) => dispatch(updateCoords(coords))
  };
};

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(MapWrapper);
export default MapContainer;
