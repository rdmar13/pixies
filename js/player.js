
(function($) {
	var radarChartData = {
		labels: ["Ataque", "Defensa", "Velocidad", "Condicion", "Reaccion"],
		datasets: [
			{
				label: "Curiosidades",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [60,70,80,80,90]
			}
		]
	};

	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
			responsive: true
		});
	}

})(jQuery);