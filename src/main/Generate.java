package main;

import java.io.IOException;

import tern.jqueryapi.generator.jquerymobile.JQueryMobilePluginGeneratorHelper;
import tern.jqueryapi.generator.jqueryui.JQueryUIPluginGeneratorHelper;
import tern.jqueryapi.generator.qunit.QUnitPluginGeneratorHelper;

public class Generate {

	public static void main(String[] args) throws IOException {

		String plugin = JQueryUIPluginGeneratorHelper.generateFile("jquery-ui",
				"1-12");
		System.err.println(plugin);

		String mobile = JQueryMobilePluginGeneratorHelper.generateFile(
				"jquery-mobile", "1.5");
		System.err.println(mobile);
		
		String qunit = QUnitPluginGeneratorHelper.generateFile(
				"qunit", "1-19");
		System.err.println(qunit);
	}
}
