import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout";

import Link from "../../components/Link";
import { NavigationBar } from "@/components/Navbar/Navbar";
import { Assistance } from "@/components/Assistance/Assistance";
import { Donate } from "@/components/Donate/Donate";
import { Events } from "@/components/Events/Events";
import { Achievements } from "@/components/Achievements/Achievements";
import { Height } from "@mui/icons-material";

const Homepage = () => {
  const { t } = useTranslation(["common", "footer"]);
  const styleBox = {
    height: "190px",
    width: "190px",
    position: "relative",
  };
  const styleEllipse = {
    backgroundColor: "#ff6668",
    borderRadius: "95px",
    height: "190px",
    left: "0",
    position: "absolute",
    top: "95px",
    width: "190px",
    zIndex: "99",
  };
  const styleFrame = {
    backgroundColor: "#e3ffe3",
    height: "220px",
    width: "460px",
    padding: "85px 70px",
    right: "0",
    position: "absolute",
    top: "870px",
    zIndex: "99",
  };
  const styleNews = {
    color: "#5edd6b",
    fontFamily: '"Poppins-Medium", Helvetica',
    fontSize: "45px",
    fontWeight: "500",
    letterSpacing: "0",
    lineHeight: "normal",
  };
  return (
    <div>
      <NavigationBar />
      <Header
        heading={t("h1")}
        title={t("title")}
        headerText={t("headerText")}
        style={{ position: "relative" }}
      />
      <div className="frame" style={styleFrame}>
        <div className="news-media" style={styleNews}>
          News &amp; Media
        </div>
      </div>
      <Achievements />
      <div className="box" style={styleBox}>
        <div className="ellipse" style={styleEllipse} />
      </div>
      <Assistance assistanceText={t("assistanceText")} />
      <Donate />
      <Events />
    </div>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };
