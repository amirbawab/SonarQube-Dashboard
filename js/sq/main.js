var sonarqube = new SonarQube();

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
