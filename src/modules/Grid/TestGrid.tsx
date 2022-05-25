import React, { useState } from 'react'
import { Col } from './components/Col';
import { Grid } from './components/Grid';
import './index.css';


export function TestGrid() {
  const [space, setSpace] = useState(1);

  const VALUES_SPACE = {
    1: 'md',
    2: 'lg',
    3: 'xl',
    4: 'xxl',
  }

  const VALUES_SPACE_INTS = {
    1: 8,
    2: 16,
    3: 24,
    4: 32,
  }

  return (
    <div className="App">
      <input type="range" value={space} step={1} min={1} max={4} onChange={e => setSpace(Number(e.target.value))} style={{ marginBottom: '10px' }} />
      <h2>Spacing - {VALUES_SPACE[space]} - {VALUES_SPACE_INTS[space]} px</h2>
      <Grid spacing={VALUES_SPACE[space]}>
        <Col size={3}>
          <div style={{ border: '1px solid' }}>
            Col 
          </div>
        </Col>
        <Col size={4}>
          <div style={{ border: '1px solid' }}>
            Col 
          </div>
        </Col>
      </Grid>
      <Grid>
          <Col size={6}> 
            <div style={{ border: '1px solid' }}>
                Col 
            </div>
          </Col>
          <Col size={6}> 
            <div style={{ border: '1px solid' }}>
                Col 
            </div>
          </Col>
      </Grid>
    </div>
  )
}
