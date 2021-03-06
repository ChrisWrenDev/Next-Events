import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function Homepage() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default Homepage;
