import React, { useContext } from 'react';
import Context from './Context.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  media: {
    height: "100px",
    backgroundSize: "contain",
  }
});


function Wrapper() {
    const { parasites, modifiers } = useContext(Context);
    const { setElement } = modifiers;
    const classes = useStyles();
  
    return (
      <Grid className="main__container" container spacing={3} justifyContent="center" alignItems="center">
      {  
        parasites.map(parasite => {
          const { id, nome, urlFoto } = parasite;
          return (
            <Grid item xs={9} md={3} key={id} className={classes.root} ref={setElement}>
              <Grid container>
                <Card className={classes.root}>
                  <CardActionArea align="center">
                    <CardMedia
                      className={classes.media}
                      image={urlFoto}
                      title=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      {nome}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          );
        })
      }
      </Grid>
    )
  }

  export default Wrapper;