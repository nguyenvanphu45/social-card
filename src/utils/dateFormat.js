import moment from "moment";

export const DateFormat = (card) => {
    return moment(card.date).format('DD/MM/YYYY');
}