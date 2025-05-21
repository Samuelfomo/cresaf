class Email {
    constructor(firstName, lastName, email, mobile, subject, agence, message, createdAt, guid = null, source = null)
    {
        this.guid = guid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.subject = subject;
        this.agence = agence;
        this.message = message;
        this.source = source;
        this.createdAt = createdAt;
    }

    static fromJson(json) {
        return new Email(json.firstName, json.lastName, json.email, json.mobile, json.subject, json.agence, json.message, json.createdAt, json.guid, json.source);
        // return new Email(json.guid, json.firstName, json.lastName, json.email, json.mobile, json.subject, json.agence, json.message, json.source, json.createdAt);
    }

    async sendEmail() {
        console.log('Sending email...',
            this.firstName, this.lastName, this.email, this.subject, this.agence, this.message,this.createdAt, this.mobile, this.source);
        try {
            const response = await fetch('/localhost:3000/contact', {
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
                    agence: this.agence,
                    message: this.message,
                    source: this.source,
                    // createdAt: this.createdAt
                })
            });
            if (!response){
                throw new Error('Email could not be send.');
            }
            const data = await response.json();
            return Email.fromJson(data);
        } catch (error){
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