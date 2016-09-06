var sonarqube = null;

// Set on version change
var sqVersion = document.getElementById("sq-version");
sqVersion.onchange = function() {

    // Create a SonarQube instance with the correct version
    sonarqube = new SonarQube(sqVersion.value); 

    // Handle notification events
    sonarqube.onNotify(function (message) {
        if(!message || message == "") {
            document.getElementById('notification').className = "hide";
        } else {
            var notification = document.getElementById("notification");
            notification.className = "alert alert-danger";
            notification.innerText = message;
        }
    });

    // Refresh metrics
    sonarqube.refreshMetrics();

    // Add metrics to the dropdown
    addMetrics();
};

// Set the default SonarQube
sqVersion.onchange();

// Add metrics to DOM
function addMetrics() {

	// Clear metrics dropdown
	document.getElementById("metrics").innerHTML = "";
	
	// Add options
	for(var group in sonarqube.metrics) {
		var optgroup = document.createElement("optgroup");
		optgroup.label = group;
		for(var i=0; i < sonarqube.metrics[group].length; i++) {
			optgroup.appendChild(sonarqube.metrics[group][i].toOption());
		}
		document.getElementById("metrics").appendChild(optgroup);
	}
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
