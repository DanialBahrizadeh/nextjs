import { useRouter } from "next/router";
import { useState } from "react";
export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const eventElements = events.map((event) => (
    <div key={event.id}>
      <h2>
        {event.id} {event.title} {event.date} | {event.category}
      </h2>
      <p>{event.description}</p>
      <hr />
    </div>
  ));

  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    /*
        Shallow routing allows you to change the URL without running data fetching methods again, that includes getServerSideProps, getStaticProps, and getInitialProps.

        You'll receive the updated pathname and the query via the router object (added by useRouter or withRouter), without losing state.
    */
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {eventElements}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
