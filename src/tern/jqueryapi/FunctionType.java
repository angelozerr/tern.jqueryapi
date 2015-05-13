package tern.jqueryapi;

public class FunctionType extends JQueryMethod implements IType {

	public FunctionType(String signature, String returnFn) {
		super(signature, returnFn, false);
	}

}
