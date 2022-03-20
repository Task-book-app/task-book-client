import { useFela } from "react-fela";

const Button = ({
  children,
  fontSize = 1.4,
  type,
  event = null,
  width = "100%",
  fontFamily,
  bg,
  disabled,
}) => {
  const { css, theme } = useFela({ fontSize, width, fontFamily, bg });

  const rule = ({ fontSize, width, fontFamily, bg }) => ({
    width,
    padding: `1rem 2rem`,
    background:
      bg === "danger" ? theme.colors.danger : theme.gradients.blueGradient,

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
    <button
      type={type}
      onClick={event}
      className={css(rule)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
