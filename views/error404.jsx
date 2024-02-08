const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/error-egg.jpg" alt="Gasp error agg"/>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@theshubhamdhage?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Shubham Dhage</a> on <a href="https://unsplash.com/photos/yellow-and-brown-duck-cartoon-character-t0Bv0OBQuTg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404