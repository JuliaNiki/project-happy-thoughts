import React from 'react'


const FormNewThought = ({ newThought, setNewThought, onFormSubmit, error }) => {


    // updating newThoughts from the form input like we did last week to have separate function for it 
    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }

    return (
        <form className="input-form" onSubmit={onFormSubmit}>
            <div className="new-thought">
                <label htmlFor="newThought" className="header-form">What's making you happy right now?</label>
                <textarea type="text"
                    id="newThought"
                    value={newThought}
                    onChange={onNewThoughtChange}
                    placeholder="Type your thoughts here..."
                    className="input-message"
                    rows='5'
                />
                <p className="error-message">{error}</p>
                <div className="count">
                    <span className={newThought.length > 140 ? 'red-color-counter' : 'black-color-counter'}>
                        {newThought.length}/140</span>
                </div>
                <div className="button-container">
                    <button
                        type="submit"
                        className="form-button"
                    ><span role="img"
                        aria-label="heart" className="heart">❤️</span><p className="send-thought-button">Send Happy Thought</p> <span role="img" aria-label="heart" className="heart">❤️</span>
                    </button >
                </div>
            </div>
        </form >
    )
}

export default FormNewThought