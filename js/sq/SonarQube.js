function SonarQube(version) {
    Root.call(this);
    this.metrics = {};
    this.version = version;
    this.onNotifyEvent = null;
    this.dateTimeFormat = "YYYY-MM-DD";
    this.config = {
        default: {
            fromDateMoment: moment().subtract(30, 'days'),
            toDateMoment: moment()
        }
    };
}

SonarQube.inherits(Root);

SonarQube.method(function refreshMetrics() {
    if(this.version >= 4 && this.version < 6) {
        this._registerMetricsSet1();
    } else {
        this._notify("The version `"+this.version+"` is not recognized by this application. Feel free to add it :)");
    }
});

SonarQube.method(function _addMetric(group, name, key) {
    if(this.metrics[group]) {
        this.metrics[group].push(new Metric(group, name, key));
    } else {
        this.metrics[group] = [];
    }
});

SonarQube.method(function onNotify(onNotifyEvent) {
    this.onNotifyEvent = onNotifyEvent;
});

SonarQube.method(function _notify(message){
    if(this.onNotifyEvent) {
        this.onNotifyEvent(message);
    }
});

SonarQube.method(function request(websiteURL, projectKey, fromDateMoment, toDateMoment, metrics) {
    // http://localhost:9000/api/timemachine?resource=UAV:2&metrics=violations&fromDateTime=2016-08-01T02:05:21+0000&toDateTime=2016-09-01T02:05:21+0000&format=json
    var url = websiteURL.replace(/\/$/, "") + "/api/timemachine?resource=" + projectKey + 
            "&metrics=" + metrics.join(",") + 
            "&fromDateTime=" + fromDateMoment.format(this.dateTimeFormat)
            "&toDateTime=" + toDateMoment.format(this.dateTimeFormat);
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);
        },
        error: function() {
            console.log("Error retreiving the information from the provided URL");
        }
    });
});

