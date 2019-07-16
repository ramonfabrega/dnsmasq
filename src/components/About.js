import React from 'react';
import { Container, Grid, Typography, Link, Button } from '@material-ui/core';
import dnsmasq from '../img/dnsmasq.png';

const About = () => {
  return (
    <Container maxWidth='md'>
      <Grid container style={{ marginTop: 25 }}>
        <Grid container item xs={12}>
          <Typography variant='h4' gutterBottom>
            Intercepting Websites with DNSMasq and DD-WRT
          </Typography>
          <Typography variant='overline'>By Ramon Fabrega</Typography>
          <Grid item xs={12} style={{ marginBottom: -10 }}>
            <Button
              component={Link}
              to='/'
              variant='contained'
              color='secondary'
              style={{ marginTop: 15, color: 'white' }}
            >
              Cloned UT Login Page
            </Button>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: -10 }}>
            <Button
              component={Link}
              to='/about'
              variant='contained'
              color='primary'
              style={{ marginTop: 15, color: 'white' }}
            >
              Credential Log
            </Button>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: 15 }}>
            <Button
              component='a'
              href='https://www.github.com/ramonfabrega/dnsmasq'
              variant='contained'
              color='primary'
              style={{ marginTop: 15, color: 'white' }}
            >
              Github repository
            </Button>
          </Grid>
          <Typography variant='subtitle1' gutterBottom>
            DD-WRT is an open source alternative firmware for various WLAN
            <br />
            This project clones the login page of UT and modifies the form to
            store the eid and password in Firebase.
            <br />
            The stored credentials are accessible at ip_address/log, where they
            are displayed from Firebase.
          </Typography>
          <Typography variant='h6' gutterBottom style={{ marginTop: 25 }}>
            Setting up DNSMasq
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            To inject the cloned website in target computers, we mask the DNS
            tables in the router. The method used for this project was
            installing DD-WRT on the router and configuring DNSMasq.
          </Typography>
          <Typography gutterBottom style={{ marginTop: 15 }}>
            First install DD-WRT on the target router
          </Typography>
          <Typography gutterBottom>
            Then go to:{' '}
            <Link href='http://192.168.1.1/Services.asp'>
              <strong>Services</strong> -> <strong>Services</strong> ->
              <strong> DNSMasq </strong>
              (http://192.168.1.1/Services.asp)
            </Link>
          </Typography>
          <Typography gutterBottom>
            Place the target and redirection addresses under
            <strong> Additional DNSMAsq Options</strong>:
            <br />
            address=/login.utexas.edu/FIREBASE_IP_ADDR
          </Typography>
          <img src={dnsmasq} alt='' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
