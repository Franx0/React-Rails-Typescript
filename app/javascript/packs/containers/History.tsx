// React
import React, { useRef, useEffect, useState, FunctionComponent } from 'react';
// Redux
import { connect } from "react-redux";
// Components
import List from "../components/histories/list"
// Actions
import { fetchHistories, fetchHistoryCreate } from "./histories/actions";

const History: FunctionComponent<any> = ({fetchHistories, fetchHistoryCreate, histories}) => {
  let inputRef = useRef(null);
  const [currentValues, setCurrentValues] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if(histories === undefined) fetchHistories();
  }, [histories]);

  const validateValue = (value, currentValues) => {
    if(value === null || !value.length || isNaN(value)) {
      setError('Value is not a number');
    } else {
      resetInputValue("");
      setCurrentValues([...currentValues, parseInt(value)]);
    }
  };

  const handleSubmit = (values) => {
    fetchHistoryCreate({
      history: {
        data: values,
        typed: 'numeric'
      }
    })
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 8) setError(null);
  }

  const resetInputValue = (value) => {
    inputRef.current.value = value;
    setValue(value);
  }

  return (
    <>
      <div>
        <span>
          <input ref={inputRef}
                 type="number"
                 value={value}
                 min="0"
                 onChange={(e) => setValue(e.target.value)}
                 onKeyDown={(e) => onKeyDown(e)}>

          </input>
        </span>
        <button type="button" onClick={() => validateValue(value, currentValues)}>+</button>
        {error != null && <span>{error}</span>}
        <div>
          <p>{currentValues.join(' + ')}</p>
          <p>
            <button type="button" onClick={() => handleSubmit(currentValues)}>Submit</button>
          </p>
        </div>
      </div>
      <List data={histories} />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    histories: state.history.data
  };
};

const mapDispatchToProps = {
  fetchHistories: fetchHistories,
  fetchHistoryCreate: fetchHistoryCreate
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
