import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  randomNumberAsync,
  selectNumber,
  selectStatus,
} from "./initializeSlice";
import styles from "./Initialize.module.css";

export function Initialize() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectNumber);
  const status = useAppSelector(selectStatus);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
        <div className="lds-ring">
          <button
            className={
              status === "loading" ? styles.asyncButton : styles.button
            }
            onClick={() => dispatch(randomNumberAsync())}
          >
            init from API
          </button>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
