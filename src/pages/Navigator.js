import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Logout() {
  const [language, setState] = useState("en");
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    setState(language === "en" ? "zh" : "en");
  };
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return <div onClick={changeLanguage}>{t("checkout")}</div>;
}

export default Logout;
