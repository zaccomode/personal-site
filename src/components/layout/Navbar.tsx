import favicon from "../../assets/images/favicon.png";

import { NavBase } from "phosphorus-web";
import { useTranslation } from "react-i18next";

export default function Navbar() {

  // Hooks 
  const { t } = useTranslation();

  return (
    <NavBase
      backgroundOnScroll
      faviconButtonProps={{
        component: "a",
        href: "/",
        children: "",
      }}
      favicon={favicon}
      typeface={t("name")}
      buttons={[]}
    />
  )
}