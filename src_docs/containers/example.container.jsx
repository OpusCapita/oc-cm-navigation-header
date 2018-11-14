import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import ExampleComponent from '../components/example.component';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <ThemeProvider theme={theme}>
    <Grid>
      <Row>
        <Col xs={11} md={8} lg={12}>
          <Row>
            <Col xs={10}>
              <h3>oc-cm-navigation-header</h3>
            </Col>
            <Col xs={2}>
              <a
                href="https://github.com/OpusCapita/oc-cm-navigation-header"
                style={{ marginTop: '20px', display: 'block' }}
              >
                <GithubLogo />
              </a>
            </Col>
          </Row>
          <ExampleComponent />
        </Col>
      </Row>
    </Grid>
  </ThemeProvider>
);
