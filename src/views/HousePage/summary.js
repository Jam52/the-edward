import React from 'react';
import Button from '../../components/Button/Button';

function Summary() {
    return (
    <div>
      <div>
        <section>
          <h1>Welcome to your home away from home.</h1>
          <p>3 Suites. 3 Baths. 2 Living Spaces.</p>
          <p>1 Dining Room. 1 Solarium</p>
        </section>
        <Button text ={"Book House"}></Button>
      </div>
      <section>
        <p>
          With 24 ft high atrium ceilings and three grand suites this light filled two-
          storey house is ideal for families or a group of friends. Much love, creativity
          and attention to detail has gone into curating a space that balances classic
          and contemporary design and that our guests can call home.
        </p>
        <h4>Max Occupancy</h4>
        <p>6 Adults</p>
        <p>3 Children under 10</p>
        <h4>Rate</h4>
        <p>From From $675/night + Cleaning Fee</p>
      </section>
    </div>
    )
  }

export default Summary;