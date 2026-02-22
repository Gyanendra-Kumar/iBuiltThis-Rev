import {
  FeaturedProducts,
  Hero,
  RecentlyLaunchedProducts,
} from "../components/landing-page";

export default function App() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <RecentlyLaunchedProducts />
    </main>
  );
}
