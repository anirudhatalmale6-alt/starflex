/* STARFLEX — bilingual layer (Français / Kreyòl ayisyen).
   Every visible string carries a key; pages mark elements with data-i18n
   (text), data-i18n-ph (placeholder) or data-i18n-title (title/aria-label).
   JS-built strings call sfT('key'). The choice is remembered per visitor. */

var SF_LANGS = { fr: 'Français', ht: 'Kreyòl' };

var SF_I18N = {
  fr: {
    /* ── Navigation / footer ─────────────────────────────────────────── */
    'nav.home': 'Accueil',
    'nav.learn': 'Apprendre',
    'nav.participate': 'Participer',
    'nav.rewards': 'Récompenses',
    'nav.account': 'Mon compte',
    'nav.about': 'À propos',
    'nav.resources': 'Ressources',
    'nav.contact': 'Contact',
    'nav.portal': 'Espace Citoyen',
    'nav.login': 'Se connecter',
    'nav.register': 'Créer un compte',
    'nav.logout': 'Déconnexion',
    'nav.myspace': 'Mon espace',
    'nav.menu': 'Menu',

    'foot.tag': 'Des idées pour transformer et développer les générations futures.',
    'foot.platform': 'Plateforme',
    'foot.citizen': 'Espace Citoyen',
    'foot.resources': 'Ressources',
    'foot.contact': 'Contact',
    'foot.about': 'À propos',
    'foot.ofs': 'One For Seven',
    'foot.civic': 'Engagement Civique',
    'foot.createacct': 'Créer un compte',
    'foot.signin': 'Se connecter',
    'foot.verifycert': 'Vérifier un certificat',
    'foot.faq': 'Questions fréquentes',
    'foot.news': 'Actualités',
    'foot.events': 'Événements',
    'foot.downloads': 'Téléchargements',
    'foot.write': 'Nous écrire',
    'foot.rights': '© 2026 STARFLEX. Tous droits réservés.',
    'foot.powered': 'Powered by',

    /* ── Home 2.0 ────────────────────────────────────────────────────── */
    'home.title': 'STARFLEX — Apprends, Participe, Gagne, Fais évoluer Haïti',
    'home.welcome': '🇭🇹 Bienvenue sur STARFLEX',
    'home.h1a': 'Apprends',
    'home.h1b': 'Participe',
    'home.h1c': 'Gagne',
    'home.h1d': 'Fais évoluer Haïti',
    'home.sub': 'STARFLEX récompense les citoyens qui apprennent, participent et améliorent leur communauté.',
    'home.cta1': 'Je Commence',
    'home.cta2': 'Voir la vidéo (2 min)',
    'home.illus_alt': 'Jeunes Haïtiens souriants',

    'home.how': 'Comment ça marche ?',
    'home.how1': "J'apprends",
    'home.how1s': 'Des leçons courtes sur tes droits et tes institutions.',
    'home.how2': 'Je participe',
    'home.how2s': 'Tu donnes ton avis dans les consultations publiques.',
    'home.how3': 'Je gagne des points',
    'home.how3s': 'Chaque action citoyenne te rapporte des points.',
    'home.how4': 'Je reçois mon certificat',
    'home.how4s': 'Ton engagement devient un certificat national.',

    'home.why': 'Pourquoi STARFLEX ?',
    'home.why1': 'Éducation',
    'home.why1s': 'Comprendre ses droits et ses devoirs, simplement.',
    'home.why2': 'Participation',
    'home.why2s': 'Ta voix compte dans les décisions publiques.',
    'home.why3': 'Volontariat',
    'home.why3s': 'Agir près de chez toi, avec les autres.',
    'home.why4': 'Institutions',
    'home.why4s': 'Un pont direct entre le citoyen et l’État.',
    'home.why5': 'Opportunités',
    'home.why5s': 'Formation, réseau et reconnaissance.',
    'home.why6': 'Certificat',
    'home.why6s': 'Une preuve officielle de ton engagement.',

    'home.journey': 'Le parcours citoyen',
    'home.journeys': 'Six étapes, du premier clic jusqu’aux avantages.',
    'home.j1': 'Créer mon compte',
    'home.j2': 'Suivre les leçons',
    'home.j3': 'Participer',
    'home.j4': 'Gagner des points',
    'home.j5': 'Recevoir le certificat',
    'home.j6': 'Débloquer les avantages',

    'home.benefits': 'Les avantages',
    'home.benefitss': 'Ce que l’engagement citoyen ouvre concrètement.',
    'home.b1': 'Santé',
    'home.b2': 'Éducation',
    'home.b3': 'Emploi',
    'home.b4': 'Inclusion financière',
    'home.b5': 'Communauté',
    'home.b6': 'Récompenses',
    'home.b7': 'Reconnaissance',

    'home.preview': 'Ton espace citoyen',
    'home.previews': 'Tout tient dans ton téléphone : tes points, ton niveau, tes leçons et tes votes.',
    'home.pv_hi': 'Bonjour Jean',
    'home.pv_pts': 'Points',
    'home.pv_lvl': 'Niveau Citoyen',
    'home.pv_lesson': 'Leçon 4',
    'home.pv_survey': 'Nouveau sondage',
    'home.pv_vote': 'Voter maintenant',
    'home.pv_open': 'Ouvrir mon espace',

    'home.goals': 'Nos objectifs',
    'home.goalss': 'Les cibles que le programme vise pour sa première phase nationale.',
    'home.g1': 'Citoyens',
    'home.g2': 'Formations',
    'home.g3': 'Consultations',
    'home.g4': 'Communautés',

    'home.video': 'STARFLEX en 2 minutes',
    'home.videos': 'Comprendre la plateforme et le programme One For Seven.',
    'home.video_soon': 'La vidéo de présentation arrive bientôt',

    'home.partners': 'Nos partenaires',
    'home.p1': 'Gouvernement',
    'home.p2': 'Universités',
    'home.p3': 'ONG',
    'home.p4': 'Secteur privé',
    'home.p5': 'HaitiBiznis Technologies',
    'home.p6': 'Organismes électoraux',

    'home.final': 'Prêt à devenir un citoyen actif ?',
    'home.finals': 'Crée ton compte en deux minutes et commence à gagner des points dès aujourd’hui.',
    'home.finalcta': 'Créer mon compte',

    /* ── Portal ──────────────────────────────────────────────────────── */
    'portal.h1': 'Espace Citoyen',
    'portal.sub': 'Inscris-toi, forme-toi, participe — et obtiens ton Certificat National de Participation Citoyenne.',
    'portal.kicker': 'Ton parcours',
    'portal.h2': 'Quatre étapes, quelques minutes',
    'portal.h2s': 'Tout se fait depuis ton téléphone ou ton ordinateur, sans déplacement.',
    'portal.s1': 'Crée ton compte',
    'portal.s1s': 'Nom, contact et commune. Ton compte est confirmé par un code.',
    'portal.s2': 'Forme-toi',
    'portal.s2s': 'Des leçons courtes sur les institutions et tes droits.',
    'portal.s3': 'Participe',
    'portal.s3s': 'Consultations publiques, sondages et volontariat.',
    'portal.s4': 'Fais-toi reconnaître',
    'portal.s4s': 'Tes points ouvrent droit au certificat national.',
    'portal.have': 'J’ai déjà un compte',
    'portal.certk': 'Certificat National',
    'portal.certh': 'Un engagement reconnu et vérifiable',
    'portal.certp': 'Chaque action citoyenne enregistrée te rapporte des points. Trois niveaux récompensent ton parcours.',
    'portal.lvl1': '<b>Bronze</b> — à partir de 30 points',
    'portal.lvl2': '<b>Argent</b> — à partir de 75 points',
    'portal.lvl3': '<b>Or</b> — à partir de 150 points',
    'portal.certnote': 'Chaque certificat porte un code unique qu’une institution, une école ou un employeur peut vérifier publiquement en quelques secondes.',
    'portal.certbtn': 'Vérifier un certificat',
    'portal.certex': 'Exemple de certificat délivré automatiquement par la plateforme.',
    'portal.certname': 'Certificat National de<br>Participation Citoyenne',
    'portal.lvlsilver': 'Niveau Argent',

    /* ── Auth ────────────────────────────────────────────────────────── */
    'auth.reg_h1': 'Créer mon compte citoyen',
    'auth.reg_sub': 'Quelques informations suffisent pour commencer ton parcours civique.',
    'auth.fullname': 'Nom complet *',
    'auth.fullname_ph': 'Ex. Marie Joseph',
    'auth.email': 'Adresse email',
    'auth.phone': 'Téléphone',
    'auth.contact_hint': 'Renseigne au moins l’un des deux — c’est là que nous enverrons ton code de vérification.',
    'auth.department': 'Département',
    'auth.choose': 'Choisir…',
    'auth.commune': 'Commune',
    'auth.commune_ph': 'Ex. Port-au-Prince',
    'auth.birth': 'Année de naissance',
    'auth.password': 'Mot de passe *',
    'auth.password_ph': '6 caractères minimum',
    'auth.reg_btn': 'Créer mon compte',
    'auth.have_acct': 'Tu as déjà un compte ?',
    'auth.signin': 'Se connecter',

    'auth.otp_h1': 'Vérifie ton compte',
    'auth.otp_sub': 'Saisis le code à 6 chiffres que nous venons de t’envoyer.',
    'auth.otp_demo': 'Code de vérification (mode démonstration)',
    'auth.otp_btn': 'Vérifier mon compte',
    'auth.otp_none': 'Tu n’as rien reçu ?',
    'auth.otp_resend': 'Renvoyer le code',
    'auth.otp_expire': 'Le code expire au bout de 10 minutes.',

    'auth.login_h1': 'Espace Citoyen',
    'auth.login_sub': 'Connecte-toi pour retrouver tes points, ton certificat et tes consultations.',
    'auth.identifier': 'Email ou téléphone',
    'auth.identifier_ph': 'ton@email.com ou +509 ...',
    'auth.password_plain': 'Mot de passe',
    'auth.login_btn': 'Se connecter',
    'auth.no_acct': 'Pas encore de compte ?',
    'auth.create': 'Créer mon compte citoyen',

    /* ── Dashboard ───────────────────────────────────────────────────── */
    'dash.eyebrow': 'Espace Citoyen',
    'dash.loading': 'Chargement de ton parcours citoyen…',
    'dash.points': 'points',
    'dash.stat1': 'Formations terminées',
    'dash.stat2': 'Consultations',
    'dash.stat3': 'Engagements bénévoles',
    'dash.stat4': 'Notifications non lues',
    'dash.certh': 'Certificat National de Participation Citoyenne',
    'dash.certs': 'Délivré automatiquement dès 30 points, et vérifiable publiquement.',
    'dash.tab1': 'Formations',
    'dash.tab2': 'Consultations',
    'dash.tab3': 'Volontariat',
    'dash.tab4': 'Notifications',
    'dash.tab5': 'Mon profil',
    'dash.activity': 'Activité récente',
    'dash.activitys': 'Chaque point est enregistré et traçable.',
    'dash.hello': 'Bonjour',
    'dash.next': 'Encore {n} point(s) pour atteindre le niveau {lvl}.',
    'dash.maxed': 'Félicitations — tu as atteint le niveau Or, le plus haut niveau d’engagement citoyen.',
    'dash.t_modules': 'Formations civiques',
    'dash.t_modules_s': 'Comprendre tes droits, tes devoirs et le fonctionnement des institutions.',
    'dash.t_consult': 'Consultations publiques',
    'dash.t_consult_s': 'Donne ton avis sur les décisions qui concernent ta communauté.',
    'dash.t_vol': 'Volontariat citoyen',
    'dash.t_vol_s': 'Passe à l’action près de chez toi.',
    'dash.t_notif': 'Notifications',
    'dash.t_notif_s': 'Rappels électoraux, nouvelles consultations et annonces.',
    'dash.t_profile': 'Mon profil',
    'dash.t_profile_s': 'Tes informations personnelles et ta commune.',
    'dash.start': 'Commencer',
    'dash.review': 'Revoir',
    'dash.done': '✓ Terminée',
    'dash.min': 'min',
    'dash.pts_plus': 'points',
    'dash.later': 'Plus tard',
    'dash.finished': 'J’ai terminé cette formation',
    'dash.close': 'Fermer',
    'dash.survey': 'Sondage',
    'dash.consultation': 'Consultation',
    'dash.participated': '✓ Participé',
    'dash.see_results': 'Voir les résultats',
    'dash.participate': 'Participer',
    'dash.comment': 'Ton commentaire (facultatif)',
    'dash.comment_ph': 'Ton avis compte…',
    'dash.cancel': 'Annuler',
    'dash.send': 'Envoyer ma réponse',
    'dash.results_live': 'Résultats en direct',
    'dash.loading_s': 'Chargement…',
    'dash.no_results': 'Aucun résultat chiffré pour cette consultation.',
    'dash.participations': 'participation(s)',
    'dash.signed': '✓ Inscrit',
    'dash.signup': 'Je m’inscris',
    'dash.signed_ok': 'Inscription confirmée',
    'dash.markread': 'Tout marquer comme lu',
    'dash.no_notif': 'Aucune notification pour le moment.',
    'dash.no_modules': 'Les formations arrivent bientôt.',
    'dash.no_consult': 'Aucune consultation ouverte pour le moment.',
    'dash.no_vol': 'Aucune mission de volontariat ouverte pour le moment.',
    'dash.empty_activity': 'Ton parcours commence. Termine une formation pour gagner tes premiers points.',
    'dash.verified_contact': 'Contact vérifié',
    'dash.save': 'Enregistrer mes informations',
    'dash.profile_note': 'Compléter ton profil te rapporte 10 points, une seule fois.',
    'dash.saved': 'Tes informations ont été enregistrées.',
    'dash.cert_wait': 'Ton certificat t’attend',
    'dash.cert_left': 'Il te reste <b>{n} point(s)</b> avant l’obtention du certificat Bronze.',
    'dash.cert_issued': 'Délivré le',
    'dash.cert_view': 'Voir / vérifier',
    'dash.cert_share': 'Partager',
    'dash.welcome_toast': 'Bienvenue sur STARFLEX — ton compte est vérifié',
    'dash.toast_pts': '+{n} points',
    'dash.level': 'Niveau',
    'lvl.bronze': 'Bronze',
    'lvl.argent': 'Argent',
    'lvl.or': 'Or',

    /* ── Certificate ─────────────────────────────────────────────────── */
    'cert.h1': 'Vérifier un certificat',
    'cert.sub': 'Chaque Certificat National de Participation Citoyenne porte un code unique, vérifiable par toute institution ou employeur.',
    'cert.code': 'Code du certificat',
    'cert.btn': 'Vérifier',
    'cert.valid': '✓ Certificat authentique',
    'cert.revoked': 'Certificat révoqué',
    'cert.dept': 'Département :',
    'cert.issued': 'Délivré le',
    'cert.name': 'Certificat National de Participation Citoyenne — STARFLEX',
    'cert.print': 'Imprimer',
    'cert.notfound': 'Aucun certificat ne correspond à ce code. Vérifie la saisie.',
    'cert.enter': 'Saisis un code de certificat.',

    /* ── Shared messages ─────────────────────────────────────────────── */
    'msg.busy': 'Un instant…',
    'msg.error': 'Une erreur est survenue. Réessaye.',
    'msg.name_required': 'Ton nom complet est requis.',
    'msg.contact_required': 'Indique une adresse email ou un numéro de téléphone.',
    'msg.password_short': 'Le mot de passe doit contenir au moins 6 caractères.',
    'msg.otp_6': 'Saisis les 6 chiffres du code.',
    'msg.otp_resent': 'Un nouveau code vient d’être envoyé.',
    'msg.creating': 'Création du compte…',
    'msg.verifying': 'Vérification…',
    'msg.connecting': 'Connexion…',
    'msg.saving': 'Enregistrement…',
    'msg.sending': 'Envoi…',
    'msg.signing': 'Inscription…',
    'msg.choose_answer': 'Choisis une réponse.',
    'msg.sent_email': 'Nous avons envoyé un code à 6 chiffres par email',
    'msg.sent_sms': 'Nous avons envoyé un code à 6 chiffres par SMS',
    'msg.to': 'à'
  },

  ht: {
    /* ── Navigation / footer ─────────────────────────────────────────── */
    'nav.home': 'Akèy',
    'nav.learn': 'Aprann',
    'nav.participate': 'Patisipe',
    'nav.rewards': 'Rekonpans',
    'nav.account': 'Kont mwen',
    'nav.about': 'Sou nou',
    'nav.resources': 'Resous',
    'nav.contact': 'Kontak',
    'nav.portal': 'Espas Sitwayen',
    'nav.login': 'Konekte',
    'nav.register': 'Kreye yon kont',
    'nav.logout': 'Dekonekte',
    'nav.myspace': 'Espas mwen',
    'nav.menu': 'Meni',

    'foot.tag': 'Lide pou transfòme ak devlope jenerasyon k ap vini yo.',
    'foot.platform': 'Platfòm',
    'foot.citizen': 'Espas Sitwayen',
    'foot.resources': 'Resous',
    'foot.contact': 'Kontak',
    'foot.about': 'Sou nou',
    'foot.ofs': 'One For Seven',
    'foot.civic': 'Angajman Sivik',
    'foot.createacct': 'Kreye yon kont',
    'foot.signin': 'Konekte',
    'foot.verifycert': 'Verifye yon sètifika',
    'foot.faq': 'Kesyon moun poze souvan',
    'foot.news': 'Aktyalite',
    'foot.events': 'Evènman',
    'foot.downloads': 'Telechajman',
    'foot.write': 'Ekri nou',
    'foot.rights': '© 2026 STARFLEX. Tout dwa rezève.',
    'foot.powered': 'Powered by',

    /* ── Home 2.0 ────────────────────────────────────────────────────── */
    'home.title': 'STARFLEX — Aprann, Patisipe, Ranmase, Fè Ayiti avanse',
    'home.welcome': '🇭🇹 Byenveni nan STARFLEX',
    'home.h1a': 'Aprann',
    'home.h1b': 'Patisipe',
    'home.h1c': 'Ranmase',
    'home.h1d': 'Fè Ayiti avanse',
    'home.sub': 'STARFLEX rekonpanse sitwayen k ap aprann, k ap patisipe epi k ap amelyore kominote yo.',
    'home.cta1': 'Mwen Kòmanse',
    'home.cta2': 'Gade videyo a (2 min)',
    'home.illus_alt': 'Jèn ayisyen k ap souri',

    'home.how': 'Kijan sa mache ?',
    'home.how1': 'M ap aprann',
    'home.how1s': 'Ti leson kout sou dwa ou ak enstitisyon peyi a.',
    'home.how2': 'M ap patisipe',
    'home.how2s': 'Ou bay opinyon ou nan konsiltasyon piblik yo.',
    'home.how3': 'M ap ranmase pwen',
    'home.how3s': 'Chak aksyon sitwayen ba ou pwen.',
    'home.how4': 'M jwenn sètifika m',
    'home.how4s': 'Angajman ou tounen yon sètifika nasyonal.',

    'home.why': 'Poukisa STARFLEX ?',
    'home.why1': 'Edikasyon',
    'home.why1s': 'Konprann dwa ou ak devwa ou, tou senpleman.',
    'home.why2': 'Patisipasyon',
    'home.why2s': 'Vwa ou konte nan desizyon piblik yo.',
    'home.why3': 'Volontarya',
    'home.why3s': 'Aji toupre lakay ou, ansanm ak lòt moun.',
    'home.why4': 'Enstitisyon',
    'home.why4s': 'Yon pon dirèk ant sitwayen an ak Leta.',
    'home.why5': 'Opòtinite',
    'home.why5s': 'Fòmasyon, rezo ak rekonesans.',
    'home.why6': 'Sètifika',
    'home.why6s': 'Yon prèv ofisyèl sou angajman ou.',

    'home.journey': 'Chemen sitwayen an',
    'home.journeys': 'Sis etap, depi premye klik la jiska avantaj yo.',
    'home.j1': 'Kreye kont mwen',
    'home.j2': 'Swiv leson yo',
    'home.j3': 'Patisipe',
    'home.j4': 'Ranmase pwen',
    'home.j5': 'Jwenn sètifika a',
    'home.j6': 'Debloke avantaj yo',

    'home.benefits': 'Avantaj yo',
    'home.benefitss': 'Sa angajman sitwayen an louvri konkrètman.',
    'home.b1': 'Sante',
    'home.b2': 'Edikasyon',
    'home.b3': 'Travay',
    'home.b4': 'Enklizyon finansye',
    'home.b5': 'Kominote',
    'home.b6': 'Rekonpans',
    'home.b7': 'Rekonesans',

    'home.preview': 'Espas sitwayen ou',
    'home.previews': 'Tout bagay nan telefòn ou : pwen ou, nivo ou, leson ou ak vòt ou.',
    'home.pv_hi': 'Bonjou Jean',
    'home.pv_pts': 'Pwen',
    'home.pv_lvl': 'Nivo Sitwayen',
    'home.pv_lesson': 'Leson 4',
    'home.pv_survey': 'Nouvo sondaj',
    'home.pv_vote': 'Vote kounye a',
    'home.pv_open': 'Louvri espas mwen',

    'home.goals': 'Objektif nou yo',
    'home.goalss': 'Sib pwogram nan vize pou premye faz nasyonal la.',
    'home.g1': 'Sitwayen',
    'home.g2': 'Fòmasyon',
    'home.g3': 'Konsiltasyon',
    'home.g4': 'Kominote',

    'home.video': 'STARFLEX nan 2 minit',
    'home.videos': 'Konprann platfòm nan ak pwogram One For Seven an.',
    'home.video_soon': 'Videyo prezantasyon an ap vini talè',

    'home.partners': 'Patnè nou yo',
    'home.p1': 'Gouvènman',
    'home.p2': 'Inivèsite',
    'home.p3': 'ONG',
    'home.p4': 'Sektè prive',
    'home.p5': 'HaitiBiznis Technologies',
    'home.p6': 'Enstitisyon elektoral',

    'home.final': 'Ou pare pou vin yon sitwayen aktif ?',
    'home.finals': 'Kreye kont ou nan de minit epi kòmanse ranmase pwen depi jodi a.',
    'home.finalcta': 'Kreye kont mwen',

    /* ── Portal ──────────────────────────────────────────────────────── */
    'portal.h1': 'Espas Sitwayen',
    'portal.sub': 'Enskri, fòme ou, patisipe — epi jwenn Sètifika Nasyonal Patisipasyon Sitwayen ou.',
    'portal.kicker': 'Chemen ou',
    'portal.h2': 'Kat etap, kèk minit',
    'portal.h2s': 'Tout bagay fèt sou telefòn ou oswa òdinatè ou, san ou pa deplase.',
    'portal.s1': 'Kreye kont ou',
    'portal.s1s': 'Non, kontak ak komin. Yon kòd konfime kont ou.',
    'portal.s2': 'Fòme ou',
    'portal.s2s': 'Ti leson kout sou enstitisyon yo ak dwa ou.',
    'portal.s3': 'Patisipe',
    'portal.s3s': 'Konsiltasyon piblik, sondaj ak volontarya.',
    'portal.s4': 'Fè yo rekonèt ou',
    'portal.s4s': 'Pwen ou ba ou dwa sou sètifika nasyonal la.',
    'portal.have': 'Mwen gen yon kont deja',
    'portal.certk': 'Sètifika Nasyonal',
    'portal.certh': 'Yon angajman yo rekonèt epi ou ka verifye',
    'portal.certp': 'Chak aksyon sitwayen yo anrejistre ba ou pwen. Twa nivo rekonpanse chemen ou.',
    'portal.lvl1': '<b>Bwonz</b> — apati 30 pwen',
    'portal.lvl2': '<b>Ajan</b> — apati 75 pwen',
    'portal.lvl3': '<b>Lò</b> — apati 150 pwen',
    'portal.certnote': 'Chak sètifika gen yon kòd inik yon enstitisyon, yon lekòl oswa yon patwon ka verifye piblikman nan kèk segonn.',
    'portal.certbtn': 'Verifye yon sètifika',
    'portal.certex': 'Egzanp sètifika platfòm nan bay otomatikman.',
    'portal.certname': 'Sètifika Nasyonal<br>Patisipasyon Sitwayen',
    'portal.lvlsilver': 'Nivo Ajan',

    /* ── Auth ────────────────────────────────────────────────────────── */
    'auth.reg_h1': 'Kreye kont sitwayen mwen',
    'auth.reg_sub': 'Kèk enfòmasyon sifi pou ou kòmanse chemen sivik ou.',
    'auth.fullname': 'Non konplè *',
    'auth.fullname_ph': 'Egz. Marie Joseph',
    'auth.email': 'Adrès imel',
    'auth.phone': 'Telefòn',
    'auth.contact_hint': 'Mete omwen youn nan de yo — se la n ap voye kòd verifikasyon ou.',
    'auth.department': 'Depatman',
    'auth.choose': 'Chwazi…',
    'auth.commune': 'Komin',
    'auth.commune_ph': 'Egz. Pòtoprens',
    'auth.birth': 'Ane nesans',
    'auth.password': 'Modpas *',
    'auth.password_ph': '6 karaktè minimòm',
    'auth.reg_btn': 'Kreye kont mwen',
    'auth.have_acct': 'Ou gen yon kont deja ?',
    'auth.signin': 'Konekte',

    'auth.otp_h1': 'Verifye kont ou',
    'auth.otp_sub': 'Mete kòd 6 chif nou fèk voye ba ou a.',
    'auth.otp_demo': 'Kòd verifikasyon (mòd demonstrasyon)',
    'auth.otp_btn': 'Verifye kont mwen',
    'auth.otp_none': 'Ou pa resevwa anyen ?',
    'auth.otp_resend': 'Voye kòd la ankò',
    'auth.otp_expire': 'Kòd la ekspire apre 10 minit.',

    'auth.login_h1': 'Espas Sitwayen',
    'auth.login_sub': 'Konekte pou jwenn pwen ou, sètifika ou ak konsiltasyon ou yo.',
    'auth.identifier': 'Imel oswa telefòn',
    'auth.identifier_ph': 'imel@ou.com oswa +509 ...',
    'auth.password_plain': 'Modpas',
    'auth.login_btn': 'Konekte',
    'auth.no_acct': 'Ou poko gen kont ?',
    'auth.create': 'Kreye kont sitwayen mwen',

    /* ── Dashboard ───────────────────────────────────────────────────── */
    'dash.eyebrow': 'Espas Sitwayen',
    'dash.loading': 'N ap chaje chemen sitwayen ou…',
    'dash.points': 'pwen',
    'dash.stat1': 'Fòmasyon fini',
    'dash.stat2': 'Konsiltasyon',
    'dash.stat3': 'Angajman volontè',
    'dash.stat4': 'Notifikasyon ou poko li',
    'dash.certh': 'Sètifika Nasyonal Patisipasyon Sitwayen',
    'dash.certs': 'Yo bay li otomatikman depi 30 pwen, epi tout moun ka verifye l.',
    'dash.tab1': 'Fòmasyon',
    'dash.tab2': 'Konsiltasyon',
    'dash.tab3': 'Volontarya',
    'dash.tab4': 'Notifikasyon',
    'dash.tab5': 'Pwofil mwen',
    'dash.activity': 'Aktivite dènyèman',
    'dash.activitys': 'Chak pwen anrejistre epi ou ka swiv li.',
    'dash.hello': 'Bonjou',
    'dash.next': 'Rete {n} pwen pou ou rive nan nivo {lvl}.',
    'dash.maxed': 'Felisitasyon — ou rive nan nivo Lò, pi wo nivo angajman sitwayen an.',
    'dash.t_modules': 'Fòmasyon sivik',
    'dash.t_modules_s': 'Konprann dwa ou, devwa ou ak fason enstitisyon yo mache.',
    'dash.t_consult': 'Konsiltasyon piblik',
    'dash.t_consult_s': 'Bay opinyon ou sou desizyon ki konsène kominote ou.',
    'dash.t_vol': 'Volontarya sitwayen',
    'dash.t_vol_s': 'Pase nan aksyon toupre lakay ou.',
    'dash.t_notif': 'Notifikasyon',
    'dash.t_notif_s': 'Rapèl eleksyon, nouvo konsiltasyon ak anons.',
    'dash.t_profile': 'Pwofil mwen',
    'dash.t_profile_s': 'Enfòmasyon pèsonèl ou ak komin ou.',
    'dash.start': 'Kòmanse',
    'dash.review': 'Wè l ankò',
    'dash.done': '✓ Fini',
    'dash.min': 'min',
    'dash.pts_plus': 'pwen',
    'dash.later': 'Pita',
    'dash.finished': 'Mwen fini fòmasyon sa a',
    'dash.close': 'Fèmen',
    'dash.survey': 'Sondaj',
    'dash.consultation': 'Konsiltasyon',
    'dash.participated': '✓ Ou patisipe',
    'dash.see_results': 'Wè rezilta yo',
    'dash.participate': 'Patisipe',
    'dash.comment': 'Kòmantè ou (opsyonèl)',
    'dash.comment_ph': 'Opinyon ou konte…',
    'dash.cancel': 'Anile',
    'dash.send': 'Voye repons mwen',
    'dash.results_live': 'Rezilta an dirèk',
    'dash.loading_s': 'N ap chaje…',
    'dash.no_results': 'Pa gen rezilta chifre pou konsiltasyon sa a.',
    'dash.participations': 'patisipasyon',
    'dash.signed': '✓ Enskri',
    'dash.signup': 'M ap enskri',
    'dash.signed_ok': 'Enskripsyon konfime',
    'dash.markread': 'Make tout kòm li',
    'dash.no_notif': 'Pa gen notifikasyon pou kounye a.',
    'dash.no_modules': 'Fòmasyon yo ap vini talè.',
    'dash.no_consult': 'Pa gen konsiltasyon louvri pou kounye a.',
    'dash.no_vol': 'Pa gen misyon volontarya louvri pou kounye a.',
    'dash.empty_activity': 'Chemen ou ap kòmanse. Fini yon fòmasyon pou ranmase premye pwen ou yo.',
    'dash.verified_contact': 'Kontak verifye',
    'dash.save': 'Anrejistre enfòmasyon mwen',
    'dash.profile_note': 'Konplete pwofil ou ba ou 10 pwen, yon sèl fwa.',
    'dash.saved': 'Enfòmasyon ou anrejistre.',
    'dash.cert_wait': 'Sètifika ou ap tann ou',
    'dash.cert_left': 'Rete <b>{n} pwen</b> anvan ou jwenn sètifika Bwonz lan.',
    'dash.cert_issued': 'Bay li le',
    'dash.cert_view': 'Wè / verifye',
    'dash.cert_share': 'Pataje',
    'dash.welcome_toast': 'Byenveni nan STARFLEX — kont ou verifye',
    'dash.toast_pts': '+{n} pwen',
    'dash.level': 'Nivo',
    'lvl.bronze': 'Bwonz',
    'lvl.argent': 'Ajan',
    'lvl.or': 'Lò',

    /* ── Certificate ─────────────────────────────────────────────────── */
    'cert.h1': 'Verifye yon sètifika',
    'cert.sub': 'Chak Sètifika Nasyonal Patisipasyon Sitwayen gen yon kòd inik, tout enstitisyon oswa patwon ka verifye l.',
    'cert.code': 'Kòd sètifika a',
    'cert.btn': 'Verifye',
    'cert.valid': '✓ Sètifika otantik',
    'cert.revoked': 'Sètifika revoke',
    'cert.dept': 'Depatman :',
    'cert.issued': 'Bay li le',
    'cert.name': 'Sètifika Nasyonal Patisipasyon Sitwayen — STARFLEX',
    'cert.print': 'Enprime',
    'cert.notfound': 'Pa gen sètifika ki koresponn ak kòd sa a. Tcheke sa ou tape a.',
    'cert.enter': 'Mete yon kòd sètifika.',

    /* ── Shared messages ─────────────────────────────────────────────── */
    'msg.busy': 'Yon ti moman…',
    'msg.error': 'Gen yon erè ki rive. Eseye ankò.',
    'msg.name_required': 'Non konplè ou obligatwa.',
    'msg.contact_required': 'Mete yon adrès imel oswa yon nimewo telefòn.',
    'msg.password_short': 'Modpas la dwe gen omwen 6 karaktè.',
    'msg.otp_6': 'Mete 6 chif kòd la.',
    'msg.otp_resent': 'Nou fèk voye yon nouvo kòd.',
    'msg.creating': 'N ap kreye kont lan…',
    'msg.verifying': 'N ap verifye…',
    'msg.connecting': 'N ap konekte…',
    'msg.saving': 'N ap anrejistre…',
    'msg.sending': 'N ap voye…',
    'msg.signing': 'N ap enskri…',
    'msg.choose_answer': 'Chwazi yon repons.',
    'msg.sent_email': 'Nou voye yon kòd 6 chif pa imel',
    'msg.sent_sms': 'Nou voye yon kòd 6 chif pa SMS',
    'msg.to': 'nan'
  }
};

