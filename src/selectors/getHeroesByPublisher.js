import { heroes } from "../data/heroes";

export const getHeroesBuPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}