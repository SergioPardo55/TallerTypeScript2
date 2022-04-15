import {Serie} from './series.js';
import {series} from './data.js';

let seriesTable:HTMLElement = document.getElementById("series")!;
let serieDiv:HTMLElement = document.getElementById("deploy")!;
//let promedioTable:HTMLElement = document.getElementById("promedio")!;

mostrarSeries(series);
mostrarPromTemporadas();

function mostrarSeries(series:Serie[]):void
{
    for(let serie of series)
    {
        let seriesTbody:HTMLElement = document.createElement("tbody");
        let trElement: string = `<tr id="row${serie.id}">
        <th scope="row" class="table-active">${serie.id}</th>
        <td class="table-active"><a href="${serie.link}">${serie.nombre}</a></td>
        <td class="table-active">${serie.canal}</td>
        <td class="table-active">${serie.temporadas}</td>
        </tr>
        `;
        seriesTbody.innerHTML=trElement;
        seriesTable.appendChild(seriesTbody);
    }
}

function darPromedioTemporadas(aSeries: Serie[]):number{
    let totalTemporadas:number=0;
    for(let index = 0; index <aSeries.length;index++)
    {
        let serie: Serie = aSeries[index];
        totalTemporadas+=serie.temporadas;
    }
    return totalTemporadas/aSeries.length;
}

function mostrarPromTemporadas():void{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    let trElement: HTMLElement = document.createElement("tr");
    let promedio:number = darPromedioTemporadas(series);
    trElement.innerHTML = `<td><b>Seasons average: </b></td><td>${promedio}</td>`;
    seriesTbody.appendChild(trElement);
    seriesTable.appendChild(seriesTbody);
}

for(let index = 0; index <series.length;index++){
    let row = document.getElementById(`row${index+1}`)!;
    row.addEventListener("click", function() {
    let cardSerie:string = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${series[index].imagen}" alt="Imagen carta">
    <div class="card-body">
      <h2 class="card-title">${series[index].nombre}</h5>
      <p class="card-text">${series[index].descripcion}</p>
      <a href="${series[index].link}">${series[index].link}</a>
    </div>
    </div>`;    
    serieDiv.innerHTML=cardSerie;
    }, false);
}
