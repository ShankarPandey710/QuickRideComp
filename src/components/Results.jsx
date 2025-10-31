

import RideCard from './RideCard';

export default function Results({ rides }) {
  return (
    <section className="results">
      {rides.length > 0 && <h2>Available Rides</h2>}
      {rides.map((ride, index) => (
        <RideCard key={index} ride={ride} />
      ))}
    </section>
  );
}

