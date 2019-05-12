import React from "react";
import queryString from 'query-string';

import CVEQuiz from "../components/cveQuiz";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Typography from '@material-ui/core/Typography';

function audioPaths(consonantVowel, isConsonant){
  var basePath;
  var paths = [];
  if(isConsonant==="true"){
    basePath = "/audio/pinyin/Consonants/" + consonantVowel + "/" + consonantVowel;
  }else{
    basePath = "/audio/pinyin/Vowels/" + consonantVowel + "/" + consonantVowel;
  }

  for(var i = 1; i < 5; i++){
    paths.push(basePath + i + ".mp3");
  }

  return paths;
}

function CVEPage(props){
  const parsed = queryString.parse(props.location.search);
  return(
    <Layout gridDirection="column" pageTitle={"Consonant Vowel: " + parsed.consonantVowel}>
      <SEO title={parsed.consonantVowel + " Pronuncations"} />
      <Typography component="p" variant="h5" align="center" paragraph>
        Listen to the following audio files to get examples of how to pronounce {parsed.consonantVowel} in Chinese
      </Typography>
      <CVEQuiz audioFiles={audioPaths(parsed.consonantVowel, parsed.isConsonant)} />
    </Layout>
  );
}

// export default withStyles(styles)(CVEPage);

export default CVEPage;
