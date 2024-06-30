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
            <Image src="/backdrop/banquise_2.png" alt="image banquise" id="banquise_img_2" width={1000} height={0}/>
            <Image src="/backdrop/banquise_1.png" alt="image banquise" id="banquise_img_1" width={1000} height={0}/>
            <Image src="/backdrop/banquise_3.png" alt="image banquise" id="banquise_img_3"  width={1000} height={0}/>

            <Image src="/backdrop/test.jpg" alt="iceberg" id="iceberg"  width={1000} height={0}/>
            <Image src="/backdrop/iceberg_2.jpg" alt="iceberg" id="iceberg_2"  width={1000} height={0}/>
        </div>
        <Image src="/backdrop/bas_banquise.png" alt="image banquise" id="bas_banquise"  width={1000} height={0}/>
    </>
  );
});

export default Hero;
