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

            <div className="item">
                <section className="polaroid" >
                    {cardStatus ?
                        <>
                            <img src={picture.path} onClick={flipPhoto} />
                            <p> here is the photo item</p>

                            <div>
                                <button onClick={() => handleLike(picture.id)}>❤️ Like</button>
                                <span> Like Count: {picture.likes}</span>
                            </div>
                        </>


                        :

                        <p onClick={flipPhoto}>description</p>}


                </section>
            </div>


        </>
    )
}

export default PhotoItem;