import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <Main>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>

        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add Amount
          </button>
          <button onClick={resetAll}>Reset</button>
        </div>
      </section>
    </Main>
  );
};

const Main = styled.main`
  min-height: 100vh;
  font-size: 5rem;
  display: grid;
  place-content: center;
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input,
    button {
      font: inherit;
      padding: 0.5rem;
    }
    input {
      text-align: center;
      max-width: 2.5em;
    }
    button {
      font-size: 2rem;
      margin: 0.5em 0 0.5em 0.5em;
      min-width: 2em;

      &:first-child {
        margin-left: 0;
      }
    }
  }
`;
export default Counter;
