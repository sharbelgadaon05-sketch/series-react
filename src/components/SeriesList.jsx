import SeriesCard from "./SeriesCard.jsx";

function SeriesList({
  series,
  savedSeries,
  onToggleSaved
}) {
  return (
    <section className="series-list">
      {series.map((item) => (
        <SeriesCard
          key={item.id}
          id={item.id}
          title={item.title}
          genre={item.genre}
          startYear={item.startYear}
          creator={item.creator.name}
          ended={item.ended}
          nextYear={item.nextSeason?.year}
          seasons={item.seasons}
          isSaved={savedSeries.includes(item.id)}
          onToggleSaved={onToggleSaved}
        />
      ))}
    </section>
  );
}

export default SeriesList;