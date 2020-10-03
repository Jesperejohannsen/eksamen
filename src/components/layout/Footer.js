import React from 'react'

function Footer() {
    return (
        <div>
            <div style={{background: "#313030"}}className="text-light p-3">
                <h2 className="logo ">bageriet</h2>
                <p style={{color: "lightgrey"}}className="m-4">Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver har gennemgået forandringer</p>
            </div>
            <div className="bg-dark text-light p-2">
                <p className="mt-1">Copyright &#169; 2020 Bageriet ApS</p>
            </div>
        </div>
    )
}
export default Footer