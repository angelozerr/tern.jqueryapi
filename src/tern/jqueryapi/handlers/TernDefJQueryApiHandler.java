package tern.jqueryapi.handlers;

import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;
import java.util.List;

import tern.jqueryapi.JQueryMethod;
import tern.jqueryapi.JQueryParameter;
import tern.jqueryapi.utils.StringUtils;

import com.eclipsesource.json.JsonObject;

public class TernDefJQueryApiHandler extends AbstractJQueryApiHandler {

	private final JsonObject def;
	private JsonObject ternClass;
	private JsonObject define;

	public TernDefJQueryApiHandler(OutputStream out) {
		super(out);
		this.def = new JsonObject();
	}

	public TernDefJQueryApiHandler(Writer writer) {
		super(writer);
		this.def = new JsonObject();
	}

	@Override
	public void startApi(String name, String version) throws IOException {
		def.set("!name", name + version);
		this.define = new JsonObject();
		def.set("!define", define);
	}

	@Override
	public void endApi() throws IOException {
		write(def.toString());
	}

	@Override
	public void startClass(String name, String superclass,
			boolean privateClass, String description, String url)
			throws IOException {
		this.ternClass = getTernClass(name, privateClass ? define : def);
		if (!StringUtils.isEmpty(superclass)) {
			ternClass.set("!proto", superclass);
		}
		addDocAndUrl(ternClass, description, url);
	}

	protected void addDocAndUrl(JsonObject ternDef, String doc, String url) {
		if (!StringUtils.isEmpty(doc)) {
			ternDef.set("!doc", doc);
		}
		if (!StringUtils.isEmpty(url)) {
			ternDef.set("!url", url);
		}
	}

	@Override
	public void endClass() throws IOException {
		this.ternClass = null;
	}

	@Override
	public void handleMethod(JQueryMethod method) {
		JsonObject ternItem = getTernClassOrPrototype(ternClass, method);
		String type = getType(method);
		if (!StringUtils.isEmpty(type)) {
			ternItem.set("!type", type);
		}
		String doc = method.getDescription();
		String url = method.getUrl();
		addDocAndUrl(ternItem, doc, url);
	}

	private String getType(JQueryMethod method) {
		StringBuilder type = new StringBuilder("fn(");

		List<JQueryParameter> parameters = method.getParameters();
		for (int i = 0; i < parameters.size(); i++) {
			JQueryParameter parameter = parameters.get(i);
			if (i > 0) {
				type.append(", ");
			}
			type.append(parameter.getName());
			if (parameter.isOptional()) {
				type.append("?");
			}
			type.append(": ");
			type.append(getType(parameter.getType()));

		}

		type.append(")");
		if (method.hasReturnValue()) {
			String returnValue = method.getReturnValue();
			type.append(" -> ");
			type.append(getType(returnValue));
		}
		return type.toString();
	}

	private String getType(String returnValue) {
		if ("this".equals(returnValue)) {
			return "!this";
		}
		return returnValue;
	}

	private JsonObject getTernClassOrPrototype(JsonObject ternClass,
			JQueryMethod method) {
		// constructor
		/*
		 * if (method.isConstructor()) { return ternClass; }
		 */
		// static Method
		if (method.isStaticMethod()) {
			JsonObject staticMethod = new JsonObject();
			ternClass.set(method.getName(), staticMethod);
			return staticMethod;
		}
		JsonObject prototype = (JsonObject) ternClass.get("prototype");
		if (prototype == null) {
			prototype = new JsonObject();
			ternClass.set("prototype", prototype);
		}
		JsonObject prototypeMethod = new JsonObject();
		prototype.set(method.getName(), prototypeMethod);
		return prototypeMethod;
	}

	private JsonObject getTernClass(String name, JsonObject parent) {
		String[] classes = name.split("[.]");
		String className = null;
		for (int i = 0; i < classes.length; i++) {
			className = classes[i];
			if (parent.get(className) == null) {
				JsonObject ternClass = new JsonObject();
				parent = parent.set(className, ternClass);
				parent = ternClass;
			} else {
				parent = (JsonObject) parent.get(className);
			}
		}
		return parent;
	}

}
