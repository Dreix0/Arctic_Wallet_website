import {useTranslations} from 'next-intl';
import Image from 'next/image';

const Footer = (() => {
  const t = useTranslations('Footer');

  return (
      <footer>
        <hr/>
        <div id="footer_content">
          <div>
            <Image src="/logo/logo_fond_bleu.png" alt="Logo Arctic Wallet" width={150} height={60}/>
          </div>
          <div>
            <h2>{t("links_title")}</h2>
            <a href="#presentation">{t("links_presentation")}</a>
            <a href="#advantages_bloc">{t("links_why")}</a>
            <a href="#whitelist_link" className="offset-link">{t("links_whitelist")}</a>
            <a href="#faq_link">{t("links_faq")}</a>
          </div>
          <div>
            <h2>{t("contact_title")}</h2>
            <p>{t("contact_email")}</p>
            <p>{t("contact_tel")}</p>
            <br/>
            <p>{t("contact_message")}</p>
          </div>
        </div>
        <Image src="/DA/bulles.gif" alt="gif de bulles" id="bulles" width={150} height={250}/>
        <Image src="/DA/algue.png" alt="image d'algue" id="algues" width={250} height={250}/>
        <p id="credit">Copyright © 2024. {t("copyright")}</p>
      </footer>
  );
});

export default Footer;
