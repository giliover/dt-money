import { Dispatch } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { closeNewTransactionModal as dispatchCloseNewTransactionModal } from "actions";

const useModals = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const isNewTransactionModalOpen = useSelector((state: StoreState) => {
    return state.modals.isNewTransactionModalOpen;
  }, shallowEqual);

  const closeNewTransactionModal = () =>
    dispatch(dispatchCloseNewTransactionModal());

  return { isNewTransactionModalOpen, closeNewTransactionModal };
};

export default useModals;
