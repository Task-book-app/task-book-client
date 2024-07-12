import { useContext } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../../context/GlobalContext";

const DropDown = ({ children, width, border }) => {
  const {
    css,
    theme: {
      shadows: { boxShadow_3 },
      darkModusBoxes,
    },
  } = useFela();
  const { currentTheme } = useContext(appContext);

  const rules = () => ({
    width,
    border,
    padding: "1rem 0",
    position: "absolute",
    boxShadow: boxShadow_3,
    borderRadius: "1rem",
    ...darkModusBoxes(currentTheme),
    transform: "translateY(100%)",
    bottom: 0,
    right: 0,
    zIndex: 11000,
  });

  return <div className={css(rules)}>{children}</div>;
};

export default DropDown;
