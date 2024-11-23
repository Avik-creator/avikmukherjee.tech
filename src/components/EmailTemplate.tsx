import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
} from "@react-email/components";
import React from "react";
import { CSSProperties } from "react";

const EmailTemplate = ({ firstName = "", message = "", name = "" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <div style={styles.logo}>
              <Text style={styles.logoText}>Portfolio</Text>
            </div>
          </Section>

          {/* Message Section */}
          <Section>
            <Text style={styles.text}>
              Dear {firstName},
            </Text>
            <Text style={styles.message}>{message}</Text>
          </Section>

          {/* Signature */}
          <Section>
            <Text style={styles.text}>Best regards,</Text>
            <Text style={styles.signature}>{name}</Text>
          </Section>

          {/* Footer Links */}
          <Section style={styles.footer}>
            <div style={styles.footerLinks}>
              <Link href="https://avikmukherjee.tech" style={styles.link}>
                Website
              </Link>
              <span style={styles.separator}>|</span>
              <Link href="https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/" style={styles.link}>
                LinkedIn
              </Link>
              <span style={styles.separator}>|</span>
              <Link href="https://github.com/Avik-creator" style={styles.link}>
                GitHub
              </Link>
            </div>
            <Text style={styles.footerText}>
              © {currentYear} Your Portfolio. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const styles: { [key: string]: CSSProperties } = {
  body: {
    backgroundColor: "#f9f9f9",
    color: "#333333",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: "20px",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    borderBottom: "1px solid #eaeaea",
    paddingBottom: "20px",
    marginBottom: "20px",
    textAlign: "center",
  },
  logo: {
    backgroundColor: "#f3f4f6",
    borderRadius: "4px",
    display: "inline-block",
    padding: "10px 20px",
  },
  logoText: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333333",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#333333",
    marginBottom: "12px",
  },
  message: {
    whiteSpace: "pre-wrap",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#555555",
  },
  signature: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333333",
  },
  footer: {
    borderTop: "1px solid #eaeaea",
    paddingTop: "20px",
    marginTop: "20px",
    textAlign: "center",
  },
  footerLinks: {
    display: "inline-flex",
    gap: "8px",
    justifyContent: "center",
    marginBottom: "12px",
  },
  link: {
    fontSize: "14px",
    color: "#0366d6",
    textDecoration: "none",
    gap: "4px",
  },
  separator: {
    color: "#cccccc",
    gap: "20px"
  },
  footerText: {
    fontSize: "12px",
    color: "#888888",
  },
};
