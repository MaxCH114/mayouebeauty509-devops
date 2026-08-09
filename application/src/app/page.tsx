import BannerSlider from "@/components/BannerSlider";
import BekaryCategories from "@/components/BekaryCategories";
import BooksCategory from "@/components/BooksCategory";
import FeaturedProducts from "@/components/FeaturedProducts";
import ShopCategories from "@/components/ShopCategories";
import HeroSlider from "@/components/heros/HeroSlider";

const heroImages = [
  {
    bgImg: "/heroImages/makeup1.png",
  },
  {
    bgImg: "/heroImages/makeup2.png",
  },
];

const banners = [
  {
    img: "/bannerImages/banner1.png",
  },
  {
    img: "/bannerImages/banner2.png",
  },
  {
    img: "/bannerImages/banner3.png",
  },
  {
    img: "/bannerImages/banner4.png",
  },
  {
    img: "/bannerImages/banner5.png",
  },
];

export default function Home({
  searchParams,
}: {
  searchParams: {
    featured: string;
  };
}) {
  return (
    <main>
      <HeroSlider heroImages={heroImages} />
      <BannerSlider bannerImages={banners} />
      <ShopCategories />
      <BooksCategory />
      <BekaryCategories />
      <FeaturedProducts featured={searchParams.featured} />
    </main>
  );
}
