import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const studyLocations = [
  { name: "Colombia", coordinates: [-74.0721, 4.7110] as [number, number] },
  { name: "Spain", coordinates: [-3.7038, 40.4168] as [number, number] },
  { name: "France", coordinates: [2.3522, 48.8566] as [number, number] },
];

const highlightedCountries = ["COL", "ESP", "FRA"]; // Colombia, Spain, France ISO codes

const WorldMap = () => {
  return (
    <div className="w-full h-[500px] bg-surface rounded-lg border border-border overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = highlightedCountries.includes(geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "hsl(var(--primary))" : "hsl(0 0% 75%)"}
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
            <circle r={8} fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth={2} />
            <circle r={14} fill="hsl(var(--primary) / 0.2)" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
