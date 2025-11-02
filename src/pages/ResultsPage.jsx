import { useLocation } from "react-router-dom";
import RideResults from "../components/Results";

export default function ResultsPage() {
  const location = useLocation();
  const state = location.state || {};
  const rides = state.rides || [];
  const pickup = state.pickup || localStorage.getItem("pickup") || "";
  const drop = state.drop || localStorage.getItem("drop") || "";
  const loading = state.loading || false;

  return (
    <RideResults rides={rides} pickup={pickup} drop={drop} loading={loading} />
  );
}
