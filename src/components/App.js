// import React from "react";
// import { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [isDark, setIsDark] = useState(false);
//   const appClass = false ? "App dark" : "App light";

//   function handleDarkState() {
//     setIsDark((isDark) => !isDark);
//   }

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkState}>
//           {isDark ? "Dark" : "Light"}Dark Mode
//         </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const appClass = isDark ? "App dark" : "App light";

  function handleDarkState() {
    setIsDark((isDark) => !isDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkState}>
          {isDark ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}
