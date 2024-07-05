import { useFela } from "react-fela";
import { Link } from "react-router-dom";

const resetStyles = {
  textDecoration: "none",
  color: "inherit",
  background: "none",
  padding: "0",
  margin: "0",
  border: "none",
  outline: "none",
  display: "inline",
};

const CustomLink = ({ children, to, fontSize }) => {
  const {
    css,
    theme: {
      gradients: { blueGradient },
      shadows: { boxShadow_2 },
      colors: { whiteBtn, greyLight, blue },
      centerFlex,
    },
  } = useFela();
  const rules = () => ({
    fontSize: fontSize ? `${fontSize}rem` : "1.8rem",
    padding: "1rem 2rem",
    background: blueGradient,
    color: whiteBtn,
    letterSpacing: "0.1rem",
    lineHeight: "3.2rem",
    whiteSpace: "nowrap",
    borderRadius: "1.5rem",
    transition: "all 0.05s",
    ...centerFlex,
    "& > :first-child": {
      marginRight: "1rem",
    },
    ":hover": {
      outline: `1px solid ${blue}`,
      cursor: "pointer",
      boxShadow: boxShadow_2,
    },
    ":active": { color: greyLight },
  });
  return (
    <Link to={to} style={resetStyles}>
      <div className={css(rules)}>{children}</div>
    </Link>
  );
};

export default CustomLink;
