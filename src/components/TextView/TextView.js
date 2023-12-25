import "./TextView.scss";

import { useContext } from "react";

import { JSONContext } from "../../context/JSONContext";

function TextView({ handleChange }) {
  const context = useContext(JSONContext);
  return (
    <section>
      <textarea
        autoFocus
        onChange={handleChange}
        value={context.json}
      ></textarea>
    </section>
  );
}

export default TextView;
