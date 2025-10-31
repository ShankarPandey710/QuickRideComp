import RideResults from "../components/Results";

export default function ResultsPage({ rides, pickup, drop }) {
  return (
    <div className="results-page">
      <h2 className="text-center mt-4">
        🚕 Available Rides from <b>{pickup}</b> to <b>{drop}</b>
      </h2>

      {rides.length > 0 ? (
        <RideResults rides={rides} pickup={pickup} drop={drop} />
      ) : (
        <p className="text-center mt-4 text-gray-600">
          No rides available for this route.
        </p>
      )}
    </div>
  );
}
