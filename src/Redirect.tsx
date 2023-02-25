import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Redirect() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [data, setData] = useState("");

  useEffect(function () {
    fetch(
      `https://raw.githubusercontent.com/PrankGG/go-paths/main/${location.pathname}.txt`
    )
      .then((res) => res.text())
      .then((data) => {
        setLoading(false);
        if (data === "404: Not Found") {
          setFailed(true);
        }
        setData(
          data
            .replaceAll("{ref}", document.referrer)
            .replaceAll("{lang}", navigator.language)
            .replaceAll("{redirectAt}", String(Date.now()))
        );
      });
  }, []);

  if (data && !loading && !failed) {
    window.location.href = data;
    return <p>Redirecting to {data}...</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return <p>Invalid redirect.</p>;
}
