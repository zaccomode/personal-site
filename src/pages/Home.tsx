import { Flex, FlexCenter, IconButton, Image, Text, Title } from "@valence-ui/core";
import { useTranslation } from "react-i18next";

import avatarImage from "../assets/images/avatar.png";
import { IconBrandBluesky, IconBrandGithub, IconBrandInstagram, IconBrandThreads, IconMail } from "@tabler/icons-react";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <>
      <FlexCenter
        innerProps={{
          align: "center",
          width: "100%",
          style: { maxWidth: 450 }
        }}
        padding={40}
        style={{ minHeight: "100vh" }}
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
            variant="paper" color="orange"
            tooltip="@zaccomode"
            component="a" href="https://www.instagram.com/zaccomode/" target="_blank"
            >
            <IconBrandInstagram />
          </IconButton>

          <IconButton
            variant="paper" color="green"
            tooltip="isaac_shea@icloud.com"
            component="a" href="mailto:isaac_shea@icloud.com" target="_blank"
          >
            <IconMail />
          </IconButton>
        </Flex>
      </FlexCenter>
    </>
  )
}