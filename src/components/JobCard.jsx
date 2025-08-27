import React from 'react'

const JobCard = ({company , isContacted , onContactToggle, onSelect}) => {
    console.log(isContacted)
  return (
    <div className={`p-4 border rounded-lg curser-pointer transition-all duration-200 bg-gray-300 ${
        isContacted ? 'bg-gray-100 opacity-60' : ' hover:shadow-md hover:border-blue-700'
    }`}
    
    onMouseEnter={()=> onSelect(company.companyId)}
    
    onMouseLeave={()=> onSelect(null)}
    >

   <h3>{company.companyName}</h3>
   <p>{company.address}</p>
   <p>{company.industry}</p>
   <div className='mt-3 pt-3 border-t'>
    <p className='text-xs text-gray-500'>Contact : {company.firstName} {company.lastName}</p>
    <p className='text-xs text-gray-500'> <a href={`mailto:${company.email}`} className='text-blue-600 hover:underline'> {company.email}</a> </p>
    <p className='text-xs text-gray-500'> {company.phoneNumber} </p>
   </div>

   <button
   onClick={()=> onContactToggle(company.companyId)}
   className={`mt-5 w-full text-sm font-semibold py-2 rounded-md transition-colors 
    ${
    isContacted ? 'bg-green-700 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'
   }`}
   >
 {isContacted ? " ✅ Contacted" : "mark as contacted"}
   </button>
    </div>
  )
}

export default JobCard
