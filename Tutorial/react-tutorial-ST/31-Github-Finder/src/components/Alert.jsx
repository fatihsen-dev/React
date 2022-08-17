import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  if (alert) {
    if (alert.type == "error") {
      const err = () => toast.error(`${alert.msg}`);
      err();
    }
    if (alert.type == "success") {
      const err = () => toast.success(`${alert.msg}`);
      err();
    }
  }

  return <Toaster position='bottom-left' reverseOrder={false} />;
};

export default Alert;
