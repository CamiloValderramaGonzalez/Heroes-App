import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
    const { heroId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const handleReturn = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to='/' />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={heroImages(`./${id}.jpg`)}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{hero.superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item" >
                        <b>Alter Ego</b>{alter_ego}
                    </li>
                    <li className="list-group-item" >
                        <b>Publisher</b>{publisher}
                    </li>
                    <li className="list-group-item" >
                        <b>First Appearance</b>{first_appearance}
                    </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
