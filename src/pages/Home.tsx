import portrait from "../assets/images/portrait.png";
import filedrop from "../assets/images/filedrop.png";
import realmix from "../assets/images/realmix.png";
import realmixBg from "../assets/images/realmix-bg.png";
import valence from "../assets/images/valence.png";
import valenceBg from "../assets/images/valence-bg.png";

import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";
import { Column, SectionPage } from "phosphorus-web";
import { ButtonIcon, ComponentSize, FlexAlign, FlexDirection, FlexJustify, Text } from "phosphorus-core";
import { Title } from "../components/text/Title";
import { Group, Image } from "@mantine/core";
import { IconBrandInstagram, IconBrandGithub, IconMail, IconBrandThreads } from "@tabler/icons-react";
import { ButtonCard } from "../components/buttons/ButtonCard";
import Footer from "../components/layout/Footer";

export default function HomePage() {

  // Hooks
  const { t } = useTranslation("home");

  return (
    <>
      <Navbar page="home" />

      <SectionPage
        style={{ justifyContent: "center", minHeight: "100vh" }}
      >
        <Column.Container
          height={{ default: "fit-content" }}
          direction={{ default: FlexDirection.Row, mobile: FlexDirection.ColumnReverse }}
        >
          <Column
            width={{ default: "70%", mobile: "100%" }}
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
              <ButtonIcon
                color="black"
                radius={ComponentSize.MD}
                component="a"
                href="https://github.com/zaccomode"
              >
                <IconBrandGithub />
              </ButtonIcon>
              <ButtonIcon
                color="black"
                radius={ComponentSize.MD}
                component="a"
                href="https://www.threads.net/@zaccomode"
              >
                <IconBrandThreads />
              </ButtonIcon>
            </Group>
          </Column>
          <Column
            width={{ default: "30%", mobile: "100%" }}
            align={{ default: FlexAlign.Center }}
            justify={{ default: FlexJustify.Center }}
          >
            <Image
              src={portrait}
              alt={t("hero.images.portrait")}
              radius="md"
              maw={200}
            />
          </Column>
        </Column.Container>

        {/* Project buttons */}
        <Group>
          <ButtonCard
            image={valence}
            alt={t("hero.images.valence")}
            background={valenceBg}

            component="a"
            href="https://github.com/valence-dev/valence-ui"
          />
          <ButtonCard
            image={realmix}
            alt={t("hero.images.realmix")}
            background={realmixBg}

            component="a"
            href="https://realmix.app/"
          />
          <ButtonCard
            image={filedrop}
            alt={t("hero.images.filedrop")}
            backgroundColor="#28B2CB"

            component="a"
            href="https://filedrop.isaacshea.com/"
          />
        </Group>
      </SectionPage>

      <Footer />
    </>
  )
}