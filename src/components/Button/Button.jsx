import PropTypes from 'prop-types';

export default Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.defaultProps = {
  onClick: () => null,
};
Button.propType = {
  onClick: PropTypes.func.isRequired,
};
