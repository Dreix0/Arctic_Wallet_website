import Image from "next/image";
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
        </div>
        <Image src="/backdrop/banquise_test2.png" alt="image banquise" id="banquise"  width={4000} height={0}/>
        <Image src="/backdrop/bas_banquise_test.png" alt="image banquise" id="bas_banquise"  width={1000} height={0}/>
    </>
  );
});

export default Hero;
