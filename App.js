import React, { useEffect, useState } from "react";
import Show from "./Show";
import "./styles.css";
import home from "./home-text.gif";
import mask from "./wear-your-mask-just-wear-a-mask.gif";
import safe from "./stay-safe-stay-home.gif";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);
  const [world, setWorld] = useState([]);

  const getWorld = async () => {
    const w = await fetch(
      `https://coronavirus-19-api.herokuapp.com/countries/world`
    );
    const wo = await w.json();
    setWorld(wo);
  };
  const getData = async () => {
    const c = await fetch(
      `https://coronavirus-19-api.herokuapp.com/countries/${country}`
    );
    const name = await c.json();
    setData(name);
  };
  useEffect(() => {
    getWorld();
  }, []);
  return (
    <div>
      <div class="home">
        <img src={home} alt="stay home stay safe " />
        <div class="mask">
          <img src={mask} alt="wear a mask" />
        </div>
        <div>
          <img src={safe} alt="stay safe" />
        </div>
      </div>
      <div class="right_bar">
        <div class="box">
          <div style={{ color: "white" }}>
            <h4>
              world cases <hr /> <p> {world.cases}</p>
            </h4>
            <h4>
              world deaths <hr /> <p> {world.deaths}</p>
            </h4>
            <h4>
              world active <hr /> <p> {world.active}</p>
            </h4>
            <h4>
              world critical <hr /> <p> {world.critical}</p>
            </h4>
          </div>
        </div>
      </div>
      <div class="heading">
        <h1
          style={{
            fontFamily: "'Open Sans', sans-serif",
            marginTop: 13,
            textAlign: "center",
            color: "white"
          }}
        >
          covid depictions
        </h1>
        <input
          className="input"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          type="text"
          placeholder="enter country "
        />
        <button type="button" className="button" onClick={getData}>
          get details
        </button>
      </div>
      <div>
        <div>
          <Show
            title={data.country}
            cases={data.cases}
            tcase={data.todayCases}
            deaths={data.deaths}
            tdeaths={data.todayDeaths}
            recover={data.recovered}
            active={data.active}
            critical={data.critical}
            cpo={data.casesPerOneMillion}
            dpo={data.deathsPerOneMillion}
            ttests={data.totalTests}
            tpo={data.testsPerOneMillion}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
