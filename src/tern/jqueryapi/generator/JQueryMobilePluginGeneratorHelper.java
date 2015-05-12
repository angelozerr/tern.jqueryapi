package tern.jqueryapi.generator;

import java.io.IOException;

public class JQueryMobilePluginGeneratorHelper {

	public static String generate(String name, String version)
			throws IOException {
		return JQueryApiPluginGeneratorHelper.generate(name, version,
				new JQueryMobilePluginGenerator());
	}

	public static String generateFile(String name, String version)
			throws IOException {
		return JQueryApiPluginGeneratorHelper.generateFile(name, version,
				new JQueryMobilePluginGenerator());
	}
}
