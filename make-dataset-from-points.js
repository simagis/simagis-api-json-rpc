//This configuration file will create data set areas marked with point makers that have labels on whole slide images
// This is uself if you need to mark single objects like cells for extraction

// API access definition, note: userID and password are encoded in URL
var server = "http://api_sandbox:Demo@host.simagis.com/live-json-rpc/api";

//workspace on server from which to cut the data
var workspace = "api_sandbox";

// location and name of output zip file
var zipFile = "dataset_points.zip";

function newMarkerAction(builder) {
    var markerAction = new com.simagis.dl.dsb.actions.MarkerImagesInTargetClassFoldersAction(builder);

	//Select classes / labels that you want to cut
	markerAction.targetClasses = "epidermis|melanoma" ;    

	// tile dimensions in pixels
	markerAction.targetImageDim = 128;
	
	markerAction.targetPixelSize = 0.5; // pixel size in microns
	// markerAction.targetCompression = 2;
   
	// alternatively you can define compression directly
	//markerAction.targetCompression = 2;	
		
	markerAction.targetClassFromLabelsEnabled = true;
    return markerAction;
}

// below are advanced setting usually you do not need to change them
var builder = new com.simagis.dl.dsb.DLDSBuilder(new java.net.URI(server));
builder.markerAction = newMarkerAction(builder);
builder.workspace = workspace;
builder.outputStream = java.nio.file.Files.newOutputStream(java.nio.file.Paths.get(zipFile));
builder.markerTypes.clear();
builder.markerTypes.add("point");
builder.build();
