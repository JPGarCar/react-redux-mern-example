import React from 'react'
import PropTypes from 'prop-types'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import memories from './images/memories.png'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'


const App = props => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>memories</Typography>
                <img className={classes.image} src={memories} alt='memories' height='60'></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item sx={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

App.propTypes = {

}

export default App
