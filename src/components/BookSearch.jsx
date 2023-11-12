import React from "react";

function BookSearch({ search, onSearch }) {
  return (
    <div className="note-app-header">
      <div className="note-search">
        <input
          value={search}
          id="search"
          type="text"
          placeholder="Cari catatan ..."
          onChange={(event) => onSearch(event)}
        />
      </div>
    </div>
  );
}

export default BookSearch;