SonarQube.method(function _registerMetricsSet1() {

	// Complexity
    this._addMetric("Complexity", "Complexity", "complexity");
    this._addMetric("Complexity", "Complexity /class", "class_complexity");
    this._addMetric("Complexity", "Complexity /file", "file_complexity");
    this._addMetric("Complexity", "Complexity /method", "function_complexity");

    // Design
    this._addMetric("Design", "File cycles", "file_cycles");
    this._addMetric("Design", "File edges weight", "file_edges_weight");
    this._addMetric("Design", "File dependencies to cut", "package_tangles");
    this._addMetric("Design", "File tangle", "file_tangles");
    this._addMetric("Design", "File tangle index", "file_tangle_index");
    this._addMetric("Design", "Package cycles", "package_cycles");
    this._addMetric("Design", "Package dependencies to cut", "package_feedback_edges");
    this._addMetric("Design", "Package tangle index", "package_tangle_index");
    this._addMetric("Design", "Package edges weight", "package_edges_weight");
    this._addMetric("Design", "Suspect file dependencies", "file_feedback_edges");

    // Documentation
    this._addMetric("Documentation", "Comment lines", "comment_lines");
    this._addMetric("Documentation", "Comments (%)", "comment_lines_density");
    this._addMetric("Documentation", "Public documented API (%)", "public_documented_api_density");
    this._addMetric("Documentation", "Public undocumented API", "public_undocumented_api");

    // Duplications
    this._addMetric("Duplications", "Duplicated blocks", "duplicated_blocks");
    this._addMetric("Duplications", "Duplicated files", "duplicated_files");
    this._addMetric("Duplications", "Duplicated lines", "duplicated_lines");
    this._addMetric("Duplications", "Duplicated lines (%)", "duplicated_lines_density");

    // Issues
    this._addMetric("Issues", "New issues", "new_violations");
    this._addMetric("Issues", "New blocker issues ", "new_blocker_violations");
    this._addMetric("Issues", "New critical issues ", "new_critical_violations");
    this._addMetric("Issues", "New major issues ", "new_major_violations");
    this._addMetric("Issues", "New minor issues ", "new_minor_violations");
    this._addMetric("Issues", "New info issues ", "new_info_violations");
    this._addMetric("Issues", "Issues", "violations");
    this._addMetric("Issues", "blocker issues", "blocker_violations");
    this._addMetric("Issues", "critical issues", "critical_violations");
    this._addMetric("Issues", "major issues", "major_violations");
    this._addMetric("Issues", "minor issues", "minor_violations");
    this._addMetric("Issues", "info issues", "info_violations");
    this._addMetric("Issues", "False positive issues", "false_positive_issues");
    this._addMetric("Issues", "Open issues", "open_issues");
    this._addMetric("Issues", "Confirmed issues", "confirmed_issues");
    this._addMetric("Issues", "Reopened issues", "reopened_issues");
    this._addMetric("Issues", "Weighted issues", "weighted_violations");
    this._addMetric("Issues", "Rules compliance", "violations_density");
    this._addMetric("Issues", "Technical debt", "sqale_index");

    // Size
    this._addMetric("Size", "Accessors", "accessors");
    this._addMetric("Size", "Classes", "classes");
    this._addMetric("Size", "Directories", "directories");
    this._addMetric("Size", "Files", "files");
    this._addMetric("Size", "Generated Lines", "generated_lines");
    this._addMetric("Size", "Generated lines of code", "generated_ncloc");
    this._addMetric("Size", "Inside Control Flow Statements", "cobol_inside_ctrlflow_statements");
    this._addMetric("Size", "Lines", "lines");
    this._addMetric("Size", "Lines of code", "ncloc");
    this._addMetric("Size", "LOCs in Data Divisions", "cobol_data_division_ncloc");
    this._addMetric("Size", "LOCs in Procedure Divisions", "cobol_procedure_division_ncloc");
    this._addMetric("Size", "Methods", "functions");
    this._addMetric("Size", "Outside Control Flow Statements", "cobol_outside_ctrlflow_statements");
    this._addMetric("Size", "Projects", "projects");
    this._addMetric("Size", "Public API", "public_api");
    this._addMetric("Size", "Statements", "statements");

    // Tests
    this._addMetric("Tests", "Branch coverage", "branch_coverage");
    this._addMetric("Tests", "Branch coverage on new code", "new_branch_coverage");
    this._addMetric("Tests", "Branch coverage hits", "branch_coverage_hits_data");
    this._addMetric("Tests", "Conditions by line", "conditions_by_line");
    this._addMetric("Tests", "Covered conditions by line", "covered_conditions_by_line");
    this._addMetric("Tests", "Coverage", "coverage");
    this._addMetric("Tests", "Coverage on new code", "new_coverage");
    this._addMetric("Tests", "Line coverage", "line_coverage");
    this._addMetric("Tests", "Line coverage on new code", "new_line_coverage");
    this._addMetric("Tests", "Line coverage hits", "coverage_line_hits_data");
    this._addMetric("Tests", "Lines to cover", "lines_to_cover");
    this._addMetric("Tests", "Lines to cover on new code", "new_lines_to_cover");
    this._addMetric("Tests", "Skipped unit tests", "skipped_tests");
    this._addMetric("Tests", "Uncovered branches", "uncovered_conditions");
    this._addMetric("Tests", "Uncovered branches on new code", "new_uncovered_conditions");
    this._addMetric("Tests", "Uncovered lines", "uncovered_lines");
    this._addMetric("Tests", "Uncovered lines on new code", "new_uncovered_lines");
    this._addMetric("Tests", "Unit tests", "tests");
    this._addMetric("Tests", "Unit tests duration", "test_execution_time");
    this._addMetric("Tests", "Unit test errors", "test_errors");
    this._addMetric("Tests", "Unit test failures", "test_failures");
    this._addMetric("Tests", "Unit test success density (%)", "test_success_density");
});
