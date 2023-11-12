import React from "react";
import NoteContent from "./NoteContent";
import { showFormattedDate } from "../utils/index.js";

const NoteItem = ({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  isArchived,
}) => {
  return (
    <div className="note-item">
      <NoteContent
        judul={title}
        tanggal={showFormattedDate(createdAt)}
        isi={body}
      />
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          {isArchived ? "Pindahkan" : "Arsip"}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
