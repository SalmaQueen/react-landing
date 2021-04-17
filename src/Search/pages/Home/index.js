import * as React from 'react'

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import BaseLayout from '../../baseLayout/index'
import Listing from '../../listing/index'
import Filter from '../../filter/index'

function Home() {
  return (
    <BaseLayout>
      <div className="container">
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ propertyListings, allListings, updateFilter }) => (
              <>
                <Filter
                  updateFilter={updateFilter}
                  count={propertyListings.length}
                  postcodes={allListings
                    .map(listing => listing.postcode.split(' ')[0])
                    .filter((item, i, arr) => arr.indexOf(item) === i)}
                />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {propertyListings.map(listing => (
                    <Listing listing={listing} />
                  ))}
                </div>
              </>
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>
      </div>
      
    </BaseLayout>
  )
}

export default Home
