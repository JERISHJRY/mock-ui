//This is an example component so you can get things going and take a look at some of Material-UIs features.
//You should probably delete or modify this to start your project!
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { CardHeader, CardMedia } from '@material-ui/core';
import Data from './Data.json';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const SimpleCard = () => {
    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [previousIndex, setPreviousIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(2);

    const handleOnclick = () => {
        setShow(true);
    };
    const handleOnclickLess = () => {
        setShow(false);
    };

    const goBackward = () => {
        let length = Data.length - 1;
        if (previousIndex == 0) {
            setCurrentIndex(currentIndex - 1);
            setPreviousIndex(length);
            setNextIndex(nextIndex - 1);
        } else {
            setPreviousIndex(previousIndex - 1);
            if (currentIndex == 0) {
                setCurrentIndex(length);
            } else {
                setCurrentIndex(currentIndex - 1);
            }
            if (nextIndex == 0) {
                setNextIndex(length);
            } else {
                setNextIndex(nextIndex - 1);
            }
        }
    };

    const goForward = () => {
        let length = Data.length - 1;
        if (currentIndex == length) {
            setCurrentIndex(0);
            setPreviousIndex(length);
            setNextIndex(1);
        } else {
            setCurrentIndex(currentIndex + 1);
            if (previousIndex == length) {
                setPreviousIndex(0);
            } else {
                setPreviousIndex(previousIndex + 1);
            }
            if (nextIndex == length) {
                setNextIndex(0);
            } else setNextIndex(nextIndex + 1);
        }
    };

    return (
        <div className='inner_container container'>

            <div className='carouselButton rht20 left'>
                <button onClick={() => goBackward()}>
                    <KeyboardBackspaceIcon />
                </button>
            </div>
            <div className="card_container">
            <Card className='card_size1 left '>
                <CardMedia className='image_div'>
                    <img
                        src={Data[previousIndex].image}
                        alt='image not found'></img>
                </CardMedia>

                <h3 className='CardHeader'>{Data[previousIndex].title}</h3>
                <CardContent className={'cardcontent'}>
                    {' '}
                    {Data[previousIndex].details}
                </CardContent>
            </Card>

            <Card className='card_size left'>
                <CardMedia className='image_div'>
                    <img
                        src={Data[currentIndex].image}
                        alt='image not found'></img>
                </CardMedia>

                <h3 className='CardHeader'>{Data[currentIndex].title}</h3>
                {!show ? (
                    <CardContent className={'cardcontent'}>
                        {' '}
                        {Data[currentIndex].details}
                    </CardContent>
                ) : (
                    <span className={'cardcontent1'}>
                        {Data[currentIndex].details}
                    </span>
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

            <Card className='card_size2 left'>
                <CardMedia className='image_div'>
                    <img
                        src={Data[nextIndex].image}
                        alt='image not found'></img>
                </CardMedia>

                <h3 className='CardHeader'>{Data[nextIndex].title}</h3>
                <CardContent className={'cardcontent'}>
                    {' '}
                    {Data[nextIndex].details}
                </CardContent>
            </Card>
            </div>
            <div className='carouselButton lf20 left'>
                <button onClick={() => goForward()}>
                    <ArrowRightAltIcon />
                </button>
            </div>
            <div className="clear"></div>
        </div>
    );
};
export default SimpleCard;
