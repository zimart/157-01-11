export default {
wyslij(){
const smsapi = new SMSAPI('ABXUKbmTzDpqON0KvLx0WtqS3jQbw5J60kdufjHt');
smsapi.sms.sendSms('+48664188964', 'Hello world!');
	}
	
}


