import { useMap } from "react-leaflet";


export default function ChangeView({ center, markers }) {
    const map = useMap();
    if (markers) {
      map.fitBounds(markers, {padding: [30, 30]})
    }
    map.setView(center);

    return null;
  }