import nodemailer from 'nodemailer';

// Create transporter using environment variables
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: options.from || `"KEIDF Teachers Seminar" <${process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };

    console.log('📧 Sending email to:', options.to);
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);
    
    return true;
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return false;
  }
}

export async function sendRegistrationConfirmation(registration: any): Promise<boolean> {
  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #2563eb 0%, #0d9488 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Registration Received!</h1>
        <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">KEIDF Teachers Seminar 2025</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #1f2937; margin-top: 0;">Dear ${registration.firstName} ${registration.lastName},</h2>
        
        <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
          Thank you for registering for the <strong>Khomas Annual Primary Teachers' Information Sharing Seminar</strong>. 
          Your registration has been received and is currently under review.
        </p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Registration Details:</h3>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Confirmation Code:</strong> ${registration.confirmationCode}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Name:</strong> ${registration.firstName} ${registration.lastName}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Email:</strong> ${registration.email}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>School:</strong> ${registration.school}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Region:</strong> ${registration.region}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Role:</strong> ${registration.role}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Participation:</strong> ${registration.participationType}</p>
          ${registration.participationType === 'presenter' ? `<p style="margin: 5px 0; color: #4b5563;"><strong>Presentation:</strong> ${registration.presentationTitle}</p>` : ''}
        </div>
        
        <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
          <ul style="color: #1e40af; line-height: 1.6;">
            <li>Your registration will be reviewed by our team</li>
            <li>You will receive a confirmation email once approved</li>
            <li>Event details and agenda will be shared upon approval</li>
          </ul>
        </div>
        
        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Event Details:</h3>
          <p style="margin: 5px 0; color: #92400e;"><strong>Date:</strong> September 08-09, 2025</p>
          <p style="margin: 5px 0; color: #92400e;"><strong>Venue:</strong> Van Rhyn Primary School, Windhoek North</p>
          <p style="margin: 5px 0; color: #92400e;"><strong>Theme:</strong> Advancing Environmental Education Excellence</p>
        </div>
        
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
          If you have any questions, please contact us at <a href="mailto:leena.vrhynps@gmail.com" style="color: #2563eb;">leena.vrhynps@gmail.com</a> or call 081 283 3157.
        </p>
        
        <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 20px;">
          KEIDF - Khomas Educators Innovation Development Forum<br>
          Van Rhyn Primary School, Windhoek North, Namibia
        </p>
      </div>
    </div>
  `;

  return await sendEmail({
    to: registration.email,
    subject: 'Registration Confirmation - KEIDF Teachers Seminar 2025',
    html: emailContent,
  });
}

export async function sendApprovalEmail(registration: any): Promise<boolean> {
  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #2563eb 0%, #0d9488 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Registration Approved!</h1>
        <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">KEIDF Teachers Seminar 2025</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #1f2937; margin-top: 0;">Dear ${registration.firstName} ${registration.lastName},</h2>
        
        <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
          Congratulations! Your registration for the <strong>Khomas Annual Primary Teachers' Information Sharing Seminar</strong> has been approved.
        </p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Registration Details:</h3>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Name:</strong> ${registration.firstName} ${registration.lastName}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Email:</strong> ${registration.email}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>School:</strong> ${registration.school}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Region:</strong> ${registration.region}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Role:</strong> ${registration.role}</p>
          <p style="margin: 5px 0; color: #4b5563;"><strong>Participation:</strong> ${registration.participationType}</p>
          ${registration.participationType === 'presenter' ? `<p style="margin: 5px 0; color: #4b5563;"><strong>Presentation:</strong> ${registration.presentationTitle}</p>` : ''}
        </div>
        
        <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Event Details:</h3>
          <p style="margin: 5px 0; color: #1e40af;"><strong>Date:</strong> September 08-09, 2025</p>
          <p style="margin: 5px 0; color: #1e40af;"><strong>Venue:</strong> Van Rhyn Primary School, Windhoek North</p>
          <p style="margin: 5px 0; color: #1e40af;"><strong>Theme:</strong> Advancing Environmental Education Excellence</p>
        </div>
        
        <h3 style="color: #1f2937;">What's Next?</h3>
        <ul style="color: #4b5563; line-height: 1.6;">
          <li>You will receive a detailed program agenda closer to the event date</li>
          <li>Please confirm your attendance by replying to this email</li>
          <li>Accommodation information will be sent separately if applicable</li>
          ${registration.participationType === 'presenter' ? '<li>Presentation guidelines and technical requirements will be shared soon</li>' : ''}
        </ul>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="mailto:leena.vrhynps@gmail.com" style="background: linear-gradient(135deg, #2563eb 0%, #0d9488 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Contact Us</a>
        </div>
        
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
          If you have any questions, please contact us at <a href="mailto:leena.vrhynps@gmail.com" style="color: #2563eb;">leena.vrhynps@gmail.com</a> or call 081 283 3157.
        </p>
        
        <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 20px;">
          KEIDF - Khomas Educators Innovation Development Forum<br>
          Van Rhyn Primary School, Windhoek North, Namibia
        </p>
      </div>
    </div>
  `;

  return await sendEmail({
    to: registration.email,
    subject: 'Registration Approved - KEIDF Teachers Seminar 2025',
    html: emailContent,
  });
}
