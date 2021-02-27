import React, { useState, useEffect } from "react";
import "./App.css";

//TODO
//1) Add close races
//2) Error message for non-ints/negs
//3) UI

//AK CN-H FL-H GA-S IA-H KS KY-H MA MI MO MT NY ND OK-H
//OR PA-H WI
var margins = [
  [4, 1],
  [6, 1],
  [11, 2],
  [12, 1],
  [20, 2],
  [22, 1],
  [23, 1],
  [31, 1],
  [32, 3],
  [33, 1],
  [34, 1],
  [36, 2],
  [40, 3],
  [42, 2],
  [43, 1],
  [45, 1],
  [48, 1],
  [46, 1],
  [51, 1],
  [52, 1],
  [53, 1],
  [56, 1],
  [57, 1],
  [58, 1],
  [59, 3],
  [60, 1],
  [63, 1],
  [64, 1],
  [65, 1],
  [68, 1],
  [69, 1],
  [70, 1],
  [71, 1],
  [72, 1],
  [74, 1],
  [75, 1],
  [76, 3],
  [79, 1],
  [84, 1],
  [87, 2],
  [89, 1],
  [90, 1],
  [94, 1],
  [96, 1],
  [97, 1],
  [99, 1],
  [101, 1],
  [102, 1],
  [104, 1],
  [105, 1],
  [108, 2],
  [109, 1],
  [110, 1],
  [111, 3],
  [113, 2],
  [114, 1],
  [124, 1],
  [125, 1],
  [130, 1],
  [133, 2],
  [136, 1],
  [139, 1],
  [142, 2],
  [144, 1],
  [147, 1],
  [148, 1],
  [149, 1],
  [152, 1],
  [155, 2],
  [156, 1],
  [160, 1],
  [162, 1],
  [163, 1],
  [168, 1],
  [170, 1],
  [173, 1],
  [185, 1],
  [187, 4],
  [193, 1],
  [198, 1],
  [199, 1],
  [203, 1],
  [204, 2],
  [206, 2],
  [210, 1],
  [216, 1],
  [217, 1],
  [220, 2],
  [221, 1],
  [222, 1],
  [223, 1],
  [225, 1],
  [231, 1],
  [237, 1],
  [240, 1],
  [243, 2],
  [247, 1],
  [250, 2],
  [251, 1],
  [260, 1],
  [261, 1],
  [266, 1],
  [267, 1],
  [270, 1],
  [274, 1],
  [276, 1],
  [279, 1],
  [280, 1],
  [285, 1],
  [288, 1],
  [289, 1],
  [299, 1],
  [304, 1],
  [308, 1],
  [309, 1],
  [311, 1],
  [313, 1],
  [314, 1],
  [316, 1],
  [318, 1],
  [319, 1],
  [322, 1],
  [329, 2],
  [331, 1],
  [333, 1],
  [335, 1],
  [337, 1],
  [341, 1],
  [342, 1],
  [343, 1],
  [345, 1],
  [346, 1],
  [347, 1],
  [357, 1],
  [358, 1],
  [361, 1],
  [362, 1],
  [364, 1],
  [366, 1],
  [367, 2],
  [368, 1],
  [371, 1],
  [374, 1],
  [377, 2],
  [378, 1],
  [381, 1],
  [358, 1],
  [386, 1],
  [389, 1],
  [390, 1],
  [392, 1],
  [396, 1],
  [397, 1],
  [398, 1],
  [400, 1],
  [404, 2],
  [405, 1],
  [407, 1],
  [410, 1],
  [412, 2],
  [418, 1],
  [420, 1],
  [422, 2],
  [427, 1],
  [431, 3],
  [433, 1],
  [434, 1],
  [439, 2],
  [445, 1],
  [447, 1],
  [451, 1],
  [453, 1],
  [457, 1],
  [462, 1],
  [472, 1],
  [474, 1],
  [476, 2],
  [477, 1],
  [478, 1],
  [481, 1],
  [482, 1],
  [483, 2],
  [486, 2],
  [487, 2],
  [491, 1],
  [492, 1],
  [494, 1],
  [495, 1],
  [497, 2],
  [500, 4],
  [505, 1],
  [506, 1],
  [507, 1],
  [511, 1],
  [519, 2],
  [521, 1],
  [522, 1],
  [535, 1],
  [536, 1],
  [540, 1],
  [541, 1],
  [548, 1],
  [553, 1],
  [554, 1],
  [555, 1],
  [556, 1],
  [559, 1],
  [561, 1],
  [564, 1],
  [567, 1],
  [566, 1],
  [569, 1],
  [571, 1],
  [581, 1],
  [585, 1],
  [587, 1],
  [589, 2],
  [591, 1],
  [592, 1],
  [597, 1],
  [605, 1],
  [606, 1],
  [607, 1],
  [612, 2],
  [614, 2],
  [617, 1],
  [621, 1],
  [624, 1],
  [626, 1],
  [630, 1],
  [631, 1],
  [634, 2],
  [645, 1],
  [647, 1],
  [652, 2],
  [653, 1],
  [657, 1],
  [660, 1],
  [665, 1],
  [666, 1],
  [671, 1],
  [675, 1],
  [680, 1],
  [682, 1],
  [684, 1],
  [693, 1],
  [694, 2],
  [696, 1],
  [697, 2],
  [698, 1],
  [702, 1],
  [703, 1],
  [724, 1],
  [725, 1],
  [729, 1],
  [734, 2],
  [736, 2],
  [737, 1],
  [738, 2],
  [742, 1],
  [744, 1],
  [748, 1],
  [754, 1],
  [756, 1],
  [759, 1],
  [761, 2],
  [762, 1],
  [764, 1],
  [770, 1],
  [773, 1],
  [777, 1],
  [788, 1],
  [779, 1],
  [795, 1],
  [796, 2],
  [810, 1],
  [819, 1],
  [820, 1],
  [821, 2],
  [826, 1],
  [828, 1],
  [829, 1],
  [832, 1],
  [837, 1],
  [838, 1],
  [842, 1],
  [846, 1],
  [849, 1],
  [862, 1],
  [854, 1],
  [863, 1],
  [864, 2],
  [869, 1],
  [872, 1],
  [873, 1],
  [880, 1],
  [885, 1],
  [887, 1],
  [891, 2],
  [896, 1],
  [904, 1],
  [906, 1],
  [907, 1],
  [908, 1],
  [909, 1],
  [915, 1],
  [917, 1],
  [923, 1],
  [933, 1],
  [935, 1],
  [938, 1],
  [943, 1],
  [945, 1],
  [948, 1],
  [953, 1],
  [963, 1],
  [975, 2],
  [983, 1],
  [984, 1]
];

