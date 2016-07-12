jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"biller/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"biller/test/integration/pages/Worklist",
		"biller/test/integration/pages/Object",
		"biller/test/integration/pages/NotFound",
		"biller/test/integration/pages/Browser",
		"biller/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "biller.view."
	});

	sap.ui.require([
		"biller/test/integration/WorklistJourney",
		"biller/test/integration/ObjectJourney",
		"biller/test/integration/NavigationJourney",
		"biller/test/integration/NotFoundJourney",
		"biller/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});
