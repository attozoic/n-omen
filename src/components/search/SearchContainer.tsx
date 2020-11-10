import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Search, { SearchProps } from './Search';
import { GET_NAME_INFO } from '../../state/actions';

export const mapDispatchToProps = (dispatch: Dispatch): SearchProps => {
  return {
    getNameInfo: () => dispatch({ type: GET_NAME_INFO })
  };
};

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
