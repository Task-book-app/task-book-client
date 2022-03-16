import React from "react";
import { useFela } from "react-fela";
import ClockIcon from "./icons/ClockIcon";

const rules = () => ({
  display: "flex",
  alignItems: "center",
  fontSize: "2.3rem",
  lineHeight: "3.4rem",
  letterSpacing: "0.1em",
  "& > :not(:last-child)": {
    marginRight: "1.2rem",
  },
});

const Clock = ({ time, setTime }) => {
  // const [time, setTime] = useState(new Date().toLocaleTimeString());

  const { css } = useFela();

  // useEffect(() => {
  //   const timeId = setInterval(
  //     () => setTime(new Date().toLocaleTimeString()),
  //     1000
  //   );
  // });

  return (
    <div className={css(rules)}>
      <ClockIcon fontSize={2.3} />
      <p>{time}</p>
    </div>
  );
};

export default Clock;
