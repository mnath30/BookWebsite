import "./styles.css";
import { useState } from "react";
import { bookArray } from "./Book";

export default function App() {
  const [bookdisplay, setBookdisplay] = useState(bookArray["allBooks"]);
  const Book = (props) => {
    return (
      <div className="card">
        <img className="image-display" src={props.img} alt="book" />
        <h2>{props.title}</h2>
        <p>{props.author}</p>
      </div>
    );
  };

  const callHandler = (props) => {
    setBookdisplay(bookArray[props]);
  };

  return (
    <div>
      <div className="nav">
        <h1> Book Library </h1>
        <ul>
          <li className="list" onClick={() => callHandler("allBooks")}>
            All Books
          </li>
          <li className="list" onClick={() => callHandler("fiction")}>
            Fiction
          </li>
          <li className="list" onClick={() => callHandler("selfHelp")}>
            Self Help
          </li>
          <li className="list" onClick={() => callHandler("mystery")}>
            Mystery
          </li>
        </ul>
      </div>

      <div className="container">
        {bookdisplay.map((bk) => {
          return <Book img={bk.img} title={bk.title} author={bk.author} />;
        })}
      </div>
    </div>
  );
}
