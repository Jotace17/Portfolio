import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const studyLocations = [
  { name: "Technical University", coordinates: [13.405, 52.52] as [number, number] }, // Berlin example
  { name: "State University", coordinates: [-73.935242, 40.730610] as [number, number] }, // NYC example
];

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
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(var(--muted))"
                stroke="hsl(var(--border))"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "hsl(var(--accent) / 0.3)", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
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
