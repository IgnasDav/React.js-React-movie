import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Styled
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="Movie thumb" />
        </Link>
      ) : (
        <Image src={image} alt="Movie thumb" />
      )}
    </div>
  );
};
Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};
export default Thumb;
