import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BookIcon from '@material-ui/icons/Book';
import FontDownloadIcon from '@material-ui/icons/FontDownload'

import Grid from '@material-ui/core/Grid';


const IndexPage = () => (
  <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `pomona`,
       `college`, `pinyin`, `pronunciation`, `chinese`]} />
      <h1>Pomona College Chinese Pronunciation Tool</h1>
      <p>This tool is designed for students wanting to practice their Chinese pronuncation skills
         through careful listening. Here, you will find small quizlets for practicing your pronunciation
         of various vocabulary words in the Integrated Chinese Level 1 and 2 textbooks, as well as guides
         for basic chinese consonants and vowels.
      </p>
      <Grid item xs={6}>
        <Card raised>
          <CardActionArea>
            <CardMedia style={{textAlign:"center"}}>
              <BookIcon fontSize="large" color="primary" style={{fontSize:100, textAlign:"center"}}/>
            </CardMedia>
            <CardContent>
              <Typography variant="h4"> Integrated Chinese 1 </Typography>
              <Typography component="p"> Study pronunciation for IC1 vocabulary </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card raised>
          <CardActionArea>
            <CardMedia style={{textAlign:"center"}}>
              <BookIcon fontSize="large" color="secondary" style={{fontSize:100, textAlign:"center"}}/>
            </CardMedia>
              <CardContent>
                <Typography variant="h4"> Integrated Chinese 2 </Typography>
                <Typography component="p"> Study pronunciation for IC2 vocabulary </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card raised>
          <CardActionArea>
            <CardMedia style={{textAlign:"center"}}>
              <FontDownloadIcon fontSize="large" color="primary" style={{fontSize:100, textAlign:"center"}}/>
            </CardMedia>
              <CardContent>
                <Typography variant="h4"> Consonant-Vowel </Typography>
                <Typography component="p"> Study pronunciation for consonant-vowel combinations </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
  </Layout>
)

export default IndexPage
