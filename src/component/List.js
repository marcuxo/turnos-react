import React from 'react'
import listCss from './stylos/List.css'

function List() {
  return (

    <div className="maestro">
       <table id="datatable">
        <thead>
          <tr className="clibtn">
              <th className="enter-align">Nombre</th>
              <th className="center-align">Cargo</th>
              <th className="center-align">Turno</th>
              <th className="center-align">Lunes</th>
              <th className="center-align">Martes</th>
              <th className="center-align">Miercoles</th>
              <th className="center-align">Jueves</th>
              <th className="center-align">Viernes</th>
              <th className="center-align">Sabado</th>
              <th className="center-align">Domingo</th>
          </tr>
        </thead>

        <tbody>
          <tr className="hoverable center-align">
            <td>
              <div className="chip left">
                Pedro Gutierrez
              </div>
            </td>
            <td className="center-align">
              <div className="chip center-align">
                Electrico  
              </div>
            </td>
            <td className="center-align">
              <div className="chip orange darken-2">
                Tarde
                </div>
            </td>
            <td>
              <div className="orange bb1">
                7.5
                </div>
            </td>
            <td>
              <div className="bb1 orange">
                7.5
                </div>
            </td>
            <td>
              <div className="bb1 orange">
                7.5
                </div>
            </td>
            <td>
              <div className="bb1 orange">
                7.5
                </div>
            </td>
            <td>
              <div className="bb1 green">
                Libre
                </div>
            </td>
            <td>
              <div className="bb1 orange">
                7.5
                </div>
            </td>
            <td>
              <div className="bb1 orange">
                7.5
                </div>
            </td>
          </tr>

          <tr className="hoverable">
            <td>
              <div className="chip left">
                Marco Urrutia
              </div>
            </td>
            <td className="center-align">
              <div className="chip">
                Gasfiter  
              </div>
            </td>
            <td className="center-align">
              <div className="chip amber">
                Mañana
                </div>
            </td>
            <td>
              <div className="center-align orange bb1">
                9
                </div>
            </td>
            <td>
              <div className="center-align green bb1">
                Libre
                </div>
            </td>
            <td>
              <div className="center-align orange bb1">
                9
                </div>
            </td>
            <td>
              <div className="center-align orange bb1">
                9
                </div>
            </td>
            <td>
              <div className="center-align orange bb1">
                9
                </div>
            </td>
            <td>
              <div className="center-align orange bb1">
                9
                </div>
            </td>
            <td>
              <div className="center-align green bb1">
                Libre
                </div>
            </td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>

          <tr className="hoverable">
            <td><div className="chip left">Vanessa Maturana</div></td>
            <td className="center-align"><div className="chip"> Mecanico</div></td>
            <td className="center-align"><div className="chip blue">Noche</div></td>
            <td><div className="orange bb1">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td> <div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange">7.5</div></td>
            <td><div className="bb1 orange"> 7.5</div></td>
            <td><div className="bb1 green"> Libre</div></td>
          </tr>
          
        </tbody>
      </table>


       



    <div className="row  center-align">
        <div><h1>Febrero </h1></div>
        <div className="chip">
          <img src="avatar.jpg" alt="Contact Person"/>
          Nombre Apellido
        </div>
        <div className="col s12 ">
          <div className="col ps bld blue lighten-3"><p>Semana</p></div>
          <div className="col pt bld blue lighten-3"><p>Turno</p></div>
          <div className="col pd bld blue lighten-3"><p>Lunes</p></div>
          <div className="col pd bld blue lighten-3"><p>Martes</p></div>
          <div className="col pd bld blue lighten-3"><p>Miercoles</p></div>
          <div className="col pd bld blue lighten-3"><p>Jueves</p></div>
          <div className="col pd bld blue lighten-3"><p>Viernes</p></div>
          <div className="col pd bld blue lighten-3"><p>Sabado</p></div>
          <div className="col pd bld blue lighten-3"><p>Sabado</p></div>
        </div>
        <div className="col s12 hoverable">
          <div className="col ps lista blue"><p>05</p></div>
          <div className="col pt lista yellow"><p>Mañana</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista green"><p>Libre</p></div>
          <div className="col pd lista green"><p>Libre</p></div>
        </div>
        <div className="col s12 ">
          <div className="col ps lista blue"><p>06</p></div>
          <div className="col pt lista yellow"><p>Tarde</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista green"><p>Libre</p></div>
          <div className="col pd lista green"><p>Libre</p></div>
        </div>
        <div className="col s12 ">
          <div className="col ps lista blue"><p>07</p></div>
          <div className="col pt lista yellow"><p>Noche</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista green"><p>Libre</p></div>
          <div className="col pd lista green"><p>Libre</p></div>
        </div>
        <div className="col s12 ">
          <div className="col ps lista blue"><p>08</p></div>
          <div className="col pt lista yellow"><p>Mañana</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista orange"><p>9</p></div>
          <div className="col pd lista green"><p>Libre</p></div>
          <div className="col pd lista green"><p>Libre</p></div>
        </div>
    </div>


    </div>
    

  )
}

export default List
