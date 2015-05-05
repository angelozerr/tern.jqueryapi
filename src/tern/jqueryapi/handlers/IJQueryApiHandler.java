package tern.jqueryapi.handlers;

import java.io.IOException;

public interface IJQueryApiHandler {

	void startApi(String name, String version) throws IOException;

	void endApi() throws IOException;

	void startClass(String name, String superclass, boolean objectLiteral,
			String description, String url) throws IOException;

	void endClass() throws IOException;
	
}