/* ── Engine ───────────────────────────────────────────────────────────── */
function sfLang() {
  try {
    var l = localStorage.getItem('sf_lang');
    if (l && SF_I18N[l]) return l;
  } catch (e) {}
  return 'fr';
}

function sfT(key, vars) {
  var d = SF_I18N[sfLang()] || SF_I18N.fr;
  var s = d[key];
  if (s == null) s = SF_I18N.fr[key];
  if (s == null) return key;
  if (vars) {
    Object.keys(vars).forEach(function (k) {
      s = s.split('{' + k + '}').join(vars[k]);
    });
  }
  return s;
}

function sfSetLang(l) {
  if (!SF_I18N[l]) return;
  try { localStorage.setItem('sf_lang', l); } catch (e) {}
  sfApplyLang();
  // Screens that build their markup in JS re-render themselves.
  if (typeof window.sfOnLangChange === 'function') window.sfOnLangChange();
}

function sfApplyLang() {
  var l = sfLang();
  document.documentElement.lang = l;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.innerHTML = sfT(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    el.setAttribute('placeholder', sfT(el.getAttribute('data-i18n-ph')));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    var v = sfT(el.getAttribute('data-i18n-title'));
    el.setAttribute('title', v);
    el.setAttribute('aria-label', v);
  });
  var t = document.querySelector('[data-i18n-doctitle]');
  if (t) document.title = sfT(t.getAttribute('data-i18n-doctitle'));

  document.querySelectorAll('[data-lang-btn]').forEach(function (b) {
    b.classList.toggle('on', b.getAttribute('data-lang-btn') === l);
  });
}

/* Language switcher markup, injected wherever a .lang-switch placeholder sits. */
function sfMountLangSwitch() {
  document.querySelectorAll('.lang-switch').forEach(function (box) {
    if (box.dataset.mounted) return;
    box.dataset.mounted = '1';
    box.innerHTML =
      '<button type="button" data-lang-btn="fr" onclick="sfSetLang(\'fr\')">FR</button>' +
      '<button type="button" data-lang-btn="ht" onclick="sfSetLang(\'ht\')">KR</button>';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  sfMountLangSwitch();
  sfApplyLang();
});
