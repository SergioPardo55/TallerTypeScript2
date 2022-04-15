import { series } from './data.js';
var seriesTable = document.getElementById("series");
var serieDiv = document.getElementById("deploy");
//let promedioTable:HTMLElement = document.getElementById("promedio")!;
mostrarSeries(series);
mostrarPromTemporadas();
function mostrarSeries(series) {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var seriesTbody = document.createElement("tbody");
        var trElement = "<tr id=\"row".concat(serie.id, "\">\n        <th scope=\"row\" class=\"table-active\">").concat(serie.id, "</th>\n        <td class=\"table-active\"><a href=\"").concat(serie.link, "\">").concat(serie.nombre, "</a></td>\n        <td class=\"table-active\">").concat(serie.canal, "</td>\n        <td class=\"table-active\">").concat(serie.temporadas, "</td>\n        </tr>\n        ");
        seriesTbody.innerHTML = trElement;
        seriesTable.appendChild(seriesTbody);
    }
}
function darPromedioTemporadas(aSeries) {
    var totalTemporadas = 0;
    for (var index = 0; index < aSeries.length; index++) {
        var serie = aSeries[index];
        totalTemporadas += serie.temporadas;
    }
    return totalTemporadas / aSeries.length;
}
function mostrarPromTemporadas() {
    var seriesTbody = document.createElement("tbody");
    var trElement = document.createElement("tr");
    var promedio = darPromedioTemporadas(series);
    trElement.innerHTML = "<td><b>Seasons average: </b></td><td>".concat(promedio, "</td>");
    seriesTbody.appendChild(trElement);
    seriesTable.appendChild(seriesTbody);
}
var _loop_1 = function (index) {
    var row = document.getElementById("row".concat(index + 1));
    row.addEventListener("click", function () {
        var cardSerie = "<div class=\"card\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"".concat(series[index].imagen, "\" alt=\"Imagen carta\">\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">").concat(series[index].nombre, "</h5>\n      <p class=\"card-text\">").concat(series[index].descripcion, "</p>\n      <a href=\"").concat(series[index].link, "\">").concat(series[index].link, "</a>\n    </div>\n    </div>");
        serieDiv.innerHTML = cardSerie;
    }, false);
};
for (var index = 0; index < series.length; index++) {
    _loop_1(index);
}
