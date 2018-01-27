import React from 'react'
import Card, { CardMedia, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'
import Button from 'material-ui/Button'
import Layout from '../components/Layout'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  parallax: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    backgroundImage: 'url(https://unsplash.it/1200/800?image=823)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    flexDirection: 'column'
  },
  white: {
    color: '#fff'
  },
  card: {
    width: '100%'
  },
  media: {
    minHeight: 280
  },
  heroCards: {
    padding: '3rem',
    display: 'flex',
    justifyContent: 'center'
  }
})

const IndexPage = ({ classes }) => (
  <Layout>
    <div className={classes.parallax}>
      <Typography type="display2" className={classes.white} gutterBottom>
        Testowa strona do nauki React.JS
      </Typography>
      <Typography type="subheading" className={classes.white} gutterBottom>
        Strona zbudowana w oparciu o kurs z freaCodeCamp (Live Stream with
        Jessie)
      </Typography>
      <Button color="accent" raised>
        CALL TO AUDIO
      </Button>
    </div>
    <div className={classes.heroCards}>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/night.jpg"
              title="Nice photo"
            />
            <CardActions>
              <Typography type="subheading" gutterBottom>
                Nice Photo
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/static/img/paris.jpg"
              title="Nice photo"
            />
            <CardActions>
              <Typography type="subheading" gutterBottom>
                Paris
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default withStyles(styles)(IndexPage)
