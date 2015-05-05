package tern.jqueryapi;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Collection;

import tern.jqueryapi.handlers.IJQueryApiHandler;

public class JQueryApiHelper {

	public static JQueryApi load(String name, String version, File baseDir)
			throws IOException {
		JQueryApi api = new JQueryApi(name, version);
		File entriesDir = new File(baseDir, "entries");
		File[] entriesFiles = entriesDir.listFiles();
		for (int i = 0; i < entriesFiles.length; i++) {
			try {
				api.loadEntry(new FileInputStream(entriesFiles[i]));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return api;
	}

	public static void visit(JQueryApi api, IJQueryApiHandler visitor)
			throws IOException {
		visitor.startApi(api.getName(), api.getVersion());
		// Loop for entries
		String className = null;
		Collection<Entry> entries = api.getEntries();
		for (Entry entry : entries) {
			className = entry.getClassName();
			if (className != null) {
				visitor.startClass(className, entry.getSuperclass(), true,
						entry.getDesc(), entry.getUrl());
				visitor.endClass();
			}
		}
		visitor.endApi();
	}

}
