import PropTypes from "prop-types";

const GifItem = ({gifElement: {title, url}}) => {
  return (
    <div className='card'>
      <img src={url}/>
      <p>{title}</p>
    </div>
  )
}

export default GifItem;

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired,
}




