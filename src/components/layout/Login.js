import React from 'react'

const Login = () => {
  return (
        
    <div className="container">
        <h2 className="mt-5">Login her</h2>
        <p style={{color:"lightgrey"}}>Log ind her for at rette eller tilføje nye opskrifter samt ingridienser.</p>
            <div className="row mt-5">
             <form className="col-12">
                <div className="form-group">
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Skriv din mail her..." />
                </div>
                <div class="form-group">
                    <input type="password" className="form-control"  placeholder="Skriv din adgangskode her..." />
                </div>
                <button type="submit" className="btn btn-primary my-3">Login</button>
                </form>
            </div>
    </div>
    )
}
export default Login