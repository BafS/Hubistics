import React from 'react'

import { Panel, Grid } from 'react-bootstrap'

export function About(props) {
  return (
    <Grid>
      <Panel header="About this project">
        This projet was build with React, D3, Chartjs, webpack, reactable, babel, sass, bootstrap and eslint.
      </Panel>
    </Grid>
  )
}
