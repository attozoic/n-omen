import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../../state/initialState';
import Country, { CountryStateProps } from './Country';
import { updateCentroid, updateCoords } from '../state/actions';

export const mapStateToProps = ({
  content: {
    nameInfo: { countries },
    haveContent
  }
}: AppState): CountryStateProps => {
  return {
    data: {
      countries,
      haveContent
    }
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateCentroid: (centroid: number[]) => dispatch(updateCentroid(centroid)),
    updateCoords: (coords: number[]) => dispatch(updateCoords(coords))
  };
};

const CountryContainer = connect(mapStateToProps, mapDispatchToProps)(Country);

export default CountryContainer;
