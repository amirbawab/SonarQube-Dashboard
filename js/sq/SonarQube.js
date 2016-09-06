function SonarQube() {
    Root.call(this);
    this.metrics = {};
    this.registerMetrics();
}

SonarQube.inherits(Root);

SonarQube.method(function addMetric(group, name, key) {
    if(this.metrics[group]) {
        this.metrics[group].push(new Metric(group, name, key));
    } else {
        this.metrics[group] = [];
    }
});

SonarQube.method(function registerMetrics() {

	// Complexity
    this.addMetric("Complexity", "Complexity", "complexity");
    this.addMetric("Complexity", "Complexity /class", "class_complexity");
    this.addMetric("Complexity", "Complexity /file", "file_complexity");
    this.addMetric("Complexity", "Complexity /method", "function_complexity");

    // Design
    this.addMetric("Design", "File cycles", "file_cycles");
    this.addMetric("Design", "File edges weight", "file_edges_weight");
    this.addMetric("Design", "File dependencies to cut", "package_tangles");
    this.addMetric("Design", "File tangle", "file_tangles");
    this.addMetric("Design", "File tangle index", "file_tangle_index");
    this.addMetric("Design", "Package cycles", "package_cycles");
    this.addMetric("Design", "Package dependencies to cut", "package_feedback_edges");
    this.addMetric("Design", "Package tangle index", "package_tangle_index");
    this.addMetric("Design", "Package edges weight", "package_edges_weight");
    this.addMetric("Design", "Suspect file dependencies", "file_feedback_edges");

    // Documentation
    this.addMetric("Documentation", "Comment lines", "comment_lines");
    this.addMetric("Documentation", "Comments (%)", "comment_lines_density");
    this.addMetric("Documentation", "Public documented API (%)", "public_documented_api_density");
    this.addMetric("Documentation", "Public undocumented API", "public_undocumented_api");

    // Duplications
    this.addMetric("Duplications", "Duplicated blocks", "duplicated_blocks");
    this.addMetric("Duplications", "Duplicated files", "duplicated_files");
    this.addMetric("Duplications", "Duplicated lines", "duplicated_lines");
    this.addMetric("Duplications", "Duplicated lines (%)", "duplicated_lines_density");

    // Issues
    this.addMetric("Issues", "New issues", "new_violations");
    this.addMetric("Issues", "New blocker issues ", "new_blocker_violations");
    this.addMetric("Issues", "New critical issues ", "new_critical_violations");
    this.addMetric("Issues", "New major issues ", "new_major_violations");
    this.addMetric("Issues", "New minor issues ", "new_minor_violations");
    this.addMetric("Issues", "New info issues ", "new_info_violations");
    this.addMetric("Issues", "Issues", "violations");
    this.addMetric("Issues", "blocker issues", "blocker_violations");
    this.addMetric("Issues", "critical issues", "critical_violations");
    this.addMetric("Issues", "major issues", "major_violations");
    this.addMetric("Issues", "minor issues", "minor_violations");
    this.addMetric("Issues", "info issues", "info_violations");
    this.addMetric("Issues", "False positive issues", "false_positive_issues");
    this.addMetric("Issues", "Open issues", "open_issues");
    this.addMetric("Issues", "Confirmed issues", "confirmed_issues");
    this.addMetric("Issues", "Reopened issues", "reopened_issues");
    this.addMetric("Issues", "Weighted issues", "weighted_violations");
    this.addMetric("Issues", "Rules compliance", "violations_density");
    this.addMetric("Issues", "Technical debt", "sqale_index");

    // Size
    this.addMetric("Size", "Accessors", "accessors");
    this.addMetric("Size", "Classes", "classes");
    this.addMetric("Size", "Directories", "directories");
    this.addMetric("Size", "Files", "files");
    this.addMetric("Size", "Generated Lines", "generated_lines");
    this.addMetric("Size", "Generated lines of code", "generated_ncloc");
    this.addMetric("Size", "Inside Control Flow Statements", "cobol_inside_ctrlflow_statements");
    this.addMetric("Size", "Lines", "lines");
    this.addMetric("Size", "Lines of code", "ncloc");
    this.addMetric("Size", "LOCs in Data Divisions", "cobol_data_division_ncloc");
    this.addMetric("Size", "LOCs in Procedure Divisions", "cobol_procedure_division_ncloc");
    this.addMetric("Size", "Methods", "functions");
    this.addMetric("Size", "Outside Control Flow Statements", "cobol_outside_ctrlflow_statements");
    this.addMetric("Size", "Projects", "projects");
    this.addMetric("Size", "Public API", "public_api");
    this.addMetric("Size", "Statements", "statements");

    // Tests
    this.addMetric("Tests", "Branch coverage", "branch_coverage");
    this.addMetric("Tests", "Branch coverage on new code", "new_branch_coverage");
    this.addMetric("Tests", "Branch coverage hits", "branch_coverage_hits_data");
    this.addMetric("Tests", "Conditions by line", "conditions_by_line");
    this.addMetric("Tests", "Covered conditions by line", "covered_conditions_by_line");
    this.addMetric("Tests", "Coverage", "coverage");
    this.addMetric("Tests", "Coverage on new code", "new_coverage");
    this.addMetric("Tests", "Line coverage", "line_coverage");
    this.addMetric("Tests", "Line coverage on new code", "new_line_coverage");
    this.addMetric("Tests", "Line coverage hits", "coverage_line_hits_data");
    this.addMetric("Tests", "Lines to cover", "lines_to_cover");
    this.addMetric("Tests", "Lines to cover on new code", "new_lines_to_cover");
    this.addMetric("Tests", "Skipped unit tests", "skipped_tests");
    this.addMetric("Tests", "Uncovered branches", "uncovered_conditions");
    this.addMetric("Tests", "Uncovered branches on new code", "new_uncovered_conditions");
    this.addMetric("Tests", "Uncovered lines", "uncovered_lines");
    this.addMetric("Tests", "Uncovered lines on new code", "new_uncovered_lines");
    this.addMetric("Tests", "Unit tests", "tests");
    this.addMetric("Tests", "Unit tests duration", "test_execution_time");
    this.addMetric("Tests", "Unit test errors", "test_errors");
    this.addMetric("Tests", "Unit test failures", "test_failures");
    this.addMetric("Tests", "Unit test success density (%)", "test_success_density");
});
