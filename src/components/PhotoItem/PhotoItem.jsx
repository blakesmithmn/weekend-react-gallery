import './PhotoItem.css';

function PhotoItem({ picture }) {
    console.log(picture);
    return (
        <>
            <p> here is the photo item</p>
            <div>
                <section className="polaroid">
                    <img src={picture.path} />

                    <div>
                        <button>Like</button>
                    </div>

                </section>
            </div>


        </>
    )
}

export default PhotoItem;