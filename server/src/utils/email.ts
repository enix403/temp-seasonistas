import nodemailer, { Transporter } from "nodemailer";

interface User {
    email: string;
    name: string;
    from?: string
}

class Email {
    private to: string;
    private name: string;
    private from: string | undefined;

    constructor(user: User) {
        this.to = user.email;
        this.name = user.name;
        this.from = user.from || process.env.MAIL_USER;
    }

    private newTransport(): Transporter {
        return nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            pool: true,
            secure: process.env.MAIL_PORT === "465", // Secure if using port 465 (SSL),
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
    }

    private async send(subject: string, template: string): Promise<void> {
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            html: template,
        };
        await this.newTransport().sendMail(mailOptions);
    }



    async sendContactUsMail(user): Promise<void> {
        await this.send(
            `You have a new message from ${this.from}!`,
            `<section style="max-width: 640px; padding: 24px 48px; margin: 0 auto; background-color: #ffffff; color: #1f2937;">
        <main style="margin-top: 32px;">
            <h2 style="color: #374151;">Hi ${this.name}</h2>
            <p style="margin-top: 8px; line-height: 1.75; color: #4b5563;">
                ${user.message}.
            </p>
        </main>
        <footer style="margin-top: 32px;">
            <p style="margin-top: 12px; color: #9ca3af;">© ${new Date().getFullYear()} Seasonistas All Rights Reserved.</p>
        </footer>
    </section>`
        );
    }

}

export default Email;