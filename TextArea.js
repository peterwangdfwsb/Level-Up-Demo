import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Highlight, Keywords} from 'react-marker';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea';
import Grammar from './Grammar';
import { SettingsOverscanOutlined } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import {useRoutes, useRedirect} from 'hookrouter';


function Textarea() {
    const [validText, setValidText] = useState('');

    const Button = styled.button`
    padding: 8px 26px;
    background-color: #8B0000;
    color: white;
    border: transparent;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 600;
    `;

    const GrammarCard = styled.div`
    position: relative;
    min-width: 1200px;
    padding: 0px 10px;
    `;

    const Text = styled.div`
    padding: 0px 160px;
    `;


    const handleChange = (e) => {
        console.log(e.target.value);

        setValidText(e.target.value);

        ChangeTextAreaCount(e.target.value.length);
    };

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + validText);
        event.preventDefault();
        setValidShow('show');
    };

    const [validShow, setValidShow] = useState('');

    const highlight = ['danced', 'Surprisingly', 'likely ', 'extremely','Surprisingly', 'should'];

    const handleRemove = () => {
        setValidShow('noshow');
    };

    const [textAreaCount, ChangeTextAreaCount] = React.useState(0);
    


    return(
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <form onSubmit={handleSubmit}>
          {/* <textarea rows='20' cols='60' placeholder='Input your Text' value={validText} onChange={handleChange} /> */}
          <HighlightWithinTextarea highlight={highlight} rows='20' cols='60' placeholder='Input your Text' value={validText} onChange={handleChange}/>
          <Text>
          {/*<Button type="submit">Level up</Button>
          <Button onClick={()=>handleRemove()}>Correct</Button>*/}
          {/*<Button onClick={()=>handleRemove()}>Correct</Button>*/}
          </Text>
          <div className="textarea-footer">
              <span className="counter">
                  <p>{textAreaCount}/500 WORDS</p>
                </span>
                <Text>
                <Button type="submit">Level up</Button>
                </Text>
            </div>

        </form>
        </Grid>
        <Grid item xs={6}>
        <GrammarCard>
        {validShow === 'show' && (<Grammar />)}
        </GrammarCard>
        </Grid>
        </Grid>
    );

}

export default Textarea;