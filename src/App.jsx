// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <header>
                <h1>Job Listings</h1>
            </header>

            <main>
                <article className="job featured">
                    <h3>Photosnap</h3>
                    New!
                    Featured
                    <h2>Senior Frontend Developer</h2>
                    1d ago
                    Full Time
                    USA only
                    <ul>
                        <li>Frontend</li>
                        <li>Senior</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </article>

                <article className="job featured">
                    <h3>Manage</h3>
                New!
                Featured
                <h2>Fullstack Developer</h2>
                1d ago
                Part Time
                Remote
                <div>

                </div>
                <!-- Role -->
                Fullstack
                <!-- Level -->
                Midweight
                <!-- Languages -->
                Python
                <!-- Tools -->
                React
                </article>

                <article className="job">
                    <h3>Account</h3>
                    New!
                    <h2>Junior Frontend Developer</h2>
                    2d ago
                    Part Time
                    USA only
                    <div>

                    </div>
                    <!-- Role -->
                    Frontend
                    <!-- Level -->
                    Junior
                    <!-- Languages -->
                    JavaScript
                    <!-- Tools -->
                    React
                    Sass
                </article>

            </main>

            <Footer />
        </>
    )
}

export default App
