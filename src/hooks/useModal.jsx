import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../features/utils/utilsSlice";

function useModal() {
  const { modal } = useSelector((state) => state.utils);
  const dispatch = useDispatch();

  function onHandleModal(state) {
    dispatch(handleModal(state));
  }

  return {
    modal,
    onHandleModal,
  };
}

export default useModal;
