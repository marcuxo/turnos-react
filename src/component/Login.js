import React, { Fragment } from 'react'

function login() {
  return (
   <Fragment>
     <div className="container">
       <div className="row">
        <div className="col s12">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Usuario</label>
          </div>
          <div className="input-field col s12">
            <input id="clave" type="password" className="validate" />
            <label htmlFor="clave">Clave</label>
          </div>
          <button className="btn waves-effect waves-light right" type="submit" name="action">Entrar
            <i className="material-icons right">send</i>
          </button>
        </div>
       </div>
     </div>
   </Fragment>
  )
}

export default login
