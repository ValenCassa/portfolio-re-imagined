import Head from "next/head";
import BioSection, { Personal } from "../components/Bio/Bio";
import FindMeSection from "../components/FindMeSection/FindMeSection";
import Section from "../components/Layout/AnimatedSection";
import Layout from "../components/Layout/Common";
import SkillsSection from "../components/SkillsSection/SkillsSection";

export default function Home() {

  return (

      <Layout title='Homepage'>
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@valen_cassa" />
          <meta name="twitter:creator" content="@valen_cassa" />
          <meta name="twitter:image" content="/img/og.png" />
          <meta name="twitter:title" content="Valentin Cassarino's Homepage" />
          <meta name="twitter:description" content="Go have a look at my portfolio!" />
          <meta property="og:site_name" content="Valentin Cassarino's Homepage" />
          <meta property="og:title" content="Valentin Cassarino's Homepage" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/img/og.png" />
        </Head>

        <Section>
          <Personal />
        </Section>
        <Section>
          <BioSection />
        </Section>
        <Section delay={0.1}>
          <SkillsSection />
        </Section>
        <Section delay={0.2}>
          <FindMeSection />
        </Section>
      </Layout>
  )
}
