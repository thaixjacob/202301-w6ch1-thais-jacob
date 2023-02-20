import { useAppDispatch } from "../../app/hooks";
import { randomNumberAsync } from "./initializeSlice";
import styles from "./Initialize.module.css";

export function Initialize() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
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
