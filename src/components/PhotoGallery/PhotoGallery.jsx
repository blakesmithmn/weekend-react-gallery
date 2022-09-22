import PhotoItem from "../PhotoItem/PhotoItem";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function PhotoGallery({ allPhotos, getPhotos }) {
    return (
        <>
            <Grid container spacing={1}>
                {allPhotos.map(picture => (
                    <Grid item xs={12} md={4} lg={4} className="picturegrid" key={[picture.id]}>
                        <PhotoItem picture={picture} getPhotos={getPhotos} id={picture.id} />
                    </Grid>

                ))};

            </Grid>

        </>
    )
}

export default PhotoGallery;