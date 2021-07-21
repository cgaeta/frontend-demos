import { createSlice } from '@reduxjs/toolkit';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import MaterialButton from '@material-ui/core/Button';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'lazyCounter',
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
  },
});

const { increment } = counterSlice.actions;

const selectCount = (state: RootState) => state.lazyCounter.value;

export const { reducer } = counterSlice;

const ReduxCounter = () => {
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{counter}</div>
      <div>
        <MaterialButton
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
        >
          Material Button
        </MaterialButton>
      </div>
    </div>
  );
}

export default ReduxCounter;
