import { useContext } from "react";
import { useFela } from "react-fela";
import useDarkMode from "../../hooks/useDarkMode";
import { appContext } from "../../../context/GlobalContext";
import AppLayout from "./AppLayout";
import Alert from "../../presentational/Alert";

const MainLayout = () => {
  const { alertMessage, alertSettings, currentTheme } = useContext(appContext);

  const [mountedComponent] = useDarkMode();

  const {
    css,
    theme: { darkModusLayout },
  } = useFela();

  const rules = () => ({
    ...darkModusLayout(currentTheme),
    height: "100vh",
    "& .container": {
      height: "auto",
      backgroundColor: "inherit",
    },
  });

  if (!mountedComponent) return <div />;

  return (
    <>
      <Alert message={alertMessage} alertSettings={alertSettings} />
      <div className={css(rules)}>
        <div className="container">
          <AppLayout />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
