import PropTypes from "prop-types"

function Options({ options, onLeaveFeedback }) {
  const button = options.map(button => (
    <li  key={button}>
      <button typr="button" value={button} onClick={() => onLeaveFeedback(button)}  >
        {button}
      </button>
    </li>
  ))
  return (
    <ul >
        {button}
    </ul> 

    )
}

Options.prototype = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default Options;