import { useRef, useState } from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";

import Woman from "../../../public/icon/woman_icone.json"
import Lock from "../../../public/icon/lock.json"
import Coins from "../../../public/icon/coins.json"

import Data from "../data/data.json"

import Chart from "../components/chart";

import {useTranslations} from 'next-intl';
import Image from "next/image";

const Advantages = (() => {
  const t = useTranslations('Advantages');

  const [safetyDisplay, setSafetyDisplay] = useState("not_selected");
  const [priceDisplay, setPriceDisplay] = useState("selected");
  const [accessDisplay, setAccessDisplay] = useState("not_selected");

  const [data, setData] = useState(Data.ETH5);

  const lockRef = useRef<LottieRefCurrentProps>(null);
  const coinsRef = useRef<LottieRefCurrentProps>(null);
  const womanRef = useRef<LottieRefCurrentProps>(null);

  function changeGraph(e: React.ChangeEvent<HTMLSelectElement>){
    e.preventDefault()
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case 'ETH8':
        setData(Data.ETH8);
        break;
      case 'BTC5':
        setData(Data.BTC5);
        break;
      case 'BTC10':
        setData(Data.BTC10);
        break;
      default:
        setData(Data.ETH5);
    }
  }

  return (
      <div id="advantages_bloc">

        <h1>{t("title")}</h1>

        <div id="advantages_title">
          <div id="safety" className={safetyDisplay} onClick={() => {setSafetyDisplay("selected"); setPriceDisplay("not_selected"); setAccessDisplay("not_selected")}} onMouseEnter={() => {if (lockRef.current) {lockRef.current.goToAndPlay(0);}}}>
            <h2>{t("bloc_title1")}</h2>
            <Lottie animationData={Lock} loop={false} lottieRef={lockRef} className="icone"/>
            <p>{t("bloc_p1")}</p>
            <h3>&lt;</h3>
          </div>
          <div id="price" className={priceDisplay} onClick={() => {setSafetyDisplay("not_selected"); setPriceDisplay("selected"); setAccessDisplay("not_selected")}} onMouseEnter={() => {if (coinsRef.current) {coinsRef.current.goToAndPlay(0);}}}>
            <h2>{t("bloc_title2")}</h2>
            <Lottie animationData={Coins} loop={false} lottieRef={coinsRef} className="icone"/>
            <p>{t("bloc_p2")}</p>
            <h3>&lt;</h3>
          </div>
          <div id="accessibility" className={accessDisplay} onClick={() => {setSafetyDisplay("not_selected"); setPriceDisplay("not_selected"); setAccessDisplay("selected")}} onMouseEnter={() => {if (womanRef.current) {womanRef.current.goToAndPlay(0);}}}>
            <h2>{t("bloc_title3")}</h2>
            <Lottie animationData={Woman} loop={false} lottieRef={womanRef} className="icone"/>
            <p>{t("bloc_p3")}</p>
            <h3>&lt;</h3>
          </div>
        </div>

        <div id="advantages_text">
          <div className={safetyDisplay}>
            <h1>{t("advantage1")}</h1>
            <div className="advantage">
              <div className={"texte"}>
                <h2>{t("advantage1_title1")}</h2>
                <p>{t("advantage1_p1")}</p>
              </div>
              <div className={"image"}><Image src="/animation/offline.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"image"}><Image src="/animation/authentication.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
              <div className={"texte"}>
                <h2>{t("advantage1_title2")}</h2>
                <p>{t("advantage1_p2").split('bold')[0]}<b>{t("advantage1_p2").split('bold')[1]}</b>{t("advantage1_p2").split('bold')[2]}<b>{t("advantage1_p2").split('bold')[3]}</b>{t("advantage1_p2").split('bold')[4]}<b>{t("advantage1_p2").split('bold')[5]}</b>{t("advantage1_p2").split('bold')[6]}</p>
              </div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"texte"}>
                <h2>{t("advantage1_title3")}</h2>
                <p>{t("advantage1_p3")}</p>
              </div>
              <div className={"image"}><Image src="/animation/secure_data.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
            </div>
          </div>

          <div className={priceDisplay}>
            <h1>{t("advantage2")}</h1>
            <div className="advantage">
              <div className={"texte"}>
                <h2>{t("advantage2_title1")}</h2>
                <p>{t("advantage2_p1")}</p>
              </div>
              <div className={"image"}><Image src="/animation/coffee.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"image"}><Image src="/animation/cancel.gif" alt="cancel gif" width={400} height={400} unoptimized/></div>
              <div className={"texte"}>
                <h2>{t("advantage2_title2")}</h2>
                <p>{t("advantage2_p2")}</p>
              </div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"texte"}>
                <h2>{t("advantage2_title3")}</h2>
                <p>{t("advantage2_p3_1")}</p>
                <br/>
                <p>{t("advantage2_p3_2")}</p>
              </div>
              <div className={"image"}><Image src="/animation/payment.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
            </div>
            <div id="graph_param">
              <p>{t("graph_legend")}<select id="performance" onChange={(e) => changeGraph(e)}>
                <option value={"ETH5"}>Ethereum (5 {t("years")})</option>
                <option value={"ETH8"}>Ethereum (8 {t("years")})</option>
                <option value={"BTC5"}>Bitcoin (5 {t("years")})</option>
                <option value={"BTC10"}>Bitcoin (10 {t("years")})</option>
              </select></p>
              <h2>{t("savings")} ${Intl.NumberFormat("en-US").format(data[data.length - 1].ledger - data[data.length - 1].arctic)}</h2>
            </div>
            <div id="graph">
              <Chart data={data}/>
            </div>
          </div>

          <div className={accessDisplay}>
            <h1>{t("advantage3")}</h1>
            <div className="advantage">
              <div className={"texte"}>
                <h2>{t("advantage3_title1")}</h2>
                <p>{t("advantage3_p1")}</p>
              </div>
              <div className={"image"}><Image src="/animation/family.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"image"}><Image src="/animation/world.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
              <div className={"texte"}>
                <h2>{t("advantage3_title2")}</h2>
                <p>{t("advantage3_p2")}</p>
              </div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"texte"}>
                <h2>{t("advantage3_title3")}</h2>
                <p>{t("advantage3_p3")}</p>
              </div>
              <div className={"image"}><Image src="/animation/devices.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
            </div>
          </div>
        </div>

      </div>
  );
});

export default Advantages;
  