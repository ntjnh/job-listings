import React from 'react'
import './App.css'
import data from './data/data.json'
import Footer from './components/Footer'
import Job from './components/Job'

function App() {
    const jobs = data.map(job => {
        return (
            <Job
                key={`job-${job.id}`}
                id={job.id}
                logo={job.logo}
                company={job.company}
                position={job.position}
                postedAt={job.postedAt}
                contract={job.contract}
                location={job.location}
                role={job.role}
                level={job.level}
                languages={job.languages}
                tools={job.tools}
                isNew={job.new}
                isFeatured={job.featured}
            />
        )
    })

    return (
        <>
            <header>
                <h1>Job Listings</h1>
            </header>

            <main>
                <div className="container">
                    <section>
                        {/* filter area goes here */}
                    </section>

                    <section className="jobs-list">
                        {jobs}
                    </section>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default App
