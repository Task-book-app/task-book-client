import ExploreViewFooter from "./ExploreViewFooter";
import DevelopmentViewFooter from "./DevelopmentViewFooter";
import ContactViewFooter from "./ContactViewFooter";

const Footer = ({ modus }) => {
  return (
    <footer className={`footer footer-${modus}`}>
      <ExploreViewFooter />
      <DevelopmentViewFooter />
      <ContactViewFooter />
    </footer>
  );
};

export default Footer;
// marginTop: "1.2remrem",
// fontSize: "1.2rem",
// padding: "1.5rem 2rem",
// display: "flex",
// justifyContent: "space-between",
// alignItems: "center",
// flexDirection: "column",

// "& > :not(:last-child)": {
//   marginBottom: "4rem",
// },

// [theme.breakpoints.mobile_M]: {
//   flexDirection: "row",
//   "& > :not(:last-child)": {
//     marginBottom: 0,
//   },
// },

// "& .design": {
//   "& p": {
//     "& a": { transition: "all", color: "currentColor" },
//     "& a:visited": {
//       color: "currentColor",
//     },
//     "& a:hover": {
//       color: theme.colors.blue,
//     },
//   },
// },

// "& .copyright": {
//   textAlign: "center",
// },

// "& .external": {
//   listStyle: "none",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   "& > :not(:last-child)": {
//     marginRight: "1rem",
//   },

//   "& li": {
//     "& a": {
//       transition: "all",
//       fill: "currentColor",
//       color: "currentColor",
//     },
//     "& a:visited": {
//       color: "currentColor",
//       fill: "currentColor",
//     },
//     "& a:hover": {
//       color: theme.colors.blue,
//       fill: theme.colors.blue,
//     },
//   },
// },

//   <div className="design">
//   <p>
//     Design by:&nbsp;&nbsp;&nbsp;
//     <a
//       href="https://www.figma.com/@oter"
//       rel="noreferrer"
//       target="_blank"
//     >
//       <i>CupTeam</i>
//     </a>
//   </p>

//   <p>
//     &&&nbsp;&nbsp;&nbsp;
//     <a
//       href="https://www.figma.com/@DraxAtelier"
//       rel="noreferrer"
//       target="_blank"
//     >
//       <i>Darsh Bhavsar</i>
//     </a>
//   </p>
// </div>
// <div className="copyright">
//   <p>Developed by Habid B. Espinosa</p>
//   <p>2024</p>
// </div>
// <ul className="external">
//   <li>
//     <a
//       href="https://habid-badillo.vercel.app/"
//       rel="noreferrer"
//       target="_blank"
//     >
//       <BrowserWebPage fontSize={2} />
//     </a>
//   </li>
//   <li>
//     <a
//       href="https://github.com/Task-book-app/task-book-client"
//       rel="noreferrer"
//       target="_blank"
//     >
//       <GitHubIcon fontSize={2} />
//     </a>
//   </li>
//   <li>
//     <a
//       href="https://www.linkedin.com/in/habidbadillo/"
//       rel="noreferrer"
//       target="_blank"
//     >
//       <LinkedinIcon fontSize={2} />
//     </a>
//   </li>
// </ul>
