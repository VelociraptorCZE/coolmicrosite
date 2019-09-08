import blocksConfig from "../blocks.config";
import formatString from "../service/formatString";

export default function createBlockModal() {
  const { blockModal } = this.state;

  return (
    <>
      {blockModal.isEnabled && (
        <div className={"modal__outer"} data-close={"close"} onMouseDown={this.closeModalCallback}>
          <div className={"modal__inner"}>

            <span className={"modal__close"}
                  title={"Close dialog"}
                  data-close={"close"}
                  onClick={this.closeModalCallback}/>

            <form id={"add-block-form"}>
              {Object.entries(blocksConfig[blockModal.blockName].inputs).map(
                ([inputName, {value, options, type = "text"}]) => (
                  <div key={inputName}>
                    <label htmlFor={inputName}>{inputName}: </label>
                    {options
                      ? <select name={inputName}>
                        {options.map(option => (
                          <option value={option} key={option + "opt"}>
                            {formatString(option)}
                          </option>
                        ))}
                      </select>
                      : <input type={type}
                               defaultValue={value}
                               name={inputName}
                               className={"modal__input"}/>}
                  </div>
                )
              )}
            </form>

            <button className={"button button__primary"}
                    data-close={"close"}
                    onMouseDown={this.createBlockCallback}>
              {"Add new block"}
            </button>
          </div>
        </div>
      )}
    </>
  )
}