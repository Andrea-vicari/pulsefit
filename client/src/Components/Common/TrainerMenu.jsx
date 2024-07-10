import React from 'react'

function TrainerMenu() {
  return (
    <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">

              <li className="nav-item">
                <Link className="nav-link fs-4" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "elencoprenotazionitrainer" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/agenda'} >Prenotazioni confermate</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "userslist" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/userslist'}>Elenco utenti</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "userslist" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/userslist'}>Aggiungi Workout</Link>
              </li>
              <li className="nav-item">
                <Link className={splitLocation[1] == "elencoprenotazionitrainer" ? "active nav-link fs-4" : "nav-link fs-4"} to={'/elencoprenotazionitrainer'}>Prenotazioni confermate</Link>
              </li>


              {user && <li className="nav-item">
                <Link className="nav-link fs-4" to={'/dashboardpage'}>DashBoard</Link>
              </li>}

            </ul>
  )
}

export default TrainerMenu