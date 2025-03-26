const verificationEmail = (username, otp) => {
    return `
        <html>
            <body style="font-family: Arial, sans-serif; color: #333;">
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto; text-align: center;">
                    <h2 style="color: #4CAF50;">Hello ${username},</h2>
                    <p style="font-size: 16px;">Thank you for registering with us! To complete your registration and verify your email address, please use the following One-Time Password (OTP):</p>
                    <h3 style="background-color: #4CAF50; color: white; padding: 10px; border-radius: 4px; font-size: 24px;">
                        ${otp}
                    </h3>
                    <p style="font-size: 16px; margin-top: 20px;">This OTP is valid for the next 10 minutes. Please enter it on the website to complete the verification process.</p>
                    <p style="font-size: 16px;">If you did not request this, please ignore this email.</p>
                    <p style="font-size: 14px; color: #888;">Best regards, <br /> The Team</p>
                </div>
            </body>
        </html>
    `;
}

export default verificationEmail;
