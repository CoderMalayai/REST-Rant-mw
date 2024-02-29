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
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                <h5 class="card-title">{comment.author}</h5>
                                <h4 class="card-text">{comment.rant ? 'Rant🤬!' : 'Rave🥳!'}</h4>
                                </div>
                                <ul class="list-group list-group-flush">
                                <il class="list-group-item">{comment.content}</il>
                                <il class="list-group-item">Rating: {comment.stars} stars</il>
                                </ul>
                                <div class="edit-delete">
                                <a href={`/places/${data.place.id}/edit`} className="btn btn-outline-warning">
                                    Edit
                                </a>
                                <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                                    <input type="Submit" className="btn btn-outline-danger" value="Delete Comment" />
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
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            <img src={data.place.pic} alt={data.place.name}/>
                            <h3>Located in {data.place.city}, {data.place.state}</h3>
                        </div>
                        <div class="col">
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
                <div class="edit-delete">
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