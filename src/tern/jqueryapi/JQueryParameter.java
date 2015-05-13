package tern.jqueryapi;

import java.util.ArrayList;
import java.util.List;

public class JQueryParameter {

	private final String name;
	private final List<IType> types;
	private final boolean optional;

	public JQueryParameter(String name, boolean optional) {
		this.name = name;
		this.types = new ArrayList<IType>();
		this.optional = optional;
	}

	public String getName() {
		return name;
	}

	public void addType(IType type) {
		this.types.add(type);
	}

	public List<IType> getTypes() {
		return types;
	}

	public boolean isOptional() {
		return optional;
	}

	public boolean hasSeveralTypesWithFn() {
		for (IType type : types) {
			if (type instanceof FunctionType) {
				return true;
			}
		}
		return false;
	}

	/*
	 * void updateType(GApi api) { type.updateType(api); }
	 */

}
