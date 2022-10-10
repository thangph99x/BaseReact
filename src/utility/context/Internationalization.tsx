// ** React Imports
import { useState, createContext } from "react";

// ** Intl Provider Import
import { IntlProvider } from "react-intl";

// ** Core Language Data

import messagesEn from "@assets/data/locales/en.json";

import messagesDe from "@assets/data/locales/de.json";

import messagesFr from "@assets/data/locales/fr.json";

import messagesPt from "@assets/data/locales/pt.json";

import messagesVn from "@assets/data/locales/vn.json";

// ** User Language Data

import userMessagesEn from "@src/assets/data/locales/en.json";

import userMessagesDe from "@src/assets/data/locales/de.json";

import userMessagesFr from "@src/assets/data/locales/fr.json";

import userMessagesPt from "@src/assets/data/locales/pt.json";

import userMessagesVn from "@src/assets/data/locales/vn.json";

// ** Menu msg obj
const menuMessages = {
  en: { ...messagesEn, ...userMessagesEn },
  de: { ...messagesDe, ...userMessagesDe },
  fr: { ...messagesFr, ...userMessagesFr },
  pt: { ...messagesPt, ...userMessagesPt },
  vn: { ...messagesVn, ...userMessagesVn },
};

// ** Create Context

const Context = createContext();

const IntlProviderWrapper = ({ children }: any) => {
  // ** States
  const [locale, setLocale] = useState("vn");
  const [messages, setMessages] = useState(menuMessages["vn"]);

  // ** Switches Language
  const switchLanguage = (lang: any) => {
    setLocale(lang);
    
    setMessages(menuMessages[lang]);
  };

  return (
      <Context.Provider value={{ locale, switchLanguage }}>
      
      <IntlProvider
        key={locale}
        locale={locale}
        messages={messages}
        defaultLocale="vn"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export { IntlProviderWrapper, Context as IntlContext };
