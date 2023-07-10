import { Icon } from "leaflet";
import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

export default function Markerposition({ address }) {
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3082/3082383.png",
    iconSize: [48, 48],
  });

  const position = useMemo(() => {
    return [address.latitude, address.longitude];
  }, [address.latitude, address.longitude]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={customIcon} position={position}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  );
}
