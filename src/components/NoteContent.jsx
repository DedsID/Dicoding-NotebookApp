import React from "react";

const NoteContent = ({ judul, tanggal, isi }) => {
  return (
    <div className="note-item__content">
      <div className="note-item__title">{judul}</div>
      <div className="note-item__date">{tanggal}</div>
      <div className="note-item__body">{isi}</div>
    </div>
  );
};

export default NoteContent;
