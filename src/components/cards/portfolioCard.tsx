import { Card, Image, MantineTheme, Stack, Sx } from "@mantine/core";
import { Column } from "phosphorus-web";
import { ComponentSize, Text } from "phosphorus-core";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  title: string;
  text: string;
  url?: string;

  imageSrc: string;
  imageAlt: string;
}

export default function PortfolioCard(props: Props) {

  // Hooks
  const isReducedMotion = useReducedMotion();

  // Styles
  const cardStyle: Sx = (theme: MantineTheme) => ({
    backgroundColor: `${theme.colors.black[0]}10`
  })

  return (
    <Column width={{ default: "30%", mobile: "100%" }}>
      <motion.div
        whileHover={{ scale: isReducedMotion || !props.url ? 1 : 1.05 }}
        whileTap={{ scale: isReducedMotion || !props.url ? 1 : 1.025 }}
        transition={{ ease: "backOut" }}
      >
        <Card
          sx={cardStyle}
          component={props.url ? "a" : null}
          href={props.url}
          target={props.url ? "_blank" : null}
        >
          <Card.Section>
            <Image
              src={props.imageSrc}
              alt={props.imageAlt}
            />
          </Card.Section>

          <Stack spacing={2} pt="sm">
            <Text weight={800}>{props.title}</Text>
            <Text size={ComponentSize.XS}>{props.text}</Text>
          </Stack>
        </Card>
      </motion.div>
    </Column>
  )
}