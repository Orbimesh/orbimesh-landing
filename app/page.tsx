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
      {/* The hero: the idea in two lines, and the card itself */}
      <header className="section navy hero">
        <div className="wrap">
          <nav className="nav">
            <Wordmark />
            <a className="btn ghost" href={CONTACT}>Contact</a>
          </nav>
          <div className="hero-grid">
            <div>
              <p className="eyebrow">OneMynd · for manufacturers</p>
              <h1>Your systems keep the record. Your people keep the day.</h1>
              <p className="lead">
                Every company already has an operating layer. It is made of people, inboxes and
                spreadsheets. OneMynd gives that layer to department agents: they read what
                arrives, work the task against your records, and propose. Nothing is written
                until a person taps.
              </p>
              <p className="proof">Running today on the real books of a manufacturer of advanced intermediates that supplies pharma</p>
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

      {/* The inbox: what arrives before any entry exists */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Before the entry</p>
          <h2>Your record is structured. The morning that feeds it is not.</h2>
          <p className="lead" style={{ marginTop: 20 }}>
            The ERP is only as true as what gets typed into it, and what gets typed is a
            fraction, late. The rest of the day lives here.
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
              <p>A PDF, a photo, a message, a bank line. Every name it finds is matched against your masters, or it becomes a question. Nothing is retyped.</p>
            </div>
            <div className="step">
              <b>It works</b>
              <p>The price this customer last paid. The stock today. The order a receipt belongs to. The nine invoices a remittance covers. The work before the entry.</p>
            </div>
            <div className="step">
              <b>It proposes</b>
              <p>A card: what this is, what to do, the evidence, one recommended option. Your person taps, and only then does the record change.</p>
            </div>
          </div>
          <p className="statement">
            Not a data-entry tool. The entry is the last step. The agent does everything before it.
          </p>
        </div>
      </section>

      {/* A day, not a chat */}
      <section className="section alt" id="day">
        <div className="wrap">
          <p className="eyebrow">A day, not a chat</p>
          <h2>It works at night. Your people decide in the morning.</h2>
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
              <p>A promised follow-up falls due. The chaser is drafted, not sent.</p>
            </div>
            <div className="moment person">
              <span className="t">09:10</span>
              <p>The desk owner opens the desk, taps three cards, asks one question. The morning’s entries post under that person’s name.</p>
            </div>
          </div>
          <p className="note">An illustrative morning. The shape is the point: nothing was written until the tap.</p>
        </div>
      </section>

      {/* What it cannot do: the design, said as refusals */}
      <section className="section navy">
        <div className="wrap">
          <p className="eyebrow">The design, in refusals</p>
          <h2>What it cannot do is what makes it safe to run.</h2>
          <ul className="cannot">
            <li>It cannot write a record. <span>It proposes one.</span></li>
            <li>It cannot mail a customer. <span>It drafts, you send.</span></li>
            <li>It cannot move its own dial. <span>A person does, with a record.</span></li>
            <li>It cannot forget who told it what. <span>Every memory has a name and a date.</span></li>
          </ul>
          <p className="fine">
            A rule that must hold is not a sentence in a prompt. It is a tool the agent does not
            have. Every write is a proposal, your person’s tap is the write, and the audit trail
            names both. We stay out of your validated systems and work in the inboxes between them.
          </p>
        </div>
      </section>

      {/* It learns your department */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">It learns your department</p>
          <h2>A careful new hire on day one. The department’s memory by month three.</h2>
          <div className="stages">
            <div className="stage">
              <p className="when">Day 1</p>
              <h3>It knows the rules</h3>
              <p>Your masters, your documents, your policies. It asks before it assumes, and it cannot act beyond what its desk allows.</p>
            </div>
            <div className="stage">
              <p className="when">Week 4</p>
              <h3>It has been told things</h3>
              <p>The price for an account. Who approves what. A tolerance. Each kept with who said it and when, shown back at once, undoable.</p>
            </div>
            <div className="stage last">
              <p className="when">Month 3</p>
              <h3>It has noticed things</h3>
              <p>How a customer pays. How a vendor ships. How your people settle the same gap, every time. The working expertise of the department, inspectable and yours.</p>
            </div>
          </div>
          <p className="statement">What it is told outranks what it noticed. Nothing it remembers overrides a rule.</p>
        </div>
      </section>

      {/* Five desks, each in its own morning line */}
      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Five desks, five agents</p>
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
          <p className="note">Example morning lines. The departments never talk to each other through the agents: they meet in the record, so a booked order becomes planning’s work by itself.</p>
        </div>
      </section>

      {/* The close */}
      <section className="section navy close">
        <div className="wrap">
          <h2>Bring one real document. We will show you what it becomes.</h2>
          <p className="lead">
            A vendor quotation or a customer order from your inbox, in the meeting, live. Then how
            we would start with one of your desks: read-only first, then shadow, then proposals.
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
          <span>Built on the real books of a manufacturer, not a demo.</span>
        </div>
      </footer>
    </main>
  );
}
