
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeaturedCarousel from '../components/FeaturedCarousel';
import TrendingSection from '../components/TrendingSection';
import PromoBlock from '../components/PromoBlock';
import VideoSection from '../components/VideoSection';
import CategoriesGrid from '../components/CategoriesGrid';
import TournamentTeaser from '../components/TournamentTeaser';
import Footer from '../components/Footer';

function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCarousel />
      <TrendingSection />
      <PromoBlock imageFirst={true} />
      <PromoBlock imageFirst={false} />
      <VideoSection />
      <CategoriesGrid />
      <TournamentTeaser />
      <Footer />
    </Layout>
  );
}

export default Home;
