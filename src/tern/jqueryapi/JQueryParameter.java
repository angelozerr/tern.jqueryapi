package tern.jqueryapi;

public class JQueryParameter {

	private final String name;
	private String type;
	private final boolean optional;

	public JQueryParameter(String name, String type, boolean optional) {
		this.name = name;
		this.type = getType(type);
		this.optional = optional;
	}
	
	
	
	

	/*private IType getType(String type) {
		if (type.startsWith("function(")) {
			int fnIndex = type.lastIndexOf(")");
			String returnFn = type.substring(fnIndex, type.length());
			int returnIndex = returnFn.indexOf(":");
			if (returnIndex == -1) {
				returnFn = null;
			} else {			
				type = type.substring(0, fnIndex + 1);
				returnFn = returnFn.substring(returnIndex + 1, returnFn.length());
			}
			return new FunctionType(type, returnFn);
		}
		return new SimpleType(type);
	}*/

	private String getType(String type) {
		// TODO Auto-generated method stub
		return type;
	}





	public String getName() {
		return name;
	}

	public String getType() {
		return type;
	}

	public boolean isOptional() {
		return optional;
	}

	/*void updateType(GApi api) {
		type.updateType(api);
	}*/

}
