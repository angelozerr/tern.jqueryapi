package tern.jqueryapi;

public class Entry {

	private final String name;
	private final String type;
	private String desc;

	public Entry(String name, String type) {
		this.name = name;
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public String getType() {
		return type;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getClassName() {
		/*if ("widget".equals(getType())) {
			return "jQuery.fn." + getName();
		}*/
		return getName();
	}

	public String getSuperclass() {
		if ("widget".equals(getType())) {
			return "jQuery.Widget.prototype";
		}
		return null;
	}

	public String getUrl() {
		return null;
	}

}
