import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";
import { Column, SectionPage } from "phosphorus-web";
import { Title } from "../components/text/Title";
import { ButtonIcon, ComponentSize, FlexDirection, Text } from "phosphorus-core";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";
import { Group } from "@mantine/core";
import PortfolioCard from "../components/cards/portfolioCard";

import filedropImage from "../assets/images/portfolio/filedrop.png";
import realmixImage from "../assets/images/portfolio/realmix.png";
import mmbImage from "../assets/images/portfolio/mmb.png";
import rtftImage from "../assets/images/portfolio/rtft.png";
import Footer from "../components/layout/Footer";

export default function PortfolioPage() {

  // Hooks
  const { t } = useTranslation("portfolio");

  return (
    <>
      <Navbar page="portfolio" />

      <SectionPage style={{ justifyContent: "center", minHeight: "50vh" }}>
        <Column.Container
          height={{ default: "fit-content" }}
          direction={{ default: FlexDirection.Row, mobile: FlexDirection.Column }}
        >
          <Column
            width={{ default: "70%", mobile: "100%" }}
            height={{ default: "fit-content", mobile: "60vh" }}
          >
            {/* Text */}
            <Title>
              {t("hero.title")}
            </Title>
            <Text>
              {t("hero.text")}
            </Text>

            {/* Socials buttons */}
            <Group>
              <ButtonIcon
                color="yellow"
                radius={ComponentSize.MD}
                component="a"
                href="mailto:isaac_shea@icloud.com"
              >
                <IconMail />
              </ButtonIcon>
              <ButtonIcon
                color="black"
                radius={ComponentSize.MD}
                component="a"
                href="https://www.instagram.com/zaccomode/"
              >
                <IconBrandInstagram />
              </ButtonIcon>
            </Group>
          </Column>

          <Column width={{ default: "30%", mobile: "100%" }}>
          </Column>
        </Column.Container>
      </SectionPage>

      <SectionPage style={{ minHeight: "50vh" }}>
        <Column.Container
          height={{ default: "fit-content" }}
          direction={{ default: FlexDirection.Row, mobile: FlexDirection.Column }}
          style={{ flexFlow: "wrap", justifyContent: "flex-start" }}
        >
          <PortfolioCard
            title={t("cards.realmix.title")}
            text={t("cards.realmix.text")}
            url="https://realmix.app"

            imageSrc={realmixImage}
            imageAlt={t("cards.realmix.alt")}
          />
          <PortfolioCard
            title={t("cards.filedrop.title")}
            text={t("cards.filedrop.text")}
            url="https://filedrop.isaacshea.com/"

            imageSrc={filedropImage}
            imageAlt={t("cards.filedrop.alt")}
          />
          <PortfolioCard
            title={t("cards.rtft.title")}
            text={t("cards.rtft.text")}
            url="https://rtftcleaning.com/"

            imageSrc={rtftImage}
            imageAlt={t("cards.rtft.alt")}
          />
          <PortfolioCard
            title={t("cards.mmb.title")}
            text={t("cards.mmb.text")}
            url="https://mmbookkeeping.com.au/"

            imageSrc={mmbImage}
            imageAlt={t("cards.mmb.alt")}
          />
        </Column.Container>
      </SectionPage>

      <Footer />
    </>
  );
}
