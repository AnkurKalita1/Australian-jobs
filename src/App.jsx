import React, { useEffect, useMemo, useState } from 'react'
import allJobData from "./data/data.json"
import Filter from './components/Filter'
import Joblist from './components/Joblist'
import MapView from './components/MapView'
const App = () => {

const [allJobs] = useState(allJobData)
const [filteredCompanies, setFilteredCompanies] = useState(allJobs)
const [selectedState,setSelectedState] =useState("All")
const [selectedIndustry,setSelectedIndustry] =useState("All")
const [contactJobs , setContactJobs] = useState(new Set())
const [selectedCompanyId, setSelectedCompanyId] = useState(null);

useEffect(()=>{
  let filtered = allJobs
  if(selectedState !== "All"){
    filtered = filtered.filter(job => job.state === selectedState)
  }

  if(selectedIndustry !== "All"){
    filtered = filtered.filter(job => job.industry === selectedIndustry)
  }

   setFilteredCompanies(filtered)

},[selectedState,selectedIndustry,allJobs])


const uniqueState = useMemo(()=> [...new Set(allJobs.map(job=> job.state))].sort()  ,[allJobs])
const uniqueIndustry = useMemo(()=> [ ...new Set(allJobs.map(job=> job.industry))].sort(),[allJobs])


const handleContactToggle = (id)=>{
    setContactJobs(prev => {
      const newSet =  new Set(prev)
      if(newSet.has(id)){
        newSet.delete(id);
      } else {
        newSet.add(id)
      }
      return newSet
    })
}
// console.log("uniqueState--", uniqueState)
console.log("filteredCompanies --- " , filteredCompanies)
console.log(contactJobs)
  return (
  <div className='h-screen w-screen flex flex-col font-sans bg-gray-100'>
    <header className='p-4 border-b bg-white z-10 shadow-sm'>
      <h1 className='text-3xl font-bold text-gray-800'>Work and Travel Guide</h1>
      <p className='text-md text-gray-600'> Jobs in Australia </p>
    </header>

    <main className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
    <div className="md:col-span-5 lg:col-span-4 p-4 bg-gray-50 overflow-y-auto">
        <Filter
        states ={uniqueState}
        industry = {uniqueIndustry}
        onstateChange = {setSelectedState}
        onIndustryChange ={setSelectedIndustry}
        />
        <div className='mt-4'>
         <Joblist
          companies ={filteredCompanies}
          contactJobs = {contactJobs}
          onContactToggle ={handleContactToggle}
          onSelectCompany = {setSelectedCompanyId}
          />
        </div>
    </div>

     {/* right panel */}
      <div className='hidden md:block md:col-span-7 lg:col-span-8 h-full w-full'>
        <MapView
        companies ={filteredCompanies}
        selectedCompanyId ={selectedCompanyId}
        />

      </div>
    </main>

  </div>
  )
}

export default App
