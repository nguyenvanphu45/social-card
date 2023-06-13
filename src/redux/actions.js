export const addCard = (data) => {
    return {
        type: 'cards/addCard',
        payload: data
    }
}

export const updateCard = (data) => {
    return {
        type: 'cards/updateCard',
        payload: data
    }
}

export const deleteCard = ({id}) => {
    return {
        type: 'cards/deleteCard',
        id: id
    }
}

export const undoDelete = () => {
    return {
        type: 'cards/undoDelete'
    }
}

export const searchName = (text) => {
    return {
        type: 'search/searchName',
        payload: text,
    };
};

export const commentText = (text) => {
    console.log(text)
    return {
        type: 'comment/commentText',
        payload: text
    }
}