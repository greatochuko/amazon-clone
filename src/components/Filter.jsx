import { useState } from "react";
import styles from "./Filter.module.css";
import Rating from "./Rating";

export default function Filter({ style }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  function handleMaxPrice(e) {
    setMaxPrice((curr) => (e.target.value > minPrice ? e.target.value : curr));
  }
  function handleMinPrice(e) {
    setMinPrice((curr) => (e.target.value < maxPrice ? e.target.value : curr));
  }

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
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Brand</h3>
        <div className={styles.filterOptions}>
          <label htmlFor="hp">
            <input type="checkbox" name="brand" id="hp" value="hp" />
            HP
          </label>
          <label htmlFor="dell">
            <input type="checkbox" name="brand" id="dell" value="dell" />
            Dell
          </label>
          <label htmlFor="Lenovo">
            <input type="checkbox" name="brand" id="Lenovo" value="Lenovo" />
            Lenovo
          </label>
          <label htmlFor="Samsung">
            <input type="checkbox" name="brand" id="Samsung" value="Samsung" />
            Samsung
          </label>
          <label htmlFor="Apple">
            <input type="checkbox" name="brand" id="Apple" value="Apple" />
            Apple
          </label>
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Price</h3>
        <div className={styles.range}>
          <div className={styles.rangeSlider}>
            <span
              className={styles.rangeSelected}
              style={{
                left: `${minPrice}%`,
                right: `${100 - maxPrice}%`,
              }}
            ></span>
          </div>

          <div className={styles.rangeInput}>
            <input
              type="range"
              className="min"
              min="0"
              max="100"
              value={minPrice}
              step="1"
              onChange={handleMinPrice}
            />
            <input
              type="range"
              className="max"
              min="0"
              max="100"
              value={maxPrice}
              step="1"
              onChange={handleMaxPrice}
            />
          </div>
          <div className={styles.rangePrice}>
            <label htmlFor="min">
              Min
              <input
                type="number"
                name="min"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
            </label>
            <label htmlFor="max">
              Max
              <input
                type="number"
                name="max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </label>
          </div>
        </div>
      </div>
      <button className={styles.applyFilterBtn}>Apply Filters</button>
    </div>
  );
}
