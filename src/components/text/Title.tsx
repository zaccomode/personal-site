import { useMantineTheme } from "@mantine/core";
import { Text, TextProps } from "phosphorus-core";

export type TitleProps = TextProps & {
  /** H1-H6 ordering. Overridden by the `size` attribute if supplied. */
  order?: 1 | 2 | 3 | 4 | 5 | 6;
};

const ATTR = [
  {
    fontSize: 45,
  },
  {
    fontSize: 35,
  },
  {
    fontSize: 30,
  },
  {
    fontSize: 25,
  },
  {
    fontSize: 23,
  },
  {
    fontSize: 21,
  },
];

export function Title(props: TitleProps) {
  const theme = useMantineTheme();
  const order = (props.order || 1) - 1;

  return (
    <Text
      {...props}
      weight={props.weight || 200}
      family={props.family || theme.headings.fontFamily}
      size={props.size || ATTR[order].fontSize}
    >
      {props.children}
    </Text>
  )
}