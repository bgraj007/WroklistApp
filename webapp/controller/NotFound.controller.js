sap.ui.define([
		"biller/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("biller.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);