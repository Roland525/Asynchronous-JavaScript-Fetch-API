import { useState } from "react";

function DogGenerator() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadDog = () => {
    setLoading(true);
    setError(null);
    setImage(null);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImage(data.message))
      .catch(() => setError("Ошибка загрузки"))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>Dog Image Generator</h1>
      <button onClick={loadDog}>Load dog</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {image && <img src={image} alt="dog" style={{ width: "300px" }} />}
    </div>
  );
}

export default DogGenerator;
