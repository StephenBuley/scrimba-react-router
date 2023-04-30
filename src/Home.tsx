import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="section">
      <h2 className="section--header">
        You got the travel plans, we got the travel vans.
      </h2>
      <p className="section--text">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/vans" className="link--btn">
        Find your van
      </Link>
    </section>
  )
}
