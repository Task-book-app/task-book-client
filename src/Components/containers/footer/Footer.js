import ExploreViewFooter from "./ExploreViewFooter";
import DevelopmentViewFooter from "./DevelopmentViewFooter";
import DesignViewFooter from "./DesignViewFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons/faCopyright";

const Footer = ({ modus }) => {
  return (
    <footer className={`footer footer-${modus}`}>
      <div className="footer-features">
        <ExploreViewFooter />
        <DesignViewFooter />
        <DevelopmentViewFooter />
      </div>
      <div className="footer-copyright">
        <p>
          All rights reserved <FontAwesomeIcon icon={faCopyright} /> Habid B.
          Espinosa 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
