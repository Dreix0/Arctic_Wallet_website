import { FlipWords } from "../components/flip_words";
import { MobileFlipWords } from "../components/mobile_flip_words";

import {useTranslations} from 'next-intl';

const Presentation = (() => {
  const t = useTranslations('Presentation');

  const flip_words = JSON.parse(t("flip_words").replace(/`/g, '"'));
  const mobile_flip_words = JSON.parse(t("mobile_flip_words").replace(/`/g, '"'));

  return (
    <div id="presentation">
      <div>
        <h1>{t("title")}<FlipWords words={flip_words} className="flip_words"/>
          <MobileFlipWords words={mobile_flip_words} className="mobile_flip_words"/>.
        </h1>
        <p>{t("paragraph")}</p>
          <a href={"#advantages_bloc"}><button>{t("button")}</button></a>
      </div>
      <img src="presentation/clé_usb_2.jpg" alt="image avec clé USB" id="usb_key"/>
    </div>
  );
});

export default Presentation;
