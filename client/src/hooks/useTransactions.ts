import { useEffect, useCallback } from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { api } from "services/api";
import { addTransaction as dispatchAddTransaction } from "actions";
import * as Yup from "yup";

const useTransactions = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const checkTransaction = useCallback(async (data: TransactionProperties) => {
    const schema = Yup.object().shape({
      id: Yup.string().required("Category required!"),
      type: Yup.string().required("Category required!"),
      category: Yup.string().min(3).required("Category required!"),
      value: Yup.number().required("Value required!"),
      title: Yup.string().min(3).required("Title required!"),
      createdAt: Yup.date().default(() => new Date()),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  }, []);

  const addTransactionAPI = useCallback(
    async (data: TransactionProperties) => {
      await api.post("transactions", data).then(async (response) => {
        dispatch(dispatchAddTransaction(response.data.transaction));
      });
    },
    [dispatch]
  );

  const addTransaction = useCallback(
    async (data: TransactionProperties) => {
      await checkTransaction(data);

      addTransactionAPI(data);
    },
    [addTransactionAPI, checkTransaction]
  );

  useEffect(() => {
    api.get("transactions").then(async (response) => {
      return response.data.transactions.map(
        (transition: TransactionProperties) => {
          return dispatch(addTransaction(transition));
        }
      );
    });
  }, [dispatch, addTransaction]);

  return { addTransaction };
};
export default useTransactions;
