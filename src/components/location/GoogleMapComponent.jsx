import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
};

const center = {
  lat: 40.76260027266125,
  lng: -73.80626218650772,
};

function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBd2wTj107Dlqkpgi_-m2sBsW1EO-AWb1I",
    libraries: ["marker"],
    language: "en",
  });

  const onLoad = (map) => {
    const img = document.createElement("img");
    img.src = "assets/images/logo.png"; // public 폴더 경로
    img.style.width = "50px";
    img.style.height = "50px";

    new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
      // content: img, // 이미지 DOM을 직접 넣음
    });
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          onLoad={onLoad}
          options={{
            mapId: "I-Aesthetic",
          }}
        />
      ) : (
        <p>Loading map...</p>
      )}
    </>
  );
}

export default React.memo(GoogleMapComponent);
