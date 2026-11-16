export interface VerbDefinition {
  verb: string;
  type: "preambulatory" | "operative";
  meaning: string;
  recommendedOrgans: string[];
  example: string;
}

export const RESOLUTION_VERBS: VerbDefinition[] = [
  // Preambulatory Verbs
  {
    verb: "Affirming",
    type: "preambulatory",
    meaning: "Stating positively and upholding an established principle or past treaty.",
    recommendedOrgans: ["All Organs", "UNGA", "UNSC", "ECOSOC", "UNHRC"],
    example: "Affirming its commitment to the sovereignty, territorial integrity, and political independence of all Member States,",
  },
  {
    verb: "Deeply concerned",
    type: "preambulatory",
    meaning: "Expressing grave apprehension regarding an ongoing humanitarian or security crisis.",
    recommendedOrgans: ["All Organs", "UNGA", "UNSC", "UNHRC"],
    example: "Deeply concerned by the escalating displacement of civilian populations across disputed border corridors,",
  },
  {
    verb: "Recalling",
    type: "preambulatory",
    meaning: "Explicitly citing prior binding or recommendatory UN resolutions or statutory conventions.",
    recommendedOrgans: ["All Organs", "UNSC", "UNGA"],
    example: "Recalling its relevant resolutions 242 (1967) and 338 (1973), and the principles of the UN Charter,",
  },
  {
    verb: "Bearing in mind",
    type: "preambulatory",
    meaning: "Reminding committee members of important legal frameworks, treaties, or geopolitical facts.",
    recommendedOrgans: ["All Organs", "ECOSOC", "UNGA"],
    example: "Bearing in mind the statutory obligations enshrined in the 1951 Convention Relating to the Status of Refugees,",
  },
  {
    verb: "Guided by",
    type: "preambulatory",
    meaning: "Framing the draft resolution under universal human rights or multilateral doctrines.",
    recommendedOrgans: ["UNHRC", "UNGA", "ECOSOC"],
    example: "Guided by the Universal Declaration of Human Rights and the 2030 Agenda for Sustainable Development,",
  },
  {
    verb: "Alarmed by",
    type: "preambulatory",
    meaning: "Conveying urgency regarding urgent security escalations or public health emergencies.",
    recommendedOrgans: ["UNSC", "WHO", "UNGA"],
    example: "Alarmed by the critical shortages of potable water and medical supplies in conflict zones,",
  },

  // Operative Verbs - Standard / Recommendatory
  {
    verb: "Recommends",
    type: "operative",
    meaning: "Advising a course of action while explicitly respecting state sovereignty (classic UNGA/ECOSOC verb).",
    recommendedOrgans: ["UNGA", "ECOSOC", "UNHRC"],
    example: "Recommends that Member States establish regional monitoring desks to facilitate verifiable humanitarian corridors;",
  },
  {
    verb: "Calls upon",
    type: "operative",
    meaning: "A strong diplomatic request urging Member States or parties to conflict to take action.",
    recommendedOrgans: ["UNGA", "UNSC", "UNHRC"],
    example: "Calls upon all signatories to immediately cease hostilities and engage in good-faith bilateral arbitration;",
  },
  {
    verb: "Encourages",
    type: "operative",
    meaning: "Inviting voluntary bilateral or multilateral cooperation without legal obligation.",
    recommendedOrgans: ["UNGA", "ECOSOC", "DISEC"],
    example: "Encourages international financial institutions to provide concessional transition loans to drought-impacted economies;",
  },
  {
    verb: "Requests",
    type: "operative",
    meaning: "Directing the Secretary-General or specific UN agencies to produce reports or provide assistance.",
    recommendedOrgans: ["All Organs", "UNGA", "UNSC", "ECOSOC"],
    example: "Requests the Secretary-General to submit an interim compliance assessment within ninety days of adoption;",
  },
  {
    verb: "Urges",
    type: "operative",
    meaning: "A high-priority diplomatic plea for immediate state compliance.",
    recommendedOrgans: ["UNGA", "UNSC", "UNHRC"],
    example: "Urges all relevant parties to grant unhindered access to United Nations humanitarian relief convoys;",
  },

  // Operative Verbs - Binding Chapter VII (Security Council Exclusive)
  {
    verb: "Demands",
    type: "operative",
    meaning: "A mandatory, binding directive reserved primarily for the UN Security Council acting under Chapter VII.",
    recommendedOrgans: ["UNSC"],
    example: "Demands the immediate, unconditional withdrawal of all armed elements from designated demilitarized zones;",
  },
  {
    verb: "Decides",
    type: "operative",
    meaning: "Legally establishing a mandate, sanctions regime, or formal institutional mechanism.",
    recommendedOrgans: ["UNSC", "UNGA"],
    example: "Decides to establish an independent Panel of Experts to investigate illicit arms flows across maritime borders;",
  },
  {
    verb: "Authorizes",
    type: "operative",
    meaning: "Granting legal power to peacekeeping missions or regional coalitions under international law.",
    recommendedOrgans: ["UNSC"],
    example: "Authorizes the United Nations Peacekeeping Mission to take all necessary measures to protect civilian safe havens;",
  },
];

