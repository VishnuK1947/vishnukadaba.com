import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        <span className="emoji">👋</span> I'm Vishnu <br />
        a data-driven <span className="emoji">⛁</span><br />
        software developer
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        I am passionate about data science, software engineering, AI/ML, linguistics, neurotechnology, <br />and computational neuroscience. <br />
        Scroll to learn more about me!
        </SectionText>
        {/*<Button onClick={props.handleClick}>Learn More</Button>*/}
      </LeftSection>
    </Section>
  </>
);

export default Hero;