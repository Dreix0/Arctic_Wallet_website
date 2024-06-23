"use client"

import { useRef, useState } from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import Link from "next/link";

import Woman from "../public/icon/woman_icone.json"
import Lock from "../public/icon/lock.json"
import Coins from "../public/icon/coins.json"

import Meteors from "./components/meteors";
import Stars from "./components/stars";
import Ripple from "./components/ripple";
import Chart from "./components/chart";
import MobileRipple from "./components/mobile_ripple";
import { FlipWords } from "./components/flip_words";

import Data from "./data/data.json"

export default function Home() {

  const [safetyDisplay, setSafetyDisplay] = useState("not_selected");
  const [priceDisplay, setPriceDisplay] = useState("selected");
  const [accessDisplay, setAccessDisplay] = useState("not_selected");

  const [displayResponse, setDisplayResponse] = useState(0);

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
    <main>

      <nav>
        <img src="logo/logo_fond_bleu_blanc.png" alt="Logo avec fond bleu et blanc"/>
        <button>Click Here</button>
      </nav>

      <div id="header">
        <Meteors />
        <Stars />
        <h1>Sécurisez vos cryptomonnaies de manière simple,<br/>dès 2€ par mois</h1>
        <img src="DA/banquise_2.png" alt="image banquise" id="banquise_img_2"/>
        <img src="DA/banquise_1.png" alt="image banquise" id="banquise_img_1"/>
        <img src="DA/banquise_3.png" alt="image banquise" id="banquise_img_3"/>

        <img src="DA/test.jpg" alt="iceberg" id="iceberg" />
        <img src="DA/iceberg_2.jpg" alt="iceberg" id="iceberg_2" />
      </div>
      <img src="DA/bas_banquise.png" alt="image banquise" id="bas_banquise" />

      <div id="presentation">
        <div>
          <h1>Stockez vos cryptomonnaies en toute sécurité sur votre propre <FlipWords words={["clé USB", "carte SD", "puce NFC", "stockage externe"]} className="flip_words"/></h1>
          <p>Pour seulement 2€ par mois, notre service de hardwallet par abonnement vous permet de protéger vos cryptomonnaies en utilisant une clé USB, une carte SD ou tout autre support de stockage externe que vous possédez déjà. 
            Gardez le contrôle total de vos actifs numériques grâce à notre solution de self-custody sécurisée, et simplifiez la sécurité de vos cryptomonnaies avec notre service accessible à tous.</p>
            <Link href={"#advantages_bloc"}><button>En savoir plus</button></Link>
        </div>
        <img src="presentation/clé_usb_2.jpg" alt="image avec clé USB" id="usb_key"/>
      </div>

      <div id="advantages_bloc">

        <h1>Pourquoi utiliser Arctic Wallet ?</h1>

        <div id="advantages_title">
          <div id="safety" className={safetyDisplay} onClick={() => {setSafetyDisplay("selected"); setPriceDisplay("not_selected"); setAccessDisplay("not_selected")}} onMouseEnter={() => {if (lockRef.current) {lockRef.current.goToAndPlay(0);}}}>
            <h2>Sécurité</h2>
            <Lottie animationData={Lock} loop={false} lottieRef={lockRef} className="icone"/>
            <p>Stockez vos cryptomonnaies et autres actifs numériques en toute sécurité</p>
            <h3>&lt;</h3>
          </div>
          <div id="price" className={priceDisplay} onClick={() => {setSafetyDisplay("not_selected"); setPriceDisplay("selected"); setAccessDisplay("not_selected")}} onMouseEnter={() => {if (coinsRef.current) {coinsRef.current.goToAndPlay(0);}}}>
            <h2>Coût</h2>
            <Lottie animationData={Coins} loop={false} lottieRef={coinsRef} className="icone"/>
            <p>La solution hardwallet la moins coûteuse du marché</p>
            <h3>&lt;</h3>
          </div>
          <div id="accessibility" className={accessDisplay} onClick={() => {setSafetyDisplay("not_selected"); setPriceDisplay("not_selected"); setAccessDisplay("selected")}} onMouseEnter={() => {if (womanRef.current) {womanRef.current.goToAndPlay(0);}}}>
            <h2>Accessibilité</h2>
            <Lottie animationData={Woman} loop={false} lottieRef={womanRef} className="icone"/>
            <p>Achetez, vendez et transférez facilement vos actifs partout dans le monde</p>
            <h3>&lt;</h3>
          </div>
        </div>

        <div id="advantages_text">
          <div className={safetyDisplay}>
            <h1>Pourquoi est-ce plus sécurisé ?</h1>
            <div className="advantage">
              <div className={"texte"}>
                <h2>Stockage hors ligne</h2>
                <p>Avec Arctic Wallet, les clés privées qui permettent d'accéder à vos cryptomonnaies sont stockées sur des dispositifs de stockage externes non connectés à Internet, comme des clés USB ou des cartes SD, ce qui protège ainsi vos actifs numériques des hackers et des attaques lorsque vous êtes hors ligne.</p>
              </div>
              <div className={"image"}><img src="animation/offline.gif" alt="offline gif" /></div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"image"}><img src="animation/authentication.gif" alt="offline gif" /></div>
              <div className={"texte"}>
                <h2>Triple authentification possible</h2>
                <p>Si votre appareil le permet, vous pouvez activer l'authentification à trois facteurs en activant la vérification biométrique, comme une empreinte digitale ou une reconnaissance faciale. 
                  Ainsi, pour accéder à votre portefeuille, nous vérifions ce que vous <b>avez</b> (votre dispositif de stockage externe), ce que vous <b>savez</b> (votre mot de passe) et qui vous <b>êtes</b>.
                  Cette combinaison rend toute tentative d'accès non autorisée extrêmement difficile.</p>
              </div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"texte"}>
                <h2>Données chiffrées</h2>
                <p>Afin de sécuriser vos données sensibles, nous utilisons plusieurs mécanismes et algorithmes de chiffrement de pointe, également employés par les armées et gouvernements.
                  Ainsi, même en cas de perte ou de vol de votre support physique, vos informations restent inaccessibles et sécurisées.</p>
              </div>
              <div className={"image"}><img src="animation/secure_data.gif" alt="offline gif" /></div>
            </div>
          </div>

          <div className={priceDisplay}>
            <h1>Pourquoi est-ce moins cher ?</h1>
            <div className="advantage">
              <div className={"texte"}>
                <h2>Le prix d'un café</h2>
                <p>À seulement 2€ par mois, notre solution rend la sécurité des cryptomonnaies accessible pour le prix d'un café, afin qu'elle soit abordable pour tous.</p>
              </div>
              <div className={"image"}><img src="animation/coffee.gif" alt="offline gif" /></div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"image"}><img src="animation/cancel.gif" alt="cancel gif" /></div>
              <div className={"texte"}>
                <h2>Flexibilité</h2>
                <p>Grâce à notre modèle d'abonnement, vous pouvez bénéficier de nos services sans engagement. 
                  Vous pouvez arrêter ou reprendre votre abonnement à tout moment et ne payer que lorsque vous avez réellement besoin de nos services.</p>
              </div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"texte"}>
                <h2>Pas d'achat initial</h2>
                <p>Contrairement aux autres solutions de hardwallets, notre service ne nécessite aucun achat initial coûteux. 
                  Vous pouvez commencer à protéger vos actifs numériques sans investir dans des équipements et ainsi placer votre capital dans de réels actifs.</p>
                <br/>
                <p>En investissant ce capital plutôt qu'en l'immobilisant dans l'achat d'un hardwallet, vous évitez un manque à gagner potentiellement important sur de longues périodes. 
                  Sur le graphique si dessous, vous pouvez comparer le côut de revient de votre hardwallet en fonction du modèle de financement.</p>
              </div>
              <div className={"image"}><img src="animation/payment.gif" alt="offline gif" /></div>
            </div>
            <div id="graph_param">
              <p>Compare les prix avec les performances de <select id="performance" onChange={(e) => changeGraph(e)}>
                <option value={"ETH5"}>Ethereum sur 5 ans</option>
                <option value={"ETH8"}>Ethereum sur 8 ans</option>
                <option value={"BTC5"}>Bitcoin sur 5 ans</option>
                <option value={"BTC10"}>Bitcoin sur 10 ans</option>
              </select></p>
              <h2>Economies : ${Intl.NumberFormat("en-US").format(data[data.length - 1].ledger - data[data.length - 1].arctic)}</h2>
            </div>
            <div id="graph">
              <Chart data={data}/>
            </div>
          </div>

          <div className={accessDisplay}>
            <h1>Comment est-ce accessible ?</h1>
            <div className="advantage">
              <div className={"texte"}>
                <h2>Conçu pour être utilisable par tous</h2>
                <p>Notre objectif est que tout le monde puisse protéger efficacement ses clés privées. 
                  Notre solution a donc été développée pour être simple d'utilisation et intuitive, afin qu'elle soit accessible à tous, des experts aux novices sans connaissances techniques.</p>
              </div>
              <div className={"image"}><img src="animation/family.gif" alt="offline gif" /></div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"image"}><img src="animation/world.gif" alt="offline gif" /></div>
              <div className={"texte"}>
                <h2>Accessible partout dans le monde</h2>
                <p>PPeu importe où vous vous trouvez, notre solution de hardwallet est disponible pour vous. 
                  Puisque nous ne vendons pas de dispositif physique, nous ne sommes pas limités par des contraintes de livraison, et vous pouvez accéder à notre wallet où que vous soyez dans le monde.</p>
              </div>
            </div>
            <hr/>
            <div className="advantage">
              <div className={"texte"}>
                <h2>Accessible sur tous les supports</h2>
                <p>Que vous utilisiez un ordinateur, un smartphone ou une tablette, notre solution fonctionne sur tous les supports. Vous n'avez besoin que d'un support de stockage physique pour stocker vos clés privées en toute sécurité.</p>
              </div>
              <div className={"image"}><img src="animation/devices.gif" alt="offline gif" /></div>
            </div>
          </div>
        </div>

      </div>

      <div id="whitelist_link"></div>
      <div id="whitelist">
        <Ripple />
        <MobileRipple />
        <div id="whitelist_text">
          <h1>Whitelist</h1>
          <p>Inscrivez-vous à notre whitelist pour devenir l'un de nos premiers bêta-testeurs et être tenu informé de l'avancement du projet !</p>
          <form>
            <input type="email" placeholder="email"></input>
            <button type="submit">Submit</button>  {/* Ajouter e.preventdefault() */}
          </form>

          {/* <p>Vous pouvez également suivre nos réseaux sociaux</p> 
           + icones réseaux sociaux
          */}
        </div>
      </div>

      <div id="faq_link"></div>
      <div id="faq">
        <h1>FAQ</h1>
        <div>
          <h2 onClick={() => setDisplayResponse(1)}>Qu'est-ce qu'un wallet crypto ?</h2>
          {displayResponse == 1 ? <div>
            <p>Pour posséder un NFT, du Bitcoin, de l’Ethereum ou d’autres crypto-actifs, il vous faut un wallet. Lors de la création de ce wallet, deux clés sont générées :</p>
            <ul>
              <li><b>Une clé publique (adresse)</b> : Comparable à un numéro de compte bancaire, cette clé peut être partagée avec des tiers pour recevoir des cryptomonnaies sans compromettre les actifs de votre wallet.</li>
              <li><b>Une clé privée</b> : Cette clé vous permet de valider vos opérations et d’envoyer ou de recevoir des cryptomonnaies. Vous devez protéger votre clé privée et être la seule personne à la connaître. Toute personne ayant accès à votre clé privée peut accéder à vos cryptomonnaies.</li>
            </ul>
            <p>Le but du wallet crypto est de stocker ces clés et de vous permettre d'interagir facilement avec la blockchain. Il vous aide à signer vos transactions, suivre le solde de votre portefeuille, gérer vos cryptomonnaies et utiliser des applications décentralisées (dApps).</p>
            </div> : <></>}
          <hr/>
          <h2 onClick={() => setDisplayResponse(2)}>Pourquoi utiliser un hardwallet ?</h2>
          {displayResponse == 2 ? <div>
            <p>Il existe différents types de portefeuilles crypto :</p>
            <ul>
              <li><b>Hot wallets</b> : Stockent vos clés privées sur des appareils connectés à Internet, rendant vos actifs plus vulnérables aux attaques et piratages en ligne.</li>
              <li><b>Cold wallets</b> : Stockent vos clés privées hors ligne, à l’abri des menaces d’Internet. Parmi eux, on trouve les wallets à support papier et les hardwallets (portefeuilles matériels).</li>
            </ul>
            <p>Les wallets peuvent également être classés en :</p>
            <ul>
              <li><b>Wallets dépositaires</b> : Un tiers détient vos clés privées et vos actifs.</li>
              <li><b>Wallets non dépositaires (self custody)</b> : Vous possédez et contrôlez entièrement vos clés privées et cryptomonnaies.</li>
            </ul>
            <p>Les hardwallets stockent vos clés privées hors ligne, sur un appareil physique, offrant ainsi une sécurité accrue et un contrôle total sur vos cryptomonnaies.</p>
          </div> : <></>}
          <hr/>
          <h2 onClick={() => setDisplayResponse(3)}>Que se passe-t-il si je perds mon hardwallet ?</h2>
          {displayResponse == 3 ? <div>
            <p>Si vous perdez votre hardwallet, vous pouvez toujours récupérer vos fonds en utilisant un nouveau dispositif de stockage externe et votre phrase de récupération (seed phrase). Cette phrase, composée généralement de 12 à 24 mots, vous a été communiquée lors de la création de votre wallet et peut également être retrouvée dans votre application.
              <br/><br/>Attention, votre phrase de récupération permet à quiconque y a accès d’accéder à vos fonds. Elle doit donc être stockée de manière très sécurisée et ne doit être partagée qu’avec des personnes de confiance.
              <br/><br/>Cette opération est entièrement gratuite et sans frais supplémentaires.
            </p>
          </div> : <></>}
          <hr/>
          <h2 onClick={() => setDisplayResponse(4)}>Que se passe-t-il si j'arrête de payer ou si je manque un paiement ?</h2>
          {displayResponse == 4 ? <div>
            <p>Pas d’inquiétude. Si vous manquez un paiement ou que vous décidez d’arrêter l'abonnement, vous ne perdrez pas vos fonds, et vous pourrez y accéder avec votre wallet dès la reprise de l’abonnement.
              <br/><br/>Vous pouvez également récupérer vos fonds sur un autre wallet en utilisant votre phrase de récupération (seed phrase). 
              <br/><br/>Cette opération est entièrement gratuite et sans frais supplémentaires.
            </p>
          </div> : <></>}
          <hr/>
          <h2 onClick={() => setDisplayResponse(5)}>Arctic Wallet a-t-il accès à mes cryptomonnaies ?</h2>
          {displayResponse == 5 ? <div>
            <p>Arctic Wallet est une solution de wallet non dépositaire (self custody), ce qui signifie que vous avez un contrôle total sur vos clés privées et que vous seul pouvez accéder à vos cryptomonnaies.
              <br/><br/>Arctic Wallet n’a jamais accès à vos cryptomonnaies, NFTs ou autres actifs. Cela signifie également qu’en cas de perte de votre wallet ou de votre mot de passe, Arctic Wallet ne peut pas récupérer vos actifs pour vous. Il est donc crucial de garder votre phrase de récupération (seed phrase) en sécurité et accessible.
            </p>
          </div> : <></>}
        </div>
      </div>

      <footer>
        <hr/>
        <div id="footer_content">
          <div>
            <img src="logo/logo_fond_bleu.png" alt="Logo Arctic Wallet" width={"150px"}/>
          </div>
          <div>
            <h2>Liens utiles</h2>
            <a href="#presentation">Présentation</a>
            <a href="#advantages_bloc">Pourquoi Arctic Wallet ?</a>
            <a href="#whitelist_link" className="offset-link">Whitelist</a>
            <a href="#faq_link">FAQ</a>
          </div>
          <div>
            <h2>Contact</h2>
            <p>walletarctic@gmail.com</p>
            <p>06 31 19 18 33 (WhatsApp)</p>
            <br/>
            <p>Votre avis est important pour nous!</p>
          </div>
        </div>
        <img src="DA/bulles.gif" alt="gif de bulles" id="bulles"/>
        <img src="DA/algue.png" alt="image d'algue" id="algues"/>
        <p id="credit">Copyright © 2024. Tous droits réservés par Arctic Wallet</p>
      </footer>

    </main>
  );
}
