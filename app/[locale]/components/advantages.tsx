import {useRef, useState} from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";

import Woman from "../../../public/icon/woman_icone.json"
import Lock from "../../../public/icon/lock.json"
import Coins from "../../../public/icon/coins.json"

import Bitcoin from "../data/Bitcoin.json"
import Ethereum from "../data/Ethereum.json"
import Solana from "../data/Solana.json"

import Chart from "../components/chart";

import {useTranslations} from 'next-intl';
import Image from "next/image";

const Advantages = (() => {
  const t = useTranslations('Advantages');

  const [safetyDisplay, setSafetyDisplay] = useState("not_selected");
  const [priceDisplay, setPriceDisplay] = useState("selected");
  const [accessDisplay, setAccessDisplay] = useState("not_selected");

  const [data, setData] = useState([
    {
        "date": "01/2015",
        "price": 80
    },
    {
        "date": "02/2015",
        "price": 93.03
    },
    {
        "date": "03/2015",
        "price": 89.37
    },
    {
        "date": "04/2015",
        "price": 86.33
    },
    {
        "date": "05/2015",
        "price": 84.14
    },
    {
        "date": "06/2015",
        "price": 96.7
    },
    {
        "date": "07/2015",
        "price": 103.87
    },
    {
        "date": "08/2015",
        "price": 84.03
    },
    {
        "date": "09/2015",
        "price": 86.37
    },
    {
        "date": "10/2015",
        "price": 113.94
    },
    {
        "date": "11/2015",
        "price": 138.4
    },
    {
        "date": "12/2015",
        "price": 157.44
    },
    {
        "date": "01/2016",
        "price": 135.4
    },
    {
        "date": "02/2016",
        "price": 159.71
    },
    {
        "date": "03/2016",
        "price": 152.2
    },
    {
        "date": "04/2016",
        "price": 164.21
    },
    {
        "date": "05/2016",
        "price": 193.65
    },
    {
        "date": "06/2016",
        "price": 245.31
    },
    {
        "date": "07/2016",
        "price": 227.7
    },
    {
        "date": "08/2016",
        "price": 210.12
    },
    {
        "date": "09/2016",
        "price": 222.65
    },
    {
        "date": "10/2016",
        "price": 255.82
    },
    {
        "date": "11/2016",
        "price": 271.85
    },
    {
        "date": "12/2016",
        "price": 352.73
    },
    {
        "date": "01/2017",
        "price": 353.5
    },
    {
        "date": "02/2017",
        "price": 435.44
    },
    {
        "date": "03/2017",
        "price": 395.09
    },
    {
        "date": "04/2017",
        "price": 494.97
    },
    {
        "date": "05/2017",
        "price": 843.31
    },
    {
        "date": "06/2017",
        "price": 908.23
    },
    {
        "date": "07/2017",
        "price": 1055.67
    },
    {
        "date": "08/2017",
        "price": 1733.68
    },
    {
        "date": "09/2017",
        "price": 1596.56
    },
    {
        "date": "10/2017",
        "price": 2362
    },
    {
        "date": "11/2017",
        "price": 3641.85
    },
    {
        "date": "12/2017",
        "price": 5071.08
    },
    {
        "date": "01/2018",
        "price": 3758.5
    },
    {
        "date": "02/2018",
        "price": 3783.58
    },
    {
        "date": "03/2018",
        "price": 2540.3
    },
    {
        "date": "04/2018",
        "price": 3384.93
    },
    {
        "date": "05/2018",
        "price": 2746.95
    },
    {
        "date": "06/2018",
        "price": 2342.85
    },
    {
        "date": "07/2018",
        "price": 2829.99
    },
    {
        "date": "08/2018",
        "price": 2575.3
    },
    {
        "date": "09/2018",
        "price": 2429.36
    },
    {
        "date": "10/2018",
        "price": 2330.76
    },
    {
        "date": "11/2018",
        "price": 1479.07
    },
    {
        "date": "12/2018",
        "price": 1358.13
    },
    {
        "date": "01/2019",
        "price": 1258.47
    },
    {
        "date": "02/2019",
        "price": 1397.38
    },
    {
        "date": "03/2019",
        "price": 1501.99
    },
    {
        "date": "04/2019",
        "price": 1948.12
    },
    {
        "date": "05/2019",
        "price": 3133.47
    },
    {
        "date": "06/2019",
        "price": 3961.04
    },
    {
        "date": "07/2019",
        "price": 3691.35
    },
    {
        "date": "08/2019",
        "price": 3512.82
    },
    {
        "date": "09/2019",
        "price": 3033.15
    },
    {
        "date": "10/2019",
        "price": 3351.07
    },
    {
        "date": "11/2019",
        "price": 2763.06
    },
    {
        "date": "12/2019",
        "price": 2634.84
    },
    {
        "date": "01/2020",
        "price": 3423.01
    },
    {
        "date": "02/2020",
        "price": 3128.13
    },
    {
        "date": "03/2020",
        "price": 2347.83
    },
    {
        "date": "04/2020",
        "price": 3159.36
    },
    {
        "date": "05/2020",
        "price": 3461.71
    },
    {
        "date": "06/2020",
        "price": 3344.77
    },
    {
        "date": "07/2020",
        "price": 4149.53
    },
    {
        "date": "08/2020",
        "price": 4263.32
    },
    {
        "date": "09/2020",
        "price": 3945.48
    },
    {
        "date": "10/2020",
        "price": 5051.64
    },
    {
        "date": "11/2020",
        "price": 7212.12
    },
    {
        "date": "12/2020",
        "price": 10599.32
    },
    {
        "date": "01/2021",
        "price": 12121.96
    },
    {
        "date": "02/2021",
        "price": 16536.02
    },
    {
        "date": "03/2021",
        "price": 21515.31
    },
    {
        "date": "04/2021",
        "price": 21133.29
    },
    {
        "date": "05/2021",
        "price": 13656.24
    },
    {
        "date": "06/2021",
        "price": 12824.49
    },
    {
        "date": "07/2021",
        "price": 15214.17
    },
    {
        "date": "08/2021",
        "price": 17255.98
    },
    {
        "date": "09/2021",
        "price": 16045.14
    },
    {
        "date": "10/2021",
        "price": 22447.45
    },
    {
        "date": "11/2021",
        "price": 20826.69
    },
    {
        "date": "12/2021",
        "price": 16922.47
    },
    {
        "date": "01/2022",
        "price": 14095.6
    },
    {
        "date": "02/2022",
        "price": 15812.61
    },
    {
        "date": "03/2022",
        "price": 16668.19
    },
    {
        "date": "04/2022",
        "price": 13784.9
    },
    {
        "date": "05/2022",
        "price": 11640.6
    },
    {
        "date": "06/2022",
        "price": 7295.78
    },
    {
        "date": "07/2022",
        "price": 8532.14
    },
    {
        "date": "08/2022",
        "price": 7338.73
    },
    {
        "date": "09/2022",
        "price": 7111.4
    },
    {
        "date": "10/2022",
        "price": 7504.37
    },
    {
        "date": "11/2022",
        "price": 6284.27
    },
    {
        "date": "12/2022",
        "price": 6054.88
    },
    {
        "date": "01/2023",
        "price": 8466.86
    },
    {
        "date": "02/2023",
        "price": 8468.83
    },
    {
        "date": "03/2023",
        "price": 10425.15
    },
    {
        "date": "04/2023",
        "price": 10710.15
    },
    {
        "date": "05/2023",
        "price": 9964.7
    },
    {
        "date": "06/2023",
        "price": 11157.13
    },
    {
        "date": "07/2023",
        "price": 10702.94
    },
    {
        "date": "08/2023",
        "price": 9496.49
    },
    {
        "date": "09/2023",
        "price": 9871.93
    },
    {
        "date": "10/2023",
        "price": 12686.72
    },
    {
        "date": "11/2023",
        "price": 13807.93
    },
    {
        "date": "12/2023",
        "price": 15477.35
    },
    {
        "date": "01/2024",
        "price": 15590.11
    },
    {
        "date": "02/2024",
        "price": 22396.08
    },
    {
        "date": "03/2024",
        "price": 26116.98
    },
    {
        "date": "04/2024",
        "price": 22212.03
    },
    {
        "date": "05/2024",
        "price": 24724.98
    },
    {
        "date": "06/2024",
        "price": 22976.4
    },
    {
        "date": "07/2024",
        "price": 23661.69
    },
    {
        "date": "08/2024",
        "price": 21594
    },
    {
        "date": "09/2024",
        "price": 23190.55
    },
    {
        "date": "10/2024",
        "price": 25732.47
    },
    {
        "date": "11/2024",
        "price": 35297.28
    },
    {
        "date": "12/2024",
        "price": 34254.35
    },
    {
        "date": "01/2025",
        "price": 37500.85
    },
    {
        "date": "02/2025",
        "price": 35430.59
    }
]);

  const lockRef = useRef<LottieRefCurrentProps>(null);
  const coinsRef = useRef<LottieRefCurrentProps>(null);
  const womanRef = useRef<LottieRefCurrentProps>(null);

  const [chosenCrypto, setChosenCrypto] = useState("Bitcoin");
  const [chosenDate, setChosenDate] = useState("2015-01");
  const [chosenPrice, setChosenPrice] = useState(80);
  const [totalSaving, setTotalSaving] = useState(Intl.NumberFormat("en-US").format(data[data.length - 1].price));

  function getGraph(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const cryptoData = chosenCrypto === "Bitcoin" ? Bitcoin : chosenCrypto === "Ethereum" ? Ethereum : Solana;
    const [currentMonth, currentYear] = cryptoData[0].date.split("/").map(Number);

    const [chosenYear, chosenMonth] = chosenDate.split("-").map(Number);
    const nbrMonths = (currentYear - chosenYear) * 12 + (currentMonth - chosenMonth + 1);
    let data = cryptoData;
    if(cryptoData.length > nbrMonths){
      data = cryptoData.slice(0,nbrMonths);
    }

    const cryptoPrice = chosenPrice / Number(data[data.length-1].price);
    const newData = [];
    for (let i = data.length - 1; i >= 0; i--) {
      newData.push({
        "date": data[i].date,
        "price": Math.round((Number(data[i].price) * cryptoPrice) * 100) / 100
      });
    }
    setTotalSaving(Intl.NumberFormat("en-US").format(newData[data.length - 1].price));
    console.log(newData);
    setData(newData);
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
                <h2>{t("advantage2_title3")}</h2>
                <p>{t("advantage2_p3_1")}</p>
                <br/>
                <p>{t("advantage2_p3_2")}</p>
              </div>
              <div className={"image"}><Image src="/animation/payment.gif" alt="offline gif" width={400} height={400} unoptimized/></div>
            </div>

            <div id="graph_bloc">
                <form onSubmit={getGraph} id="graph_param">
                    <h2>{t("parameters")}</h2>
                    <label htmlFor="select_crypto">{t("chosenCrypto")}</label>
                    <select onChange={(e) => setChosenCrypto(e.target.value)}>
                    <option value={"Bitcoin"}>Bitcoin</option>
                    <option value={"Ethereum"}>Ethereum</option>
                    <option value={"Solana"}>Solana</option>
                    </select>
                    <label htmlFor="select_date">{t("purchaseDate")}</label>
                    <input type="month" id="select_date" defaultValue={"2015-01"} max={"2025-01"} onChange={(e) => setChosenDate(e.target.value)}/>
                    <label htmlFor="hardwallet_price">{t("purchasePrice")}</label>
                    <input type="number" id="hardwallet_price" defaultValue={80} onChange={(e) => setChosenPrice(Number(e.target.value))}/>
                    <button type="submit">{t("calcul")}</button>
                </form>
                <div id="graph">
                    <h2>Total savings : <br/>${totalSaving}</h2>
                    <Chart data={data}/>
                </div>
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
  