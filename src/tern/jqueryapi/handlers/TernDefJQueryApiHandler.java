package tern.jqueryapi.handlers;

import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;

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
			boolean objectLiteral, String description, String url)
			throws IOException {
		this.ternClass = getTernClass(name, objectLiteral ? define : def);
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
