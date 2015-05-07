package tern.jqueryapi;

import java.util.ArrayList;
import java.util.Collection;

public class JQueryProperty extends JQueryItem {

	private final String name;
	private final boolean staticProperty;
	private final Collection<String> types;

	public JQueryProperty(String name, boolean staticProperty) {
		this.name = name;
		this.staticProperty = staticProperty;
		this.types = new ArrayList<String>();
	}

	public String getName() {
		return name;
	}

	public void addType(String type) {
		this.types.add(type);
	}

	public Collection<String> getTypes() {
		return types;
	}

	public boolean isStaticProperty() {
		return staticProperty;
	}

	public String getUrl() {
		// TODO Auto-generated method stub
		return null;
	}
}
