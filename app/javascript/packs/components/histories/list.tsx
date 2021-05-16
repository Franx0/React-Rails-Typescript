// React
import React, { useEffect, FunctionComponent, useState } from 'react';

const List: FunctionComponent<any> = (props: { data: Array<any> }) => {
  const [values, setValues] = useState(props.data || []);

  useEffect(() => {
    setValues(props.data || values)
  }, [props.data]);

  return (
    <table>
      <thead>
        <tr>
          <th>Calculation</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {values.map((history: any, i: number) => {
          return(
            <tr key={`log-${i}`}>
              <td>({history.history.data.join(' + ')}) = {history.calculation}</td>
              <td>{history.history.created_at}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default List;
