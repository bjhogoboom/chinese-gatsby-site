import React from "react";

import ChineseTab from '../components/ChineseTab';
import Layout from "../components/layout";
import SEO from "../components/seo";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const IndexPage = () => (
  <Layout gridDirection="row" pageTitle="Chinese Pronunciation">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `pomona`,
       `college`, `pinyin`, `pronunciation`, `chinese`]} />
       <Grid item xs={12}>
      <Typography component="p" variant="h5" align="center" paragraph>This tool is designed for students wanting to practice their Chinese pronuncation skills
         through careful listening. Here, you will find small quizlets for practicing your pronunciation
         of various vocabulary words in the Integrated Chinese Level 1 and 2 textbooks, as well as guides
         for basic chinese consonants and vowels.
      </Typography>
      </Grid>
      <Grid item xs={8}>
      <ChineseTab/>
      </Grid>
  </Layout>
)

export default IndexPage
