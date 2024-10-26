import { Flex, FlexCenter, Grid, IconButton, Image, Space, Text, Title } from "@valence-ui/core";
import { useTranslation } from "react-i18next";
import { IconBrandBluesky, IconBrandGithub, IconBrandInstagram, IconBrandThreads, IconMail } from "@tabler/icons-react";

import avatarImage from "../assets/images/avatar.png";
import threaditorImage from "../assets/images/products/threaditor.png";
import valenceImage from "../assets/images/products/valence.png";
import filedropImage from "../assets/images/products/filedrop.png";
import realmixImage from "../assets/images/products/realmix.png";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <>
      <FlexCenter
        innerProps={{
          align: "center",
          width: "100%",
          style: { maxWidth: 500 }
        }}
        style={{
          minHeight: "100vh",
          padding: "40px 15px"
        }}
      >
        <Image
          src={avatarImage}
          alt={t("hero.imageAlt")}
          style={{ background: "none" }}
          width={200}
        />

        <Title align="center">
          {t("hero.title")}
        </Title>
        <Text align="center" size="md">
          {t("hero.subtitle")}
        </Text>

        {/* Socials buttons */}
        <Flex gap={5}>
          <IconButton
            variant="paper"
            tooltip="@zaccomode"
            component="a" href="https://threads.net/@zaccomode" target="_blank"
          >
            <IconBrandThreads />
          </IconButton>

          <IconButton
            variant="paper" color="blue"
            tooltip="@isaacshea.com"
            component="a" href="https://bsky.app/profile/isaacshea.com" target="_blank"
          >
            <IconBrandBluesky />
          </IconButton>

          <IconButton
            variant="paper" color="violet"
            tooltip="@zaccomode"
            component="a" href="https://github.com/zaccomode" target="_blank"
          >
            <IconBrandGithub />
          </IconButton>

          <IconButton
            variant="paper" color="pink"
            tooltip="@zaccomode"
            component="a" href="https://www.instagram.com/zaccomode/" target="_blank"
          >
            <IconBrandInstagram />
          </IconButton>

          <IconButton
            variant="paper" color="orange"
            tooltip="isaac_shea@icloud.com"
            component="a" href="mailto:isaac_shea@icloud.com" target="_blank"
          >
            <IconMail />
          </IconButton>
        </Flex>

        <Space height={10} />

        {/* Products */}
        <Grid columns={2} width="100%" gap={5}>
          <ProductCard
            image={threaditorImage}
            imageAlt={t("projects.threaditor.imageAlt")}
            title={t("projects.threaditor.name")}
            description={t("projects.threaditor.description")}
          />

          <ProductCard
            image={valenceImage}
            imageAlt={t("projects.valence.imageAlt")}
            title={t("projects.valence.name")}
            description={t("projects.valence.description")}
          />

          <ProductCard
            image={filedropImage}
            imageAlt={t("projects.filedrop.imageAlt")}
            title={t("projects.filedrop.name")}
            description={t("projects.filedrop.description")}
          />

          <ProductCard
            image={realmixImage}
            imageAlt={t("projects.realmix.imageAlt")}
            title={t("projects.realmix.name")}
            description={t("projects.realmix.description")}
          />
        </Grid>
      </FlexCenter>
    </>
  )
}