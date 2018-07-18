var fs = require('fs');

fs.readdir('./.git', 'utf-8', function(err, files){
	if(err) throw err;
	var directoryContent = files;
		
	for(var i=0; i<directoryContent.length; i++){
		var position = '\n' + directoryContent[i];
		console.log(position);
		fs.appendFile('./gitdirectory.txt', position , function(err){
			if(err) throw err;
			});
	}
	console.log('\nWriting the file done');
});


fs.writeFile('./gitdirectory.txt', '', function(err, data){
	if(err) throw err;
	console.log('\nClearing the file done');
});