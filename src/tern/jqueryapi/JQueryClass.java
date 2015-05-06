package tern.jqueryapi;

import java.util.ArrayList;
import java.util.Collection;

public class JQueryClass extends JQueryItem {

	private final String className;
	private boolean objectLiteral;
	private final boolean privateClass;
	private final String superClass;
	private final Collection<JQueryMethod> methods;

	public JQueryClass(String className, String superClass,
			boolean objectLiteral, boolean privateClass) {
		this.className = className;
		this.superClass = superClass;
		this.objectLiteral = objectLiteral;
		this.privateClass = privateClass;
		this.methods = new ArrayList<JQueryMethod>();
	}

	public String getClassName() {
		return className;
	}

	public boolean isObjectLiteral() {
		return objectLiteral;
	}

	public boolean isPrivateClass() {
		return privateClass;
	}

	public String getSuperClass() {
		return superClass;
	}

	public String getUrl() {
		return null;
	}
	
	public void addMethod(JQueryMethod method) {
		methods.add(method);
	}
	
	public Collection<JQueryMethod> getMethods() {
		return methods;
	}
	
}
