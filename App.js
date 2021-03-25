import './App.css';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Grammar from './components/Grammar';
import Textarea from './components/TextArea';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './img/level-up-logo.png';
import { ChangeHistoryTwoTone } from '@material-ui/icons';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function App() {

    const Container = styled.div`
    background-color: #ededed;
    align-items: center;
    display: flex;
    justify-contebt: center;
    `;

    const GrammarCard = styled.div`
    position: relative;
    min-width: 1200px;
    padding: 130px 30px;
    `;

    const TextCard = styled.div`
    position: relative;
    min-width: 1200px;
    padding: 30px 25px;
    `;

    const Button = styled.button`
    padding: 10px 20px;
    background-color: dodgerblue;
    border: 1px solid #ddd;
    color: white;
    `;

    const classes = useStyles();

    const [validShow, setValidShow] = useState('');  

    const changeShow = () => {
      setValidShow('show');
    }

    const Text = styled.div`
    padding: 0px 200px;
    `;

    const highlight = 'potato';




  return (
    <div className={classes.root}>

      <Grid item xs={8}>
        <img src={logo}/>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextCard>
          <Textarea />
          {/*<Text>
          <Button onClick={() => changeShow()}>Level up</Button>
          </ Text>*/}
          </TextCard>
        </Grid>
        {/*<Grid item xs={6}>
          <GrammarCard>
          {validShow === 'show' && (<Grammar />)}
          </GrammarCard>
        </Grid>*/}
        </Grid>
        
        {/*<Grid item xs={6}>
        <p className="copyright">© 2020 NLP Lab</p>
      </Grid>*/}
      <footer className='App-footer'>
      <p className="copyright">© 2020 NLP Lab</p>
      </footer>
    </div>
  
  );
}

export default App;
