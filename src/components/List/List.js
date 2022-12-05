import "../List/List.css";
import Button from "../Buttons/Buttons";
import compImage from "../../images/complated.png";
import emptyImage from "../../images/comp.png";
import x from "../../images/x.png";

function List({
  items,
  onClick,
  showActive,
  showComplated,
  removeComplated,
  showAll,
  itemsLeft,
  togleRemoveBtn,
  removeOnClick,
  daynight,
}) {
  return (
    <div className={daynight ? "darkListContainer" : "listContainer"}>
      {items.map((item) => (
        <div
          key={item.id}
          className={daynight ? "darkList" : "lightList"}
          onMouseEnter={() => togleRemoveBtn(item)}
          onMouseLeave={() => togleRemoveBtn(item)}
        >
          <img
            src={item.complated ? compImage : emptyImage}
            onClick={() => onClick(item)}
            className={daynight ? "darkCircle" : ""}
          />

          <p
            className={`listText ${item.complated ? "listComplated" : ""} ${
              daynight ? "dark" : "light"
            }`}
          >
            {item.text}
          </p>

          <img
            src={x}
            className={item.removeBtn ? "removeImg" : "noRemoveImg"}
            onClick={removeOnClick}
          />
        </div>
      ))}
      <Button
        showActive={showActive}
        showComplated={showComplated}
        removeComplated={removeComplated}
        showAll={showAll}
        itemsLeft={itemsLeft}
        daynight={daynight}
      />
    </div>
  );
}

export default List;
