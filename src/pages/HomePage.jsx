import Categories from "../components/Categories";
import Deals from "../components/Deals";
import Hero from "../components/Hero";
import HotDeals from "../components/HotDeals";
import NewsLetter from "../components/NewsLetter";
import ProductGrid from "../components/ProductGrid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HotDeals />
      <Categories />
      <ProductGrid title="Last Viewed" link="See More" />
      <Deals />
      <NewsLetter />
    </main>
  );
}
