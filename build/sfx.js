import * as wcm from "mabel-wcm";

let mabel = "mabel" in window && window.mabel ? window.mabel : {};
mabel.wcm = wcm;

window.mabel = mabel;
