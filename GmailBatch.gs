// Batch

function go() {
  releaseBatch("New Messages");
}

function releaseBatch(labelName) {
  if (labelName == null) {
    labelName = "New Messages";
  }
  
  var label = GmailApp.getUserLabelByName(labelName); 
  
  if (label == null) {
    label = GmailApp.createLabel(labelName);
  }
  
  var threads = label.getThreads();
  for (var i = 0; i < threads.length; i++) {
    var thread = threads[i];
    thread.removeLabel(label);
  }
}
