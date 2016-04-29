//Discrimination of patterns her vs nuclear biomarkers
var server = "http://vk:3Hou713@host.simagis.com/live-json-rpc/api";
var workspace = "camelyon16";
// var pixelSize = 0.24309 // uM
var zipFile = "../camelyon16_host_c2_256px_dir-mixed.zip";

function newMarkerAction(builder) {
    var markerAction = new com.simagis.dl.dsb.actions.MarkerImagesInTargetClassFoldersAction(builder);
    markerAction.targetClasses = "t2-h|n2-h|t2|n2" ;
	markerAction.targetClassMap.put("t2-h", "t2");
	markerAction.targetClassMap.put("n2-h", "n2");
	//markerAction.targetClassMap.put("her2-weak", "her");
	//markerAction.targetClassMap.put("her2-equivocal", "her");
    markerAction.targetImageDim = 256;
	markerAction.targetPixelSize = 0.24309 * 1;
    //markerAction.targetCompression = 2;
    markerAction.minWeight = 1;
	markerAction.overlapStepCountMap.put("t2-h", 5);
	markerAction.overlapStepCountMap.put("n2-h", 5);
    markerAction.minFileSize = null;
    markerAction.maxFileSize = null;
    return markerAction;
}


var builder = new com.simagis.dl.dsb.DLDSBuilder(new java.net.URI(server));
builder.markerAction = newMarkerAction(builder);
builder.workspace = workspace;
builder.outputStream = java.nio.file.Files.newOutputStream(java.nio.file.Paths.get(zipFile));
builder.build();