function Header() {
  return (
    <header>
      <h1 style={{ textAlign: "center" }}>
        How much of an impact did your volunteering have on turnout?
      </h1>
    </header>
  );
}

function updateTotal(vols, setVols, setTotal, setFlips) {
  var tot = 0;
  var cnt = 0;
  console.log(vols);
  for (var i = 0; i < vols.length; i++) {
    tot += vols[i];
  }
  setVols(vols);
  setTotal(tot);

  for (var i = 0; i < margins.length; i++) {
    if (margins[i][0] > tot) {
      break;
    }
    cnt += margins[i][1];
  }
  setFlips(cnt);
}

function updateDoor(doors, vols, setVols, setTotal, setFlips) {
  if (!isNaN(doors) && doors > 0) {
    vols[0] = Math.round(doors / 14);
  } else {
    vols[0] = 0;
  }
  updateTotal(vols, setVols, setTotal, setFlips);
}

function updateCalls(calls, vols, setVols, setTotal, setFlips) {
  if (!isNaN(calls) && calls > 0) {
    vols[1] = Math.round(calls / 20);
  } else {
    vols[1] = 0;
  }
  updateTotal(vols, setVols, setTotal, setFlips);
}

function updateLetters(letters, vols, setVols, setTotal, setFlips) {
  if (!isNaN(letters) && letters > 0) {
    vols[2] = Math.round(letters / 33);
  } else {
    vols[2] = 0;
  }
  updateTotal(vols, setVols, setTotal, setFlips);
}

