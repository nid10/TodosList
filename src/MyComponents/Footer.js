import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <p className="text-center">
                Copyright &copy;
            </p>
        </footer >
    )
}

// without footer.css file  but you can use style sheet as well like above eg
// export const Footer = () => {
//     let footerStyle = {
//         position: "absolute",
//         top: "100vh",
//         width: "100%"
//     }
//     return (
//         <footer className="bg-dark text-light py-3" style={footerStyle}>
//             <p className="text-center">
//                 Copyright &copy;
//             </p>
//         </footer >
//     )
// }
