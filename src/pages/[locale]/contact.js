import Link from "../../components/Link";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { NavigationBar } from "@/components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { useTranslation } from "next-i18next";
import { Faq } from "@/components/Faq/Faq";
import { HelpCenter } from "@/components/HelpCenter/HelpCenter";

const Contact = () => {
  const { t } = useTranslation(["contact", "footer"]);

  return (
    <div>
      <NavigationBar />
      <Header
        heading={t("contact:h1")}
        title={t("contact:title")}
        headerText={t("contact:headerText")}
      />
      <HelpCenter />
      <Faq />
    </div>
  );
};

export default Contact;

const getStaticProps = makeStaticProps(["contact", "footer"]);
export { getStaticPaths, getStaticProps };
