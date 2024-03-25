import { Component } from 'react';
import Modal from './Modal/Modal';
import BookForm from './BookForm/BookForm';
import booksData from './books.json';
import BookList from './BookList/BookList';

const books = booksData.books;
// console.log(books);
export class App extends Component {
  state = {
    books: books,
    modal: {
      isOpen: false,
      visibleData: null,
    },
  };

  onRemoveBook = bookId => {
    // console.log(bookId);

    this.setState({
      books: this.state.books.filter(book => book.id !== bookId),
    });
  };

  onAddBook = booksData => {
    console.log(booksData);

    const finalBook = {
      ...booksData,
      id: (Math.random() * 10).toString(),
    };

    this.setState({
      books: [...this.state.books, finalBook],
    });
  };

  onOpenModal = data => {
    this.setState({
      modal: {
        isOpen: true,
        visibleData: data,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        visibleData: null,
      },
    });
  };
  componentDidMount() {
    const stringifiedBooks = localStorage.getItem('books');
    const books = JSON.parse(stringifiedBooks) ?? [];

    this.setState({ books });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.modal.isOpen !== this.state.modal.isOpen) {
      console.log('OPEN or CLOSED modal');
    }
    if (prevState.books.length !== this.state.books.length) {
      const stringifiedBooks = JSON.stringify(this.state.books);
      localStorage.setItem('books', stringifiedBooks);
    }
  }

  render() {
    return (
      <div>
        {this.state.modal.isOpen && (
          <Modal
            onCloseModal={this.onCloseModal}
            visibleData={this.state.modal.visibleData}
          />
        )}
        <BookForm title="Book Form" onAddBook={this.onAddBook} />
        <BookList
          onOpenModal={this.onOpenModal}
          books={this.state.books}
          onRemoveBook={this.onRemoveBook}
        />
      </div>
    );
  }
}
