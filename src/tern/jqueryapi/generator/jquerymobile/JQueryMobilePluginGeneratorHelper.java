package tern.jqueryapi.generator.jquerymobile;

import java.io.IOException;

import tern.jqueryapi.generator.JQueryApiGenerator;

public class JQueryMobilePluginGeneratorHelper {

	private static final JQueryApiGenerator GENERATOR = new JQueryApiGenerator(
			new JQueryMobilePluginGenerator(),
			new JQueryMobileEntryContentHandlerFactory());

	public static String generate(String name, String version)
			throws IOException {
		return GENERATOR.generate(name, version);
	}

	public static String generateFile(String name, String version)
			throws IOException {
		return GENERATOR.generateFile(name, version);
	}
}
