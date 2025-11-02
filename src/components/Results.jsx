import RideCard from './RideCard';

export default function Results({ rides, pickup, drop, loading }) {
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading rides...</p>
        </div>
      </div>
    );
  }

  if (!rides || rides.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="card text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No rides available for this route. Please try different locations.
          </p>
        </div>
      </div>
    );
  }

  // Find the cheapest fare
  const cheapestFare = Math.min(...rides.map(ride => ride.fare));

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Available Rides
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {pickup} → {drop}
        </p>
      </div>
      
      <div className="grid gap-6 max-w-4xl mx-auto">
        {rides.map((ride, index) => (
          <RideCard
            key={index}
            ride={ride}
            isCheapest={ride.fare === cheapestFare}
          />
        ))}
      </div>
    </section>
  );
}
