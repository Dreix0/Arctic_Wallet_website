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
            <Image src="/DA/banquise_2.png" alt="image banquise" id ="banquise_img_2" width={1000} height={0} unoptimized/>
            <Image src="/DA/banquise_1.png" alt="image banquise" id="banquise_img_1" width={1000} height={0} unoptimized/>
            <Image src="/DA/banquise_3.png" alt="image banquise" id="banquise_img_3" width={1000} height={0} unoptimized/>

            <Image src="/DA/test.jpg" alt="iceberg" id="iceberg" width={100} height={100} unoptimized/>
            <Image src="/DA/iceberg_2.jpg" alt="iceberg" id="iceberg_2" width={100} height={100} unoptimized/>
        </div>
        <Image src="/DA/bas_banquise.png" alt="image banquise" id="bas_banquise" width={1000} height={0} unoptimized/>
    </>
  );
});

export default Hero;
