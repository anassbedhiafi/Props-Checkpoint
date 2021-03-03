import React from 'react'
import PropTypes from "prop-types";

const Info = ({fullname , bio , profission , handleName,Children}) => {
    return (
        <div>
            <h2>{fullname}</h2>
            <h3>{bio}</h3>
            <h3>{profission}</h3>
            
                   {Children}
                  <button onClick={() => handleName("Anas")}>Details</button>

        </div>
    )
}

export default Info
Info.defaultProps = {
  fullname: "inconnu",
  bio: 0,
  profission: "inconnu",
}
Info.propTypes = {
  fullname: PropTypes.string,
};