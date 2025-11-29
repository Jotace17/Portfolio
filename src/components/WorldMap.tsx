import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const studyLocations = [
  { name: "Colombia", coordinates: [-75.0721, 9.0210] as [number, number] },
  { name: "Spain", coordinates: [-4.7038, 43.4168] as [number, number] },
  { name: "France", coordinates: [4.3522, 46.8566] as [number, number] },
];

const highlightedCountries = [170, 724, 250];

const WorldMap = () => {
  return (
    <div className="w-full h-[500px] md:h-[500px] bg-surface rounded-lg border border-border overflow-auto">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 200,
          center: [0, 20],
        }}
        className="w-full h-full min-w-[800px] md:min-w-0"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = highlightedCountries.includes(Number(geo.id));

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "hsla(217, 64%, 36%, 1.00)" : "hsl(0 0% 75%)"}
                  stroke="hsl(var(--border))"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: isHighlighted ? "hsl(var(--primary) / 0.8)" : "hsl(0 0% 65%)", outline: "none" },
                    pressed: { outline: "none" },
                  }}

                />
              );
            })
          }
        </Geographies>
        {studyLocations.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={3} fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth={2} />
            <circle r={4} fill="hsl(var(--primary) / 0.2)" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
