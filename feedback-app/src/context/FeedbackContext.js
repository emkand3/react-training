import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid' 

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "Context item 1",
            rating: 10
        }, 
        {
            id: 2,
            text: "Context item 2",
            rating: 10
        },
        {
            id: 3,
            text: "Context item 3",
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedback(feedback.filter((item) => item.id !== id))   
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, newItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...newItem} : item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,    //<-- the piece of state that holds the item and whether or not its being edited
        deleteFeedback,
        addFeedback,
        editFeedback,   //<-- the function that edits the feedback
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext