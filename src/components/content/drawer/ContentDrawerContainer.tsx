import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ContentDrawer from './ContentDrawer';
import { TOGGLE_MOBILE_OPEN } from '../state/actions';
import { AppState } from '../../../state/initialState';

export const mapStateToProps = ({
  content: { mobileOpen, haveContent, isLoading }
}: AppState): {
  mobileOpen: boolean;
  haveContent: boolean;
  isLoading: boolean;
} => {
  return {
    mobileOpen,
    haveContent,
    isLoading
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch
): { toggleMobileOpen: () => void } => {
  return {
    toggleMobileOpen: () => dispatch({ type: TOGGLE_MOBILE_OPEN })
  };
};

const DrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentDrawer);
export default DrawerContainer;
