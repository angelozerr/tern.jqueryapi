package tern.jqueryapi;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class JQueryApi {

	private final String name;
	private final String version;
	private final Collection<Entry> entries;

	public JQueryApi(String name, String version) {
		this.name = name;
		this.version = version;
		this.entries = new ArrayList<Entry>();
	}

	public void loadEntry(InputStream in) throws SAXException, IOException,
			ParserConfigurationException {
		SAXParser saxReader = SAXParserFactory.newInstance().newSAXParser();
		// set the feature like explained in documentation :
		// http://nekohtml.sourceforge.net/faq.html#fragments
		/*
		 * saxReader .setFeature(
		 * "http://cyberneko.org/html/features/balance-tags/document-fragment",
		 * true);
		 */
		EntryContentHandler handler = new EntryContentHandler(this);
		// saxReader.setContentHandler(handler);
		saxReader.parse(new InputSource(in), handler);
	}

	public void addEntry(Entry entry) {
		entries.add(entry);
	}

	public String getName() {
		return name;
	}

	public String getVersion() {
		return version;
	}

	public Collection<Entry> getEntries() {
		return entries;
	}
}
