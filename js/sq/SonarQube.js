function SonarQube() {
    Root.call(this);
    this.metrics = [];
    this.registerMetrics();
}

SonarQube.inherits(Root);

SonarQube.method(function registerMetrics() {

	// Complexity
    this.metrics.push(new Metric("Complexity", "Complexity", "complexity"));
    this.metrics.push(new Metric("Complexity", "Complexity /class", "class_complexity"));
    this.metrics.push(new Metric("Complexity", "Complexity /file", "file_complexity"));
    this.metrics.push(new Metric("Complexity", "Complexity /method", "function_complexity"));

    // Design
    this.metrics.push(new Metric("Design", "File cycles", "file_cycles"));
    this.metrics.push(new Metric("Design", "File edges weight", "file_edges_weight"));
    this.metrics.push(new Metric("Design", "File dependencies to cut", "package_tangles"));
    this.metrics.push(new Metric("Design", "File tangle", "file_tangles"));
    this.metrics.push(new Metric("Design", "File tangle index", "file_tangle_index"));
    this.metrics.push(new Metric("Design", "Package cycles", "package_cycles"));
    this.metrics.push(new Metric("Design", "Package dependencies to cut", "package_feedback_edges"));
    this.metrics.push(new Metric("Design", "Package tangle index", "package_tangle_index"));
    this.metrics.push(new Metric("Design", "Package edges weight", "package_edges_weight"));
    this.metrics.push(new Metric("Design", "Suspect file dependencies", "file_feedback_edges"));

    // Documentation
    this.metrics.push(new Metric("Documentation", "Comment lines", "comment_lines"));
    this.metrics.push(new Metric("Documentation", "Comments (%)", "comment_lines_density"));
    this.metrics.push(new Metric("Documentation", "Public documented API (%)", "public_documented_api_density"));
    this.metrics.push(new Metric("Documentation", "Public undocumented API", "public_undocumented_api"));

    // Duplications
    this.metrics.push(new Metric("Duplications", "Duplicated blocks", "duplicated_blocks"));
    this.metrics.push(new Metric("Duplications", "Duplicated files", "duplicated_files"));
    this.metrics.push(new Metric("Duplications", "Duplicated lines", "duplicated_lines"));
    this.metrics.push(new Metric("Duplications", "Duplicated lines (%)", "duplicated_lines_density"));

    // Issues
    this.metrics.push(new Metric("Issues", "New issues", "new_violations"));
    this.metrics.push(new Metric("Issues", "New blocker issues ", "new_blocker_violations"));
    this.metrics.push(new Metric("Issues", "New critical issues ", "new_critical_violations"));
    this.metrics.push(new Metric("Issues", "New major issues ", "new_major_violations"));
    this.metrics.push(new Metric("Issues", "New minor issues ", "new_minor_violations"));
    this.metrics.push(new Metric("Issues", "New info issues ", "new_info_violations"));
    this.metrics.push(new Metric("Issues", "Issues", "violations"));
    this.metrics.push(new Metric("Issues", "blocker issues", "blocker_violations"));
    this.metrics.push(new Metric("Issues", "critical issues", "critical_violations"));
    this.metrics.push(new Metric("Issues", "major issues", "major_violations"));
    this.metrics.push(new Metric("Issues", "minor issues", "minor_violations"));
    this.metrics.push(new Metric("Issues", "info issues", "info_violations"));
    this.metrics.push(new Metric("Issues", "False positive issues", "false_positive_issues"));
    this.metrics.push(new Metric("Issues", "Open issues", "open_issues"));
    this.metrics.push(new Metric("Issues", "Confirmed issues", "confirmed_issues"));
    this.metrics.push(new Metric("Issues", "Reopened issues", "reopened_issues"));
    this.metrics.push(new Metric("Issues", "Weighted issues", "weighted_violations"));
    this.metrics.push(new Metric("Issues", "Rules compliance", "violations_density"));
    this.metrics.push(new Metric("Issues", "Technical debt", "sqale_index"));

    // Size
    this.metrics.push(new Metric("Size", "Accessors", "accessors"));
    this.metrics.push(new Metric("Size", "Classes", "classes"));
    this.metrics.push(new Metric("Size", "Directories", "directories"));
    this.metrics.push(new Metric("Size", "Files", "files"));
    this.metrics.push(new Metric("Size", "Generated Lines", "generated_lines"));
    this.metrics.push(new Metric("Size", "Generated lines of code", "generated_ncloc"));
    this.metrics.push(new Metric("Size", "Inside Control Flow Statements", "cobol_inside_ctrlflow_statements"));
    this.metrics.push(new Metric("Size", "Lines", "lines"));
    this.metrics.push(new Metric("Size", "Lines of code", "ncloc"));
    this.metrics.push(new Metric("Size", "LOCs in Data Divisions", "cobol_data_division_ncloc"));
    this.metrics.push(new Metric("Size", "LOCs in Procedure Divisions", "cobol_procedure_division_ncloc"));
    this.metrics.push(new Metric("Size", "Methods", "functions"));
    this.metrics.push(new Metric("Size", "Outside Control Flow Statements", "cobol_outside_ctrlflow_statements"));
    this.metrics.push(new Metric("Size", "Projects", "projects"));
    this.metrics.push(new Metric("Size", "Public API", "public_api"));
    this.metrics.push(new Metric("Size", "Statements", "statements"));

    // Tests
    this.metrics.push(new Metric("Tests", "Branch coverage", "branch_coverage"));
    this.metrics.push(new Metric("Tests", "Branch coverage on new code", "new_branch_coverage"));
    this.metrics.push(new Metric("Tests", "Branch coverage hits", "branch_coverage_hits_data"));
    this.metrics.push(new Metric("Tests", "Conditions by line", "conditions_by_line"));
    this.metrics.push(new Metric("Tests", "Covered conditions by line", "covered_conditions_by_line"));
    this.metrics.push(new Metric("Tests", "Coverage", "coverage"));
    this.metrics.push(new Metric("Tests", "Coverage on new code", "new_coverage"));
    this.metrics.push(new Metric("Tests", "Line coverage", "line_coverage"));
    this.metrics.push(new Metric("Tests", "Line coverage on new code", "new_line_coverage"));
    this.metrics.push(new Metric("Tests", "Line coverage hits", "coverage_line_hits_data"));
    this.metrics.push(new Metric("Tests", "Lines to cover", "lines_to_cover"));
    this.metrics.push(new Metric("Tests", "Lines to cover on new code", "new_lines_to_cover"));
    this.metrics.push(new Metric("Tests", "Skipped unit tests", "skipped_tests"));
    this.metrics.push(new Metric("Tests", "Uncovered branches", "uncovered_conditions"));
    this.metrics.push(new Metric("Tests", "Uncovered branches on new code", "new_uncovered_conditions"));
    this.metrics.push(new Metric("Tests", "Uncovered lines", "uncovered_lines"));
    this.metrics.push(new Metric("Tests", "Uncovered lines on new code", "new_uncovered_lines"));
    this.metrics.push(new Metric("Tests", "Unit tests", "tests"));
    this.metrics.push(new Metric("Tests", "Unit tests duration", "test_execution_time"));
    this.metrics.push(new Metric("Tests", "Unit test errors", "test_errors"));
    this.metrics.push(new Metric("Tests", "Unit test failures", "test_failures"));
    this.metrics.push(new Metric("Tests", "Unit test success density (%)", "test_success_density"));
});
