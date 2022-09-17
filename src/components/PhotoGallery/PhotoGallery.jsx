import PhotoItem from "../PhotoItem/PhotoItem";

function PhotoGallery({ allPhotos }) {
    return (
        <>
            {allPhotos.map(picture => (
                <section className="picturegrid" key={[picture.id]}>
                    <PhotoItem picture={picture} />
                </section>

            ))};

        </>
    )
}

export default PhotoGallery;