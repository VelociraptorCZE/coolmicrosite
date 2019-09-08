// I need to use relative paths, because next isn't able to transpile modules from node_modules
// https://github.com/zeit/next.js/issues/706

import useNativeLazyload from "../../node_modules/minilazyload/usenativelazyload";
import MiniLazyload from "../../node_modules/minilazyload";

export default function lazyload () {
  useNativeLazyload(new MiniLazyload({
    rootMargin: "700px"
  }, ".lazyload"));
}