import "./styles.css";

const bookArray = [
  {
    img: "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UL480_QL65_.jpg",
    title: "Psychology of money",
    author: "Morgan Housel"
  },
  {
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UL480_QL65_.jpg",
    title: "Ikigai",
    author: " Héctor García and Francesc Miralles"
  },
  {
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UL480_QL65_.jpg",
    title: "Atomic Habits",
    author: " James Clear"
  },
  {
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UL480_QL65_.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho"
  },
  {
    img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UL480_QL65_.jpg",
    title: "Attitude is Everything",
    author: " Jeff Keller"
  },
  {
    img: "https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UL480_QL65_.jpg",
    title: "As a man thinketh",
    author: " James Allen"
  }
];

const Book = (props) => {
  return (
    <div className="card">
      <img className="image-display" src={props.img} alt="book" />
      <h2>{props.title}</h2>
      <p>{props.author}</p>
    </div>
  );
};
export default function App() {
  return (
    <div>
      {bookArray.map((bk) => {
        return <Book img={bk.img} title={bk.title} author={bk.author} />;
      })}
    </div>
  );
}
