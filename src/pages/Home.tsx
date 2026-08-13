import avatarImage from "../assets/images/avatar.png";
import threaditorImage from "../assets/images/products/threaditor.png";
import valenceImage from "../assets/images/products/valence.png";
import filedropImage from "../assets/images/products/filedrop.png";
import realmixImage from "../assets/images/products/realmix.png";
import wolframImage from "../assets/images/products/wolfram.png";
import betterfuelImage from "../assets/images/products/betterfuel.png";

import {
  Flex,
  FlexCenter,
  Grid,
  IconButton,
  Image,
  Space,
  StyledFlex,
  Text,
  Title,
} from "@valence-ui/core";
import { useTranslation } from "react-i18next";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandThreads,
  IconMail,
} from "@tabler/icons-react";
import ProductCard from "../components/ProductCard";
import ArticleCard from "../components/ArticleCard";
import DevtoolCard from "../components/DevtoolCard";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <>
      <FlexCenter
        innerProps={{
          align: "center",
          width: "100%",
          style: { maxWidth: 500 },
        }}
        style={{
          minHeight: "100vh",
          padding: "40px 15px 15px 15px",
        }}
      >
        <Image
          src={avatarImage}
          alt={t("hero.imageAlt")}
          style={{ background: "none" }}
          width={200}
        />

        <Title align="center">{t("hero.title")}</Title>
        <Text align="center">{t("hero.subtitle")}</Text>

        {/* Socials buttons */}
        <Flex gap={5}>
          <IconButton
            variant="paper"
            color="violet"
            tooltip="@zaccomode"
            component="a"
            href="https://github.com/zaccomode"
            target="_blank"
          >
            <IconBrandGithub />
          </IconButton>

          <IconButton
            variant="paper"
            tooltip="@zaccomode"
            component="a"
            href="https://zaccomode.medium.com"
            target="_blank"
          >
            <IconBrandMedium />
          </IconButton>

          <IconButton
            variant="paper"
            color="blue"
            tooltip="@zaccomode"
            component="a"
            href="https://www.linkedin.com/in/zaccomode/"
            target="_blank"
          >
            <IconBrandLinkedin />
          </IconButton>

          <IconButton
            variant="paper"
            color="pink"
            tooltip="@zaccomode"
            component="a"
            href="https://www.instagram.com/zaccomode/"
            target="_blank"
          >
            <IconBrandInstagram />
          </IconButton>

          <IconButton
            variant="paper"
            tooltip="@zaccomode"
            component="a"
            href="https://threads.net/@zaccomode"
            target="_blank"
          >
            <IconBrandThreads />
          </IconButton>

          <IconButton
            variant="paper"
            color="orange"
            tooltip="isaac@isaacshea.com"
            component="a"
            href="mailto:isaac@isaacshea.com"
            target="_blank"
          >
            <IconMail />
          </IconButton>
        </Flex>

        <Space height={20} />

        {/* Products */}
        <Grid columns={2} width="100%" gap={5}>
          <ProductCard
            image={betterfuelImage}
            imageAlt={t("projects.betterfuel.imageAlt")}
            title={t("projects.betterfuel.name")}
            description={t("projects.betterfuel.description")}
            component="a"
            href="https://betterfuel.isaacshea.com"
            target="_blank"
          />

          <ProductCard
            image={wolframImage}
            imageAlt={t("projects.wolfram.imageAlt")}
            title={t("projects.wolfram.name")}
            description={t("projects.wolfram.description")}
            component="a"
            href="https://wolfram.isaacshea.com"
            target="_blank"
          />

          <ProductCard
            image={threaditorImage}
            imageAlt={t("projects.threaditor.imageAlt")}
            title={t("projects.threaditor.name")}
            description={t("projects.threaditor.description")}
            component="a"
            href="https://threaditor.net"
            target="_blank"
          />

          <ProductCard
            image={filedropImage}
            imageAlt={t("projects.filedrop.imageAlt")}
            title={t("projects.filedrop.name")}
            description={t("projects.filedrop.description")}
            component="a"
            href="https://filedrop.isaacshea.com"
            target="_blank"
          />

          <ProductCard
            image={valenceImage}
            imageAlt={t("projects.valence.imageAlt")}
            title={t("projects.valence.name")}
            description={t("projects.valence.description")}
            component="a"
            href="https://valence.isaacshea.com"
            target="_blank"
          />

          <ProductCard
            image={realmixImage}
            imageAlt={t("projects.realmix.imageAlt")}
            title={t("projects.realmix.name")}
            description={t("projects.realmix.description")}
          />
        </Grid>

        <Space height={20} />

        {/* Writing */}
        <Title align="center" order={2}>
          {t("writing.title")}
        </Title>
        <Text align="center">{t("writing.description")}</Text>

        <Grid columns={2} width="100%" gap={5}>
          <ArticleCard
            title={t("writing.formkit.title")}
            description={t("writing.formkit.description")}
            component="a"
            href="https://zaccomode.medium.com/formkit-on-designing-forms-for-a-living-6b16bc2191ad"
            target="_blank"
          />
        </Grid>

        <Space height={20} />

        {/* Devtools */}
        <Title order={2} family="DM Mono" align="center">
          {t("devtools.title")}
        </Title>
        <Text align="center">{t("devtools.introduction")}</Text>

        <Grid columns={2} width="100%" gap={5}>
          <DevtoolCard
            title={t("devtools.arborist.title")}
            description={t("devtools.arborist.description")}
            component="a"
            href="https://github.com/zaccomode/Arborist"
            target="_blank"
          />

          <DevtoolCard
            title={t("devtools.beautifulShadowsSketch.title")}
            description={t("devtools.beautifulShadowsSketch.description")}
            component="a"
            href="https://github.com/zaccomode/beautiful-shadows-sketch"
            target="_blank"
          />

          <DevtoolCard
            title={t("devtools.gitHubIssuesMCP.title")}
            description={t("devtools.gitHubIssuesMCP.description")}
            component="a"
            href="https://github.com/zaccomode/github-issues-mcp"
            target="_blank"
          />

          <DevtoolCard
            title={t("devtools.upBankMCP.title")}
            description={t("devtools.upBankMCP.description")}
            component="a"
            href="https://github.com/zaccomode/up-bank-mcp"
            target="_blank"
          />
        </Grid>

        <Space height={20} />

        <StyledFlex width="100%" gap={10} direction="column" align="center">
          <Text align="center">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </Text>
          <Text size="xs" align="center">
            {t("footer.joke")}
          </Text>
        </StyledFlex>
      </FlexCenter>
    </>
  );
}
