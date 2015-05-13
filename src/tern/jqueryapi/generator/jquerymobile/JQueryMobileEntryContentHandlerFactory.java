package tern.jqueryapi.generator.jquerymobile;

import tern.jqueryapi.EntryContentHandler;
import tern.jqueryapi.IEntryContentHandlerFactory;
import tern.jqueryapi.JQueryApi;

public class JQueryMobileEntryContentHandlerFactory implements
		IEntryContentHandlerFactory {

	@Override
	public EntryContentHandler create(JQueryApi api, String filename) {
		return new EntryContentHandler(api, filename);
	}
}
