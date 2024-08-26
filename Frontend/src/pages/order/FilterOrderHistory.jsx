import { useState } from 'react';

export const FilterOrderHistory = ({filter, setFilter}) => {
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState('all');
//   const [cancel, setCancel] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSuccessChange = (e) => {
    setSuccess(e.target.value);
  };

//   const handleCancelChange = (e) => {
//     setCancel(e.target.checked);
//   };

  const handleApplyFilters = () => {
    // Logic to apply filters
    setFilter({
      date : date,
      status : success
    })
  };

  return (
    <div className="bg-gray-100 p-4 w-full">
      <h2 className="text-[30px] font-semibold mb-4">Filters</h2>
      <div className="flex flex-col mb-4">
        <label htmlFor="date-filter" className="mb-1">Date:</label>
        <input
          type="date"
          id="date-filter"
          value={date}
          onChange={handleDateChange}
          className="border border-gray-300 rounded-md p-2 cursor-pointer"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="success-filter" className="mb-1">Status:</label>
        <select
          id="success-filter"
          value={success}
          onChange={handleSuccessChange}
          className="border border-gray-300 rounded-md p-2 cursor-pointer"
        >
          <option value="all">All</option>
          <option value="">Request Sent</option>
          <option value="accept">Accept</option>
          <option value="deny">Deny</option>
        </select>
      </div>
      {/* <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="cancel-filter"
          checked={cancel}
          onChange={handleCancelChange}
          className="mr-2"
        />
        <label htmlFor="cancel-filter">Cancel</label>
      </div> */}
      <center>
      <button
        onClick={handleApplyFilters}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      >
                Apply
        
      </button>
      </center>
    </div>
  );
};
