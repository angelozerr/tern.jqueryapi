package tern.jqueryapi;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class JQueryApi {

	private final String name;
	private final String version;
	private final Map<String, JQueryClass> classes;
	private final IEntryContentHandlerFactory factory;

	public JQueryApi(String name, String version,
			IEntryContentHandlerFactory factory) {
		this.name = name;
		this.version = version;
		this.factory = factory;
		this.classes = new HashMap<String, JQueryClass>();
	}

	public void loadEntry(InputStream in, String filename) throws SAXException,
			IOException, ParserConfigurationException {
		SAXParser saxReader = SAXParserFactory.newInstance().newSAXParser();
		// set the feature like explained in documentation :
		// http://nekohtml.sourceforge.net/faq.html#fragments
		/*
		 * saxReader .setFeature(
		 * "http://cyberneko.org/html/features/balance-tags/document-fragment",
		 * true);
		 */
		EntryContentHandler handler = factory.create(this, filename);
		// saxReader.setContentHandler(handler);
		saxReader.parse(new InputSource(in), handler);
	}

	public void addClass(JQueryClass clazz) {
		classes.put(clazz.getClassName(), clazz);
	}

	public JQueryClass getClass(String className) {
		return classes.get(className);
	}

	public String getName() {
		return name;
	}

	public String getVersion() {
		return version;
	}

	public Collection<JQueryClass> getClasses() {
		return classes.values();
	}

}
