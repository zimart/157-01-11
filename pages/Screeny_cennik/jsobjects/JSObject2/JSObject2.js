export default {
	downloadApiFile: async ()=> {
   const reader = new FileReader();
   reader.readAsDataURL(File);
   reader.onload = async function () {
		 await download(reader.result,"fileName with extension", "file mime type")	 
   };
}, 
}