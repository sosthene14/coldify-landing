// i18n/fr.js
const frTranslations = {
  meta: {
    title: "So-mails — Savoir si votre email a été lu",
    lang: "fr",
  },
  nav: {
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    pricing: "Tarifs",
    login: "Connexion",
    tryFree: "Essayer gratuitement",
  },
  hero: {
    eyebrow: "✉ accusé de lecture, pour n'importe quel email",
    title1: "Vous avez envoyé l'email.",
    title2: "Reste à savoir s'il a été",
    titleAccent: "lu",
    subtitle: "Une candidature, un devis, un dossier important — So-mails vous dit quand votre email a été ouvert, pour ne plus relancer dans le vide.",
    ctaPrimary: "Essayer gratuitement",
    ctaSecondary: "Voir comment ça marche",
    note: "Sans carte bancaire · Connexion en 30 secondes",
    journeyLabel: "trajet de l'email",
    journeySent: "envoyé",
    journeyTransit: "en transit",
    journeyRead: "lu · 14:32",
  },
  stats: {
    stat1: {
      number: "~1 / 3",
      label: "des emails importants restent sans réponse — sachez enfin s'ils ont été ouverts",
    },
    stat2: {
      number: "< 1s",
      label: "de délai entre l'ouverture réelle et votre notification",
    },
    stat3: {
      number: "0",
      label: "contenu d'email stocké sur nos serveurs",
    },
  },
  features: {
    eyebrow: "◆ fonctionnalités",
    title: "Tout ce qu'il faut pour arrêter de deviner",
    subtitle: "Pas de tableau à tenir, pas d'extension à faire installer à votre destinataire. So-mails observe simplement ce qui se passe déjà.",
    
    feature1: {
      tag: "accusé de lecture",
      title: "Sachez si votre email a été ouvert, et quand",
      description: "Chaque email important que vous envoyez est suivi individuellement. Une candidature, un devis, un dossier administratif : dès qu'il est ouvert, le statut change dans votre historique — en temps réel.",
      list: [
        "Horodatage précis de la première et de la dernière ouverture",
        "Historique complet, classé par email et par boîte mail",
        "Notification en direct dès l'ouverture",
      ],
      visual: {
        scenario: "\"J'ai postulé lundi… ils l'ont lu ?\"",
        status: "Statut",
        statusValue: "Ouvert ✓",
        firstOpen: "Première ouverture",
        firstOpenValue: "14:32:07",
        lastOpen: "Dernière ouverture",
        lastOpenValue: "14:41:52",
      },
    },
    
    feature2: {
      tag: "confidentialité",
      title: "Aucun contenu d'email stocké",
      description: "So-mails suit des événements — envoyé, ouvert — jamais le corps de vos emails. Rien n'est conservé sur nos serveurs après l'envoi, par conception, pas en option.",
      list: [
        "Contenu récupéré à la demande, jamais persisté",
        "Aucune donnée revendue ou partagée",
        "Conforme aux bonnes pratiques RGPD dès le départ",
      ],
      visual: {
        emailBody: "Corps de l'email",
        emailBodyValue: "Non stocké",
        attachments: "Pièces jointes",
        attachmentsValue: "Non stockées",
        openEvent: "Événement \"ouvert\"",
        openEventValue: "Conservé",
      },
    },
    
    feature3: {
      tag: "boîtes mail",
      title: "Connectez toutes les boîtes que vous utilisez",
      description: "Gmail, Outlook, Yahoo, iCloud ou votre propre serveur SMTP — connectez plusieurs boîtes à la fois et suivez vos emails importants au même endroit, quel que soit l'expéditeur.",
      list: [
        "Connexion sécurisée pour Gmail et Outlook",
        "SMTP personnalisé pour les configurations avancées",
        "Plusieurs fournisseurs connectés simultanément",
      ],
      visual: {
        note: "connectez-en plusieurs à la fois →",
      },
    },
  },
  howItWorks: {
    eyebrow: "◆ en trois étapes",
    title: "Opérationnel avant votre café",
    subtitle: "Aucune configuration côté destinataire, aucun plugin à faire installer.",
    steps: [
      {
        number: "1",
        title: "Connectez votre boîte mail",
        description: "Gmail, Outlook, SMTP ou plusieurs à la fois — l'autorisation prend moins d'une minute.",
      },
      {
        number: "2",
        title: "Envoyez comme d'habitude",
        description: "Depuis votre client mail habituel, rien ne change pour votre destinataire.",
      },
      {
        number: "3",
        title: "Suivez l'ouverture en direct",
        description: "Statut mis à jour dès que l'email est lu, visible dans votre historique.",
      },
    ],
  },
  cta: {
    title: "Arrêtez de vous demander si votre email a été lu.",
    subtitle: "Connectez votre boîte mail et voyez votre première ouverture dans la minute.",
    primary: "Essayer gratuitement",
    secondary: "Parler à l'équipe",
  },
  pricing: {
    eyebrow: "◆ tarifs",
    title: "Un plan pour chaque besoin",
    subtitle: "Commencez gratuitement, passez à la vitesse supérieure quand vous le souhaitez.",
    
    free: {
      name: "Gratuit",
      price: "0",
      currency: "€",
      period: "/mois",
      description: "Pour découvrir So-mails",
      cta: "Commencer gratuitement",
      features: [
        "5 emails par jour",
        "2 fournisseurs connectés",
        "Notifications en temps réel",
        "Historique de 7 jours",
      ],
    },
    
    pro: {
      name: "Pro",
      price: "5",
      currency: "€",
      period: "/mois",
      description: "Pour un usage professionnel",
      cta: "Essayer Pro",
      popular: "Populaire",
      features: [
        "100 emails par jour",
        "10 fournisseurs connectés",
        "Notifications en temps réel",
        "Historique illimité",
        "Support prioritaire",
      ],
    },
    
    unlimited: {
      name: "Illimité",
      price: "10",
      currency: "€",
      period: "/mois",
      description: "Pour les équipes et agences",
      cta: "Essayer Illimité",
      features: [
        "Emails illimités",
        "Fournisseurs illimités",
        "Notifications en temps réel",
        "Historique illimité",
        "Support prioritaire",
        "API d'intégration",
      ],
    },
  },
  footer: {
    brand: "So-mails",
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    privacy: "Confidentialité",
    contact: "Contact",
    copyright: "© 2026 So-mails",
  },
  privacy: {
    meta: {
      title: "Politique de confidentialité — So-mails",
    },
    eyebrow: "transparence totale",
    title: "Politique de confidentialité",
    subtitle: "Vos données vous appartiennent. Nous les protégeons, nous ne les vendons jamais.",
    updated: "Dernière mise à jour : 27 août 2026",
    
    principles: {
      title: "Nos principes fondamentaux",
      item1: {
        title: "Zéro contenu stocké",
        description: "Nous ne conservons jamais le corps de vos emails ni les pièces jointes. Seuls les événements (envoyé, ouvert) sont enregistrés.",
      },
      item2: {
        title: "Jamais de revente",
        description: "Vos données ne sont jamais partagées, vendues ou utilisées à des fins publicitaires. Jamais.",
      },
      item3: {
        title: "Conforme RGPD",
        description: "Conformité totale avec le RGPD (Europe) et respect des principales réglementations de confidentialité internationales. Vos données sont hébergées en Europe.",
      },
    },
    
    dataCollection: {
      title: "Données collectées",
      intro: "Voici exactement ce que nous collectons et pourquoi :",
      items: {
        email: {
          label: "Adresse email",
          purpose: "Pour créer votre compte et vous envoyer des notifications",
          retention: "Conservé tant que votre compte existe",
        },
        metadata: {
          label: "Métadonnées des emails",
          purpose: "Destinataire, objet, date d'envoi, statut de lecture",
          retention: "Conservé selon votre plan (7 jours à illimité)",
        },
        events: {
          label: "Événements d'ouverture",
          purpose: "Date et heure d'ouverture, appareil (desktop/mobile)",
          retention: "Conservé selon votre plan",
        },
        connection: {
          label: "Informations de connexion",
          purpose: "Adresse IP, navigateur, pour la sécurité de votre compte",
          retention: "30 jours maximum",
        },
      },
    },
    
    notCollected: {
      title: "Ce que nous ne collectons PAS",
      items: [
        "Le contenu complet de vos emails",
        "Les pièces jointes",
        "Les brouillons",
        "Les contacts de votre carnet d'adresses",
        "L'historique de vos emails non suivis",
      ],
    },
    
    compliance: {
      title: "Conformité réglementaire",
      intro: "Nous nous conformons aux principales réglementations de protection des données dans le monde :",
      gdpr: {
        title: "RGPD (Europe)",
        description: "Conformité totale avec le Règlement Général sur la Protection des Données",
      },
      ccpa: {
        title: "CCPA (Californie)",
        description: "Respect du California Consumer Privacy Act",
      },
      pipeda: {
        title: "PIPEDA (Canada)",
        description: "Conforme à la Loi sur la protection des renseignements personnels",
      },
      privacyShield: {
        title: "Privacy Shield",
        description: "Principes de transfert de données UE-US respectés",
      },
    },
    
    security: {
      title: "Sécurité",
      intro: "Nous prenons la sécurité au sérieux :",
      items: [
        "Chiffrement SSL/TLS pour toutes les communications",
        "Authentification OAuth2 sécurisée pour Gmail et Outlook",
        "Tokens d'accès chiffrés en base de données",
        "Infrastructure hébergée en Europe (OVH/AWS)",
        "Audits de sécurité réguliers",
        "Authentification à deux facteurs disponible",
      ],
    },
    
    rights: {
      title: "Vos droits",
      intro: "Conformément au RGPD, vous disposez des droits suivants :",
      items: {
        access: {
          title: "Droit d'accès",
          description: "Téléchargez toutes vos données à tout moment depuis votre compte",
        },
        rectification: {
          title: "Droit de rectification",
          description: "Modifiez vos informations personnelles directement dans votre profil",
        },
        deletion: {
          title: "Droit à l'effacement",
          description: "Supprimez votre compte et toutes vos données en un clic",
        },
        portability: {
          title: "Droit à la portabilité",
          description: "Exportez vos données au format JSON ou CSV",
        },
      },
    },
    
    cookies: {
      title: "Cookies",
      description: "Nous utilisons uniquement des cookies essentiels pour maintenir votre session active. Pas de cookies de tracking, pas de cookies publicitaires.",
    },
    
    contact: {
      title: "Nous contacter",
      description: "Pour toute question concernant cette politique de confidentialité ou vos données personnelles :",
      response: "Nous nous engageons à vous répondre sous 48 heures.",
    },
    
    sidebar: {
      title: "En résumé",
      items: [
        "Aucun contenu d'email stocké",
        "Vos données ne sont jamais vendues",
        "Conformité RGPD totale",
        "Hébergement européen sécurisé",
        "Export de vos données à tout moment",
        "Suppression en un clic",
      ],
      cta: "Retour à l'accueil",
    },
  },
};

export default frTranslations;