import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ listBook, onDelete, onArchive }) => {
  return (
    <div className="notes-list">
      {listBook.length === 0 ? (
        <p> Tidak ada catatan </p>
      ) : (
        listBook.map((listBook) => (
          <NoteItem
            key={listBook.id}
            id={listBook.id}
            onDelete={onDelete}
            onArchive={onArchive}
            isArchived={listBook.archived}
            {...listBook}
          />
        ))
      )}
    </div>
  );
};

export default NotesList;
