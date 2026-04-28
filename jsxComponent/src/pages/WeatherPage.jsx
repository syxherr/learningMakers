import "../index.css";
import PixelSnow from "../component/PixelSnow";

function WeatherPage() {
  return (
    <div className="weather-container">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <PixelSnow
        color="#ffffff"
        flakeSize={0.008}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.35}
        density={0.3}
        direction={135}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
      />
      </div>
    </div>
  );
}

export default WeatherPage;
