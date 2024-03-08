import Link from 'next/link';
import Image from 'next/image';

export default function HomePage  ({ events }) {
  return (
       <div className="home_body">
    {events.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a className="card" href={`/events/${ev.id}`}>
            <div className="image">
              <Image width={600} height={400} alt={ev.title} src={ev.image}/>
            </div>
            <div className="content">
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </div>
          </a>
        </Link>

    ))}
  </div>
  )}


export async function getServerSideProps(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("events");
    const events = await db.collection("events_categories").find({}).limit(20).toArray();

    res.json(events);
  } catch (error) {
    console.error(error)
  }
}