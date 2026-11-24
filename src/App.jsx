
import Header from "./components/Header.jsx";
import SeriesList from "./components/SeriesList.jsx";
import { platform, series } from "./data/series.js";

function App() {
  return (
    <>
      <Header
        platform={platform}
        count={series.length}
      />

      <main className="page">
        <h2 className="page__title">
          הסדרות ({series.length})
        </h2>

        <SeriesList series={series} />
      </main>
    </>
  );
}

export default App;
