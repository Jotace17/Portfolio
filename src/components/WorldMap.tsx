import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = ["COL", "ESP", "FRA"]; // Colombia, Spain, France ISO codes

const WorldMap = () => {
  return (
    <div className="w-full h-[500px] md:h-[500px] bg-surface rounded-lg border border-border overflow-auto">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
        }}
        className="w-full h-full min-w-[800px] md:min-w-0"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = highlightedCountries.includes(geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "hsl(var(--primary))" : "hsl(0 0% 50%)"}
                  stroke="hsl(var(--border))"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: isHighlighted ? "hsl(var(--primary) / 0.8)" : "hsl(0 0% 40%)", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                  className={isHighlighted ? "animate-pulse" : ""}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
