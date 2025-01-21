import { transporter } from "../config/nodemailer";

interface IEmail {
  email: string;
  name: string;
  token: string;
}

export class AuthEmail {
  static sendConfirmationEmail = async (user: IEmail) => {
    const info = await transporter.sendMail({
      from: "UpTask <admin@uptask.com>",
      to: user.email,
      subject: "UpTask - Confirma tu cuenta",
      text: "UpTask - Confirma tu cuenta",
      html: `<div style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 30px;"> <div style="max-width: 600px; margin: 0 auto; background-color: white;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);"><div style="padding: 20px 40px 10px 40px"><h2 style="color: #444;margin-bottom: 30px;">Bienvenido a UpTask, ${user.name}.</h2> <p style="font-size: 16px; line-height: 1.5; color: #555;"> Has creado tu cuenta en <strong>UpTask</strong>, ya casi está todo listo. Solo debes confirmar tu cuenta para poder comenzar a usarla.</p> <p style="font-size: 16px; line-height: 1.5; color: #555;">Confirma tu cuenta con el código que se muestra a continuación.</p> <div style="text-align: center; font-size: 20px; font-weight: bold; margin: 30px 0 0 0;">${user.token}</div><div style="text-align: center; margin: 30px 0 40px 0;"><a href="${process.env.FRONTEND_URL}/auth/confirm-account" style="display: inline-block; padding: 15px 20px; background-color: #c026d3; color: white; text-decoration: none; font-weight: bold; border-radius: 5px;">Confirmar Cuenta</a></div><p style="font-size: 16px; line-height: 1.5; color: #555;"> <strong>Nota:</strong> Este token expira en 10 minutos. </p></div><p style="background-color: #f4f4f4; padding: 30px; text-align: center; color: #999; font-size: 14px; margin-top: 20px;"> Si no has solicitado esta cuenta, puedes ignorar este mensaje. </p> </div> </div>`,
    });

    console.log("Mensaje enviado", info.messageId);
  };

  static sendPasswordResetToken = async (user: IEmail) => {
    const info = await transporter.sendMail({
      from: "UpTask <admin@uptask.com>",
      to: user.email,
      subject: "UpTask - Reestablece tu password",
      text: "UpTask - Reestablece tu password",
      html: `<div style="font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 30px;"> <div style="max-width: 600px; margin: 0 auto; background-color: white;box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);"><div style="padding: 20px 40px 10px 40px"><h2 style="color: #444;margin-bottom: 30px;">Reestablece tu password.</h2> <p style="font-size: 16px; line-height: 1.5; color: #555;"><strong>Hola ${user.name}</strong>. Has solicitado reestablecer tu password.</p> <p style="font-size: 16px; line-height: 1.5; color: #555;">Confirma el cambio con el código que se muestra a continuación.</p> <div style="text-align: center; font-size: 20px; font-weight: bold; margin: 30px 0 0 0;">${user.token}</div><div style="text-align: center; margin: 30px 0 40px 0;"><a href="${process.env.FRONTEND_URL}/auth/new-password" style="display: inline-block; padding: 15px 20px; background-color: #c026d3; color: white; text-decoration: none; font-weight: bold; border-radius: 5px;">Reestablecer password</a></div><p style="font-size: 16px; line-height: 1.5; color: #555;"> <strong>Nota:</strong> Este token expira en 10 minutos. </p></div><p style="background-color: #f4f4f4; padding: 30px; text-align: center; color: #999; font-size: 14px; margin-top: 20px;"> Si no has solicitado este cambio, puedes ignorar este mensaje. </p> </div> </div>`,
    });

    console.log("Mensaje enviado", info.messageId);
  };
}
