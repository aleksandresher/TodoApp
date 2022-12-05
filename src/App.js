import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import InputField from "./components/Input/Input";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import background from "./images/darkBack.gif";
import daybackground from "./images/ligth.gif";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [listOnPage, setListOnPage] = useState([]);
  const [active, setActive] = useState([]);
  const [complatedItems, setComplatedItems] = useState([]);
  const [daynight, setDayNight] = useState(false);
  const [visible, setVisible] = useState(false);

  function changeHandler(e) {
    e.preventDefault();

    setValue(e.target.value);
  }
  function addItem(e) {
    if (e.key === "Enter" && value.length > 0) {
      const newItems = [
        {
          id: nanoid(),
          text: value,
          complated: false,
          removeBtn: false,
        },
        ...items,
      ];
      setListOnPage(newItems);
      setItems(newItems);
      setValue("");
    }
  }

  function toggleComplated(clickedItem) {
    const newValue = listOnPage.map((item) => {
      if (item.id === clickedItem.id) {
        item.complated = !item.complated;
      }
      return item;
    });
    setItems(newValue);
    setComplatedItems(newValue);
  }

  function showActive() {
    const newArray = items.filter((item) => item.complated == false);

    setListOnPage(newArray);
    setActive(newArray);
  }

  function showComplated() {
    const newArray = items.filter((item) => item.complated == true);
    setListOnPage(newArray);
    setComplatedItems(newArray);
  }

  function removeComplated() {
    const newArray = items.filter((item) => item.complated == false);
    setListOnPage(newArray);
    setItems(newArray);
  }

  function showAll() {
    setListOnPage(items);
  }

  function removeImgVisibility(event) {
    event.stopPropagation();
    setVisible((prev) => !prev);
  }
  function togleRemoveBtn(clickedItem) {
    const newValue = listOnPage.map((item) => {
      if (item.id === clickedItem.id) {
        item.removeBtn = !item.removeBtn;
      }
      return item;
    });
    setItems(newValue);
    setComplatedItems(newValue);
  }
  function removeOnClick() {
    const newArray = items.filter((item) => item.removeBtn == false);
    setListOnPage(newArray);
    setItems(newArray);
  }

  function toggleDay() {
    setDayNight((prev) => !prev);

    document.body.style.backgroundImage = !daynight
      ? `url(${background})`
      : `url(${daybackground}`;
    document.body.style.backgroundColor = daynight ? "#fff" : "#050505";
  }

  const itemsLeft = items.length;

  return (
    <div className="App">
      <Header daynight={daynight} toggleDay={toggleDay} />
      <InputField
        value={value}
        changeHandler={changeHandler}
        addItem={addItem}
        daynight={daynight}
      />
      <List
        items={listOnPage}
        onClick={toggleComplated}
        showActive={showActive}
        showComplated={showComplated}
        removeComplated={removeComplated}
        showAll={showAll}
        itemsLeft={itemsLeft}
        visible={visible}
        removeImgVisibility={removeImgVisibility}
        togleRemoveBtn={togleRemoveBtn}
        removeOnClick={removeOnClick}
        daynight={daynight}
      />
    </div>
  );
}

export default App;
