import "./style.css";

import Experience from "./experience/experience";

document.querySelector("#app").innerHTML = `
<div id="sketch"></div>
`;

new Experience("#sketch");