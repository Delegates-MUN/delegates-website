import { MediaArticle } from "@/types";

/**
 * DELEGATES Media Articles Directory
 * Authentic editorial commentary, analytical field notes, and perspectives from youth debaters.
 */
export const MEDIA_ARTICLES: MediaArticle[] = [
  {
    id: "media-01",
    slug: "shouting-matches-vs-real-diplomacy",
    title: "Why Model UN Started Rewarding Shouting Matches—And How to Bring Diplomacy Back",
    subtitle: "A critical reflection on modern delegate culture and the quiet power of genuine consensus.",
    category: "MUN Insights",
    author: "DELEGATES Editorial Desk",
    authorRole: "Secretariat Commentary",
    publishedDate: "November 2026",
    readingTime: "5 min read",
    summary:
      "Modern delegate awards all too often go to whoever screams loudest in an unmoderated caucus. Here is why true statesmanship happens through quiet coalition building, precise clause writing, and intellectual humility.",
    content: [
      {
        heading: "The Theater of Modern MUN",
        paragraphs: [
          "If you have attended a Model United Nations conference over the past few years, you have almost certainly witnessed it: a delegate standing in the middle of a crowded committee room, shouting over everyone else, cutting off peers, and waving placards like an auctioneer.",
          "Somewhere along the way, many competitive circuits began confusing aggression with leadership. Delegates were coached to monopolize speaking time, corner smaller delegations, and bulldoze through working papers. The gavel became an exercise in dominating the room rather than solving the problem.",
        ],
        quote: "True diplomatic power does not shout. It listens, understands sovereign interests, and builds consensus where others see impasse.",
      },
      {
        heading: "What Real Diplomacy Actually Looks Like",
        paragraphs: [
          "In the real United Nations, statesmanship is not theatrical. Real ambassadors do not win negotiations by yelling at their peers during coffee breaks. Diplomatic breakthroughs happen in quiet side rooms, where representatives pore over draft language word-by-word to find phrasing that respects competing sovereign interests.",
          "The delegates who make the greatest lasting impression on experienced Executive Board members are not the ones who speak for 80% of the caucus. They are the ones who notice a quiet first-time delegate from a smaller nation, ask for their input on water rights, and integrate their specific concerns into clause 3 of the resolution.",
        ],
      },
      {
        heading: "The DELEGATES Standard",
        paragraphs: [
          "We founded DELEGATES to push back against this performative culture. Model UN was created to teach youth how the world negotiates—how compromise is reached without capitulation, and how diverse nations can find common ground amidst profound geopolitical tension.",
          "Our challenge to every delegate reading this: at your next conference, don't try to be the loudest voice in the room. Strive to be the most prepared, the most collaborative, and the most principled. That is the kind of leadership that changes rooms—and ultimately, the world.",
        ],
      },
    ],
    sources: [
      "Charter of the United Nations, Article 1 & 2",
      "UNITAR International Negotiation Studies (2024)",
    ],
  },
  {
    id: "media-02",
    slug: "imposter-syndrome-in-committee",
    title: "The First-Timer's Guide to Overcoming Imposter Syndrome in Committee",
    subtitle: "Walking into a room full of suits, gavels, and jargon is intimidating. Here is how to own your voice.",
    category: "Diplomacy & International Relations",
    author: "DELEGATES Academic Desk",
    authorRole: "Student Guidance",
    publishedDate: "November 2026",
    readingTime: "4 min read",
    summary:
      "Every top delegate you admire was once a terrified first-timer holding a shaking placard. A practical mindset guide for stepping into your first MUN with authentic confidence.",
    content: [
      {
        heading: "The Illusion of the Expert",
        paragraphs: [
          "You walk into the opening ceremony wearing a borrowed suit. Around you, older delegates are tossing around terms like 'jus cogens', 'multilateral enforcement mechanisms', and 'procedural filibusters' with casual ease. It is easy to look around and think: 'I don't belong here.'",
          "Here is the truth every chair knows: at least 70% of those impressive-sounding delegates are just as nervous as you are, and half of the jargon being thrown around is hollow fluff. Speaking fast does not mean speaking accurately.",
        ],
        quote: "Confidence in committee doesn't come from pretending to know everything; it comes from having read the treaties and knowing your country's truth.",
      },
      {
        heading: "Focus on the First Speech",
        paragraphs: [
          "The hardest part of any conference is raising your placard for the first time. The longer you wait, the heavier the placard feels. Make a commitment to get on the General Speakers List in the very first 30 minutes of session one.",
          "Write out your 90-second speech beforehand. Read it clearly, look up at least three times, and deliver your points. The moment you sit down, the adrenaline spike will clear, and you will realize: you survived, you made your country's voice heard, and you are officially part of the debate.",
        ],
      },
    ],
    sources: [
      "Harvard Model United Nations Delegate Handbook",
      "Youth Leadership Development Review",
    ],
  },
  {
    id: "media-03",
    slug: "sovereignty-paradox-resolutions",
    title: "The Sovereignty Paradox: Why Most Idealistic Draft Resolutions Fail",
    subtitle: "Understanding Article 2(7) of the UN Charter and the real-world limits of international jurisdiction.",
    category: "Geopolitics",
    author: "DELEGATES Geopolitics Desk",
    authorRole: "Policy Analysis",
    publishedDate: "November 2026",
    readingTime: "6 min read",
    summary:
      "Why delegates who write 'mandates all nations to inspect private bank accounts' get dismantled during voting. How understanding sovereign legal architecture turns amateur debates into realistic foreign policy statecraft.",
    content: [
      {
        heading: "The Article 2(7) Wall",
        paragraphs: [
          "One of the most common errors in General Assembly and Human Rights Council committees is delegates drafting clauses that treat the UN like a global government with police powers.",
          "Article 2, paragraph 7 of the UN Charter states clearly: 'Nothing contained in the present Charter shall authorize the United Nations to intervene in matters which are essentially within the domestic jurisdiction of any state.' Except for Chapter VII enforcement by the Security Council, the UN operates on sovereign consent.",
        ],
        quote: "The genius of multilateral diplomacy is crafting agreements that sovereign nations want to comply with because it serves their national interest.",
      },
      {
        heading: "Crafting Actionable Alternatives",
        paragraphs: [
          "Instead of trying to force sovereign nations to surrender authority, effective resolutions use incentive structures, verification transparency, capacity-building grants, and voluntary compliance frameworks.",
          "When you understand sovereign constraints, your draft resolutions immediately look like real foreign policy documents rather than student wish-lists.",
        ],
      },
    ],
    sources: [
      "United Nations Charter, Chapter I & VII",
      "International Court of Justice Jurisprudence",
    ],
  },
];
