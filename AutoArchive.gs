//// Auto Archive ////

function archiveOld(){
  var label = GmailApp.getUserLabelByName("LastWeek");
  var threads = GmailApp.search('is:inbox category:primary older_than:7d');

  for (i = 0; i < threads.length; i+=50) {
    label.addToThreads(threads);
    GmailApp.moveThreadsToArchive(threads.slice(i, i+50));
  }
  
  threads = GmailApp.search('label:LastWeek older_than:14d');
  
  for (i = 0; i < threads.length; i+=50) {    
    label.removeFromThreads(threads);
    label = GmailApp.getUserLabelByName("LastMonth");
    label.addToThreads(threads);
  }
  
  threads = GmailApp.search('label:LastMonth older_than:31d');
  
  for (i = 0; i < threads.length; i+=50) {  
    label.removeFromThreads(threads);
  } 
}
