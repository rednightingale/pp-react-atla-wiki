// -- Mes imports locaux
import ResultsItem from "./ResultsItem";

import "./style.scss";

// -- Mon composant
function Results() {
  return (
    <div className="Results">
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
    </div>
  );
}

// -- Mon export
export default Results;
