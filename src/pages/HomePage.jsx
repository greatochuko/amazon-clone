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
      <ProductGrid link="See More" category="headphones" />
      <ProductGrid link="See More" category="gaming accessories" />
      <Deals />
      <NewsLetter />
    </main>
  );
}
