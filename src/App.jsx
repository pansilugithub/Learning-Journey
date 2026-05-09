import { useEffect, useState } from "react";
import "./App.css";

// 1. Defined items outside or inside the component
const items = [
  "Macaroni and cheese",
  "Salmon with potatoes",
  "Tofu with Vegetable",
  "Minetrone soup"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s kitchen</h1>
      <p>copyright {year}</p>
      <p>we serve the most delicious food around</p>
      {/* Removed the broken Main tag from here */}
    </header>
  );
}

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        {/* We use onStatus(true) here as per your original logic */}
        <button onClick={() => onStatus(true)}>I want to be open</button>
        <h2>welcome to this beautiful restaurant {openStatus ? "open" : "closed"}</h2> 
      </div>
      <main>
        {/* Note: Ensure this URL points to an actual image file, not a search page */}
        <img src="image.jpg" alt="chef" height={200} />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}.`);
  }, [status]);

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"} restaurant
      </button>
      
      <Header name="Alex" year={new Date().getFullYear()} />
      
      {/* Pass setStatus directly to onStatus */}
      <Main 
        dishes={dishObjects} 
        openStatus={status} 
        onStatus={setStatus} 
      />
    </div>
  );
}

export default App;