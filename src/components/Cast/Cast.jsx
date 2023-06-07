import getCast from "api/getCast";
import CastItem from "components/CastItem/CastItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CastListStyled } from "./Cast.styled";

const mapCast = ({id, name, profile_path, character}) => <CastItem key={ id} name={name} profile_path={profile_path} character={character} />

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
         const responseResolved = cast => {
           setCast(cast);
         };

         const responseRejected = error => {
           console.log(error.message);
         };

         getCast(movieId).then(responseResolved).catch(responseRejected);
    }, [movieId])

    return <CastListStyled>{cast.map(mapCast)}</CastListStyled>;
}

export default Cast;