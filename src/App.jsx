// import React from "react";
// import "./index.css";
// import Products from "./components/products/Products";
// // import Homepage from "./pages/Homepage";

// function App() {
//   return (
//     <div className="App">
//       {/* <Homepage /> */}
//       <Products />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./index.css";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/Homepage";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         {/* <Routes> */}
//         <Route path="/" element={<HomePage />} />
//         {/* </Routes> */}
//       </Router>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/:id" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
