//PS D:\frontend UDEMY ONLY\jonas_react_js\ultimate-react-course-main\pizza-menu> npm start

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <>
//       <Header />
//       <Menu />
//       <Footer />
//     </>
//   );
// }

// Components
// function Header

// Component
function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {}; // empty object

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// Parent Component
function Menu() {
  // redner list oonly when we have some pizzas
  // const pizzas = pizzaData;
  // const pizzas = []; // emmpty array is truthy value
  const pizzas = pizzaData;
  const numPizzas = pizzas.length; // that;s why we have to check for their length
  // const numPizzas = 0; // that;s why we have to check for their length

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Conditional rendering */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cusine, & creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              // <Pizza name={pizza.name} photoName={pizza.photoName} />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, Please come back later</p>
      )}

      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          // <Pizza name={pizza.name} photoName={pizza.photoName} />
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// Child components of Menu
// function Pizza(props) {
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* 1st way : OHTER WAY SETTING TEXT CONDITIONALLY */}
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        {/* 2nd way : conditinally display some text */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

// Component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //   else alert("Sorry we're closed");

  // if (!isOpen)
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
  //     </p>
  //   );

  return (
    <footer className="footer">
      {/* v47 conditional rednering with && - short circuting */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
  //   return React.createElement("footer", null, "We're currently open");
}

// function Order(props) {
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// Arrow function

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
