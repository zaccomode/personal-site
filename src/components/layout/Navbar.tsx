import { Button, ButtonVariant, ComponentSize } from "phosphorus-core";
import favicon from "../../assets/images/favicon.png";

import { NavBase } from "phosphorus-web";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Props = {
  page: "home" | "studies" | "portfolio",
}

export default function Navbar(props: Props) {

  // Hooks 
  const { t } = useTranslation();

  return (
    <NavBase
      backgroundOnScroll
      faviconButtonProps={{
        component: Link,
        to: "/",
        children: "",
      }}
      favicon={favicon}
      typeface={t("name")}
      buttons={[
        <Button
          variant={props.page === "home" ? ButtonVariant.Light : null}
          radius={ComponentSize.MD}
          component={Link}
          to="/"
        >
          {t("nav.buttons.home")}
        </Button>,
        <Button
          variant={props.page === "portfolio" ? ButtonVariant.Light : null}
          radius={ComponentSize.MD}
          component={Link}
          to="/portfolio"
        >
          {t("nav.buttons.portfolio")}
        </Button>,
        // <Button
        //   variant={props.page === "studies" ? ButtonVariant.Light : null}
        //   radius={ComponentSize.MD}
        //   component={Link}
        //   to="/studies"
        // >
        //   {t("nav.buttons.studies")}
        // </Button>,
      ]}
    />
  )
}