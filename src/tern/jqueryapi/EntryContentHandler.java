package tern.jqueryapi;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class EntryContentHandler extends DefaultHandler {

	private final JQueryApi api;
	private Entry entry;
	private StringBuilder desc;

	public EntryContentHandler(JQueryApi api) {
		this.api = api;
	}

	@Override
	public void startElement(String uri, String localName, String name,
			Attributes attributes) throws SAXException {
		if ("entry".equalsIgnoreCase(name)) {
			String entryName = attributes.getValue("name");
			String entryType = attributes.getValue("type");
			entry = new Entry(entryName, entryType);
			api.addEntry(entry);
		} else if ("desc".equalsIgnoreCase(name)) {
			this.desc = new StringBuilder();
		}
		super.startElement(uri, localName, name, attributes);
	}

	@Override
	public void endElement(String uri, String localName, String name)
			throws SAXException {
		if ("desc".equalsIgnoreCase(name)) {
			entry.setDesc(desc.toString());
			desc = null;
		}
		super.endElement(uri, localName, name);
	}

	public void characters(char[] ch, int start, int length)
			throws SAXException {
		if (desc != null) {
			desc.append(ch, start, length);
		}
		super.characters(ch, start, length);
	}

	public Entry getEntry() {
		return entry;
	}
}
