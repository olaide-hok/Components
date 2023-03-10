import React from 'react'
import Button from './Button'
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go'

function App() {
  const handleClick = () => {
    console.log('click')
  }
  return (
    <div>
      <div>
        <Button outline secondary rounded onClick={handleClick}>
          <GoBell />
          Click Me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  )
}

export default App
