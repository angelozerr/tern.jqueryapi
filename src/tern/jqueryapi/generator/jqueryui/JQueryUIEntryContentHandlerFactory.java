package tern.jqueryapi.generator.jqueryui;

import tern.jqueryapi.EntryContentHandler;
import tern.jqueryapi.IEntryContentHandlerFactory;
import tern.jqueryapi.JQueryApi;

public class JQueryUIEntryContentHandlerFactory implements
		IEntryContentHandlerFactory {

	@Override
	public EntryContentHandler create(JQueryApi api, String filename) {
		return new EntryContentHandler(api, filename);
	}
}
