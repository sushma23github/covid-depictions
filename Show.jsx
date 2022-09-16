import React from "react";

function Show(list) {
  return (
    <div>
      <div class="block">
        <div style={{ color: "white" }}>
          <div class="box">
            <h4>
              country <hr />
              <p> {list.title}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              cases <hr /> <p>{list.cases}</p>
            </h4>{" "}
          </div>
          <br />
          <div class="box">
            <h4>
              today cases <hr /> <p>{list.tcase}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              deaths <hr /> <p>{list.deaths}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              total deaths <hr />
              <p> {list.tdeaths}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              recovered <hr /> <p> {list.recover} </p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              active <hr /> <p>{list.active}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              critical <hr />
              <p>{list.critical}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              cases per one million <hr /> <p>{list.cpo}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              deaths per one million <hr /> <p>{list.dpo}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              total tests <hr />
              <p> {list.ttests}</p>
            </h4>
          </div>
          <br />
          <div class="box">
            <h4>
              tests per one million <hr />
              <p>{list.tpo}</p>
            </h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Show;
