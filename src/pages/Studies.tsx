import { useTranslation } from "react-i18next";
import Navbar from "../components/layout/Navbar";
import { Column, SectionPage } from "phosphorus-web";
import { Title } from "../components/text/Title";
import { ButtonIcon, ComponentSize, FlexDirection, Text } from "phosphorus-core";
import { Group } from "@mantine/core";
import { IconBrandGithub, IconBrandThreads } from "@tabler/icons-react";
import Footer from "../components/layout/Footer";

export default function StudiesPage() {

  // Hooks
  const { t } = useTranslation("studies");

  return (
    <>
      <Navbar page="studies" />

      <SectionPage
        style={{ justifyContent: "center", minHeight: "50vh" }}
      >
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
                href="https://www.threads.net/@zaccomode"
              >
                <IconBrandThreads />
              </ButtonIcon>
              <ButtonIcon
                color="black"
                radius={ComponentSize.MD}
                component="a"
                href="https://github.com/zaccomode"
              >
                <IconBrandGithub />
              </ButtonIcon>
            </Group>
          </Column>

          <Column width={{ default: "30%", mobile: "100%" }}>
          </Column>
        </Column.Container>
      </SectionPage>

      <Footer />
    </>
  );
}
