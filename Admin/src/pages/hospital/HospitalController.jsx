import {Link} from 'react-router-dom'

export const HospitalController = () => {
  return (
    <div>
        <header className="p-3 w-full flex justify-start">
            <Link to={'/'} className="px-2 py-1 text-xl rounded-md border-[2px] border-black">
                {"<"} Back
            </Link>
        </header>
        Hospital Controller page
    </div>
  )
}
