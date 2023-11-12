import React from "react";
import NotesList from "./NotesList";
import InputBook from "./InputBook";
import BookSearch from "./BookSearch";
import { getInitialData } from "../utils/index";

class NotebookApp extends React.Component {
  constructor() {
    super();
    this.state = {
      listBook: getInitialData(),
      search: "",
    };
    this.handleAddNote = this.handleAddNote.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onBookSearchHandler = this.onBookSearchHandler.bind(this);
  }

  handleAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        listBook: [
          ...prevState.listBook,
          {
            id: +new Date(),
            title,
            createdAt: new Date(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const listBook = this.state.listBook.map((book) =>
      book.id === id ? { ...book, archived: !book.archived } : book,
    );
    this.setState({ listBook });
  }

  onDeleteHandler(id) {
    const listBook = this.state.listBook.filter((book) => book.id !== id); // listBook diambil dari this.state = { listBook: getInitialData(), };
    this.setState({ listBook });
  }

  onBookSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  render() {
    const bookSearch = this.state.listBook.filter((book) =>
      book.title.toLowerCase().includes(this.state.search.toLowerCase()),
    );

    const daftarNote = bookSearch.filter((book) => {
      return book.archived === false;
    });
    const archivedNote = bookSearch.filter((book) => {
      return book.archived === true;
    });

    return (
      <div>
        <header className="container flex ">
          <h1>Notes</h1>
          <BookSearch
            listBook={bookSearch}
            search={this.state.search}
            onSearch={this.onBookSearchHandler}
          />
        </header>
        <main className="content container flex">
          <div className="input_catatan">
            <InputBook addNote={this.handleAddNote} />
          </div>
          <div>
            <div className="flex flex-col">
              <h2>Catatan aktif</h2>
              <NotesList
                listBook={daftarNote}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
              />
            </div>
            <div className="flex flex-col">
              <h2>Arsip</h2>
              <NotesList
                listBook={archivedNote}
                onDelete={this.onDeleteHandler}
                onArchive={this.onArchiveHandler}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default NotebookApp;
