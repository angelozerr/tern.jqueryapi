package tern.jqueryapi;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import tern.jqueryapi.utils.StringUtils;

public class EntryContentHandler extends DefaultHandler {

	private final JQueryApi api;
	private StringBuilder desc;
	private JQueryClass clazz;
	private JQueryClass clazzOption;

	private JQueryItem itemToUpdateForDesc;
	private JQueryMethod method;
	private JQueryMethod methodSignature;
	private JQueryProperty property;

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
					method = clazz.addMethod(new JQueryMethod(methodName,
							returnValue, true));

					String optionName = methodName + "Option";
					clazzOption = getClass(optionName, null, false, true);

					method.addParameter(new JQueryParameter("options",
							optionName, true));
					itemToUpdateForDesc = method;
				}
			} else if ("method".equals(entryType)) {
				String className = (after == null) ? "jQuery.fn" : before;
				JQueryClass clazz = getClass(className, null, false, false);
				String methodName = entryName;
				method = clazz
						.addMethod(new JQueryMethod(methodName, "", true));
				itemToUpdateForDesc = method;
			} else if ("property".equals(entryType)) {

			} else if ("widget".equals(entryType)) {

			} else if ("effect".equals(entryType)) {

			} else if ("selector".equals(entryType)) {

			}
		} else if ("desc".equalsIgnoreCase(name)) {
			this.desc = new StringBuilder();
		} else if ("option".equalsIgnoreCase(name)) {
			this.property = new JQueryProperty(attributes.getValue("name"),
					true);
			String type = attributes.getValue("type");
			if (!StringUtils.isEmpty(type)) {
				property.addType(type);
			}
		} else if ("type".equalsIgnoreCase(name)) {
			if (property != null) {
				property.addType(attributes.getValue("name"));
			}
		} else if ("signature".equalsIgnoreCase(name)) {
			if (method != null && method.getParameters().size() < 1) {
				methodSignature = method;
			}
		} else if ("argument".equalsIgnoreCase(name)) {
			if (methodSignature != null) {
				String paramName = attributes.getValue("name");
				String paramType = attributes.getValue("type");
				methodSignature.addParameter(new JQueryParameter(paramName,
						paramType, false));
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
		if ("entry".equalsIgnoreCase(name)) {
			reset();
		} else if ("desc".equalsIgnoreCase(name)) {
			if (property != null) {
				if (property.getDescription() == null) {
					property.setDescription(desc.toString());
				}
			} else if (itemToUpdateForDesc != null) {
				itemToUpdateForDesc.setDescription(desc.toString());
				itemToUpdateForDesc = null;
			}

			desc = null;
		}
		if ("option".equalsIgnoreCase(name)) {
			if (clazzOption != null) {
				clazzOption.addProperty(property);
			}
			this.property = null;
		} else if ("signature".equalsIgnoreCase(name)) {
			methodSignature = null;
		}
		super.endElement(uri, localName, name);
	}

	private void reset() {
		methodSignature = null;
		method = null;
		clazzOption = null;
	}

	public void characters(char[] ch, int start, int length)
			throws SAXException {
		if (desc != null) {
			desc.append(ch, start, length);
		}
		super.characters(ch, start, length);
	}

}
