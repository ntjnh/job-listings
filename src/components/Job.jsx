import React from 'react'

const Job = ({ id, logo, company, position, postedAt, contract, location, role, level, languages, tools, isNew, isFeatured }) => {
    return (
        <article className="job featured">
            <img src={logo} alt={company} />
            <h3 className="company">
                {company}
                {isNew && <span className="badge badge--new">New!</span>}
                {isFeatured && <span className="badge badge--featured">Featured</span>}
            </h3>
            <h2 className="position">{position}</h2>
            <p className="info">
                <span className="posted-at">{postedAt}</span>
                <span className="contract">{contract}</span>
                <span className="location">{location}</span>
            </p>

            <ul className="tags">
                <li className="tag role">{role}</li>
                <li className="tag level">{level}</li>
                {
                    languages.map(language => (
                        <li key={`language-${id}`} className="tag language">{language}</li>
                    ))
                }
                {
                    tools.map(tool => (
                        <li key={`tool-${id}`} className="tag tool">{tool}</li>
                    ))
                }
            </ul>
        </article>
    )
}

export default Job
