package tern.jqueryapi.generator.qunit;

import tern.jqueryapi.EntryContentHandler;
import tern.jqueryapi.IEntryContentHandlerFactory;
import tern.jqueryapi.JQueryApi;

public class QUnitEntryContentHandlerFactory implements
		IEntryContentHandlerFactory {

	@Override
	public EntryContentHandler create(JQueryApi api, String filename) {
		return new QUnitEntryContentHandler(api, filename);
	}
}
