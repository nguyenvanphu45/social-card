import { createSelector } from 'reselect';

export const searchSelector = (state) => state.search;
export const cardSelector = (state) => { 
    console.log(state)
    return state.cards
}

export const undoSelector = (state) => state.undo

export const cardsRemainingSelector = createSelector(
    cardSelector,
    searchSelector,
    undoSelector,
    (cards, search, undo) => {
        return cards.filter((card) => {
            return card.name.toLowerCase().includes(search);
        });
    }
)
