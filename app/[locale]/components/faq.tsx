import { useState } from "react";

import {useTranslations} from 'next-intl';

const FAQ = (() => {
    const t = useTranslations('FAQ');

    const [displayResponse, setDisplayResponse] = useState(0);

    function changeQuestion(question: number){
        if(displayResponse == question){
            setDisplayResponse(0);
        }
        else {
            setDisplayResponse(question);
        }
    }

    return (
      <>
        <div id="faq_link"></div>
        <div id="faq">
            <h1>FAQ</h1>
            <div>
            <h2 onClick={() => changeQuestion(1)}>{t("question_1")}</h2>
            {displayResponse == 1 ? <div>
                <p>{t("answer_1__p1")}</p>
                <ul>
                <li><b>{t("answer_1__li1_b")}</b>{t("answer_1__li1")}</li>
                <li><b>{t("answer_1__li2_b")}</b>{t("answer_1__li2")}</li>
                </ul>
                <p>{t("answer_1__p2")}</p>
                </div> : <></>}
            <hr/>
            <h2 onClick={() => changeQuestion(2)}>{t("question_2")}</h2>
            {displayResponse == 2 ? <div>
                <p>{t("answer_2__p1")}</p>
                <ul>
                <li><b>{t("answer_2__li1_b")}</b>{t("answer_2__li1")}</li>
                <li><b>{t("answer_2__li2_b")}</b>{t("answer_2__li2")}</li>
                </ul>
                <p>{t("answer_2__p2")}</p>
                <ul>
                <li><b>{t("answer_2__li3_b")}</b>{t("answer_2__li3")}</li>
                <li><b>{t("answer_2__li4_b")}</b>{t("answer_2__li4")}</li>
                </ul>
                <p>{t("answer_2__p3")}</p>
            </div> : <></>}
            <hr/>
            <h2 onClick={() => changeQuestion(3)}>{t("question_3")}</h2>
            {displayResponse == 3 ? <div>
                <p>{t("answer_3__p1")}<br/><br/>{t("answer_3__p2")}</p>
            </div> : <></>}
            <hr/>
            <h2 onClick={() => changeQuestion(5)}>{t("question_5")}</h2>
            {displayResponse == 5 ? <div>
                <p>{t("answer_5__p1")}<br/><br/>{t("answer_5__p2")}</p>
            </div> : <></>}
            </div>
        </div>
      </>
    );
  });
  
  export default FAQ;
  