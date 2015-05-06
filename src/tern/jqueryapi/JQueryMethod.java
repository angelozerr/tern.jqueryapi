package tern.jqueryapi;

import java.util.ArrayList;
import java.util.List;

import tern.jqueryapi.utils.StringUtils;

public class JQueryMethod extends JQueryItem {

	private final String name;
	private final boolean staticMethod;
	private final List<JQueryParameter> parameters;
	private String returnValue;

	public JQueryMethod(String name, String returnValue, boolean staticMethod) {
		this.name = name;
		this.parameters = new ArrayList<JQueryParameter>();
		this.returnValue = returnValue;
		this.staticMethod = staticMethod;
	}

	public String getName() {
		return name;
	}

	public boolean isStaticMethod() {
		return staticMethod;
	}

	public String getUrl() {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean hasReturnValue() {
		return !StringUtils.isEmpty(returnValue);
	}

	public String getReturnValue() {
		return returnValue;
	}

	public void addParameter(JQueryParameter parameter) {
		parameters.add(parameter);
	}

	public List<JQueryParameter> getParameters() {
		return parameters;
	}
}
