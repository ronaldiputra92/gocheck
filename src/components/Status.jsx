function Status({ listItems }) {
  if (listItems.length === 0) {
    return (
      <div className="stats">
        <span>
          {String.fromCodePoint(0x1f4dd)}
          Kamu belum punya catatan, tambahkan sekarang
          {String.fromCodePoint(0x2705)}{" "}
        </span>
      </div>
    );
  }

  const done = listItems.filter((item) => item.done).length;
  const total = listItems.length;
  const percentage = Math.round((done / total) * 100);
  return (
    <div className="stats">
      <span>
        {String.fromCodePoint(0x1f4dd)}
        Kamu punya {total} catatan dan baru {done} yang di checklist{" "}
        {percentage === 100 ? "100%" : percentage + "%"}
        {String.fromCodePoint(0x2705)}{" "}
      </span>
    </div>
  );
}

export default Status;
