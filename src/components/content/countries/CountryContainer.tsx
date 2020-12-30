import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../../state/initialState';
import Country, { CountryStateProps } from './Country';
import { updateCentroid } from '../state/actions';

export const mapStateToProps = ({
  content: {
    nameInfo: { countries },
    error,
    isLoading
  }
}: AppState): CountryStateProps => {
  return {
    data: {
      countries
    },
    isLoading,
    error
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateCentroid: (centroid: number[]) => dispatch(updateCentroid(centroid))
  };
};

const CountryContainer = connect(mapStateToProps, mapDispatchToProps)(Country);

export default CountryContainer;
