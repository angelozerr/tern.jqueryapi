package tern.jqueryapi;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Collection;

import tern.jqueryapi.handlers.IJQueryApiHandler;
import tern.jqueryapi.utils.StringUtils;

public class JQueryApiHelper {

	public static JQueryApi load(String name, String version, File baseDir,
			IEntryContentHandlerFactory factory) throws IOException {
		JQueryApi api = new JQueryApi(name, version, factory);
		File entriesDir = new File(baseDir, "entries");
		File[] entriesFiles = entriesDir.listFiles();
		File entryFile = null;
		for (int i = 0; i < entriesFiles.length; i++) {
			entryFile = entriesFiles[i];
			try {
				api.loadEntry(new FileInputStream(entriesFiles[i]),
						entryFile.getName());
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

	public static IType createType(String type) {
		if (StringUtils.isEmpty(type)) {
			return null;
		}
		if ("Function".equalsIgnoreCase(type)) {
			return new FunctionType("", "");
		}
		return new SimpleType(type);
	}
}
