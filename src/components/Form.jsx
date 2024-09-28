import { useState } from "react";

function Form({ addItems }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") return;
    addItems(title);
    setTitle("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Tambahkan Catatan Baru</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
