import React from "react";

// --- Logo Component ---
function OrbimeshLogo() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "0.7rem"
    }}>
      <svg width="34" height="34" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" fill="#1E2A49" />
        <circle cx="20" cy="20" r="8" fill="#fff" />
      </svg>
      <span style={{
        fontWeight: 700,
        fontSize: "1.25rem",
        color: "#1E2A49",
        letterSpacing: "2px",
        fontFamily: "Inter, sans-serif"
      }}>Orbimesh</span>
    </div>
  );
}

// --- Feature Card Component ---
function FeatureCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "2rem",
      minWidth: 230,
      boxShadow: "0 2px 12px #eef3f8",
      maxWidth: 320,
      margin: "0.6rem 0"
    }}>
      <h4 style={{ fontSize: "1.07rem", fontWeight: 700, marginBottom: 8 }}>{title}</h4>
      <p style={{ fontSize: "1rem", color: "#666", margin: 0 }}>{desc}</p>
    </div>
  );
}

// --- Step Card Component ---
function StepCard({ number, title, desc }: { number: number, title: string, desc: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 2px 8px #eef3f8",
      padding: "2rem 1.2rem",
      textAlign: "center",
      minWidth: 180,
      maxWidth: 240
    }}>
      <div style={{
        fontSize: "1.35rem",
        fontWeight: 700,
        color: "#636B78",
        background: "#F4F5F7",
        borderRadius: "50%",
        display: "inline-block",
        width: "2.2em",
        height: "2.2em",
        lineHeight: "2.2em",
        marginBottom: "0.8rem"
      }}>{number}</div>
      <h4 style={{
        fontSize: "1.06rem",
        fontWeight: 700,
        color: "#1E2A49",
        marginBottom: "0.7rem"
      }}>{title}</h4>
      <p style={{
        color: "#555",
        fontSize: "0.97rem",
        margin: 0
      }}>{desc}</p>
    </div>
  );
}

// --- Main Landing Page ---
export default function Home() {
  return (
    <main style={{
      background: "#fff",
      fontFamily: "Inter, sans-serif",
      color: "#1E2A49",
      minHeight: "100vh"
    }}>
      {/* Top Navigation */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 3.5vw 0 3.5vw"
      }}>
        <OrbimeshLogo />
        <a
          href="mailto:ashritha@orbimesh.com"
          style={{
            fontWeight: 600,
            color: "#1E2A49",
            border: "1.5px solid #1E2A49",
            borderRadius: "22px",
            padding: "0.55rem 1.3rem",
            textDecoration: "none",
            background: "#fff",
            transition: "background 0.2s, color 0.2s"
          }}
        >Contact</a>
      </nav>
      
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "5rem 1rem 2rem 1rem" }}>
        <h1 style={{
          fontSize: "2.65rem",
          fontWeight: 700,
          color: "#1E2A49",
          margin: "1.7rem 0 0.7rem 0"
        }}>
          AI Agents. Endless Automation.
        </h1>
        <p style={{
          fontSize: "1.17rem",
          color: "#344368",
          marginBottom: "2.15rem",
          maxWidth: 580,
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          Orbimesh orchestrates intelligent agents that automate, optimize, and scale every area of your business. Instantly connect your workflows, assign tasks, and let AI handle the work, so your team focuses on what matters most.
        </p>
        <a
          href="mailto:ashritha@orbimesh.com"
          style={{
            display: "inline-block",
            background: "#1E2A49",
            color: "#fff",
            padding: "1rem 2.2rem",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1.09rem"
          }}>
          Request Early Access
        </a>
      </section>

      {/* Features (simplified 3 cards) */}
      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "2.2rem 2vw",
        background: "#F7F9FB",
        flexWrap: "wrap"
      }}>
        <FeatureCard
          title="Intelligent Task Assignment"
          desc="A central brain delegates business tasks to the right AI agents automatically."
        />
        <FeatureCard
          title="Custom Agents for Any Need"
          desc="Automate unique, complex, or repetitive work with specialized, flexible agents."
        />
        <FeatureCard
          title="Effortless Integration"
          desc="Seamlessly connect your data, software, and processes. No migration required."
        />
      </section>

      {/* How it Works, neutral step numbers */}
      <section style={{ textAlign: "center", margin: "3rem 0 0 0" }}>
        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>
          How Orbimesh Works
        </h3>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap"
        }}>
          <StepCard
            number={1}
            title="Discover Your Needs"
            desc="Connect business tools, describe tasks, and set priorities."
          />
          <StepCard
            number={2}
            title="Automate With Agents"
            desc="Let Orbimesh assign each task to the right specialized agent."
          />
          <StepCard
            number={3}
            title="Orchestrate & Optimize"
            desc="Monitor workflows, track results, and continuously improve how work gets done."
          />
        </div>
      </section>

      {/* Impact Statement */}
      <section style={{
        textAlign: "center",
        padding: "2rem 1rem",
        maxWidth: 640,
        margin: "2.5rem auto"
      }}>
        <h3 style={{fontWeight: 600, marginBottom: "0.8rem"}}>Business Impact, Everywhere</h3>
        <p style={{color: "#23325B", fontSize: "1.05rem", lineHeight: "1.7"}}>
          Unlock efficiency across all areas including finance, HR, operations, support, IT, and more. Save hours, reduce errors, and empower your team for higher-value work.
        </p>
      </section>

      {/* Final CTA */}
      <section style={{ textAlign: "center", padding: "2.1rem 1rem" }}>
        <h3 style={{fontWeight: 600}}>Ready to boost productivity and free your team from routine work?</h3>
        <a
          href="mailto:ashritha@orbimesh.com"
          style={{
            display: "inline-block",
            background: "#1E2A49",
            color: "#fff",
            padding: "0.92rem 2.07rem",
            borderRadius: "8px",
            fontWeight: 600,
            marginTop: "1.1rem",
            textDecoration: "none"
          }}
        >
          Join the Waitlist
        </a>
        <p style={{marginTop: "1.1rem", color: "#23325B"}}>
          Or email: <a href="mailto:ashritha@orbimesh.com" style={{color:"#1E2A49", textDecoration:"underline"}}>ashritha@orbimesh.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #e0e3ef",
        textAlign: "center",
        color: "#636B78",
        fontSize: "1rem",
        padding: "2.1rem 0 0.8rem 0"
      }}>
        © 2025 Orbimesh
      </footer>
    </main>
  );
}
