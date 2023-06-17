import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [240, -15, 0],
        center: [0, 0],
        scale: 1400
      }}
      style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="rgba(255,255,255,.1)"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[121, 14]}
        dx={-50}
        dy={-20}
        connectorProps={{
          stroke: "#F7F700",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F7F700">
          {"Manila"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;