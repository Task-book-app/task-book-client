import React from "react";
import { useFela } from "react-fela";
import Brand from "../../../presentational/Brand";
import H3 from "../../../presentational/typography/H3";
import BrandSmall from "./BrandSmall";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import SpiralLogoIcon from "../../../presentational/icons/SpiralLogoIcon";
import useMediaQuery from "../../../hooks/useMediaQuery";

const TopBarHome = ({ modus }) => {
  const {
    css,
    theme: {
      shadows: { boxShadow_3 },
      colors: { blue },
      breakpoints: { laptop },
      darkModusBoxes,
      getMediaQuery,
    },
  } = useFela();

  const mediaQueryListener = useMediaQuery(getMediaQuery(laptop));

  const rules = () => ({
    ...darkModusBoxes(modus),
    boxShadow: boxShadow_3,
    padding: "1rem",
  });
  return (
    <>
      <div className={css(rules)}>
        {mediaQueryListener ? (
          <Brand>
            <H3 color={blue}>
              Tasks
              <br />
              Book
            </H3>
          </Brand>
        ) : (
          <BrandSmall>
            <BurgerMenu
              fontSize={3}
              //   onClick={handleShowModal}
            />
            <Link to="/dashboard">
              <div className="brand">
                <SpiralLogoIcon fontSize={4.5} />
                <H3 color={blue}>
                  Tasks
                  <br />
                  Book
                </H3>
              </div>
            </Link>
          </BrandSmall>
        )}
      </div>
    </>
  );
};

export default TopBarHome;
