import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    if (currentId !== selected) {
      setSelected(currentId);
    } else {
      setSelected(null);
    }
  }

  function toggleMultiSelection() {
    setEnableMultiSelection(!enableMultiSelection);
    setMultiple([]);
    setSelected(null);
  }

  function handleMultiSelection(currentId) {
    if (multiple.includes(currentId)) {
      setMultiple(multiple.filter((item) => item !== currentId));
    } else {
      setMultiple([...multiple, currentId]);
    }
  }

  return (
    <div className="wrapper">
      <button onClick={toggleMultiSelection}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                ((enableMultiSelection && multiple.includes(dataItem.id)) ||
              (!enableMultiSelection && (selected === dataItem.id))) ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found </div>
        )}
      </div>
    </div>
  );
}
