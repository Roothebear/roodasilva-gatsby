import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { bannerImg, bannerSection } from "../components/layout.module.css";

const AboutPage = ({ data }) => {
  console.log("data: ", data);

  return (
    <Layout pageTitle={"about"}>
      <section className={bannerSection}>
        <StaticImage
          className={bannerImg}
          alt="Website logo - stylised signature of Roo da Silva"
          src="../images/mountain-lake.jpeg"
        />
      </section>
      <section>
        <h1>About me</h1>
        <p>
          Life for me has always involved being creative. The automatic potato
          peeler (aka plant pot and sandpaper combo) that launched my career as
          a 6 year old. The community focused initiatives and projects that I am
          lucky enough to work on today. This is what I love: to seek out
          problems, learn, invent, develop, iterate, and then do it all over
          again.
        </p>
        <p>
          In 2017 – off the back of a few years creating, learning, teaching,
          and coaching/playing field hockey in Paris and Barcelona – I became a
          very much accidental CEO, taking over the reins at local Oxford
          charity KEEN. I had little idea then that I’d look back 3 years later
          on a journey that included growing KEEN. I’ve developed a strong
          desire to support and promote change in the voluntary sector. Show me
          a status quo today that is stale and in need of a shake up, and I’ll
          be determined to get in on the shaking.{" "}
        </p>
        <p>
          Along the way and since, I’ve had enough failures to understand what a
          hard fought success feels like, and how to value both. I’ve learnt how
          important a coherent vision and genuine values are when you are
          required to put these into action as a leader yourself. I’ve seen
          first-hand that the most difficult things – good leadership, creating
          genuine innovation, and addressing the causes rather than symptoms of
          social issues – are also the most important, and the most satisfying.
          Alongside the satisfaction of success, I’ve been exhausted, deflated,
          frustrated, and several things more. But somehow, come through still
          smiling (most of the time). My eyes have been opened to the further
          horizons and challenges ahead, and I can’t wait to get stuck into
          them.
        </p>
        <p>
          When I’m not working, I still like to coach, adventure, and create in
          other ways. I’m trying my best to live every day to the full.
          Completing an EMBA and developing computer science skills is keeping
          me busy. Learning to dance and being particularly aware to instances
          of cute animals in ‘real life’ is helping me to respond productively
          to a growing TikTok addiction.
        </p>
      </section>
      {/* <section>
        <HighlightCard />
      </section> */}
    </Layout>
  );
};

export default AboutPage;
