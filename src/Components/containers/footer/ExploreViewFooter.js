import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import React from "react";
import FontAwesomeListItem from "../../presentational/FontAwesomeListItem";
import H3 from "../../presentational/typography/H3";

const ExploreViewFooter = () => {
  return (
    <div className="footer-features-explore">
      <H3 fontFamily={"Poppins-Bold"}>Powered by:</H3>
      <ul
        className="fa-ul list"
        style={{
          "--fa-li-width": "1.6em",
          "--fa-li-margin": "1.5em",
        }}
      >
        <FontAwesomeListItem
          href={"https://react.dev"}
          icon={faCircle}
          transform={"shrink-10"}
          boldContent="React"
          content="to develop an
            interactive and dynamic user interface."
        />
        <FontAwesomeListItem
          href="https://expressjs.com"
          icon={faCircle}
          transform={"shrink-10"}
          boldContent="Express"
          content="to create an
            efficient and flexible server."
        />
        <FontAwesomeListItem
          href="https://graphql.org"
          icon={faCircle}
          transform={"shrink-10"}
          boldContent="GraphQL"
          content="to handle data
            queries and mutations."
        />
        <FontAwesomeListItem
          href="https://www.apollographql.com/why-graphql?utm_term=apollo%20client&utm_campaign=Google_Search_Brand_ApolloGraphQL&utm_source=google&utm_medium=cpc&hsa_acc=6083416509&hsa_cam=20595484542&hsa_grp=170320131024&hsa_ad=702328215329&hsa_src=g&hsa_tgt=kwd-397224226994&hsa_kw=apollo%20client&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwhb60BhClARIsABGGtw-e-m5l3rdg78oGTlh6G54t1aX-kOMUfg2LBsQKoQijV9m7WiOTezMaAgxlEALw_wcB"
          icon={faCircle}
          transform={"shrink-10"}
          boldContent="Apollo Client"
          content="used for
            data fetching from the GraphQL server."
        />
        <FontAwesomeListItem
          href="https://www.mongodb.com"
          icon={faCircle}
          transform={"shrink-10"}
          boldContent="MongoDB"
          content="to securely store
            user data and tasks."
        />
        <FontAwesomeListItem
          href="https://jwt.io"
          icon={faCircle}
          transform={"shrink-10"}
          boldContent="JWT (JSON Web Tokens)"
          content="to
            ensure secure user sessions with robust authentication."
        />
      </ul>
    </div>
  );
};

export default ExploreViewFooter;
