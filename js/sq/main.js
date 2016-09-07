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

function sonarQubeIt() {
    var websiteURL = document.getElementById("website-url").value;
    var projectKey = document.getElementById("project-key").value;
    var fromDate = document.getElementById("from-date").value;
    var toDate = document.getElementById("to-date").value;
    
    var metricsOptions = $("#metrics option:selected");
    var metrics = [];
    for(var i=0; i<metricsOptions.length; i++) {
        metrics.push(metricsOptions[i].value);
    }

    var datepickerFieldFormat = $('.date').datepicker.defaults.format;
    var fromDateMoment = moment(fromDate, datepickerFieldFormat);
    var toDateMoment = moment(toDate, datepickerFieldFormat);

    if(!websiteURL || !projectKey || !fromDate || !toDate || metrics.length == 0) {
        alert("All fields are required!");
    } else {
        sonarqube.request(websiteURL, projectKey, fromDateMoment, toDateMoment, metrics);
    }
}

// Set datepicker fields
$('.date').datepicker({
    format: 'yyyy-mm-dd'
});

$('#from-datepicker').datepicker('setDate', sonarqube.config.default.fromDateMoment.toDate());
$('#to-datepicker').datepicker('setDate', sonarqube.config.default.toDateMoment.toDate());

// Set multiselect fields
$('#metrics').multiselect({
     enableClickableOptGroups: true,
     enableCaseInsensitiveFiltering: true,
     enableFiltering: true,
     buttonWidth: '100%',
     enableCollapsibleOptGroups: true
});
