import { useFela } from "react-fela";

const Button = ({
  children,
  fontSize = 1.4,
  type = "button",
  event = null,
  width = "100%",
  fontFamily,
}) => {
  const { css, theme } = useFela({ fontSize, width, fontFamily });

  const rule = ({ fontSize, width }) => ({
    width,
    padding: `1rem 2rem`,
    background: theme.gradients.blueGradient,

    border: "none",
    fontSize: `${fontSize}rem`,
    fontFamily: fontFamily ? fontFamily : "inherit",
    letterSpacing: ".1rem",

    color: theme.colors.whiteBtn,

    ...theme.centerFlex,

    ...theme.buttonStyles,

    "& > :first-child": {
      marginRight: "1rem",
    },
  });

  return (
    <button type={type} onClick={event} className={css(rule)}>
      {children}
    </button>
  );
};

export default Button;
