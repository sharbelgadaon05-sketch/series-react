import { useState } from "react";

import Header from "./components/Header.jsx";
import SeriesList from "./components/SeriesList.jsx";

import { platform, series } from "./data/series.js";

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sortByYear, setSortByYear] = useState(false);

  const [savedSeries, setSavedSeries] = useState([]);

  function toggleSaved(id) {
    setSavedSeries((prev) =>
      prev.includes(id)
        ? prev.filter((seriesId) => seriesId !== id)
        : [...prev, id]
    );
  }

  let displayedSeries = series;

  if (onlyAvailable) {
    displayedSeries = displayedSeries.filter(
      (item) => item.ended === false
    );
  }

  if (sortByYear) {
    displayedSeries = [...displayedSeries].sort(
      (a, b) => a.startYear - b.startYear
    );
  }

  return (
    <>
      <Header
        platform={platform}
        count={series.length}
        savedCount={savedSeries.length}
      />

      <main className="page">
        <div className="toolbar">
          <button
            className={
              onlyAvailable
                ? "btn btn--active"
                : "btn"
            }
            onClick={() => setOnlyAvailable(!onlyAvailable)}
          >
            רק סדרות משודרות
          </button>

          <button
            className={
              sortByYear
                ? "btn btn--active"
                : "btn"
            }
            onClick={() => setSortByYear(!sortByYear)}
          >
            מיון לפי שנה
          </button>
        </div>

        <h2 className="page__title">
          הסדרות ({displayedSeries.length})
        </h2>

        <SeriesList
          series={displayedSeries}
          savedSeries={savedSeries}
          onToggleSaved={toggleSaved}
        />
      </main>
    </>
  );
}

export default App;