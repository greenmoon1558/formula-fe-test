import React from "react";
import styles from "./Info.module.scss";
function Info() {
  return (
    <section className={styles.info} id="about">
      <img
        className={`${styles.img} lazyload`}
        data-src="/imgs/hotdog.svg"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHZlcnNpb249IjEuMSI+CiAgICA8cmVjdCB3aWR0aD0iOTIiIGhlaWdodD0iOTIiIHg9IjQiIHk9IjAiIGZpbGw9IiNmYmZhZmEiLz4KPC9zdmc+Cg=="
        alt="hotdog"
      />
      <h1 className={styles.headline}>
        Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.
      </h1>
      <div className={styles.btn_wrapper}>
        <button className={styles.btn} type="button">
          More Dogs ‘n Make Em Hot
        </button>
      </div>
    </section>
  );
}

export default Info;
