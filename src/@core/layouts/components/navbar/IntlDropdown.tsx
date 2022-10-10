// ** React Imports
import { useContext } from "react";

// ** Third Party Components

import ReactCountryFlag from "react-country-flag";

import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

// ** Internationalization Context

import { IntlContext } from "@src/utility/context/Internationalization";
import { useTranslation } from 'react-i18next';

const IntlDropdown = () => {
  // ** Context
  const intlContext = useContext(IntlContext);
  const { t, i18n } = useTranslation();

  // ** Vars
  const langObj = {
    en: "English",
    vn: "Tiếng việt",
  };

  // ** Function to switch Language
  const handleLangUpdate = (e: any, lang: any) => {
    e.preventDefault();

    i18n.changeLanguage(lang);
    // intlContext.switchLanguage(lang);
  };

  return (
      <UncontrolledDropdown
      href="/"
      tag="li"
      className="dropdown-language nav-item"
    >
      
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link"
        onClick={(e: any) => e.preventDefault()}
      >
        
        <ReactCountryFlag
          className="country-flag flag-icon"
          
          countryCode={i18n.language === "en" ? "us" : i18n.language}
          svg
        />
        
        <span className="selected-language">{langObj[i18n.language]}</span>
      </DropdownToggle>
      
      <DropdownMenu className="mt-0" right>
        
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e: any) => handleLangUpdate(e, "en")}
        >
          
          <ReactCountryFlag className="country-flag" countryCode="us" svg />
          
          <span className="ml-1">English</span>
        </DropdownItem>
        
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e: any) => handleLangUpdate(e, "vn")}
        >
          
          <ReactCountryFlag className="country-flag" countryCode="vn" svg />
          
          <span className="ml-1">Việt Nam</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default IntlDropdown;
