export default {
	generatePasswordHash: async () => {
		return dcodeIO.bcrypt.hashSync(update_form.formData.password_hash, 10);
	}
	
	
	
	
	
	
}