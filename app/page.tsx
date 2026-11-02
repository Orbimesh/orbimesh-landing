import React from "react";

// One address for every ask on the page. The subject line tells us where the mail came from.
const CONTACT = "mailto:ashritha@onemynd.ai?subject=OneMynd%20demo";
const CONTACT_PLAIN = "ashritha@onemynd.ai";

function Wordmark() {
  return (
    <a href="#top" className="wordmark" aria-label="OneMynd">
      One<b>Mynd</b>
    </a>
  );
}

function ArrowRight() {
  return (
    <svg className="arrow" viewBox="0 0 40 24" aria-hidden="true">
      <path d="M2 12h28M24 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// The card a person decides on, drawn the way the product draws it: the situation in one
// sentence, one recommended option as the only colour, the alternatives, the how line, one
// black button. The figures are an illustration, not a customer's.
function MockCard() {
  return (
    <div className="mock" aria-label="An illustration of a sales card">
      <div className="card">
        <div className="card-head">
          <b>Quotation ready</b>
          <span className="sub">sales · Q-0417</span>
          <span className="state">needs you</span>
        </div>
        <div className="card-body">
          <p className="card-sit">
            A regular customer asks for 500 kg of intermediate B-204 by 20 Nov. Quotation Q-0417 is
            drafted at ₹2,560/kg, the price they paid on their last four orders.
          </p>
          <div className="opt rec">
            <b>Send Q-0417 at ₹2,560/kg</b>
            <span className="why">as drafted, valid 30 days</span>
            <span className="rec-chip">recommended</span>
          </div>
          <div className="opt">
            <b>Send at a different price</b>
            <span className="why">type it; the agent redrafts</span>
          </div>
          <div className="opt">
            <b>Hold, ask for a target price</b>
            <span className="why">drafts the reply for you</span>
          </div>
          <p className="card-how">
            how: read the enquiry · stock 180 kg approved, 400 kg in process · last four orders at
            ₹2,560 · told: “2,560 unless said otherwise”, the sales head, 25 Oct
          </p>
          <div className="card-btns">
            <span className="card-btn black">Approve and send</span>
            <span className="card-btn">Edit</span>
            <span className="card-btn">Ask</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// What arrives, in the inbox's own words. Illustrative, not anyone's mail.
const ARRIVALS: Array<[string, string, string]> = [
  ["purchase@ · 06:12", "Fwd: PO for 500 kg, revised", "PO_BL-2026-0893.pdf"],
  ["WhatsApp · 07:40", "gate, truck 2 unloaded", "IMG_2041.jpg · IMG_2042.jpg"],
  ["accounts@ · 08:05", "Remittance advice, 9 invoices", "RA_Oct.xlsx"],
  ["vendor · 08:31", "RE: RFQ, our best offer rev 2", "Quotation_rev2.pdf"],
  ["lab · 08:47", "slip for batch 24-118", "lab_slip.jpg"],
  ["customer · 09:02", "can you confirm the price and date?", "no attachment"],
  ["transporter · 09:15", "vehicle for tomorrow, 10 am slot", "no attachment"],
  ["bank · 09:20", "credit received, ref UTR…", "statement line"],
];

function Arrival({ from, subj, att }: { from: string; subj: string; att: string }) {
  return (
    <li className="arrival">
      <span className="from">{from}</span>
      <span className="subj">{subj}</span>
      <span className="att">{att}</span>
    </li>
  );
}

// The chain, enquiry to cash, and who carries each stretch of it.
const CHAIN = ["Enquiry", "Quotation", "Order", "Plan", "Purchase", "Receipt", "Production", "Dispatch", "Invoice", "Cash"];

// Each desk's agent, in its own morning line. An example report, not a measured one.
const DESKS: Array<{ name: string; owns: string; says: string; tasks: string; wide?: boolean }> = [
  {
    name: "Sales",
    owns: "enquiry to order",
    says: "Overnight: four mails read, two quotations drafted at the prices these customers last paid, one purchase order differs from its quotation on a single line, one follow-up due today.",
    tasks: "Enquiries and customer orders · quotations with the price evidence · a PO checked against its quote · promises chased",
  },
  {
    name: "Planning",
    owns: "order to plan",
    says: "Three orders became next week’s plan. One input runs short on the 14th; the requisition is drafted and sales has the real date.",
    tasks: "Recipes exploded · stock and capacity checked · the real date told to sales · requisitions raised",
  },
  {
    name: "Purchase",
    owns: "requisition to receipt",
    says: "Two vendor quotations read, landed cost compared, one purchase order drafted. Yesterday’s truck matched its order at the gate, 20 kg short, on a card.",
    tasks: "Vendor quotations in any format · landed cost compared · purchase orders drafted · promised dates chased · the gate challan read",
  },
  {
    name: "Production",
    owns: "plan to output",
    says: "Yesterday’s batches closed with yields recorded. One deviation noted from the shift’s message, waiting for a word from the floor.",
    tasks: "The floor’s notes into deviations and yields · every batch tracked · a shortage flagged before it stops a batch",
  },
  {
    name: "Finance",
    owns: "bill to payment, invoice to collection",
    says: "Nine invoices matched to one remittance, with the deduction named. Two bills differ from their receipts; the settlements are on cards, each with what it costs.",
    tasks: "Bills matched to orders and receipts · remittances read and applied · collection chasers drafted · every difference explained at the close",
    wide: true,
  },
];

export default function Home() {
  return (
    <main id="top">
      {/* The hero: the idea in one line, and the card itself */}
      <header className="section navy hero">
        <div className="wrap">
          <nav className="nav">
            <Wordmark />
            <a className="btn ghost" href={CONTACT}>Contact</a>
          </nav>
          <div className="hero-grid">
            <div>
              <p className="eyebrow">OneMynd · the supply chain, end to end</p>
              <h1>Agents that do the work, and connect the departments.</h1>
              <p className="lead">
                Until now, software did the data entry. OneMynd’s agents do the work around it.
                They read the unstructured, the mail, the PDFs, the photos, the messages, get the
                task done against your records, and hand it to the next desk. From enquiry to
                cash, one agent per department, each an expert in its own, each smarter every day
                it works.
              </p>
              <p className="proof">Running today on a real company’s books, from enquiry to cash</p>
              <div className="cta">
                <a className="btn primary" href={CONTACT}>Book a demo</a>
                <a className="btn ghost" href="#day">See a day</a>
              </div>
            </div>
            <div className="hero-card">
              <span className="when">09:00 · the sales desk</span>
              <MockCard />
            </div>
          </div>
        </div>
      </header>

      {/* The inbox: the work that arrives before any entry exists */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Before the entry</p>
          <h2>Data entry was the easy part. The work is what arrives before it.</h2>
          <p className="lead" style={{ marginTop: 20 }}>
            The record holds what someone typed. The day lives in inboxes, photos and messages,
            and turning them into work was always a person’s morning. Now it is the agents’.
          </p>
        </div>
        <div className="ticker-wrap" aria-label="Examples of what arrives in a department's inbox">
          <ul className="ticker">
            {ARRIVALS.map(([from, subj, att]) => (
              <Arrival key={subj} from={from} subj={subj} att={att} />
            ))}
            {ARRIVALS.map(([from, subj, att]) => (
              <li className="arrival dup" key={`dup-${subj}`} aria-hidden="true">
                <span className="from">{from}</span>
                <span className="subj">{subj}</span>
                <span className="att">{att}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="wrap">
          <div className="three">
            <div className="step">
              <b>It reads</b>
              <p>A PDF, a photo, a message, a bank line. Every name it finds is matched against your masters. Nothing is retyped.</p>
            </div>
            <div className="step">
              <b>It gets it done</b>
              <p>The price this customer last paid. The order a receipt belongs to. The nine invoices a remittance covers. The task, worked through, with its evidence.</p>
            </div>
            <div className="step">
              <b>It connects the desks</b>
              <p>A booked order becomes planning’s work. A plan becomes purchase’s. A receipt becomes finance’s. The chain moves without a mail between desks.</p>
            </div>
          </div>
          <p className="statement">
            Not a data-entry tool. The entry is the last step. The agents do everything before it, and your people decide.
          </p>
        </div>
      </section>

      {/* A day, not a chat */}
      <section className="section alt" id="day">
        <div className="wrap">
          <p className="eyebrow">A day, not a chat</p>
          <h2>It works through the night. Your people decide in the morning.</h2>
          <div className="day">
            <div className="moment">
              <span className="t">03:30</span>
              <p>The sales agent wakes and reads the night’s mail.</p>
            </div>
            <div className="moment">
              <span className="t">03:41</span>
              <p>Two enquiries become quotation cards, each with the price this customer last paid and what the recipe costs today.</p>
            </div>
            <div className="moment">
              <span className="t">03:44</span>
              <p>A customer purchase order is read against its quotation. One line differs. The card says which, and offers three ways to settle it.</p>
            </div>
            <div className="moment">
              <span className="t">03:46</span>
              <p>A promised follow-up falls due. The chaser is drafted, ready to send.</p>
            </div>
            <div className="moment person">
              <span className="t">09:10</span>
              <p>The desk owner opens the desk, taps three cards, asks one question. The morning’s entries post under that person’s name, and the booked order is already on planning’s desk.</p>
            </div>
          </div>
          <p className="note">An illustrative morning. Every action is a proposal with its evidence; your people decide, and the record names both.</p>
        </div>
      </section>

      {/* One chain, every desk connected */}
      <section className="section navy">
        <div className="wrap">
          <p className="eyebrow">One chain, end to end</p>
          <h2>From the first enquiry to the cash in the bank, every desk connected.</h2>
          <ul className="chain" aria-label="The stages of the chain">
            {CHAIN.map((stage, i) => (
              <li key={stage} className="stage-pill">
                <span>{stage}</span>
                {i < CHAIN.length - 1 && <ArrowRight />}
              </li>
            ))}
          </ul>
          <div className="handoffs">
            <div>
              <b>Sales to planning</b>
              <p>A booked order becomes a demand on planning’s desk the moment it posts. Planning answers with the real date, and sales has it before the customer asks.</p>
            </div>
            <div>
              <b>Planning to purchase to stores</b>
              <p>A short input becomes a requisition, the requisition a comparison of vendors, the order a receipt at the gate, each carried by the next desk’s agent.</p>
            </div>
            <div>
              <b>Everything to finance</b>
              <p>Every receipt meets its bill, every dispatch its invoice, every remittance its invoices. Finance sees the chain as it closes, with every difference explained.</p>
            </div>
          </div>
          <p className="statement">The desks meet in the record, never in a forwarded mail. That is what makes it one chain.</p>
        </div>
      </section>

      {/* Department experts that get smarter as they work */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Department experts</p>
          <h2>An expert on day one. The department’s memory by month three.</h2>
          <div className="stages">
            <div className="stage">
              <p className="when">Day 1</p>
              <h3>It knows the department</h3>
              <p>Your masters, your documents, your rules, your flows. It works the way a careful expert works, and asks before it assumes.</p>
            </div>
            <div className="stage">
              <p className="when">Week 4</p>
              <h3>It has been told things</h3>
              <p>The price for an account. Who approves what. A tolerance. Each kept with who said it and when, shown back at once, yours to change.</p>
            </div>
            <div className="stage last">
              <p className="when">Month 3</p>
              <h3>It has noticed things</h3>
              <p>How a customer pays. How a vendor ships. How your people settle the same gap, every time. The working expertise of the whole department, inspectable and yours.</p>
            </div>
          </div>
          <p className="statement">What it is told outranks what it noticed. Every memory has a source and a date, and it gets smarter with every task it works.</p>
        </div>
      </section>

      {/* Five desks, each in its own morning line */}
      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Five desks, five experts</p>
          <h2>Each one opens the morning with its own report.</h2>
          <div className="desks">
            {DESKS.map((d) => (
              <div className={`desk${d.wide ? " wide" : ""}`} key={d.name}>
                <div className="name">
                  <b>{d.name}</b>
                  <span>{d.owns}</span>
                </div>
                <q>{d.says}</q>
                <p className="tasks">{d.tasks}</p>
              </div>
            ))}
          </div>
          <p className="note">Example morning lines. Each desk hands its work to the next through the record, so the whole chain moves as one.</p>
        </div>
      </section>

      {/* The close */}
      <section className="section navy close">
        <div className="wrap">
          <h2>Bring one real document. We will show you what it becomes.</h2>
          <p className="lead">
            A vendor quotation or a customer order from your inbox, in the meeting, live, and how
            it travels from desk to desk. Then how we would start with one of yours.
          </p>
          <div className="cta">
            <a className="btn primary" href={CONTACT}>Book a demo</a>
          </div>
          <p className="contact">
            Or write to <a href={`mailto:${CONTACT_PLAIN}`}>{CONTACT_PLAIN}</a>
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© 2026 OneMynd</span>
          <span>Built on a real company’s books, not a demo.</span>
        </div>
      </footer>
    </main>
  );
}
