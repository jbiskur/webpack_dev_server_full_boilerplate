import "./scss/main.scss";

import "p5"

window.setup = function () {
  "use strict";
  console.info("Setup");
}

window.draw = function () {
  "use strict";
  console.info("Draw");
}

/* enables hot reloading of modules */
if (module.hot) {
  module.hot.accept();
}