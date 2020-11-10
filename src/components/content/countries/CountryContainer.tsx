import { connect } from 'react-redux';
import { AppState } from '../../../state/initialState';
import Country, { CountryProps } from './Country';

export const mapStateToProps = ({
  content: {
    nameInfo: { countries },
    error,
    isLoading
  }
}: AppState): CountryProps => {
  return {
    data: {
      countries
    },
    isLoading,
    error
  };
};

const CountryContainer = connect(mapStateToProps)(Country);

export default CountryContainer;
