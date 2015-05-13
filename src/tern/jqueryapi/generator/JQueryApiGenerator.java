package tern.jqueryapi.generator;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;

import tern.jqueryapi.IEntryContentHandlerFactory;
import tern.jqueryapi.JQueryApi;
import tern.jqueryapi.JQueryApiHelper;
import tern.jqueryapi.handlers.TernDefJQueryApiHandler;

public class JQueryApiGenerator {

	private final IGenerator generator;
	private final IEntryContentHandlerFactory factory;

	public JQueryApiGenerator(IGenerator generator,
			IEntryContentHandlerFactory factory) {
		this.generator = generator;
		this.factory = factory;
	}

	public String generate(String name, String version) throws IOException {

		StringWriter defs = new StringWriter();
		File basedir = new File("api/" + name + "/" + version); // new
																// File("api/jquery-ui/1-12");
		JQueryApi api = JQueryApiHelper.load(name, version, basedir, factory); // JQueryApiHelper.load("jquery-ui",
		// "1-12",
		// basedir);
		JQueryApiHelper.visit(api, new TernDefJQueryApiHandler(defs));

		String pluginName = name + version;

		TernPluginOptions options = new TernPluginOptions(pluginName,
				defs.toString());
		return generator.generate(options);
	}

	public String generateFile(String name, String version) throws IOException {
		String plugin = generate(name, version);
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
