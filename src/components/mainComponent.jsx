import React from 'react';
import SimpleCard from './innerComponent';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

const   MainComponent=()=> {
  return (
    <div className="container maincompo">
        <h3 className="main_headerhead">What We Do</h3>
        <CardContent className="main_header">we develop successful apps for our
             clients who range from startup<br/>
            enterpreneurs to Fortune 500s
        </CardContent>
      <SimpleCard/>
      <div className="clear"></div>
            <Button className='btns'>
                {' '}
                <>View all products</>
            </Button>
            
    </div>
  );
}

export default MainComponent;
 