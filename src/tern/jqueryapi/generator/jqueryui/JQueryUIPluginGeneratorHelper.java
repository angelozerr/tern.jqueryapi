package tern.jqueryapi.generator.jqueryui;

import java.io.IOException;

import tern.jqueryapi.generator.JQueryApiGenerator;

public class JQueryUIPluginGeneratorHelper {

	private static final JQueryApiGenerator GENERATOR = new JQueryApiGenerator(
			new JQueryUIPluginGenerator(),
			new JQueryUIEntryContentHandlerFactory());

	public static String generate(String name, String version)
			throws IOException {
		return GENERATOR.generate(name, version);
	}

	public static String generateFile(String name, String version)
			throws IOException {
		return GENERATOR.generateFile(name, version);
	}
}
