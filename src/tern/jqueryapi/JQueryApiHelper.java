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
		Collection<JQueryClass> classes = api.getClasses();
		for (JQueryClass clazz : classes) {
			visitor.startClass(clazz.getClassName(), clazz.getSuperClass(),
					clazz.isPrivateClass(), clazz.getDescription(),
					clazz.getUrl());
			// Loop for properties
			Collection<JQueryProperty> properties = clazz.getProperties();
			for (JQueryProperty property : properties) {
				visitor.handleProperty(property);
			}
			// Loop for methods
			Collection<JQueryMethod> methods = clazz.getMethods();
			for (JQueryMethod method : methods) {
				visitor.handleMethod(method);
			}

			visitor.endClass();
		}
		visitor.endApi();
	}

}
