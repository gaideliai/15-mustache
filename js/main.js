"use strict";

import data from "./data.js";
import mustache from "./mustache.js";

//  ()(); self-invoking function
(function() {
    console.log('done loading!')

    function suma (a, b) {
        const sum = a + b;
        return sum;
    }

})();