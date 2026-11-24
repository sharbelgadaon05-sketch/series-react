
import Header from "./components/Header.jsx";
import SeriesCard from "./components/SeriesCard.jsx";
import { platform, series } from "./data/series.js";

function App() {
  return (
    <>
      <Header
        platform={platform}
        count={series.length}
      />

      <main>
        <SeriesCard
          title="Code Red"
          genre="Thriller"
          startYear={2020}
          creator="Noam Shalev"
          ended={true}
          nextYear={undefined}
          seasons={series[2].seasons}
        />
      </main>
    </>
  );
}

export default App;
