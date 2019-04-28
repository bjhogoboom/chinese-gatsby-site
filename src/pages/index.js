import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typography from '@material-ui/core/Typography';
import ChineseTab from '../components/ChineseTab';

import Grid from '@material-ui/core/Grid';


const IndexPage = () => (
  <Layout gridDirection="row">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `pomona`,
       `college`, `pinyin`, `pronunciation`, `chinese`]} />
      <Typography component="h1" variant="h2" gutterBottom color="textPrimary">
        Pomona College Chinese Pronunciation Tool
      </Typography>
      <Typography component="p" variant="body2" paragraph>This tool is designed for students wanting to practice their Chinese pronuncation skills
         through careful listening. Here, you will find small quizlets for practicing your pronunciation
         of various vocabulary words in the Integrated Chinese Level 1 and 2 textbooks, as well as guides
         for basic chinese consonants and vowels.
      </Typography>
      <Grid item xs={8}>
      <ChineseTab/>
      </Grid>
  </Layout>
)

// <Grid item xs={6}>
//   <Card raised>
//     <CardActionArea>
//       <CardMedia style={{textAlign:"center"}}>
//         <BookIcon fontSize="large" color="primary" style={{fontSize:100, textAlign:"center"}}/>
//       </CardMedia>
//       <CardContent>
//         <Typography variant="h4"> Integrated Chinese 1 </Typography>
//         <Typography component="p"> Study pronunciation for IC1 vocabulary </Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>
// </Grid>
// <Grid item xs={6}>
//   <Card raised>
//     <CardActionArea href="/ic2">
//       <CardMedia style={{textAlign:"center"}}>
//         <BookIcon fontSize="large" color="secondary" style={{fontSize:100, textAlign:"center"}}/>
//       </CardMedia>
//         <CardContent>
//           <Typography variant="h4"> Integrated Chinese 2 </Typography>
//           <Typography component="p"> Study pronunciation for IC2 vocabulary </Typography>
//         </CardContent>
//     </CardActionArea>
//   </Card>
// </Grid>
// <Grid item xs={6}>
//   <Card raised>
//     <CardActionArea>
//       <CardMedia style={{textAlign:"center"}}>
//         <FontDownloadIcon fontSize="large" color="primary" style={{fontSize:100, textAlign:"center"}}/>
//       </CardMedia>
//         <CardContent>
//           <Typography variant="h4"> Consonant-Vowel </Typography>
//           <Typography component="p"> Study pronunciation for consonant-vowel combinations </Typography>
//         </CardContent>
//     </CardActionArea>
//   </Card>
// </Grid>

export default IndexPage
