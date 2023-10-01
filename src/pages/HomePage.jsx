import Categories from "../components/Categories";
import Deals from "../components/Deals";
import Hero from "../components/Hero";
import HotDeals from "../components/HotDeals";
import NewsLetter from "../components/NewsLetter";
import ProductGrid from "../components/ProductGrid";
import SectionHeader from "../components/SectionHeader";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HotDeals />
      <Categories />
      <ProductGrid title="Recently Viewed" link="See More">
        <SectionHeader title="Recently Viewed" link="See More" />
      </ProductGrid>
      <Deals />
      <NewsLetter />
    </main>
  );
}
