import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Checklist from "./components/Checklist";
import Status from "./components/Status";

function App() {
  const [listItems, setListItems] = useState([]);

  function toggleItem(id) {
    setListItems(
      listItems.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  }

  function removeItem(id) {
    setListItems(listItems.filter((item) => item.id !== id));
  }

  function addItems(title) {
    const newItem = {
      id: listItems.length + 1,
      title,
      done: false,
    };
    setListItems([...listItems, newItem]);
  }

  function handleClearItems() {
    const confirm = window.confirm(
      "Apakah kamu yakin ingin menghapus semua catatan?"
    );
    if (confirm) {
      setListItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form addItems={addItems} />
      <Checklist
        listItems={listItems}
        toggleItem={toggleItem}
        removeItem={removeItem}
        handleClearItems={handleClearItems}
      />
      <Status listItems={listItems} />
    </div>
  );
}

export default App;
