import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let DialogsRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody
})(DialogsRedirectComponent);

export default DialogsContainer;
