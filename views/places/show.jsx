const React = require ('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!!!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map((comment) => {
            return (
                <div key={comment.id} className="border">
                    <h2 className="rant">{comment.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {comment.author}</strong>
                    </h3>
                    <h4>Rating: {comment.stars}</h4>
                    <p className="comment-text">{comment.centent}</p>
                </div>
            )
        })
    }
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            <main>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            <img src={data.place.pic} alt={data.place.name}/>
                            <h3>Located in {data.place.city}, {data.place.state}</h3>
                        </div>
                        <div class="col">
                            <h1>{data.place.name}</h1>
                            <h2>Rating</h2>
                            <p>Not Rated</p>
                            <h2>Description</h2>
                            <h3>{data.place.showEstablished()}</h3>
                            <h4>Serving {data.place.cuisines}</h4>
                        </div>
                    </div>
                </div>
                <h2>Comments</h2>
                {comments}
                <div class="edit-delete">
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="Submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show