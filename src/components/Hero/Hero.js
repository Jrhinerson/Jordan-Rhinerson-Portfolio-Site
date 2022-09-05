import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey! I am <br />
          Jordan Rhinerson
        </SectionTitle>
        <SectionText>
        Welcome! I'm a Software Engineer with a focus and passion for front-end development. I grew up in retail as a 4th generation Jeweler and a passion to help businesses through technology. I'm excited to show you some of the stuff I have been working on. <br />Let's Go!
        </SectionText>
        <br />
      </LeftSection>
    </Section>
  </>
);

export default Hero;