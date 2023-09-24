import Categories from "../components/Categories";
import Hero from "../components/Hero";
import HotDeals from "../components/HotDeals";
import ProductGrid from "../components/ProductGrid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HotDeals />
      <Categories />
      <ProductGrid title="Last Viewed" link="See More" />
    </main>
  );
}
