import React from 'react'
//importing icons
import Github from '@material-ui/icons/GitHub'
//importing styles
import '../styles/footer.css'

function footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <Github />
        </div>
        <p>&copy; 2023 React Portfolio</p>
    </div>
  )
}

export default footer