import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import ProductGrid from "../components/ProductGrid";
import styles from "./ProductListing.module.css";
import SectionHeader from "../components/SectionHeader";
import Deals from "../components/Deals";

export default function ProductListing() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const productGridStyles = { flex: "3", marginTop: "0" };

  return (
    <main className={styles.productListing}>
      <div className={styles.search}>
        <Filter style={{ flex: "1" }} />
        <ProductGrid number={20} style={productGridStyles}>
          <SectionHeader title={` Results for ${query} in All Departments`} />
        </ProductGrid>
      </div>
      <Deals />
      <ProductGrid title="Recently Viewed" link="See More" number={5}>
        <SectionHeader title="Recently Viewed" link="See More" />
      </ProductGrid>
    </main>
  );
}
