import "./App.css";
import { Route, Routes, Link, useParams } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const SearchPage = () => {
  const tacos = ['cochinita','al pastor', 'al limon', 'asada', 'lengua', 'pollo', 'ranchera', 'veggie']
  return (
    <div>
      <h1>Search</h1>
      {tacos.map(taco => <li key={taco}><Link to={`/tacos/${taco}/456723`}>{taco}</Link></li>)}
    </div>
  )
}
const Tacos = () => {
  const { name, id } = useParams()
  return (<h1>Tacos - ParamValue is: {name} - Id is: {id}</h1>)
};

function App() {
  return (
    <div className="App">
      <header>
        <h1>Miduchiollos</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>

      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tacos/:name/:id" element={<Tacos />} />
      </Routes>
    </div>
  );
}

export default App;
