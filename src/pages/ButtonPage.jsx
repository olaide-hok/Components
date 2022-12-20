import React from 'react'
import Button from '../components/Button'
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go'

function ButtonPage() {
  const handleClick = () => {}
  return (
    <div>
      <div>
        <Button
          outline
          secondary
          rounded
          className="mb-5"
          onClick={handleClick}>
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

export default ButtonPage
