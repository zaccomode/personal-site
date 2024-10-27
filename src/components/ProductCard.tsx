import { UnstyledButton, GenericButtonProps, Image, Text, StyledFlex, useColors, Flex, Title, useValence, useBreakpoint } from "@valence-ui/core";
import { useState } from "react";

type Props = Omit<GenericButtonProps, "children"> & {
  image: string | ArrayBuffer;
  imageAlt: string;

  title: string;
  description: string;
}

export default function ProductCard(props: Props) {
  const {
    image, imageAlt,
    title, description,
    style,
    ...rest
  } = props;

  const { getHex } = useColors();
  const theme = useValence();
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useBreakpoint();

  const doHover = hovered && !isMobile;

  return (
    <UnstyledButton
      motion={{ onHover: "raise", onTap: "bounce" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}

      style={{
        position: "relative",
        boxShadow: doHover ? theme.defaults.shadow : null,
        ...style
      }}
      {...rest}
    >
      <Image
        src={image}
        alt={imageAlt}
        style={{ aspectRatio: "3.6/2" }}
      />

      <StyledFlex
        style={{
          position: "absolute",
          left: -1, right: -1, bottom: -1, top: -1,
          backgroundColor: `${getHex("permaBlack")}AA`,
          backdropFilter: "blur(10px)",
          opacity: doHover ? 1 : 0,
          transition: "opacity 0.1s ease-in-out",
        }}
      >
        <Flex
          width="100%" height="100%" gap={10} padding={10}
          direction="column" align="center" justify="center"
          style={{
            transform: doHover ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.1s ease-in-out",
          }}
        >
          <Title order={5} align="center" color="permaWhite">
            {title}
          </Title>

          <Text align="center" color="permaWhite">
            {description}
          </Text>
        </Flex>
      </StyledFlex>
    </UnstyledButton>
  )
}