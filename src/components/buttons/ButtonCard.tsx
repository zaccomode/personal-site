import { BackgroundImage, Image, MantineTheme, Sx, UnstyledButton } from "@mantine/core";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export type ButtonCardProps = {
  /** The image to display in the centre of the button */
  image: string;
  /** Alt text for this button's image */
  alt: string;

  /** A background image or gradient to apply. Overrides `backgroundColor` */
  background?: any;
  /** A fallback background color to apply */
  backgroundColor?: any;

  /** A JS action to take upon clicking the button */
  onClick?: Function;
  /** Polymorphic content to allow this button to become another element */
  component?: any;
  /** Used by react-router-dom */
  to?: string;
  /** Used to link to external sites */
  href?: string;
}

export function ButtonCard(props: ButtonCardProps) {

  // Hooks
  const isReducedMotion = useReducedMotion();

  // States
  const [hover, setHover] = useState(false);

  // Styles
  const buttonStyle: Sx = (theme: MantineTheme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flex: 1,
    width: 250,
    height: 75,

    padding: theme.spacing.md,
    borderRadius: theme.radius.md,

    background: props.background,
    backgroundColor: props.backgroundColor,
    boxShadow: !hover ? "" : `0px 10px 30px 0px rgba(0,0,0,0.2)`,
    transitionDuration: "0.2s"
  })

  return (
    <motion.div
      whileHover={{ scale: isReducedMotion ? 1 : 1.05 }}
      whileTap={{ scale: isReducedMotion ? 1 : 1.025 }}
      transition={{ ease: "backOut" }}
    >
      <BackgroundImage
        src={props.background}
        radius="md"
      >
        <UnstyledButton
          sx={buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}

          component={props.component}
          to={props.to}
          href={props.href}
        >
          <Image
            src={props.image}
            alt={props.alt}
            width={150}
            fit="contain"
          />
        </UnstyledButton>
      </BackgroundImage>
    </motion.div>
  )
}