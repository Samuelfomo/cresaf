class Email {
    constructor(firstName, lastName, email, mobile, subject, message, createdAt, guid = null, source = null)
    {
        this.guid = guid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.subject = subject;
        this.message = message;
        this.source = source;
        this.createdAt = createdAt;
    }

    static fromJson(json) {
        return new Email(json.firstName, json.lastName, json.email, json.mobile, json.subject, json.message, json.createdAt, json.guid, json.source);
    }

    async sendEmail() {
        const siteUrl = "https://cresaf.com";
        // const siteUrl = "http://localhost:3000";
        try {
            const response = await fetch(`${siteUrl}/email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    guid: this.guid,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    mobile: this.mobile,
                    subject: this.subject,
                    message: this.message,
                    source: this.source,
                    // createdAt: this.createdAt
                })
            });
            if (!response.ok){
                throw new Error('Email could not be send.');
            }
            const result = await response.json();
            console.log('Email sent', result.message);
            return result;
        } catch (error){
            console.error(error);
            throw error;
        }
    }

    toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            mobile: this.mobile,
            subject: this.subject,
            message: this.message,
            source: this.source,
            createdAt: this.createdAt

        }
    }
}
export default Email;