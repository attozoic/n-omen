import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Drawer from './ContentDrawer';
import { TOGGLE_MOBILE_OPEN } from '../state/actions';
import { AppState } from '../../../state/initialState';

export const mapStateToProps = ({
  content: { mobileOpen }
}: AppState): { mobileOpen: boolean } => {
  return {
    mobileOpen
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch
): { toggleMobileOpen: () => void } => {
  return {
    toggleMobileOpen: () => dispatch({ type: TOGGLE_MOBILE_OPEN })
  };
};

const DrawerContainer = connect(mapStateToProps, mapDispatchToProps)(Drawer);
export default DrawerContainer;
