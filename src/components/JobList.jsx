import React from 'react'
import JobCard from './JobCard'

const Joblist = ({companies,contactJobs,onContactToggle,onSelectCompany}) => {
  return (
<div className='space-y-4'>
 {
    companies.length > 0 ? (
        companies.map(company => (
            <JobCard
            key={company.companyId}
            company = {company}
            isContacted = { contactJobs.has(company.companyId)}
            onContactToggle ={onContactToggle}
            onSelect = {onSelectCompany}
            />
        ))
    ) : (
        <p className="text-center text-gray-500 mt-10">No jobs found matching your criteria.</p>
    )
}
</div>
)
}

export default Joblist
