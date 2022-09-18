import './PhotoItem.css';
import { useState, setState } from 'react';
import axios from 'axios';

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
                <section className="polaroid fade-in" >
                    {cardStatus ?
                        <>

                            <img src={picture.path} onClick={flipPhoto} />

                            {/*  like counter button - that displays like count in button element */}
                            <div>
                                <button onClick={() => handleLike(picture.id)}>❤️ {picture.likes} Likes</button>
                            </div>
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
                            <div>
                                <button onClick={() => handleLike(picture.id)}>❤️ {picture.likes} Likes</button>
                            </div>

                        </div>
                    }
                    {/* TERNARY END */}


                </section>
            </div>


        </>
    )
}

export default PhotoItem;