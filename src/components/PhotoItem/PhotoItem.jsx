import './PhotoItem.css';
import { useState, setState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ButtonGroup from '@mui/material/ButtonGroup';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';


function PhotoItem({ picture, getPhotos }) {
    console.log(picture);
    let [likeCount, setLikeCount] = useState(0);
    let [cardStatus, setCardStatus] = useState(true);

    const flipPhoto = () => {
        console.log('clicked');
        if (cardStatus === true) {
            setCardStatus(false);
        } else {
            setCardStatus(true);
        }

    };

    const handleLike = (id) => {
        console.log(id);
        axios({
            method: 'PUT',
            url: `/gallery/${id}`
        })
            .then((response) => {
                // setLikeCount(likeCount + 1);
                getPhotos();
            })
            .catch((error) => {
                console.log('Error in PUT for Like Count:', error);
            })

    }

    return (
        <>

            <div className="itemWrapper">
                <Paper variant="outlined" elevation={3} className="polaroid fade-in" >
                    {cardStatus ?
                        <>

                            <img src={picture.path} onClick={flipPhoto} />

                            {/*  like counter button - that displays like count in button element */}
                            <ButtonGroup className="frontButtons">
                                <Button aria-label="like" color="secondary" size="small">
                                    <FavoriteIcon onClick={() => handleLike(picture.id)} />
                                    {picture.likes} Likes

                                </Button>
                                {/* <Button variant="outlined" size="small" color="secondary" startIcon={<FavoriteIcon />} */}
                                {/* onClick={() => handleLike(picture.id)}> */}
                                {/* </Button> */}
                                <Button size="small" >
                                    <MoreVertRoundedIcon onClick={() => flipPhoto()} />
                                </Button>
                            </ButtonGroup>
                        </>


                        : // TERNARY SWITCH 

                        <div className="descriptionMode">
                            <div className="polaroidBack" onClick={flipPhoto}>
                                <p>
                                    <span>
                                        {picture.title}
                                    </span>
                                    <br>
                                        {/* yes i know it's bad but look it's just for line formatting it got funky if i used a div */}
                                    </br>

                                    {picture.description}
                                </p>
                            </div>
                            <ButtonGroup>
                                <Button aria-label="like" color="secondary" size="small">
                                    <FavoriteIcon onClick={() => handleLike(picture.id)} />
                                    {picture.likes} Likes

                                </Button>
                                {/* <Button variant="outlined" size="small" color="secondary" startIcon={<FavoriteIcon />} */}
                                {/* onClick={() => handleLike(picture.id)}> */}
                                {/* </Button> */}
                                <Button size="small" >
                                    <MoreHorizRoundedIcon onClick={() => flipPhoto()} />
                                </Button>
                            </ButtonGroup>

                        </div>
                    }
                    {/* TERNARY END */}


                </Paper>
            </div >


        </>
    )
}

export default PhotoItem;