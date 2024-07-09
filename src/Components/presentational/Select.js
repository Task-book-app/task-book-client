import React, { useContext, useState, useRef, useEffect } from "react";
import { useFela } from "react-fela";
import { appContext } from "../../context/GlobalContext";
import DropDown from "../containers/dashboard/DropDown";
import ListContainer from "../containers/dashboard/ListContainer";
import ButtonMenu from "./ButtonMenu";
import ChevronIcon from "./icons/ChevronIcon";
import Input from "./Input";

const Select = ({ dropDownValues, onChange, value, setValue, id }) => {
  const { currentTheme } = useContext(appContext);
  const [showDropDown, setShowDropDown] = useState(false);
  const { css, theme } = useFela({ currentTheme });

  const rules = () => ({
    paddingRight: "1rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "0.8rem",
    cursor: "pointer",
    border: showDropDown
      ? "1px solid " + theme.colors.blue
      : "1px solid" +
        (currentTheme === "light"
          ? " rgba(40, 40, 70, 0.2)"
          : " rgba(217, 217, 222, 0.3)"),

    ":hover": {
      cursor: "pointer",
    },
  });

  const toggleButton = useRef(null);

  // function to catch click outside element
  const useOutsideClick = (ref) => {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropDown(false);
        }
      }
      // Adding click event listener
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
  };

  useOutsideClick(toggleButton);

  const itemsDropDown = () =>
    dropDownValues.map((item) => (
      <ButtonMenu
        padding="1rem 2rem"
        fontSize={1.8}
        title={item}
        key={item}
        id={item}
        event={(e) => {
          setValue(e.target.id);
        }}
        onChange={onChange}
      />
    ));

  return (
    <div
      ref={toggleButton}
      className={css(rules)}
      onClick={() => {
        setShowDropDown(!showDropDown);
      }}
    >
      <Input
        id={id}
        type="select"
        name={id}
        disabled={false}
        placeholder="Select"
        cursor="pointer"
        value={value}
        onChange={onChange}
        border="none"
        borderOnFocus="none"
        caretColor="transparent"
      />

      <ChevronIcon showDropDown={showDropDown} fontSize={3.5} />

      {showDropDown && (
        <DropDown width={"100%"} border={"1px solid " + theme.colors.blue}>
          <ListContainer marginBottom={0}>{itemsDropDown()}</ListContainer>
        </DropDown>
      )}
    </div>
  );
};

export default Select;
