package tern.jqueryapi;

public class ClassInfo {

	private final String name;
	private final boolean isPrivate;

	public ClassInfo(String name, boolean isPrivate) {
		this.name = name;
		this.isPrivate = isPrivate;
	}

	public String getName() {
		return name;
	}

	public boolean isPrivate() {
		return isPrivate;
	}

}
