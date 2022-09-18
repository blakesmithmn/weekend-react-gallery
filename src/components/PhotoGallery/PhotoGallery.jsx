import PhotoItem from "../PhotoItem/PhotoItem";

function PhotoGallery({ allPhotos, getPhotos }) {
    return (
        <>
            {allPhotos.map(picture => (
                <section className="picturegrid" key={[picture.id]}>
                    <PhotoItem picture={picture} getPhotos={getPhotos} id="{picture.id}" />
                </section>

            ))};

        </>
    )
}

export default PhotoGallery;