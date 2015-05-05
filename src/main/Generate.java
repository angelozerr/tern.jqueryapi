package main;

import java.io.File;
import java.io.IOException;

import tern.jqueryapi.JQueryApi;
import tern.jqueryapi.JQueryApiHelper;
import tern.jqueryapi.handlers.TernDefJQueryApiHandler;

public class Generate {

	public static void main(String[] args) throws IOException {
		File basedir = new File("api/jquery-ui/1-12");
		JQueryApi api = JQueryApiHelper.load("jquery-ui", "1-12", basedir);
		JQueryApiHelper.visit(api, new TernDefJQueryApiHandler(System.out));
	}
}
