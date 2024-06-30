import Meteors from "../components/meteors";
import Stars from "../components/stars";

import {useTranslations} from 'next-intl';

const Hero = (() => {
  const t = useTranslations('Hero');

  return (
    <>
        <div id="hero">
            <Meteors />
            <Stars />
            <h1>{t("title_1")}<br/>{t("title_2")}</h1>
            <img src="DA/banquise_2.png" alt="image banquise" id="banquise_img_2"/>
            <img src="DA/banquise_1.png" alt="image banquise" id="banquise_img_1"/>
            <img src="DA/banquise_3.png" alt="image banquise" id="banquise_img_3"/>

            <img src="DA/test.jpg" alt="iceberg" id="iceberg" />
            <img src="DA/iceberg_2.jpg" alt="iceberg" id="iceberg_2" />
        </div>
        <img src="DA/bas_banquise.png" alt="image banquise" id="bas_banquise" />
    </>
  );
});

export default Hero;
