import nodemailer from "nodemailer";
import config from "./../config/config";

/* Success response example
{
    accepted: ['contact@kavindunimesh.com'],
    rejected: [],
    envelopeTime: 888,
    messageTime: 598,
    messageSize: 307,
    response: '250 OK id=1ozYUz-00FUka-H4',
    envelope: { from: 'test@similater.com', to: ['contact@kavindunimesh.com'] },
    messageId: '<51bec0c8-fe45-8dcb-7404-6d6d8521a480@similater.com>'
}
*/


const emailSend = async function email(
    toEmail: string = "contact@kavindunimesh.com",
    subject: string = "test",
    message: string = ""
): Promise<boolean> {
    try {
        let transporter = nodemailer.createTransport({
            host: config.email.smtp.host!,
            port: Number(config.email.smtp.port!),
            secure: true, // true for 465, false for other ports
            auth: {
                user: config.email.smtp.auth.user!,
                pass: config.email.smtp.auth.pass!,
            },
        });

        try {
            let response = await transporter.sendMail({
                from: `"${config.email.smtp.auth.user}" <${config.email.from}>`,
                to: toEmail, // list of receivers (comma-separated list)
                subject: subject,
                html: message,
            });

            if (response.accepted.length > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};


export default {
    emailSend
};