package org.springframework.data.mongodb.gridfs;

public class GridFSFile {
	

	    private String id;
	    private String filename;
	    private long length;
	    private String contentType;
	    private Object metadata;
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getFilename() {
			return filename;
		}
		public void setFilename(String filename) {
			this.filename = filename;
		}
		public long getLength() {
			return length;
		}
		public void setLength(long length) {
			this.length = length;
		}
		public String getContentType() {
			return contentType;
		}
		public void setContentType(String contentType) {
			this.contentType = contentType;
		}
		public Object getMetadata() {
			return metadata;
		}
		public void setMetadata(Object metadata) {
			this.metadata = metadata;
		}

	   

	}



