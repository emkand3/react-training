function App() {
    const title = "slayer title"
    const body = "boop boop beep beep boop"
    const comments = [
        {id: 1, text: "comment one"},
        {id: 2, text: "comment two"},
        {id: 3, text: "comment three"},
    ]

    return (
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <div>
                <h3>
                    Comments ({comments.length})
                </h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App