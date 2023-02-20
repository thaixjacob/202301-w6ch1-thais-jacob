import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { randomNumberAsync, selectNumber } from "./initializeSlice";
import styles from "./Initialize.module.css";

export function Initialize() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectNumber);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          onClick={() => dispatch(randomNumberAsync())}
        >
          init from API
        </button>
      </div>
    </div>
  );
}
