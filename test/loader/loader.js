steal("qunit").then("../../jqueryui.js").then(function() {

	module("jqueryui");

	test("load accordion", function() {
		equal(true, ( typeof $("#qunit-test-area").accordion === "function"));
	});
	test("load autocomplete", function() {
		equal(true, ( typeof $("#qunit-test-area").autocomplete === "function"));
	});
	test("load button", function() {
		equal(true, ( typeof $("#qunit-test-area").button === "function"));
	});
	test("load datepicker", function() {
		equal(true, ( typeof $("#qunit-test-area").datepicker === "function"));
	});
	test("load dialog", function() {
		equal(true, ( typeof $("#qunit-test-area").dialog === "function"));
	});
	test("load draggable", function() {
		equal(true, ( typeof $("#qunit-test-area").draggable === "function"));
	});
	test("load droppable", function() {
		equal(true, ( typeof $("#qunit-test-area").droppable === "function"));
	});
	test("load effect", function() {
		equal(true, ( typeof $("#qunit-test-area").effect === "function"));
	});
	test("load menu", function() {
		equal(true, ( typeof $("#qunit-test-area").menu === "function"));
	});
	test("load mouse", function() {
		equal(true, ( typeof $("#qunit-test-area").mouse === "function"));
	});
	test("load position", function() {
		equal(true, ( typeof $("#qunit-test-area").position === "function"));
	});
	test("load progressbar", function() {
		equal(true, ( typeof $("#qunit-test-area").progressbar === "function"));
	});
	test("load resizable", function() {
		equal(true, ( typeof $("#qunit-test-area").resizable === "function"));
	});
	test("load selectable", function() {
		equal(true, ( typeof $("#qunit-test-area").selectable === "function"));
	});
	test("load slider", function() {
		equal(true, ( typeof $("#qunit-test-area").slider === "function"));
	});
	test("load sortable", function() {
		equal(true, ( typeof $("#qunit-test-area").sortable === "function"));
	});
	test("load spinner", function() {
		equal(true, ( typeof $("#qunit-test-area").spinner === "function"));
	});
	test("load tabs", function() {
		equal(true, ( typeof $("#qunit-test-area").tabs === "function"));
	});
	test("load tooltip", function() {
		equal(true, ( typeof $("#qunit-test-area").tooltip === "function"));
	});
});
