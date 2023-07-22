import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { bannerImage } from "../components/bannerImage.module.css";
import SocialsBar from "../components/socialsBar";

const AboutPage = () => {
  return (
    <Layout pageTitle={"about"}>
      <StaticImage
        className={bannerImage}
        alt="Website logo - stylised signature of Roo da Silva"
        src="../images/mountain-lake.jpeg"
      />
      <section>
        <h1>About me</h1>
        <p>
          The majority of my career to date has been community focused. I have
          over 10 years of experience in CEO, Founder, Chair, non-executive and
          consulting/mentoring roles giving strategic direction and leadership
          to non-profit organisations and initiatives in the areas of young
          people, education, arts, and disability inclusion.
        </p>
        <p>
          Most recently, between 2017 and 2022 I led the growth of a local
          disability-focused charity into a national youth-led movmement for
          disability inclusion. Alongside this, in 2020 I spent 6 months
          building, developing, and leading award-winning cross-sector
          infrastructure in response to the coronavirus pandemic. In 2022 I took
          a break from full time employment to complete an EMBA - graduating
          with honours - and an intensive three month software development
          programme.
        </p>
        <p>
          My current working life roughly divides into two areas. I offer a wide
          range of consulting, advisory, and mentoring services to community
          focused and non-profit organisations. My skill set now includes
          technical facility in test-driven-development, covering full stack
          web-development, data engineering, cloud engineering, and machine
          learning.
        </p>
        <p>
          At the same time, I have recently begun actively pursuing my passion
          for the arts: specifically illustration, writing, design, and fashion.
          I am currently working on a collection of illustrated stories, and a
          Sheffield based photography project 'We're Playing Basketball'.
        </p>
        <br></br>
        <h2>Creative roots, and a drive to make positive things happen</h2>
        <p>
          Life for me has always involved being creative. The automatic potato
          peeler (aka plant pot and sandpaper combo!) that launched my career as
          a 6 year old. The community focused initiatives and projects that I am
          lucky enough to work on today. This is what I love: to seek out
          problems, learn, invent, develop, iterate, and then do it all over
          again.
        </p>
        <p>
          In 2017 – off the back of a few years creating, learning, teaching,
          and coaching/playing field hockey in Paris and Barcelona – I became a
          very much accidental CEO, taking over the reins at local Oxford
          charity KEEN. I had little idea then that I’d look back 5 years later
          on a journey that included developing KEEN into the UK's leading youth
          led movement for disability inclusion. I’ve also developed a strong
          desire to support and promote change in the voluntary sector. Show me
          a status quo today that is stale and in need of a shake up, and I’ll
          be determined to get in on the shaking.{" "}
        </p>
        <p>
          Along the way and since, I’ve had enough failures to understand how to
          succeed, and how to value what we can learn from both. I’ve learnt how
          important a coherent vision and genuine values are when you are
          required to put these into action as a leader yourself. I’ve seen
          first-hand that the most difficult things – inspirational leadership,
          creating genuine innovation, and addressing the causes rather than
          symptoms of social issues – are also the most important, and the most
          satisfying. My eyes have been opened to the further horizons and
          challenges ahead, and I can’t wait to get stuck into them.
        </p>
        <p>
          When I’m not working, I still like to coach, adventure, and create in
          other ways. I’m trying my best to live every day to the full. Learning
          to dance and being particularly aware to instances of cute animals in
          ‘real life’ is helping me to respond productively to my TikTok
          addiction.
        </p>
      </section>
      <section>
        <SocialsBar />
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;
