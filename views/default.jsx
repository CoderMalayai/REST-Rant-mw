const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>REST-Rant APP</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def