// SCSS
import "../style/app/nav/NavigationToolkit.scss";
import "../style/app/modal/modal.scss";
import "../style/app/UI/buttons.scss"
import "../static/dist/common.css";

// JS
import React from "react";
import blockList from "../components/blocks/_allBlocks";
import createBlockModal from "../components/UI/createBlockModal";
import creatorNavigation from "../components/UI/creatorNavigation";
import {
  createBlockCallback,
  changeBackground,
  openModal,
  closeModalCallback
} from "../components/UI/callbacks/creatorCallbacks";
import lazyload from "../client/src/lazyload";

export default class Creator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      background: "#fff",
      blocks: [],
      blockModal: {}
    };

    this.closeModalCallback = closeModalCallback.bind(this);
    this.createBlockCallback = createBlockCallback.bind(this);
    this.openModal = openModal.bind(this);
    this.changeBackground = changeBackground.bind(this);
  }

  componentDidUpdate() {
    try {
      lazyload();
    } catch {}
    document.body.style.background = this.state.background;
  }

  render () {
    const { blocks } = this.state;

    return (
      <>
        {creatorNavigation.bind(this)()}

        <div id={"render-all-blocks"} style={{ paddingTop: "128px" }}>
          {blocks.map(({ name, props }, i) => (
            <div key={"block_" + i}>
              {blockList[name](props)}
            </div>
          ))}
        </div>

        {createBlockModal.bind(this)()}
      </>
    )
  }
}