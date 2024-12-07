export default {
	generatePasswordHash: async () => {
		return dcodeIO.bcrypt.hashSync(Input18.text, 10);
	}
	
	
	
	
	
	
}