package tern.jqueryapi.generator.qunit;

import tern.jqueryapi.ClassInfo;
import tern.jqueryapi.EntryContentHandler;
import tern.jqueryapi.JQueryApi;

public class QUnitEntryContentHandler extends EntryContentHandler {

	public QUnitEntryContentHandler(JQueryApi api, String filename) {
		super(api, filename);
	}

	@Override
	protected ClassInfo getClassInfo(String before, String after,
			String filename) {
		if (after == null) {
			return new ClassInfo("Assert", true);
		}
		return super.getClassInfo(before, after, filename);
	}

}
