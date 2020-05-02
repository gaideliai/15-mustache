"use strict";

import data from "./data.js";
import mustache from "./mustache.js";

//  ()(); self-invoking function
(function() {
    mustache(data);
})();