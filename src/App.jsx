import { useState } from "react";
import Login from "./interaksi/Login";
import Register from "./interaksi/Register";
function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const handleRegister = () => {
    setIsRegistered(true); // Set status terdaftar setelah registrasi;
  };
  return (
    <div className="container mx-auto">
      {!isRegistered ? <Register onRegister={handleRegister} /> : <Login />}
    </div>
  );
}
export default App;
