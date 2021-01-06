import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Search, { SearchDispatchProps, SearchStateProps } from './Search';
import { GET_NAME_INFO, TOGGLE_MOBILE_OPEN } from '../../state/actions';
import { AppState } from '../../state/initialState';

export const mapStateToProps = ({
  content: { isLoading }
}: AppState): SearchStateProps => {
  return {
    isLoading
  };
};

export const mapDispatchToProps = (dispatch: Dispatch): SearchDispatchProps => {
  return {
    getNameInfo: () => dispatch({ type: GET_NAME_INFO }),
    toggleMobileOpen: () => dispatch({ type: TOGGLE_MOBILE_OPEN })
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
