package tern.jqueryapi;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class EntryContentHandler extends DefaultHandler {

	private final JQueryApi api;
	private StringBuilder desc;
	private JQueryClass clazz;

	private JQueryItem itemToUpdateForDesc;
	private JQueryMethod method;

	public EntryContentHandler(JQueryApi api) {
		this.api = api;
	}

	@Override
	public void startElement(String uri, String localName, String name,
			Attributes attributes) throws SAXException {
		if ("entry".equalsIgnoreCase(name)) {
			String entryName = attributes.getValue("name");
			String entryType = attributes.getValue("type");

			String before = entryName;
			String after = null;
			int index = entryName.lastIndexOf(".");
			if (index != -1) {
				before = entryName.substring(0, index);
				after = entryName.substring(index + 1, entryName.length());
			}

			if ("widget".equals(entryType)) {
				if ("jQuery.Widget".equals(entryName)) {
					JQueryClass clazz = getClass(entryName, null, false, false);
					itemToUpdateForDesc = clazz;
				} else {
					String className = (after == null) ? "jQuery.fn" : before;
					JQueryClass clazz = getClass(className, null, false, false);
					String methodName = entryName;
					String returnValue = "this";
					method = new JQueryMethod(methodName, returnValue, true);
					clazz.addMethod(method);
					itemToUpdateForDesc = method;

				}
			} else if ("method".equals(entryType)) {

			} else if ("property".equals(entryType)) {

			} else if ("widget".equals(entryType)) {

			} else if ("effect".equals(entryType)) {

			} else if ("selector".equals(entryType)) {

			}

			// clazz = getClass(entryName, entryType);
		} else if ("desc".equalsIgnoreCase(name)) {
			this.desc = new StringBuilder();
		} else if ("option".equalsIgnoreCase(name)) {
			if (method != null) {
				System.err.println(method);
			}
		}
		super.startElement(uri, localName, name, attributes);
	}

	public JQueryClass getClass(String className, String superClass,
			boolean objectLiteral, boolean privateClass) {
		// String className = getClassName(entryName, entryType);
		JQueryClass clazz = api.getClass(className);
		if (clazz == null) {
			// String superClass = getSuperClass(entryType);
			clazz = new JQueryClass(className, superClass, objectLiteral,
					privateClass);
			api.addClass(clazz);
		}
		return clazz;
	}

	private String getSuperClass(String entryType) {
		if (entryType.equals("widget")) {
			return "jQuery.Widget.prototype";
		}
		return null;
	}

	@Override
	public void endElement(String uri, String localName, String name)
			throws SAXException {
		if ("desc".equalsIgnoreCase(name)) {
			if (itemToUpdateForDesc != null) {
				itemToUpdateForDesc.setDescription(desc.toString());
				itemToUpdateForDesc = null;
			}
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

}
