exports.handler = async (event, context) => {
	const message = JSON.parse(event.body).message;
	//send email
	//save status of email receipt
	//return with correct status code or throw error

	//throw new Error("something went wront")
	return { statusCode: 200, body: 'niiice' };
};
