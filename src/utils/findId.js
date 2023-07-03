import { useSelector } from "react-redux";
import { cardsRemainingSelector } from "~/redux/selectors";

export const FindId = (params) => {
    const cards = useSelector(cardsRemainingSelector);
    
    return cards.find(({ id }) => id == params);
}