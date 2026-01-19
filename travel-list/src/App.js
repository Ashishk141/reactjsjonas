const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

// modified
function Form() {
  // Create Event Handler
  function handleSubmit(e) {
    e.preventDefault(); // submit without page reloading
    // console.log("Submitted");
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {/* map just iterate over the array and return the JSX */}
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      {/* Conditionally we write styling */}
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer>
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
