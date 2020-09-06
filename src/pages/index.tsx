import React from 'react';
import { Title } from 'components/common/Title';
import { Image } from 'components/common/Image';
import { Article } from 'components/common/Article';

function Home(): React.ReactElement {
  return (
    <>
      <Title>@samwatts98</Title>
      <Article>
        <Image src={'./assets/me.jpg'} width="360" height="450" />
        <p>
          Work in progress :) Made entirely from scratch in React, React Router, Redux, Styled-Components, Webpack, and
          Jest! This static-rendered website is built entirely from these modules, and does not depend on Next.JS
        </p>
      </Article>
    </>
  );
}

export default Home;
