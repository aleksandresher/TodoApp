import "../Buttons/Buttons.css";

function Button({
  showActive,
  showComplated,
  removeComplated,
  showAll,
  itemsLeft,
  daynight,
}) {
  return (
    <div className={daynight ? "darkBtnContainer" : "btnContainer"}>
      <div className={daynight ? "darkItemsLeft" : "itemsLeft"}>
        {itemsLeft} items left
      </div>
      <div>
        <button onClick={showAll} className={daynight ? "darkBtn" : "btn"}>
          All
        </button>
        <button onClick={showActive} className={daynight ? "darkBtn" : "btn"}>
          Active
        </button>
        <button
          onClick={showComplated}
          className={daynight ? "darkBtn" : "btn"}
        >
          Complated
        </button>
      </div>

      <button
        onClick={removeComplated}
        className={daynight ? "darkClearBtn" : "clearBtn"}
      >
        Clear Complated
      </button>
    </div>
  );
}

export default Button;
