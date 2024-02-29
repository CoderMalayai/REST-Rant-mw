const React = require ('react')
const Def = require('../default')

function show (data) {
    let rating = (
        <h3 className="inactive">
            Not Rated Yet!!!
        </h3>
    )
    if (data.place.comments.length > 0) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    let comments = (
        <h3 className="inactive">
            No comments yet!!!
        </h3>
    )
    if (data.place.comments.length > 0) {
        comments = data.place.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">{comment.author}</h5>
                                <h4 className="card-text">{comment.rant ? 'Rant🤬!' : 'Rave🥳!'}</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                <il className="list-group-item">{comment.content}</il>
                                <il className="list-group-item">Rating: {comment.stars} stars</il>
                                </ul>
                                <div className="edit-delete">
                                <a href={`/places/${data.place.id}/comments/${comment.id}/edit`} className="btn btn-outline-warning">
                                    Edit
                                </a>
                                <form method="POST" action={`/places/${data.place.id}/comment/${comment.id}?_method=DELETE`}>
                                    <input type="Submit" className="btn btn-outline-danger" defaultValue="Delete Comment" />
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <img src={data.place.pic} alt={data.place.name}/>
                            <h3>Located in {data.place.city}, {data.place.state}</h3>
                        </div>
                        <div className="col">
                            <h1>{data.place.name}</h1>
                            <h2>Rating</h2>
                            <p>{rating}</p>
                            <h2>Description</h2>
                            <h3>{data.place.showEstablished()}</h3>
                            <h4>Serving {data.place.cuisines}</h4>
                        </div>
                    </div>
                </div>
                <h2>Comments</h2>
                {comments}
                <a href={`/places/${data.place.id}/comments/new`} className='btn btn-primary'>
                    <i className='bi bi-plus-circle-fill'></i> Add Comment
                </a>
                <div className="edit-delete">
                    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
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
