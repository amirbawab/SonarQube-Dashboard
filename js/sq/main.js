var sonarqube = new SonarQube();

// Add options
for(var group in sonarqube.metrics) {
	var optgroup = document.createElement("optgroup");
	optgroup.label = group;
		console.log(sonarqube.metrics);
	for(var i=0; i < sonarqube.metrics[group].length; i++) {
		optgroup.appendChild(sonarqube.metrics[group][i].toOption());
	}
	document.getElementById("metrics").appendChild(optgroup);
}

// Set datepicker fields
$('.datepicker').datepicker({
    format: 'mm/dd/yyyy'
});

// Set multiselect fields
$('#metrics').multiselect({
     enableClickableOptGroups: true,
     enableCaseInsensitiveFiltering: true,
     enableFiltering: true,
     buttonWidth: '100%',
     enableCollapsibleOptGroups: true
});
