function SonarQube() {
    Root.call(this);
    this.metrics = [];
    this.registerMetrics();
}

SonarQube.inherits(Root);

SonarQube.method(function registerMetrics() {

	// Complexity
    this.metrics.push("Complexity", "Complexity", "complexity");
    this.metrics.push("Complexity", "Complexity /class", "class_complexity");
    this.metrics.push("Complexity", "Complexity /file", "file_complexity");
    this.metrics.push("Complexity", "Complexity /method", "function_complexity");

    // Design
    this.metrics.push("Design", "File cycles", "file_cycles");
    this.metrics.push("Design", "File edges weight", "file_edges_weight");
    this.metrics.push("Design", "File dependencies to cut", "package_tangles");
    this.metrics.push("Design", "File tangle", "file_tangles");
    this.metrics.push("Design", "File tangle index", "file_tangle_index");
    this.metrics.push("Design", "Package cycles", "package_cycles");
    this.metrics.push("Design", "Package dependencies to cut", "package_feedback_edges");
    this.metrics.push("Design", "Package tangle index", "package_tangle_index");
    this.metrics.push("Design", "Package edges weight", "package_edges_weight");
    this.metrics.push("Design", "Suspect file dependencies", "file_feedback_edges");

    // Documentation
    this.metrics.push("Documentation", "Comment lines", "comment_lines");
    this.metrics.push("Documentation", "Comments (%)", "comment_lines_density");
    this.metrics.push("Documentation", "Public documented API (%)", "public_documented_api_density");
    this.metrics.push("Documentation", "Public undocumented API", "public_undocumented_api");

    // Duplications
    this.metrics.push("Duplications", "Duplicated blocks", "duplicated_blocks");
    this.metrics.push("Duplications", "Duplicated files", "duplicated_files");
    this.metrics.push("Duplications", "Duplicated lines", "duplicated_lines");
    this.metrics.push("Duplications", "Duplicated lines (%)", "duplicated_lines_density");

    // Issues
    this.metrics.push("Issues", "New issues", "new_violations");
    this.metrics.push("Issues", "New blocker issues ", "new_blocker_violations");
    this.metrics.push("Issues", "New critical issues ", "new_critical_violations");
    this.metrics.push("Issues", "New major issues ", "new_major_violations");
    this.metrics.push("Issues", "New minor issues ", "new_minor_violations");
    this.metrics.push("Issues", "New info issues ", "new_info_violations");
    this.metrics.push("Issues", "Issues", "violations");
    this.metrics.push("Issues", "blocker issues", "blocker_violations");
    this.metrics.push("Issues", "critical issues", "critical_violations");
    this.metrics.push("Issues", "major issues", "major_violations");
    this.metrics.push("Issues", "minor issues", "minor_violations");
    this.metrics.push("Issues", "info issues", "info_violations");
    this.metrics.push("Issues", "False positive issues", "false_positive_issues");
    this.metrics.push("Issues", "Open issues", "open_issues");
    this.metrics.push("Issues", "Confirmed issues", "confirmed_issues");
    this.metrics.push("Issues", "Reopened issues", "reopened_issues");
    this.metrics.push("Issues", "Weighted issues", "weighted_violations");
    this.metrics.push("Issues", "Rules compliance", "violations_density");
    this.metrics.push("Issues", "Technical debt", "sqale_index");

    // Size
    this.metrics.push("Size", "Accessors", "accessors");
    this.metrics.push("Size", "Classes", "classes");
    this.metrics.push("Size", "Directories", "directories");
    this.metrics.push("Size", "Files", "files");
    this.metrics.push("Size", "Generated Lines", "generated_lines");
    this.metrics.push("Size", "Generated lines of code", "generated_ncloc");
    this.metrics.push("Size", "Inside Control Flow Statements", "cobol_inside_ctrlflow_statements");
    this.metrics.push("Size", "Lines", "lines");
    this.metrics.push("Size", "Lines of code", "ncloc");
    this.metrics.push("Size", "LOCs in Data Divisions", "cobol_data_division_ncloc");
    this.metrics.push("Size", "LOCs in Procedure Divisions", "cobol_procedure_division_ncloc");
    this.metrics.push("Size", "Methods", "functions");
    this.metrics.push("Size", "Outside Control Flow Statements", "cobol_outside_ctrlflow_statements");
    this.metrics.push("Size", "Projects", "projects");
    this.metrics.push("Size", "Public API", "public_api");
    this.metrics.push("Size", "Statements", "statements");

    // Tests
    this.metrics.push("Tests", "Branch coverage", "branch_coverage");
    this.metrics.push("Tests", "Branch coverage on new code", "new_branch_coverage");
    this.metrics.push("Tests", "Branch coverage hits", "branch_coverage_hits_data");
    this.metrics.push("Tests", "Conditions by line", "conditions_by_line");
    this.metrics.push("Tests", "Covered conditions by line", "covered_conditions_by_line");
    this.metrics.push("Tests", "Coverage", "coverage");
    this.metrics.push("Tests", "Coverage on new code", "new_coverage");
    this.metrics.push("Tests", "Line coverage", "line_coverage");
    this.metrics.push("Tests", "Line coverage on new code", "new_line_coverage");
    this.metrics.push("Tests", "Line coverage hits", "coverage_line_hits_data");
    this.metrics.push("Tests", "Lines to cover", "lines_to_cover");
    this.metrics.push("Tests", "Lines to cover on new code", "new_lines_to_cover");
    this.metrics.push("Tests", "Skipped unit tests", "skipped_tests");
    this.metrics.push("Tests", "Uncovered branches", "uncovered_conditions");
    this.metrics.push("Tests", "Uncovered branches on new code", "new_uncovered_conditions");
    this.metrics.push("Tests", "Uncovered lines", "uncovered_lines");
    this.metrics.push("Tests", "Uncovered lines on new code", "new_uncovered_lines");
    this.metrics.push("Tests", "Unit tests", "tests");
    this.metrics.push("Tests", "Unit tests duration", "test_execution_time");
    this.metrics.push("Tests", "Unit test errors", "test_errors");
    this.metrics.push("Tests", "Unit test failures", "test_failures");
    this.metrics.push("Tests", "Unit test success density (%)", "test_success_density");
});
