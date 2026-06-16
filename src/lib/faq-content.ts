import type { Language } from "@/lib/i18n";

export const faqContent: Record<
  Language,
  {
    badge: string;
    heading: string;
    headingAccent: string;
    intro: string;
    questions: [string, string][];
    ctaText: string;
    ctaButton: string;
  }
> = {
  de: {
    badge: "Q&A",
    heading: "Häufige Fragen.",
    headingAccent: "Klare Antworten.",
    intro:
      "Hier finden Sie die wichtigsten Antworten zu Zusammenarbeit, Datenschutz und Umsetzung von KI-Projekten im HR-Bereich.",
    questions: [
      [
        "Womit startet ein Projekt mit RAWR?",
        "In der Regel beginnen wir mit einem kompakten HR AI Readiness Audit. Dabei prüfen wir Prozesse, Datenflüsse, Tool-Landschaft und konkrete Automatisierungspotenziale, bevor wir eine priorisierte Roadmap ableiten.",
      ],
      [
        "Ist der Einsatz von KI im HR DSGVO-konform möglich?",
        "Ja, wenn Tool-Auswahl, Datenverarbeitung, Rollen, Dokumentation und Human-in-the-Loop-Prozesse sauber gestaltet sind. Genau hier setzen unsere Compliance- und Governance-Bausteine an.",
      ],
      [
        "Müssen bestehende HR-Systeme ersetzt werden?",
        "Nein. Unser Ansatz ist integrationsorientiert. Wir prüfen, wie bestehende Systeme wie ATS, HRIS oder Wissensdatenbanken sinnvoll erweitert werden können, statt funktionierende Abläufe unnötig zu ersetzen.",
      ],
      [
        "Wie schnell sieht ein HR-Team erste Ergebnisse?",
        "Erste Quick Wins entstehen häufig bereits in Workshops oder Prototypen, etwa bei Stellenanzeigen, Screening-Workflows oder interner HR-Kommunikation. Für produktive Integrationen planen wir abhängig von Komplexität mehrere Wochen ein.",
      ],
      [
        "Schult RAWR auch Mitarbeitende ohne technischen Hintergrund?",
        "Ja. Enablement ist ein Kernbestandteil unserer Arbeit. Wir übersetzen KI, Prompting und Automatisierung in verständliche Routinen, die HR-Teams sicher im Tagesgeschäft nutzen können.",
      ],
      [
        "Was passiert nach der Einführung?",
        "Wir begleiten bei Bedarf Betrieb, Optimierung und Governance weiter. Dazu gehören Feedback-Schleifen, Prompt-Bibliotheken, Qualitätskriterien, Risiko-Checks und die Weiterentwicklung interner KI-Workflows.",
      ],
      [
        "Welche HR-Systeme integriert RAWR?",
        "Wir arbeiten mit den gängigen HR-Systemen im Mittelstand: Personio, Workday, SAP SuccessFactors, sowie klassischen ATS und HRIS. Unser Ansatz ist systemunabhängig – wir prüfen, welche Workflows sich sinnvoll automatisieren lassen, ohne bestehende Landschaften zu ersetzen.",
      ],
      [
        "Wie lange dauert ein typisches Projekt?",
        "Ein HR AI Readiness Audit dauert in der Regel 2–3 Wochen. Erste produktive Quick Wins – etwa automatisierte Stellenanzeigen oder Zeugnis-Workflows – entstehen oft innerhalb von 30 Tagen. Umfangreichere Integrationen planen wir je nach Komplexität auf 6–12 Wochen.",
      ],
      [
        "Funktioniert KI im HR auch ohne eigene IT-Abteilung?",
        "Ja. Viele unserer Kunden sind KMU ohne dediziertes IT-Team. Wir stellen sicher, dass Lösungen betriebsfähig sind, ohne interne IT-Ressourcen vorauszusetzen – inklusive Dokumentation, Schulung und optionaler Betreuung im laufenden Betrieb.",
      ],
      [
        "Was kostet eine KI-Einführung im HR typischerweise?",
        "Die Investition hängt vom Umfang ab. Ein Einstiegs-Audit und erste Workshops beginnen im niedrigen vierstelligen Bereich. Projektbegleitungen und Integrationen werden projektspezifisch kalkuliert. Wir besprechen Rahmen und Optionen transparent im ersten Gespräch.",
      ],
      [
        "Ist RAWR auch für kleinere Unternehmen geeignet?",
        "Ja. Wir begleiten HR-Teams ab ca. 100 Mitarbeitenden. Gerade für KMU ohne große Ressourcen ist ein pragmatischer, schlanker Einstieg oft wertvoller als ein großes Transformationsprojekt. Unser Fokus liegt auf umsetzbaren Lösungen mit echtem Effekt.",
      ],
      [
        "Wie unterscheidet sich RAWR von klassischen Unternehmensberatungen?",
        "Wir sind kein Strategieberater, der Folien liefert. RAWR begleitet operativ: Wir implementieren Workflows, trainieren Teams direkt, und bauen Lösungen, die intern weitergeführt werden können. Der Fokus liegt auf Befähigung statt Abhängigkeit.",
      ],
    ],
    ctaText: "Noch eine Frage offen?",
    ctaButton: "Frage stellen",
  },
  en: {
    badge: "Q&A",
    heading: "Common questions.",
    headingAccent: "Clear answers.",
    intro:
      "Find the most important answers about collaboration, privacy and implementation of AI projects in HR.",
    questions: [
      [
        "How does a project with RAWR usually start?",
        "We usually begin with a compact HR AI readiness audit. We review processes, data flows, the tool landscape and concrete automation potential before deriving a prioritized roadmap.",
      ],
      [
        "Can AI be used in HR in a GDPR-compliant way?",
        "Yes, if tool selection, data processing, roles, documentation and human-in-the-loop processes are designed properly. This is exactly where our compliance and governance modules come in.",
      ],
      [
        "Do existing HR systems need to be replaced?",
        "No. Our approach is integration-oriented. We assess how existing systems such as ATS, HRIS or knowledge bases can be extended meaningfully instead of replacing workflows that already work.",
      ],
      [
        "How quickly can an HR team see first results?",
        "First quick wins often emerge during workshops or prototypes, for example in job ads, screening workflows or internal HR communication. Productive integrations usually take several weeks depending on complexity.",
      ],
      [
        "Does RAWR train employees without a technical background?",
        "Yes. Enablement is a core part of our work. We translate AI, prompting and automation into understandable routines that HR teams can use confidently in daily work.",
      ],
      [
        "What happens after implementation?",
        "If needed, we continue supporting operations, optimization and governance. This includes feedback loops, prompt libraries, quality criteria, risk checks and the evolution of internal AI workflows.",
      ],
      [
        "Which HR systems does RAWR integrate with?",
        "We work with the most common HR systems in mid-market: Personio, Workday, SAP SuccessFactors, as well as standard ATS and HRIS platforms. Our approach is system-agnostic — we assess which workflows can be meaningfully automated without replacing existing infrastructure.",
      ],
      [
        "How long does a typical project take?",
        "An HR AI readiness audit usually takes 2–3 weeks. First productive quick wins — such as automated job ads or reference workflows — often emerge within 30 days. More extensive integrations are planned for 6–12 weeks depending on complexity.",
      ],
      [
        "Does AI in HR work without an internal IT team?",
        "Yes. Many of our clients are mid-market companies without a dedicated IT team. We make sure solutions are operational without requiring internal IT resources — including documentation, training and optional ongoing support.",
      ],
      [
        "What does AI adoption in HR typically cost?",
        "The investment depends on scope. An entry-level audit and first workshops start in the low four-figure range. Project engagements and integrations are calculated per project. We discuss the framework and options transparently in the first call.",
      ],
      [
        "Is RAWR suitable for smaller companies?",
        "Yes. We work with HR teams from around 100 employees upward. Especially for SMEs without large resources, a pragmatic, lean entry is often more valuable than a large transformation project. We focus on actionable solutions with real impact.",
      ],
      [
        "How does RAWR differ from traditional management consultancies?",
        "We are not a strategy consultancy that delivers slide decks. RAWR works operationally: we implement workflows, train teams directly and build solutions that can be maintained internally. The focus is on enablement, not dependency.",
      ],
    ],
    ctaText: "Still have a question?",
    ctaButton: "Ask a question",
  },
  fr: {
    badge: "Q&A",
    heading: "Questions fréquentes.",
    headingAccent: "Réponses claires.",
    intro:
      "Retrouvez les réponses essentielles sur la collaboration, la confidentialité et la mise en œuvre de projets IA dans les RH.",
    questions: [
      [
        "Comment commence généralement un projet avec RAWR ?",
        "Nous commençons le plus souvent par un audit HR AI Readiness compact. Nous analysons les processus, les flux de données, les outils existants et les potentiels d'automatisation avant de définir une feuille de route priorisée.",
      ],
      [
        "L'utilisation de l'IA dans les RH peut-elle être conforme au RGPD ?",
        "Oui, si le choix des outils, le traitement des données, les rôles, la documentation et les processus human-in-the-loop sont conçus correctement. C'est précisément l'objectif de nos modules de conformité et de gouvernance.",
      ],
      [
        "Faut-il remplacer les systèmes RH existants ?",
        "Non. Notre approche est orientée intégration. Nous évaluons comment les systèmes existants comme ATS, HRIS ou bases de connaissances peuvent être enrichis sans remplacer inutilement ce qui fonctionne déjà.",
      ],
      [
        "Quand une équipe RH peut-elle voir les premiers résultats ?",
        "Les premiers quick wins apparaissent souvent dès les workshops ou prototypes, par exemple pour les offres d'emploi, les workflows de présélection ou la communication RH interne. Les intégrations productives prennent généralement plusieurs semaines selon la complexité.",
      ],
      [
        "RAWR forme-t-il aussi des équipes sans profil technique ?",
        "Oui. L'enablement est au cœur de notre travail. Nous traduisons l'IA, le prompting et l'automatisation en routines compréhensibles que les équipes RH peuvent utiliser avec confiance au quotidien.",
      ],
      [
        "Que se passe-t-il après la mise en œuvre ?",
        "Si besoin, nous accompagnons l'exploitation, l'optimisation et la gouvernance. Cela inclut des boucles de feedback, des bibliothèques de prompts, des critères qualité, des contrôles de risque et l'évolution des workflows IA internes.",
      ],
      [
        "Avec quels systèmes RH RAWR s'intègre-t-il ?",
        "Nous travaillons avec les systèmes RH les plus courants dans les PME : Personio, Workday, SAP SuccessFactors, ainsi que les ATS et HRIS standards. Notre approche est agnostique — nous évaluons quels workflows peuvent être automatisés sans remplacer l'infrastructure existante.",
      ],
      [
        "Quelle est la durée d'un projet typique ?",
        "Un audit HR AI Readiness prend généralement 2 à 3 semaines. Les premiers quick wins productifs — offres d'emploi automatisées ou workflows de certificats — apparaissent souvent en 30 jours. Des intégrations plus complexes sont planifiées sur 6 à 12 semaines.",
      ],
      [
        "L'IA RH fonctionne-t-elle sans équipe IT interne ?",
        "Oui. Beaucoup de nos clients sont des PME sans équipe IT dédiée. Nous veillons à ce que les solutions soient opérationnelles sans nécessiter de ressources IT internes — documentation, formation et support optionnel inclus.",
      ],
      [
        "Quel est le coût typique d'une adoption IA dans les RH ?",
        "L'investissement dépend du périmètre. Un audit d'entrée et des premiers workshops démarrent dans les quatre chiffres bas. Les accompagnements projet et intégrations sont calculés au projet. Nous discutons du cadre et des options de façon transparente lors du premier échange.",
      ],
      [
        "RAWR convient-il aux petites entreprises ?",
        "Oui. Nous accompagnons des équipes RH à partir d'environ 100 collaborateurs. Pour les PME sans grandes ressources, une entrée pragmatique et légère est souvent plus précieuse qu'un grand projet de transformation. Notre priorité : des solutions actionnables avec un impact réel.",
      ],
      [
        "En quoi RAWR se distingue-t-il des cabinets de conseil traditionnels ?",
        "Nous ne sommes pas un cabinet stratégique qui livre des slides. RAWR intervient de manière opérationnelle : nous implémentons des workflows, formons les équipes directement et construisons des solutions maintenables en interne. L'objectif est l'autonomisation, pas la dépendance.",
      ],
    ],
    ctaText: "Une question reste ouverte ?",
    ctaButton: "Poser une question",
  },
};
