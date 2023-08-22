import { ComponentSize, Text } from "phosphorus-core";
import { SectionPage } from "phosphorus-web";

import { useTranslation } from "react-i18next"

export default function Footer() {

  // Hooks
  const { t } = useTranslation();

  return (
    <SectionPage
      style={{ justifyContent: "center" }}
    >
      <Text size={ComponentSize.SM}>{t("footer.text")}</Text>
    </SectionPage>
  );
}