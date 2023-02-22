const fs = require('fs/promises');



const myFileWriter = async (fileName, fileContent) => {
	return new Promise((resolve,reject) => {
		fs.writeFile(fileName,fileContent,(err) => {
			if (err){
				reject(err);
				return;
			}
			resolve();
		} ); 
		
	})
	// write code here
	// dont chnage function name
}


const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
  return new Promise((resolve,reject) => {
	fs.readFile(fileName, 'utf8',(err,data) => {
		if (err){
			reject(err)
			return
		}
		resolve(console.log(data))
	})
  })

}



const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	return new Promise((resolve,reject) => {
		fs.appendFile(fileName,fileContent,(err) => {
			if (err){
				reject(err)
			}
			resolve()
			
		})
	})
}


const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name

	return new Promise((resolve,reject) => {
		fs.unlink(fileName,(err) => {
			if (err){
				reject(err)
			}
			resolve()
			
		})
	})
}




module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }