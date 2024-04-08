import './GucciBloom.css'
import { Grid, Image, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


import GucciFloraPhoto from '/src/assets/linterdit-product.jpeg'
function GucciBloom() {
  return(
      <Grid centered columns={2} className='card' style={{width: '70vw', padding: '40px 0', marginTop: '7vw', borderRadius: '20px'}}>
        <Grid.Row>
          <Grid.Column>
            <Image className='product-image' src={GucciFloraPhoto} />
          </Grid.Column>
          <Grid.Column >
            <Segment vertical>
              <p className='perfume-title' >Gucci Bloom</p>
              <p className='price'>$139.00</p>
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
  )
}

export default GucciBloom