import React, { Component, PropTypes } from "react";
import BrandContainer from "../containers/brandContainer";
import { FlatButton } from "/imports/plugins/core/ui/client/components";
import { NotificationContainer } from "/imports/plugins/included/notifications/client/containers";
import CartIconContainer from "/imports/plugins/core/checkout/client/container/cartIconContainer";
import CartPanel from "/imports/plugins/core/checkout/client/templates/cartPanel/container/cartPanelContainer";
import MainDropdown from "/client/modules/accounts/containers/dropdown/mainDropdownContainer";
import LanguageContainer from "/client/modules/i18n/templates/header/containers/i18nContainer";
import CurrencyContainer from "/client/modules/i18n/templates/currency/containers/currencyContainer";

class NavBar extends Component {
  renderLanguage() {
    return (
      <div className="languages hidden-xs">
        <LanguageContainer/>
      </div>
    );
  }

  renderCurrency() {
    return (
      <div className="currencies hidden-xs">
        <CurrencyContainer/>
      </div>
    );
  }

  renderBrandContainer() {
    return (
      <BrandContainer />
    );
  }

  renderSearchButton() {
    if (this.props.isSearchEnabled()) {
      return (
        <div className="search">
          <FlatButton
            icon={this.props.icon}
            kind={this.props.kind}
          />
        </div>
      );
    }
  }

  renderNotificationIcon() {
    if (this.props.hasProperPermission) {
      return (
        <NotificationContainer />
      );
    }
  }

  renderCartContainerAndPanel() {
    return (
      <div className="cart-container">
        <div className="cart">
          <CartIconContainer />
        </div>
        <div className="cart-alert">
          <CartPanel />
        </div>
      </div>
    );
  }

  renderMainDropdown() {
    return (
      <MainDropdown />
    );
  }

  render() {
    return (
      <div className="rui navbar">
        {this.renderBrandContainer()}
        <div className="menu">
          <b> Tags </b>
        </div>
        {this.renderSearchButton()}
        {this.renderNotificationIcon()}
        {this.renderLanguage()}
        {this.renderCurrency()}
        {this.renderMainDropdown()}
        {this.renderCartContainerAndPanel()}
      </div>
    );
  }
}

NavBar.propTypes = {
  hasProperPermission: PropTypes.bool,
  icon: PropTypes.string,
  isSearchEnabled: PropTypes.func,
  kind: PropTypes.string
};

export default NavBar;