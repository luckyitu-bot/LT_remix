import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import { marked } from "marked";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Proxy Logo Image
  app.get("/api/logo", async (req, res) => {
    try {
      const logoUrl = "https://www.leandrotelles.com.br/wp-content/uploads/2026/01/cropped-LT-MARKETING-AMARELO-DESCRITIVO-1-300x52.png";
      const response = await fetch(logoUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch logo: ${response.statusText}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      res.setHeader("Content-Type", "image/png");
      res.send(buffer);
    } catch (error) {
      console.error("Error fetching logo:", error);
      res.status(500).send("Error fetching logo");
    }
  });

  // Email API Route
  app.post("/api/send-strategy", async (req, res) => {
    const { name, email, phone, website, objective, strategy } = req.body;

    if (!email || !strategy) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure Nodemailer
      // Note: In a real production environment, use environment variables for these credentials
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Convert Markdown strategy to HTML
      const strategyHtml = await marked(strategy);

      // Email Content
      const mailOptions = {
        from: `"LT Marketing AI" <${process.env.SMTP_USER}>`,
        to: [email, "mkt.eulerlima@gmail.com", "leandroatelles@gmail.com"],
        subject: `Sua Estratégia de Marketing Gerada por IA - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
            <div style="background-color: #171717; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: #facc15; margin: 0;">LT Marketing</h1>
              <p style="color: #a3a3a3; margin: 5px 0 0;">Consultoria Express com IA</p>
            </div>
            
            <div style="padding: 20px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
              <p>Olá <strong>${name}</strong>,</p>
              <p>Aqui está o plano estratégico gerado pela nossa Inteligência Artificial para o seu negócio.</p>
              
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #171717;">Dados do Lead:</h3>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="margin-bottom: 5px;"><strong>Nome:</strong> ${name}</li>
                  <li style="margin-bottom: 5px;"><strong>Email:</strong> ${email}</li>
                  <li style="margin-bottom: 5px;"><strong>WhatsApp:</strong> ${phone}</li>
                  <li style="margin-bottom: 5px;"><strong>Site:</strong> ${website || "N/A"}</li>
                  <li style="margin-bottom: 5px;"><strong>Objetivo:</strong> ${objective}</li>
                </ul>
              </div>

              <hr style="border: 0; border-top: 1px solid #e5e5e5; margin: 20px 0;" />

              <h2 style="color: #171717;">Sua Estratégia Personalizada:</h2>
              <div style="line-height: 1.6;">
                ${strategyHtml}
              </div>

              <div style="margin-top: 30px; text-align: center;">
                <a href="https://wa.me/5511996802716" style="background-color: #facc15; color: #171717; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block;">Agendar Implementação</a>
              </div>
              
              <p style="margin-top: 30px; font-size: 12px; color: #737373; text-align: center;">
                Este é um email automático gerado pela LT Marketing.
              </p>
            </div>
          </div>
        `,
      };

      // Send Email
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
          await transporter.sendMail(mailOptions);
          console.log("Email sent successfully");
          res.status(200).json({ message: "Estratégia enviada com sucesso!" });
      } else {
          console.log("SMTP credentials not found. Email simulation:");
          console.log(mailOptions);
          res.status(200).json({ message: "Simulação: Email enviado (configure SMTP para envio real)." });
      }

    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving (if needed, but usually handled by build output)
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