export interface RoPScenario {
  id: string;
  scenario: string;
  correctAction: string;
  category: "Points" | "Motions" | "Voting" | "Debate Dynamics";
  explanation: string;
  interruptionAllowed: boolean;
  voteRequired: "None (Chair's Discretion)" | "Simple Majority (50% + 1)" | "Two-Thirds Majority (66%)" | "Consensus";
}

export const ROP_SCENARIOS: RoPScenario[] = [
  {
    id: "rop-1",
    scenario: "You cannot hear the current delegate speaking at the podium due to microphone malfunction or room noise.",
    correctAction: "Point of Personal Privilege (Regarding Inaudibility)",
    category: "Points",
    explanation: "This is the ONLY point that may interrupt a speaker mid-sentence, but strictly when you cannot hear. For air conditioning or seating, wait until the speaker finishes.",
    interruptionAllowed: true,
    voteRequired: "None (Chair's Discretion)",
  },
  {
    id: "rop-2",
    scenario: "The Chair mistakenly opens voting on a draft resolution before hearing against-speakers as prescribed by the rules.",
    correctAction: "Point of Order",
    category: "Points",
    explanation: "Used exclusively to draw attention to a violation or misapplication of parliamentary procedure by the Executive Board or a delegate. Raised between speeches.",
    interruptionAllowed: false,
    voteRequired: "None (Chair's Discretion)",
  },
  {
    id: "rop-3",
    scenario: "You are unsure whether abstentions count in procedural votes (like extending caucus time).",
    correctAction: "Point of Parliamentary Inquiry",
    category: "Points",
    explanation: "A question directed to the Chair asking for clarification on the rules of procedure. (Note: On procedural votes, abstentions are never allowed; delegates must vote Yes or No).",
    interruptionAllowed: false,
    voteRequired: "None (Chair's Discretion)",
  },
  {
    id: "rop-4",
    scenario: "The committee wishes to break into open, unmoderated discussion to draft clauses and negotiate working papers.",
    correctAction: "Motion for an Unmoderated Caucus",
    category: "Motions",
    explanation: "Requires specifying total time (e.g. 15 minutes). The Executive Board considers the flow of debate before accepting. If multiple motions are raised, longer caucus time takes precedence in most RoPs.",
    interruptionAllowed: false,
    voteRequired: "Simple Majority (50% + 1)",
  },
  {
    id: "rop-5",
    scenario: "You support most of a draft resolution but strongly oppose one specific controversial clause (e.g. clause 4).",
    correctAction: "Motion for Division of the Question",
    category: "Voting",
    explanation: "Allows committee to vote on specific clauses separately before voting on the resolution as a whole. If accepted, clause 4 is voted on alone. If it fails, it is expunged and the rest proceeds.",
    interruptionAllowed: false,
    voteRequired: "Simple Majority (50% + 1)",
  },
  {
    id: "rop-6",
    scenario: "You want every country's vote on a crucial draft resolution to be individually announced on the official record.",
    correctAction: "Motion for a Roll Call Vote",
    category: "Voting",
    explanation: "The Chair reads countries alphabetically. Delegates respond 'Yes', 'No', 'Abstain', or 'Pass' (deferring until the end of the roll). Accepted at the Chair's discretion or simple vote.",
    interruptionAllowed: false,
    voteRequired: "None (Chair's Discretion)",
  },
];
