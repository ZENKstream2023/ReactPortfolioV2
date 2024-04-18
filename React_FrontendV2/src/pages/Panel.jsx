import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function PanelView() {
  useEffect(() => {
    // Obtenemos el elemento del span que mostrará el año actual
    const currentYear = document.getElementById("currentYear");
    // Obtenemos el año actual
    const year = new Date().getFullYear();
    // Actualizamos el contenido del span con el año actual
    currentYear.textContent = year;

    // Graphs
    const ctx = document.getElementById('myChart');
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            boxPadding: 3
          }
        }
      }
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div style={{ marginTop: '8em' }} className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                    <svg className="bi"><use xlinkHref="#house-fill"/></svg>
                    Panel
                  </a>
                </li>
                <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#file-earmark"/></svg>
                Pedidos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#cart"/></svg>
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#people"/></svg>
                Clientes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#graph-up"/></svg>
                Informes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#puzzle"/></svg>
                Integraciones
              </a>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Informes Pasados</span>
            <a className="link-secondary" href="#" aria-label="Add a new report">
              <svg className="bi"><use xlink:href="#plus-circle"/></svg>
            </a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#file-earmark-text"/></svg>
                Mes actual
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#file-earmark-text"/></svg>
                Último Trimestre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#file-earmark-text"/></svg>
                Acuerdos Cerrados
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#file-earmark-text"/></svg>
                Cierre Anual
              </a>
            </li>
          </ul>

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlink:href="#gear-wide-connected"/></svg>
                Configuración
              </a>
            </li>
            <li className="nav-item">
              <a href="/logout" className="fw-bold py-1 border-white btn btn-primary pt-2" style="height:2.5em; margin-top:5em; background: linear-gradient(
                to right,
                #df18df,
                #4c9ae7
              );" type="submit">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

        <div style={{ marginTop: '10em' }} className="col-md-9 col-lg-10">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Panel en directo</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Compartir</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Exportar</button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
              <svg className="bi"><use xlink:href="#calendar3"/></svg>
              Este mes
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2>Ventas en vivo</h2>
            <div className="table-responsive small">
              <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>placeholder</td>
              <td>tabular</td>
              <td>information</td>
              <td>irrelevant</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>text</td>
              <td>placeholder</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>visual</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>random</td>
              <td>tabular</td>
              <td>information</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PanelView;