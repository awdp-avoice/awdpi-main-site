import React from "react";
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const MapChart = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <Tooltip id="my-tooltip">{content}</Tooltip>
      <ComposableMap projectionConfig={{ scale: 180, center: [20, 3] }}>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#F2F1FB"
                style={{
                  default: { fill: "#A8ABFA", outline: "none" },
                  hover: { fill: "#4E55FE", outline: "none" },
                  pressed: {
                    outline: "none",
                  },
                }}
                onMouseEnter={() => {
                  setContent(`${geo.properties.name}`);
                }}
                onMouseLeave={() => {
                  setContent("");
                }}
                data-tooltip-id="my-tooltip"
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[116.4074, 39.9042]}>
          <circle r={5} fill="#FF5678" />
        </Marker>
        <Marker coordinates={[-0.1276, 51.5072]}>
          <circle r={5} fill="#FF5678" />
        </Marker>
        <Marker coordinates={[-74.006, 40.7128]}>
          <circle r={5} fill="#FF5678" />
        </Marker>
      </ComposableMap>
    </>
  );
};

export default MapChart;