function updateTexts(texts, vols, setVols, setTotal, setFlips) {
  if (!isNaN(texts) && texts > 0) {
    vols[3] = Math.round(texts / 500);
  } else {
    vols[3] = 0;
  }
  updateTotal(vols, setVols, setTotal, setFlips);
}

function updatePerson(person, vols, setVols, setTotal, setFlips) {
  if (!isNaN(person) && person > 0) {
    vols[4] = Math.round(person);
  } else {
    vols[4] = 0;
  }
  updateTotal(vols, setVols, setTotal, setFlips);
}

function changeCong(total, setCong) {}

function CalcVolunteer() {
  const [vols, setVols] = useState([0, 0, 0, 0, 0]); //[doors, calls, letters,texts,people]
  const [total, setTotal] = useState(0);
  const [flips, setFlips] = useState(0);
  const [cong, setCong] = useState(0);
  return (
    <div>
      <div style={{ textAlign: "center" }} id="doors">
        <h2>How Many Doors Did You Knock On?</h2>
        <input
          style={{ align: "center" }}
          type="text"
          onChange={event => {
            console.log(event.target.value);
            updateDoor(event.target.value, vols, setVols, setTotal, setFlips);
            changeCong(total, setCong);
          }}
        />
      </div>
      <div style={{ textAlign: "center" }} id="calls">
        <h2>How Many Calls Did You Make?</h2>
        <input
          style={{ align: "center" }}
          type="text"
          onChange={event => {
            updateCalls(event.target.value, vols, setVols, setTotal, setFlips);
            changeCong(total, setCong);
          }}
        />
      </div>
      <div style={{ textAlign: "center" }} id="letters">
        <h2>How Many Letters Did You Send?</h2>
        <input
          style={{ align: "center" }}
          type="text"
          onChange={event => {
            updateLetters(
              event.target.value,
              vols,
              setVols,
              setTotal,
              setFlips
            );
            changeCong(total, setCong);
          }}
        />
      </div>
      <div style={{ textAlign: "center" }} id="texts">
        <h2>How Many Texts Did You Send?</h2>
        <input
          style={{ align: "center" }}
          type="text"
          onChange={event => {
            updateTexts(event.target.value, vols, setVols, setTotal, setFlips);
            changeCong(total, setCong);
          }}
        />
      </div>
      <div style={{ textAlign: "center" }} id="in_person">
        <h2>How Many People Did You Convince to Vote in Person?</h2>
        <input
          style={{ align: "center" }}
          type="text"
          onChange={event => {
            updatePerson(event.target.value, vols, setVols, setTotal, setFlips);
            changeCong(total, setCong);
          }}
        />
      </div>
      <div style={{ textAlign: "center" }} id="total">
        <h2>You convinced {total} people to vote</h2>
        <h2>
          That's enough to flip {flips} race(s) in the 2020 General Election
        </h2>
        {total >= 6 && total < 12 && (
          <h2>
            That includes <i>1</i> races for the US Congress
          </h2>
        )}
        {total >= 12 && total < 333 && (
          <h2>
            That includes <i>2</i> races for the US Congress
          </h2>
        )}
        {total >= 333 && (
          <h2>
            That includes <i>3</i> races for the US Congress
          </h2>
        )}
      </div>
    </div>
  );
}

function App({ login }) {
  return (
    <div>
      <Header />
      <CalcVolunteer />
    </div>
  );
}

export default App;
