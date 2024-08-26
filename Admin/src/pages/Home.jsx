import {Link} from "react-router-dom"


export const Home = () => {
  return (
    <div className="Home">
      <header className="w-full text-center py-5 text-4xl font-semibold">Admin Page</header>
      <section className="w-full p-5 flex flex-wrap gap-5 justify-around">
        <Link to={'/add-hospital'}>
          <button className="text-2xl px-3 py-2 bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg">Add Hospital</button>
        </Link>
        <Link to={'/add-guest-house'}>
          <button className="text-2xl px-3 py-2 bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg">Add Guest House</button>
        </Link>

        <Link to={'/add-cab-booking'}>
          <button className="text-2xl px-3 py-2 bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg">Add Cab Driver Details</button>
        </Link>
        {/* <button className="text-2xl px-3 py-2">Add Hospital</button> */}
        {/* <button className="text-2xl px-3 py-2">Add Hospital</button> */}
      </section>

      <div  className="w-full">
        <header className="w-full text-center py-5 text-4xl font-semibold">Controller</header>
        <div className="w-full flex flex-wrap gap-5 justify-around">
          <Link to={'/hospital-controller'}>
            <button className="text-2xl px-3 py-2 bg-blue-400 hover:bg-blue-500  text-white rounded-lg">Hospital Controller</button>
          </Link>
          <Link to={'/guest-house-controller'}>
            <button className="text-2xl px-3 py-2 bg-blue-400 hover:bg-blue-500  text-white rounded-lg">Guest House Controller</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
