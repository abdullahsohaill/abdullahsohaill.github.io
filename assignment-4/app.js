const { useState } = React;

function Counter({ id }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Counter {id}</h5>
        <p className="card-text">{count}</p>
        <button className="btn btn-custom" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

function CounterGrid() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, counters.length + 1]);
  };

  return (
    <div>
      <button className="btn btn-add mb-4 w-100" onClick={addCounter}>Add Counter</button>
      <div className="row">
        {counters.map((counterId) => (
          <div key={counterId} className="col-lg-4 col-md-6">
            <Counter id={counterId} />
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<CounterGrid />, document.getElementById('root'));
