import pickColor from "../../service/pickColor";

export function closeModalCallback ({ target } = {}) {
  return target && target.dataset.close === "close" && this.setState({ blockModal: {} });
}

export function openModal (blockName) {
  this.setState({
    blockModal: {
      isEnabled: true, blockName
    }
  });
}

export async function changeBackground () {
  this.setState({
    background: await pickColor()
  });
}

export function createBlockCallback () {
  const form = document.getElementById("add-block-form");
  const blockProperties = Object.fromEntries(new FormData(form).entries());
  this.state.blocks.push({
    name: this.state.blockModal.blockName,
    props: blockProperties
  });
}