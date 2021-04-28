//This is an example component so you can get things going and take a look at some of Material-UIs features.
//You should probably delete or modify this to start your project!
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader, CardMedia } from '@material-ui/core';
import Data from './Data.json';

const SimpleCard = () => {
    const [show, setShow] = useState(false);

    const handleOnclick = () => {
        setShow(true);
    };
    const handleOnclickLess = () => {
        setShow(false);
    };

    return (
        <div className='container inner_container'>
            {Data.map((data, i) => (
                <Card className='card_size' key={i}>
                    <CardMedia className='image_div'>
                        <img src={data.image} alt='image not found'></img>
                    </CardMedia>

                    <h3 className='CardHeader'>{data.title}</h3>
                    {!show ? (
                        <CardContent className={'cardcontent'}>
                            {' '}
                            {data.details}
                        </CardContent>
                    ) : (
                        <span className={'cardcontent1'}>{data.details}</span>
                    )}
                    <CardActions className='action_btn'>
                        {!show ? (
                            <Button
                                onClick={handleOnclick}
                                className='button-style'>
                                <>Read More</>
                                <i className='fa fa-angle-right'></i>
                            </Button>
                        ) : (
                            <Button
                                onClick={handleOnclickLess}
                                className='button-style'>
                                {' '}
                                <>Read Less</>
                                <i className='fa fa-angle-right'></i>
                            </Button>
                        )}
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};
export default SimpleCard;
