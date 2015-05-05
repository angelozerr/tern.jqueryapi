package tern.jqueryapi.handlers;

import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;

public abstract class AbstractJQueryApiHandler implements IJQueryApiHandler {

	private final OutputStream out;
	private final Writer writer;

	public AbstractJQueryApiHandler(OutputStream out) {
		this.out = out;
		this.writer = null;
	}

	public AbstractJQueryApiHandler(Writer writer) {
		this.out = null;
		this.writer = writer;
	}

	protected void write(String s) throws IOException {
		if (out != null) {
			out.write(s.getBytes());
		} else if (writer != null) {
			writer.write(s);
		}
	}

}
