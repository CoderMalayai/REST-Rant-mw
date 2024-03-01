const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className="places-page-button">
                    <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                </div>
                <div>
                    <img src="/images/rasberry-ice-pops.jpg" alt="Rasberry Popsicles"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/de/@pablomerchanm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pablo Merchán Montes</a> on <a href="https://unsplash.com/photos/selective-focus-photography-of-thee-purple-ice-pops-near-pine-cones-MXovqM130UI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home