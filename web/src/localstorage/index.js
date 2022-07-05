import { sessionGet, sessionSave } from "../utils/helper";

const loadState = () => {
  try {
    const serializedState = sessionGet("redux");
    if (serializedState === null) {
      return undefined;
    } else {
      return serializedState;
    }
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = state;
    sessionSave("redux", serializedState);
  } catch (error) {
    console.log(error.message);
  }
};

export { loadState, saveState };
