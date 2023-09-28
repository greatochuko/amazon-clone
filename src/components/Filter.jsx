import styles from "./Filter.module.css";
import Rating from "./Rating";

export default function Filter({ style }) {
  return (
    <div className={styles.filter} style={style}>
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Seller</h3>
        <div className={styles.filterOptions}>
          <label htmlFor="Vaseat">
            <input type="checkbox" name="seller" id="Vaseat" value="Vaseat" />
            Vaseat
          </label>
          <label htmlFor="SteelCase">
            <input
              type="checkbox"
              name="seller"
              id="SteelCase"
              value="SteelCase"
            />
            SteelCase
          </label>
          <label htmlFor="hermanMiller">
            <input
              type="checkbox"
              name="seller"
              id="hermanMiller"
              value="herman Miller"
            />
            Herman Miller
          </label>
          <label htmlFor="HaworthInc">
            <input
              type="checkbox"
              name="seller"
              id="HaworthInc"
              value="Haworth Inc"
            />
            Haworth Inc
          </label>
          <label htmlFor="HNICorporation">
            <input
              type="checkbox"
              name="seller"
              id="HNICorporation"
              value="HNI Corporation"
            />
            HNI Corporation
          </label>
        </div>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Customer Rating</h3>
        <div className={styles.filterOptions}>
          <label htmlFor="">
            <input type="checkbox" name="rating" id="rating5" value="Vaseat" />
            <Rating maxRating={5} rating={5} />
          </label>
          <label htmlFor="">
            <input type="checkbox" name="rating" id="rating4" value="Vaseat" />
            <Rating maxRating={5} rating={4} />
          </label>
          <label htmlFor="">
            <input type="checkbox" name="rating" id="rating3" value="Vaseat" />
            <Rating maxRating={5} rating={3} />
          </label>
          <label htmlFor="">
            <input type="checkbox" name="rating" id="rating2" value="Vaseat" />
            <Rating maxRating={5} rating={2} />
          </label>
          <label htmlFor="">
            <input type="checkbox" name="rating" id="rating1" value="Vaseat" />
            <Rating maxRating={5} rating={1} />
          </label>
        </div>
      </div>
    </div>
  );
}
