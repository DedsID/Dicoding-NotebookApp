import React from "react";

class InputBook extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
    this.maxKarakter = 50;
    this.handleJudulChange = this.handleJudulChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleBuatClick = this.handleBuatClick.bind(this);
  }

  handleJudulChange(event) {
    const inputValue = event.target.value;
    if (inputValue.length <= this.maxKarakter) {
      this.setState({
        title: inputValue,
      });
    }
  }

  handleBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  handleBuatClick(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="flex flex-col" onSubmit={this.handleBuatClick}>
        <h2>Buat Catatan</h2>
        <span className="flex secondary">
          Sisa karakter: {this.maxKarakter - this.state.title.length}
        </span>
        <input
          type="text"
          placeholder="Masukan judul disini..."
          value={this.state.title}
          onChange={this.handleJudulChange}
        />
        <textarea
          placeholder="Masukan isi disini..."
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default InputBook;
