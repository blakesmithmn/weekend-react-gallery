import './PhotoItem.css';
import { useState, setState } from 'react';
import axios from 'axios';

function PhotoItem({ picture, getPhotos }) {
    console.log(picture);
    let [likeCount, setLikeCount] = useState(0);
    let [cardStatus, setCardStatus] = useState(false);

    const flipPhoto = () => {

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
                <section className="polaroid">
                    <img src={picture.path} />
                    <p> here is the photo item</p>

                    <div>
                        <button onClick={() => handleLike(picture.id)}>❤️ Like</button>
                        <span> Like Count: {picture.likes}</span>
                    </div>


                </section>
            </div>


        </>
    )
}

export default PhotoItem;