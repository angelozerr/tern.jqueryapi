package main;

import java.io.IOException;

import tern.jqueryapi.generator.JQueryMobilePluginGeneratorHelper;
import tern.jqueryapi.generator.JQueryUIPluginGeneratorHelper;

public class Generate {

	public static void main(String[] args) throws IOException {

		String plugin = JQueryUIPluginGeneratorHelper.generateFile("jquery-ui",
				"1-12");
		System.err.println(plugin);

		String mobile = JQueryMobilePluginGeneratorHelper.generateFile(
				"jquery-mobile", "1.5");
		System.err.println(mobile);
	}
}
