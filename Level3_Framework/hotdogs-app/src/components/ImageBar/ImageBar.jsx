import React from "react";
import "lazysizes";
import styles from "./ImageBar.module.scss";
function ImageBar() {
  return (
    <section className={styles.bar}>
      <ul className={styles.list}>
        {[5, 7, 8, 6, 5, 7, 1, 2, 3, 4, 1, 2].map((indx, i) => {
          return (
            <li key={i} className={styles.img_wrapper}>
              <picture>
                <source
                  data-srcset={`/imgs/img-${indx}@1x.webp 1x, /imgs/img-${indx}@2x.webp 2x`}
                  type="image/webp"
                />
                <img
                  className={`${styles.img} lazyload`}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwcHgiIGhlaWdodD0iMjUwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8cmVjdCBmaWxsPSIjYjRiNWI1IiBoZWlnaHQ9IjI1MCIgd2lkdGg9IjI1MCIgeD0iMCIgeT0iMCIvPgo8L3N2Zz4K"
                  data-src={`/imgs/img-${indx}@1x.jpg`}
                  data-srcset={`/imgs/img-${indx}@2x.jpg 2x`}
                  alt="food: burgers and hotdogs"
                />
              </picture>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ImageBar;
