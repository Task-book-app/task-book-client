import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import H4 from "../../presentational/typography/H4";

const ExploreViewFooter = () => {
  return (
    <div className="footer-explore">
      <H4 lineHeight={"2.5"} fontFamily={"Poppins-Bold"}>
        Tools:
      </H4>
      <ul className="fa-ul">
        <li className="list-item">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="list-link"
          >
            <FontAwesomeIcon
              listItem
              icon={faCircle}
              fontSize={"1.6rem"}
              fixedWidth
              pull="left"
            />
            <span className="list-link-content">React</span> to develop an
            interactive and dynamic user interface.
          </a>
        </li>
        <li className="list-item">
          {" "}
          <a
            href="https://expressjs.com"
            target="_blank"
            rel="noreferrer"
            className="list-link"
          >
            <FontAwesomeIcon
              listItem
              icon={faCircle}
              fontSize={"1.6rem"}
              fixedWidth
              pull="left"
            />
            <span className="list-link-content">Express</span> to create an
            efficient and flexible server.
          </a>
        </li>
        <li className="list-item">
          <a
            href="https://graphql.org"
            target="_blank"
            rel="noreferrer"
            className="list-link"
          >
            <FontAwesomeIcon
              listItem
              icon={faCircle}
              fontSize={"1.6rem"}
              fixedWidth
              pull="left"
            />
            <span className="list-link-content">GraphQL</span> to handle data
            queries and mutations.
          </a>
        </li>
        <li className="list-item">
          <a
            href="https://www.apollographql.com/why-graphql?utm_term=apollo%20client&utm_campaign=Google_Search_Brand_ApolloGraphQL&utm_source=google&utm_medium=cpc&hsa_acc=6083416509&hsa_cam=20595484542&hsa_grp=170320131024&hsa_ad=702328215329&hsa_src=g&hsa_tgt=kwd-397224226994&hsa_kw=apollo%20client&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwhb60BhClARIsABGGtw-e-m5l3rdg78oGTlh6G54t1aX-kOMUfg2LBsQKoQijV9m7WiOTezMaAgxlEALw_wcB"
            target="_blank"
            rel="noreferrer"
            className="list-link"
          >
            <FontAwesomeIcon
              listItem
              icon={faCircle}
              fontSize={"1.6rem"}
              fixedWidth
              pull="left"
            />
            <span className="list-link-content">Apollo Client</span> used for
            data fetching from the GraphQL server.
          </a>
        </li>
        <li className="list-item">
          <a
            href="https://www.mongodb.com"
            target="_blank"
            rel="noreferrer"
            className="list-link"
          >
            <FontAwesomeIcon
              listItem
              icon={faCircle}
              fontSize={"1.6rem"}
              fixedWidth
              pull="left"
            />
            <span className="list-link-content">MongoDB</span> to securely store
            user data and tasks.
          </a>
        </li>

        <li className="list-item">
          <a
            href="https://jwt.io"
            target="_blank"
            rel="noreferrer"
            className="list-link"
          >
            <FontAwesomeIcon
              listItem
              icon={faCircle}
              fontSize={"1.6rem"}
              fixedWidth
              pull="left"
            />
            <span className="list-link-content">JWT (JSON Web Tokens)</span> to
            ensure secure user sessions with robust authentication.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ExploreViewFooter;
