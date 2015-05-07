package tern.jqueryapi.handlers;

import java.io.IOException;

import tern.jqueryapi.JQueryMethod;
import tern.jqueryapi.JQueryProperty;

public interface IJQueryApiHandler {

	void startApi(String name, String version) throws IOException;

	void endApi() throws IOException;

	void startClass(String name, String superclass, boolean privateClass,
			String description, String url) throws IOException;

	void endClass() throws IOException;

	void handleMethod(JQueryMethod method);

	void handleProperty(JQueryProperty property);
}
