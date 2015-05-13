package tern.jqueryapi;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

import tern.jqueryapi.utils.StringUtils;

public class EntryContentHandler extends DefaultHandler {

	private final JQueryApi api;
	private final String filename;

	private StringBuilder desc;
	private JQueryClass clazz;
	private JQueryClass clazzOption;

	private JQueryItem itemToUpdateForDesc;
	private JQueryMethod method;
	private JQueryMethod methodSignature;
	private JQueryProperty property;
	private JQueryParameter parameter;
	private FunctionType functionType;

	public EntryContentHandler(JQueryApi api, String filename) {
		this.api = api;
		this.filename = filename;
		System.err.println(filename);
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

					JQueryParameter parameter = new JQueryParameter("options",
							true);
					parameter.addType(new SimpleType(optionName));
					method.addParameter(parameter);
					itemToUpdateForDesc = method;
				}
			} else if ("method".equals(entryType)) {
				ClassInfo classInfo = getClassInfo(before, after, filename);
				JQueryClass clazz = getClass(classInfo.getName(), null, false,
						classInfo.isPrivate());
				String methodName = after == null ? entryName : after;
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
				property.addType(JQueryApiHelper.createType(type));
			}
		} else if ("type".equalsIgnoreCase(name)) {
			if (property != null || parameter != null) {
				String type = attributes.getValue("name");
				if (StringUtils.isEmpty(type)) {
					type = attributes.getValue("nmae");
				}
				if (!StringUtils.isEmpty(type)) {
					IType t = JQueryApiHelper.createType(type);
					if (property != null) {
						property.addType(t);
					} else {
						parameter.addType(t);
					}
					if (t instanceof FunctionType) {
						functionType = (FunctionType) t;
					}
				}
			}
		} else if ("signature".equalsIgnoreCase(name)) {
			if (method != null && method.getParameters().size() < 1) {
				methodSignature = method;
			}
		} else if ("argument".equalsIgnoreCase(name)) {
			if (methodSignature != null || functionType != null) {
				String paramName = attributes.getValue("name");
				parameter = new JQueryParameter(paramName, false);
				IType paramType = JQueryApiHelper.createType(attributes
						.getValue("type"));
				if (paramType != null) {
					parameter.addType(paramType);
				}
				if (functionType != null) {
					functionType.addParameter(parameter);
				} else {
					methodSignature.addParameter(parameter);
				}
			}
		}
		super.startElement(uri, localName, name, attributes);
	}

	protected ClassInfo getClassInfo(String before, String after,
			String filename) {
		String className = (after == null) ? "jQuery.fn" : before;
		return new ClassInfo(className, false);
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
		} else if ("argument".equalsIgnoreCase(name)) {
			parameter = null;
			functionType = null;
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
