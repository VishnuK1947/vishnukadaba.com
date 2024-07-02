import {Layout} from '../layout/Layout';
import {IntroSection, Section} from '../styles/GlobalComponents';
// import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { useMediaQuery } from '../utils/mediaquery';

const Home = () => {
  return (
    <Layout>
      {useMediaQuery() ? (
        <Section grid center> <Hero /> </Section>
      ) : (
        <IntroSection grid center>
          <Hero />
          <BgAnimation />
        </IntroSection>
      )}
      <Timeline />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;