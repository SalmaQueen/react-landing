import * as React from 'react'

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import BaseLayout from '../../baseLayout/index'
import PropertyDetails from '../../propertyDetails/index'

function Details(props) {

  const propertyId=props.match.params.propertyId

  
  return (
    <BaseLayout miniHero>
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ getListingByPropertyId }) => (
              <PropertyDetails listing={getListingByPropertyId(propertyId)} />
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
    </BaseLayout>
  )
}

export default Details
