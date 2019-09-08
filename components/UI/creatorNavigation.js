import blockList from "../blocks/_allBlocks";
import formatString from "../service/formatString";
import createHTML from "../service/createHTML";

export default function creatorNavigation () {
  return (
    <div className={"navigation-toolkit flex vert-center hor-center shadow"}>
      <div className={"navigation-toolkit__item"} onClick={this.changeBackground}>
        {"Set Background"}
      </div>
      {Object.entries(blockList).map(([blockName]) => (
        <div className={"navigation-toolkit__item"}
             key={blockName + "Button"}
             onClick={() => this.openModal(blockName)}>

          {formatString(blockName)}
        </div>
      ))}
      <div className={"navigation-toolkit__item"} onClick={createHTML}>
        {"Download as a single HTML"}
      </div>
    </div>
  );
}