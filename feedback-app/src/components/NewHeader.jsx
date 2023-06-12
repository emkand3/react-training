import PropTypes from 'prop-types'

function NewHeader({text, bgColor, textColor}) {

  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>  
    </header>
  )
}

NewHeader.defaultProps = {
    text : "Feedback UI",
    bgColor: 'rgba(0, 0, 0, 0.4)',
    textColor: "#ffff95",
}

NewHeader.propTypes = {
    text : PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default NewHeader