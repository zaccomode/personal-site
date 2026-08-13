import {
  GenericButtonProps,
  PrimitiveButton,
  Text,
  Title,
  useBreakpoint,
  useValence,
} from "@valence-ui/core";
import { useState } from "react";

type Props = Omit<GenericButtonProps, "children"> & {
  title: string;
  description: string;
};

export default function DevtoolCard(props: Props) {
  const { title, description, style, ...rest } = props;

  const theme = useValence();
  const [hovered, setHovered] = useState(false);
  const { isMobile } = useBreakpoint();

  const doHover = hovered && !isMobile;

  return (
    <PrimitiveButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variant="paper"
      style={{
        padding: 15,
        position: "relative",
        boxShadow: doHover ? theme.defaults.shadow : null,
        transition: "box-shadow 0.1s ease-in-out",

        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 8,
        height: "100%",
        ...style,
      }}
      {...rest}
    >
      <Title order={3} family="DM Mono">
        {title}
      </Title>
      <Text
        style={{
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </Text>
    </PrimitiveButton>
  );
}
