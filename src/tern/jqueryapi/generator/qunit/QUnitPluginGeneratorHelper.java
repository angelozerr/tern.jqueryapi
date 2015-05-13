package tern.jqueryapi.generator.qunit;

import java.io.IOException;

import tern.jqueryapi.generator.JQueryApiGenerator;

public class QUnitPluginGeneratorHelper {

	private static final JQueryApiGenerator GENERATOR = new JQueryApiGenerator(
			new QUnitPluginGenerator(), new QUnitEntryContentHandlerFactory());

	public static String generate(String name, String version)
			throws IOException {
		return GENERATOR.generate(name, version);
	}

	public static String generateFile(String name, String version)
			throws IOException {
		return GENERATOR.generateFile(name, version);
	}
}
