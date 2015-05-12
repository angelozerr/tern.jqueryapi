package tern.jqueryapi.generator;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;

import tern.jqueryapi.JQueryApi;
import tern.jqueryapi.JQueryApiHelper;
import tern.jqueryapi.handlers.TernDefJQueryApiHandler;

public class JQueryApiPluginGeneratorHelper {

	public static String generate(String name, String version, IGenerator generator)
			throws IOException {

		StringWriter defs = new StringWriter();
		File basedir = new File("api/" + name + "/" + version); // new
																// File("api/jquery-ui/1-12");
		JQueryApi api = JQueryApiHelper.load(name, version, basedir); // JQueryApiHelper.load("jquery-ui",
																		// "1-12",
																		// basedir);
		JQueryApiHelper.visit(api, new TernDefJQueryApiHandler(defs));

		String pluginName = name + version;

		TernPluginOptions options = new TernPluginOptions(pluginName,
				defs.toString());
		return generator.generate(options);
	}

	public static String generateFile(String name, String version, IGenerator generator)
			throws IOException {
		String plugin = JQueryApiPluginGeneratorHelper.generate(name,
				version, generator);
		File file = new File(name + version + ".js");
		Writer writer = null;
		try {
			writer = new FileWriter(file);
			writer.write(plugin);
		} finally {
			if (writer != null) {
				writer.flush();
				writer.close();
			}
		}
		return plugin;
	}
}
