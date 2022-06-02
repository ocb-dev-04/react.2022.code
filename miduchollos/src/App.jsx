import "./App.css";
import { 
  Route, 
  Routes, 
  Link, 
  useParams, 
  Outlet 
} from "react-router-dom";

const Home = () => <h1>Home</h1>;

const TacoDetails = () => {
  const { taco } = useParams();

  return <h1>Taco Details - {taco}</h1>;
};

const SearchPage = () => {
  const tacos = [
    "cochinita",
    "al pastor",
    "al limon",
  ];

  return (
    <div>
      <h1>Search</h1>
      {tacos.map((taco) => (
        <li key={taco}>
          <Link to={`/tacos/${taco}`}>{taco}</Link>
        </li>
      ))}
    </div>
  );
};

const Tacos = () => {
  const { taco } = useParams();

  return (
    <div>
      <h1>Tacos</h1>
      <h2>{taco}</h2>
      <Link to="details">Ir a detalles</Link>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header>
        <h1>Miduchiollos</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tacos/:taco" element={<Tacos />}>
          <Route path="details" element={<TacoDetails />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
