import { Navbar } from "./components/Navbar";
import { Header } from "./components/sections/Header";

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
