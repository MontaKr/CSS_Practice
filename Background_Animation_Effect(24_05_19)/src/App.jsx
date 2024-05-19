import React, { useEffect } from "react";
import { Wrap } from "./style";

const App = () => {
  useEffect(() => {
    let numbers = document.querySelector(".numbers");
    let numString = numbers.textContent;
    let splitNum = numString.split("");

    numbers.textContent = "";

    for (let i = 0; i < splitNum.length; i++) {
      numbers.innerHTML += "<span>" + splitNum[i] + "</span>";
    }
  }, []);

  return (
    <Wrap>
      <section>
        <p className="numbers">
          15489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015154894516515640498484012310238079804401515489451651564049848401231023807980440151548945165156404984840123102380798044015
        </p>
      </section>
    </Wrap>
  );
};

export default App;
