import React from "react";

const Filter = ({ states, industry, onstateChange, onIndustryChange }) => {
  return (
    <div className="p-4 bg-white border rounded-lg flex flex-col sm:flex-row gap-4 shadow-sm">
      <div className="flex-1">
        <label
          htmlFor="state-filter"
          className="block text-m font-semibold text-gray-700 mb-1"
        >
          Location
        </label>

        <select
          id="state-filter"
          onChange={(e) => onstateChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="All"> All states</option>
          {states.map((states) => (
            <option key={states} value={states}>
              {states}
            </option>
          ))}
        </select>
      </div>

      {/* Industry filter name */}
      <div className="flex-1">
   <label htmlFor="industry-filter"className="block text-m font-semibold text-gray-700 mb-1">
    Industry
    </label>     
<select id="industry-filter"
    onChange={(e)=> onIndustryChange(e.target.value)}
    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"

>
    <option value="All"> All Industries</option>
    {industry.map(industry => <option key={industry} value={industry}>{industry}</option> )}

</select>
 </div>
    </div>
  );
};

export default Filter;
