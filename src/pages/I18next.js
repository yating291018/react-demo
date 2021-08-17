import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class I18next extends Component {
  componentDidMount() {
    console.log("props", this.props);
  }

  render() {
    const { t } = this.props;
    return <div>{t("home")}</div>;
  }
}

export default withTranslation()(I18next);
