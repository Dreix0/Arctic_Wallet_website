import Ripple from "./ripple";
import MobileRipple from "./mobile_ripple";

import { useState } from "react";
import { FormEvent } from "react";

import {useTranslations} from 'next-intl';

const Whitelist = (() => {
  const t = useTranslations('Whitelist');

  const [whitelistMessage, setWhitelistMessage] = useState("");

  async function addEmailToDatabase(e : FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const email = emailInput.value.trim(); // Trim pour enlever les espaces avant et après l'email

    try {
      const response = await fetch(`/api/add-email?email=${encodeURIComponent(email)}`, {
        method: 'GET'
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de l\'email');
      }
  
      const data = await response.json();
      console.log('Réponse de l\'API :', data);
      setWhitelistMessage(t("success"));
    } catch (err) {
      console.error('Erreur :', err);
      setWhitelistMessage(t("error"));
    }
  }

  return (
    <>
      <div id="whitelist_link"></div>
      <div id="whitelist">
          <Ripple />
          <MobileRipple />
          <div id="whitelist_text">
          <h1>{t("title")}</h1>
          <p>{t("paragraph")}</p>
          <form onSubmit={(e) => addEmailToDatabase(e)}>
              <input type="email" id="email" placeholder="email"></input>
              <button type="submit">{t("button")}</button>
          </form>
          {whitelistMessage == t("success") ? <p className="success">{t("success")}</p> : 
          whitelistMessage == t("error") ? <p className="error">{t("error")}</p> : <></>}

          {/* <p>Vous pouvez également suivre nos réseaux sociaux</p> 
          + icones réseaux sociaux
          */}
          </div>
      </div>
    </>
  );
});

export default Whitelist;
