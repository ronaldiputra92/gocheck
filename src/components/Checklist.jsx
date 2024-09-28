import { useState } from "react";

function Checklist({ listItems, toggleItem, removeItem, handleClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    switch (sortBy) {
      case "title":
        return listItems.sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return listItems.sort((a, b) => Number(a.done) - Number(b.done));
      case "input":
      default:
        return listItems;
    }
  }

  const sortedItems = sortItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleItem(item.id)}
            />
            <span style={{ textDecoration: item.done ? "line-through" : "" }}>
              {item.title}
            </span>
            <button onClick={() => removeItem(item.id)}>
              {String.fromCodePoint(0x274c)}
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="title">Urutkan berdasarkan judul</option>
          <option value="status">Urutkan berdasarkan status</option>
        </select>
        <button onClick={handleClearItems}>Hapus semua</button>
      </div>
    </div>
  );
}

export default Checklist;
