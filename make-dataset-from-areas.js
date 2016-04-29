//This configuration file will create data set from areas annotated on while slide images with special training marker

// API access definition, note: userID and password are encoded in URL
var server = "http://api_sandbox:Demo@host.simagis.com/live-json-rpc/api";

//workspace on server from which to cut the data
var workspace = "api_sandbox";

// location and name of output zip file
var zipFile = "dataset_areas.zip";

function newMarkerAction(builder) {
    var markerAction = new com.simagis.dl.dsb.actions.MarkerImagesInTargetClassFoldersAction(builder);
    
	//Select classes / labels that you want to cut
	markerAction.targetClasses = "tumor|negative" ;
	
	// Optional. you can merge labels 
	//markerAction.targetClassMap.put("label1", "label2");
	
    // tile dimensions in pixels
	markerAction.targetImageDim = 128;
	
       	// define maginification via pixel size 
	// this way you can work seamlessly with slides from different scanners
	markerAction.targetPixelSize = 0.24309 * 2;
    
	// alternatively you can define compression directly
	//markerAction.targetCompression = 2;
    
	// How much tile can get outside of annotation area (this is useful for small areas)
	markerAction.minWeight = 0.9;
	
	// Optional.
	// make additional tiles by making number of small steps around initial slide area 
	// you can create a lot of additional training data this way
	// specified by label, use numbers from 2 to 5
	markerAction.overlapStepCountMap.put("tumor", 5);
	markerAction.overlapStepCountMap.put("negative", 2);
    
	//Advanced settings
	markerAction.minFileSize = null;
    markerAction.maxFileSize = null;
    return markerAction;
}

// below are advanced setting usually you do not need to change them
var builder = new com.simagis.dl.dsb.DLDSBuilder(new java.net.URI(server));
builder.markerAction = newMarkerAction(builder);
builder.workspace = workspace;
builder.outputStream = java.nio.file.Files.newOutputStream(java.nio.file.Paths.get(zipFile));
builder.build();
