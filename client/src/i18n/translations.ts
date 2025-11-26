export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
];

export const translations = {
  en: {
    // App Title
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'AI-powered image text translation',

    // Language Selection Modal
    selectLanguageDescription: 'Choose your preferred language for the interface',
    continue: 'Continue',

    // Main Navigation
    uploadImages: 'Upload Images',
    pages: 'Pages',

    // Upload Zone
    uploadTitle: 'Upload Images for Translation',
    uploadDescription: 'Drag and drop images here or click to browse',
    uploadHint: 'Supports JPEG, PNG, GIF, and WebP formats',
    selectFiles: 'Select Files',

    // Page List
    noPages: 'No pages uploaded yet',
    uploadFirst: 'Upload some images to get started',
    deleteConfirm: 'Are you sure you want to delete this page?',

    translated: 'Translated',

    // Work Panel
    textRegions: 'Text Regions',
    noTextExtracted: 'No text extracted yet',
    uploadAndExtract: 'Upload an image and click "Extract Text" to begin',
    autoTranslate: 'Auto-Translate',
    translating: 'Translating...',

    // Text Region Item
    region: 'Region',
    originalText: 'Original Text',
    translatedText: 'Translated / Replacement Text',
    editTranslation: 'Edit translation',
    removeRegion: 'Remove this region',
    removed: 'Removed',
    undo: 'Undo',
    permanentDelete: 'Delete Forever',
    save: 'Save',
    cancel: 'Cancel',
    modified: 'Modified',

    // API Key Modal
    apiKeyRequired: 'API Key Required',
    apiKeyDescription: 'Please enter your Google Gemini API key to use MonkeyTranslate',
    getApiKey: 'Get your API key from',
    enterApiKey: 'Enter your API key',
    saveApiKey: 'Save API Key',

    // Messages
    extractSuccess: 'Text extracted successfully',
    extractError: 'Failed to extract text. Please check your API key configuration.',
    translateError: 'Failed to translate text. Please try again.',
    generateSuccess: 'Image generated successfully! The preview has been updated.',
    generateError: 'Failed to generate translated image. Please try again.',
    renderTimeout: 'Image rendering timed out. This can happen with large images or complex translations. Please try with a smaller image or fewer text regions.',
    networkError: 'Network error during image rendering. Please check your internet connection and try again.',
    noTranslations: 'No translations to apply',

    // Additional UI
    uploading: 'Uploading...',
    configureApiKey: 'Configure API Key',
    apiConnected: 'API Connected',
    apiKeyInvalid: 'Invalid API Key',
    apiKeyNotConfigured: 'API Key Not Configured',
    apiKeyInstructions: 'You need to configure your Gemini API key before using the app. Click "Configure API Key" above for instructions.',
    // Upload zone
    dropImagesHere: 'Drop images here or click to browse',
    dropImagesHereActive: 'Drop images here...',
    supportedFormats: 'Supports PNG, JPG, GIF, and WEBP (up to 10MB per image)',
    multipleUpload: 'You can upload multiple images at once',

    // Page editor
    extractText: 'Extract Text',
    extracting: 'Extracting...',
    generateTranslatedImage: 'Generate Translated Image',
    generating: 'Generating...',
    downloadRegeneratedImage: 'Download Regenerated Image',
    originalImage: 'Original Image',
    regeneratedImage: 'Regenerated Image',
    noRegeneratedImage: 'No regenerated image yet',
    clickToGenerate: 'Click "Generate Translated Image" to create one',
    generateWithTranslations: 'Generate image with translations',
    noImageAvailable: 'No regenerated image available. Please generate one first.',

    // Page list
    deletePage: 'Delete page',
    expandPages: 'Expand pages',
    collapsePages: 'Collapse pages',

    // API Key Modal
    signInGoogle: 'Sign in with your Google account',
    clickGetApiKey: 'Click "Get API Key" or "Create API Key"',
    copyApiKey: 'Copy your API key',
    createEnvFile: 'Create a file named .env in the project root directory',
    addToEnvFile: 'Add this line to the .env file:',
    restartServer: 'Restart the server',
    apiKeyNote: 'The .env file is already in .gitignore, so your API key will never be committed to version control. Keep your API key private and secure.',
    hideInstructions: 'Hide Instructions',
    showInstructions: 'Show Instructions',
    configureLater: "I'll Configure It Later",

    // Language selector
    selectLanguage: 'Select Language',

    // Support
    supportDevelopment: 'Support Development',

    // Additional missing translations
    translatedTag: 'Translated',
    regions: 'regions',
    uploadError: 'Failed to upload images. Please try again.',
    apiKeyRequiredTitle: 'Gemini API Key Required',
    apiKeyRequiredDescription: 'MonkeyTranslate requires a Gemini API key to function',
    apiKeyRequiredNote: 'This is an open-source application. You need to provide your own Google Gemini API key, which will be stored locally on your machine and never shared.',
    howToGetApiKey: 'How to get your API key:',
    goToGoogleAIStudio: 'Go to',

    // Zoom controls
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    doubleClickToResetZoom: 'Double-click to reset zoom',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'Enter your API key below to get started.',
    enterYourApiKey: 'Enter Your API Key',
    currentApiKey: 'Current API Key:',
    enterNewKeyBelow: 'Enter a new key below to replace it',
    newApiKey: 'New API Key',
    geminiApiKey: 'Gemini API Key',
    getApiKeyButton: 'Get API Key',
    saving: 'Saving...',
    saveAndContinue: 'Save & Continue',
    apiKeyPlaceholder: 'Paste your Gemini API key here...',
    apiKeyEmpty: 'API key cannot be empty',
    apiKeySaveError: 'Failed to save API key or restart server',
    apiKeyDesktopOnly: 'Direct API key saving is only available in the desktop app. Please follow the manual setup instructions.',
    apiKeySaveFailed: 'Failed to save API key: ',
    close: 'Close',
    note: 'Note',
    googleAIStudio: 'Google AI Studio',
    imageTooLarge: 'Image is too large for processing. Please upload a smaller image (recommended: under 4K resolution).',
  },

  fr: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'Traduction de texte d\'image alimentée par l\'IA',

    selectLanguageDescription: 'Choisissez votre langue préférée pour l\'interface',
    continue: 'Continuer',

    uploadImages: 'Télécharger des Images',
    pages: 'Pages',

    uploadTitle: 'Télécharger des Images pour la Traduction',
    uploadDescription: 'Glissez et déposez des images ici ou cliquez pour parcourir',
    uploadHint: 'Supporte les formats JPEG, PNG, GIF et WebP',
    selectFiles: 'Sélectionner des Fichiers',

    noPages: 'Aucune page téléchargée pour le moment',
    uploadFirst: 'Téléchargez quelques images pour commencer',
    deleteConfirm: 'Êtes-vous sûr de vouloir supprimer cette page ?',

    translated: 'Traduit',

    textRegions: 'Régions de Texte',
    noTextExtracted: 'Aucun texte extrait pour le moment',
    uploadAndExtract: 'Téléchargez une image et cliquez sur "Extraire le Texte" pour commencer',
    autoTranslate: 'Traduction Automatique',
    translating: 'Traduction...',

    region: 'Région',
    originalText: 'Texte Original',
    translatedText: 'Texte Traduit / Remplacement',
    editTranslation: 'Modifier la traduction',
    removeRegion: 'Supprimer cette région',
    removed: 'Supprimé',
    undo: 'Annuler',
    permanentDelete: 'Supprimer définitivement',
    save: 'Enregistrer',
    cancel: 'Annuler',
    modified: 'Modifié',

    apiKeyRequired: 'Clé API Requise',
    apiKeyDescription: 'Veuillez entrer votre clé API Google Gemini pour utiliser MonkeyTranslate',
    getApiKey: 'Obtenez votre clé API depuis',
    enterApiKey: 'Entrez votre clé API',
    saveApiKey: 'Enregistrer la Clé API',

    extractSuccess: 'Texte extrait avec succès',
    extractError: 'Échec de l\'extraction du texte. Veuillez vérifier votre configuration de clé API.',
    translateError: 'Échec de la traduction du texte. Veuillez réessayer.',
    generateSuccess: 'Image générée avec succès ! L\'aperçu a été mis à jour.',
    generateError: 'Échec de la génération de l\'image traduite. Veuillez réessayer.',
    renderTimeout: 'Le rendu de l\'image a expiré. Cela peut se produire avec de grandes images ou des traductions complexes. Essayez avec une image plus petite ou moins de régions de texte.',
    networkError: 'Erreur réseau lors du rendu de l\'image. Veuillez vérifier votre connexion Internet et réessayer.',
    noTranslations: 'Aucune traduction à appliquer',

    uploading: 'Téléchargement...',
    configureApiKey: 'Configurer la Clé API',
    apiConnected: 'API Connectée',
    apiKeyInvalid: 'Clé API Invalide',
    apiKeyNotConfigured: 'Clé API Non Configurée',
    apiKeyInstructions: 'Vous devez configurer votre clé API Gemini avant d\'utiliser l\'application. Cliquez sur "Configurer la Clé API" ci-dessus pour les instructions.',
    // Upload zone
    dropImagesHere: 'Déposez les images ici ou cliquez pour parcourir',
    dropImagesHereActive: 'Déposez les images ici...',
    supportedFormats: 'Supporte PNG, JPG, GIF et WEBP (jusqu\'à 10MB par image)',
    multipleUpload: 'Vous pouvez télécharger plusieurs images à la fois',

    // Page editor
    extractText: 'Extraire le Texte',
    extracting: 'Extraction...',
    generateTranslatedImage: 'Générer une Image Traduite',
    generating: 'Génération...',
    downloadRegeneratedImage: 'Télécharger l\'Image Régénérée',
    originalImage: 'Image Originale',
    regeneratedImage: 'Image Régénérée',
    noRegeneratedImage: 'Aucune image régénérée pour le moment',
    clickToGenerate: 'Cliquez sur "Générer une Image Traduite" pour en créer une',
    generateWithTranslations: 'Générer une image avec les traductions',
    noImageAvailable: 'Aucune image régénérée disponible. Veuillez d\'abord en générer une.',

    // Page list
    deletePage: 'Supprimer la page',
    expandPages: 'Développer les pages',
    collapsePages: 'Réduire les pages',

    // API Key Modal
    signInGoogle: 'Connectez-vous avec votre compte Google',
    clickGetApiKey: 'Cliquez sur "Obtenir la Clé API" ou "Créer une Clé API"',
    copyApiKey: 'Copiez votre clé API',
    createEnvFile: 'Créez un fichier nommé .env dans le répertoire racine du projet',
    addToEnvFile: 'Ajoutez cette ligne au fichier .env:',
    restartServer: 'Redémarrez le serveur',
    apiKeyNote: 'Le fichier .env est déjà dans .gitignore, donc votre clé API ne sera jamais envoyée au contrôle de version. Gardez votre clé API privée et sécurisée.',
    hideInstructions: 'Masquer les Instructions',
    showInstructions: 'Afficher les Instructions',
    configureLater: 'Je le configurerai plus tard',

    // Language selector
    selectLanguage: 'Sélectionner la Langue',

    supportDevelopment: 'Soutenir le Développement',

    // Additional missing translations
    translatedTag: 'Traduit',
    regions: 'régions',
    uploadError: 'Échec du téléchargement des images. Veuillez réessayer.',
    apiKeyRequiredTitle: 'Clé API Gemini Requise',
    apiKeyRequiredDescription: 'MonkeyTranslate nécessite une clé API Gemini pour fonctionner',
    apiKeyRequiredNote: 'Il s\'agit d\'une application open-source. Vous devez fournir votre propre clé API Google Gemini, qui sera stockée localement sur votre machine et jamais partagée.',
    howToGetApiKey: 'Comment obtenir votre clé API:',
    goToGoogleAIStudio: 'Aller à',

    // Zoom controls
    zoomIn: 'Zoom avant',
    zoomOut: 'Zoom arrière',
    doubleClickToResetZoom: 'Double-clic pour réinitialiser le zoom',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'Entrez votre clé API ci-dessous pour commencer.',
    enterYourApiKey: 'Entrez Votre Clé API',
    currentApiKey: 'Clé API Actuelle:',
    enterNewKeyBelow: 'Entrez une nouvelle clé ci-dessous pour la remplacer',
    newApiKey: 'Nouvelle Clé API',
    geminiApiKey: 'Clé API Gemini',
    getApiKeyButton: 'Obtenir la Clé API',
    saving: 'Enregistrement...',
    saveAndContinue: 'Enregistrer et Continuer',
    apiKeyPlaceholder: 'Collez votre clé API Gemini ici...',
    apiKeyEmpty: 'La clé API ne peut pas être vide',
    apiKeySaveError: 'Échec de l\'enregistrement de la clé API ou du redémarrage du serveur',
    apiKeyDesktopOnly: 'L\'enregistrement direct de la clé API n\'est disponible que dans l\'application de bureau. Veuillez suivre les instructions de configuration manuelle.',
    apiKeySaveFailed: 'Échec de l\'enregistrement de la clé API: ',
    close: 'Fermer',
    note: 'Note',
    googleAIStudio: 'Google AI Studio',
    imageTooLarge: 'L\'image est trop grande pour être traitée. Veuillez télécharger une image plus petite (recommandé: moins de 4K de résolution).',
  },

  de: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'KI-gestützte Bildtextübersetzung',

    selectLanguage: 'Sprache auswählen',
    selectLanguageDescription: 'Wählen Sie Ihre bevorzugte Sprache für die Benutzeroberfläche',
    continue: 'Weiter',

    uploadImages: 'Bilder hochladen',
    pages: 'Seiten',

    uploadTitle: 'Bilder zum Übersetzen hochladen',
    uploadDescription: 'Bilder hierher ziehen oder klicken zum Durchsuchen',
    uploadHint: 'Unterstützt JPEG, PNG, GIF und WebP Formate',
    selectFiles: 'Dateien auswählen',

    noPages: 'Noch keine Seiten hochgeladen',
    uploadFirst: 'Laden Sie einige Bilder hoch, um zu beginnen',
    deleteConfirm: 'Sind Sie sicher, dass Sie diese Seite löschen möchten?',

    // Page editor
    translated: 'Übersetzt',

    textRegions: 'Textbereiche',
    noTextExtracted: 'Noch kein Text extrahiert',
    uploadAndExtract: 'Laden Sie ein Bild hoch und klicken Sie auf "Text extrahieren", um zu beginnen',
    autoTranslate: 'Auto-Übersetzen',
    translating: 'Übersetze...',

    region: 'Bereich',
    originalText: 'Originaltext',
    translatedText: 'Übersetzter / Ersatztext',
    editTranslation: 'Übersetzung bearbeiten',
    removeRegion: 'Diesen Bereich entfernen',
    removed: 'Entfernt',
    undo: 'Rückgängig',
    permanentDelete: 'Dauerhaft löschen',
    save: 'Speichern',
    cancel: 'Abbrechen',
    modified: 'Geändert',

    apiKeyRequired: 'API-Schlüssel erforderlich',
    apiKeyDescription: 'Bitte geben Sie Ihren Google Gemini API-Schlüssel ein, um MonkeyTranslate zu verwenden',
    getApiKey: 'Holen Sie sich Ihren API-Schlüssel von',
    enterApiKey: 'Geben Sie Ihren API-Schlüssel ein',
    saveApiKey: 'API-Schlüssel speichern',

    extractSuccess: 'Text erfolgreich extrahiert',
    extractError: 'Fehler beim Extrahieren des Textes. Bitte überprüfen Sie Ihre API-Schlüssel-Konfiguration.',
    translateError: 'Fehler beim Übersetzen des Textes. Bitte versuchen Sie es erneut.',
    generateSuccess: 'Bild erfolgreich generiert! Die Vorschau wurde aktualisiert.',
    generateError: 'Fehler beim Generieren des übersetzten Bildes. Bitte versuchen Sie es erneut.',
    renderTimeout: 'Das Rendern des Bildes hat das Zeitlimit überschritten. Dies kann bei großen Bildern oder komplexen Übersetzungen passieren. Versuchen Sie es mit einem kleineren Bild oder weniger Textbereichen.',
    networkError: 'Netzwerkfehler beim Rendern des Bildes. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
    noTranslations: 'Keine Übersetzungen anzuwenden',

    uploading: 'Hochladen...',
    configureApiKey: 'API-Schlüssel konfigurieren',
    apiConnected: 'API verbunden',
    apiKeyInvalid: 'Ungültiger API-Schlüssel',
    apiKeyNotConfigured: 'API-Schlüssel nicht konfiguriert',
    apiKeyInstructions: 'Sie müssen Ihren Gemini API-Schlüssel konfigurieren, bevor Sie die App verwenden können. Klicken Sie oben auf "API-Schlüssel konfigurieren" für Anweisungen.',
    // Upload zone
    dropImagesHere: 'Bilder hier ablegen oder klicken zum Durchsuchen',
    dropImagesHereActive: 'Bilder hier ablegen...',
    supportedFormats: 'Unterstützt PNG, JPG, GIF und WEBP (bis zu 10MB pro Bild)',
    multipleUpload: 'Sie können mehrere Bilder gleichzeitig hochladen',

    // Page editor
    generateTranslatedImage: 'Übersetztes Bild Generieren',
    generating: 'Generiere...',
    downloadRegeneratedImage: 'Regeneriertes Bild Herunterladen',
    originalImage: 'Originalbild',
    regeneratedImage: 'Regeneriertes Bild',
    noRegeneratedImage: 'Noch kein regeneriertes Bild',
    clickToGenerate: 'Klicken Sie auf "Übersetztes Bild generieren", um eines zu erstellen',
    generateWithTranslations: 'Bild mit Übersetzungen generieren',
    noImageAvailable: 'Kein regeneriertes Bild verfügbar. Bitte generieren Sie zuerst eines.',

    // Page list
    deletePage: 'Seite löschen',
    expandPages: 'Seiten erweitern',
    collapsePages: 'Seiten einklappen',

    // API Key Modal
    signInGoogle: 'Mit Ihrem Google-Konto anmelden',
    clickGetApiKey: 'Klicken Sie auf "API-Schlüssel abrufen" oder "API-Schlüssel erstellen"',
    copyApiKey: 'Kopieren Sie Ihren API-Schlüssel',
    createEnvFile: 'Erstellen Sie eine Datei namens .env im Projektstammverzeichnis',
    addToEnvFile: 'Fügen Sie diese Zeile zur .env-Datei hinzu:',
    restartServer: 'Server neu starten',
    apiKeyNote: 'Die .env-Datei ist bereits in .gitignore, sodass Ihr API-Schlüssel niemals an die Versionskontrolle übertragen wird. Halten Sie Ihren API-Schlüssel privat und sicher.',
    hideInstructions: 'Anweisungen ausblenden',
    showInstructions: 'Anweisungen anzeigen',
    configureLater: 'Ich werde es später konfigurieren',

    supportDevelopment: 'Entwicklung unterstützen',

    // Additional missing translations
    translatedTag: 'Übersetzt',
    regions: 'Bereiche',
    uploadError: 'Fehler beim Hochladen der Bilder. Bitte versuchen Sie es erneut.',
    apiKeyRequiredTitle: 'Gemini API-Schlüssel Erforderlich',
    apiKeyRequiredDescription: 'MonkeyTranslate benötigt einen Gemini API-Schlüssel zum Funktionieren',
    apiKeyRequiredNote: 'Dies ist eine Open-Source-Anwendung. Sie müssen Ihren eigenen Google Gemini API-Schlüssel bereitstellen, der lokal auf Ihrem Computer gespeichert und niemals geteilt wird.',
    howToGetApiKey: 'So erhalten Sie Ihren API-Schlüssel:',
    goToGoogleAIStudio: 'Gehen Sie zu',

    // Zoom controls
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    doubleClickToResetZoom: 'Doppelklicken zum Zurücksetzen des Zooms',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'Geben Sie Ihren API-Schlüssel unten ein, um zu beginnen.',
    enterYourApiKey: 'Geben Sie Ihren API-Schlüssel Ein',
    currentApiKey: 'Aktueller API-Schlüssel:',
    enterNewKeyBelow: 'Geben Sie unten einen neuen Schlüssel ein, um ihn zu ersetzen',
    newApiKey: 'Neuer API-Schlüssel',
    geminiApiKey: 'Gemini API-Schlüssel',
    getApiKeyButton: 'API-Schlüssel Abrufen',
    saving: 'Speichern...',
    saveAndContinue: 'Speichern und Fortfahren',
    apiKeyPlaceholder: 'Fügen Sie hier Ihren Gemini API-Schlüssel ein...',
    apiKeyEmpty: 'Der API-Schlüssel darf nicht leer sein',
    apiKeySaveError: 'Fehler beim Speichern des API-Schlüssels oder Neustarten des Servers',
    apiKeyDesktopOnly: 'Das direkte Speichern des API-Schlüssels ist nur in der Desktop-App verfügbar. Bitte folgen Sie den manuellen Einrichtungsanweisungen.',
    apiKeySaveFailed: 'Fehler beim Speichern des API-Schlüssels: ',
    close: 'Schließen',
    note: 'Hinweis',
    googleAIStudio: 'Google AI Studio',
    imageTooLarge: 'Das Bild ist zu groß für die Verarbeitung. Bitte laden Sie ein kleineres Bild hoch (empfohlen: unter 4K Auflösung).',
  },

  it: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'Traduzione di testo immagine alimentata da AI',

    selectLanguageDescription: 'Scegli la tua lingua preferita per l\'interfaccia',
    continue: 'Continua',

    uploadImages: 'Carica Immagini',
    pages: 'Pagine',

    uploadTitle: 'Carica Immagini per la Traduzione',
    uploadDescription: 'Trascina e rilascia le immagini qui o clicca per sfogliare',
    uploadHint: 'Supporta formati JPEG, PNG, GIF e WebP',
    selectFiles: 'Seleziona File',

    noPages: 'Nessuna pagina caricata ancora',
    uploadFirst: 'Carica alcune immagini per iniziare',
    deleteConfirm: 'Sei sicuro di voler eliminare questa pagina?',

    translated: 'Tradotto',

    textRegions: 'Regioni di Testo',
    noTextExtracted: 'Nessun testo estratto ancora',
    uploadAndExtract: 'Carica un\'immagine e clicca su "Estrai Testo" per iniziare',
    autoTranslate: 'Traduzione Automatica',
    translating: 'Traducendo...',

    region: 'Regione',
    originalText: 'Testo Originale',
    translatedText: 'Testo Tradotto / Sostituzione',
    editTranslation: 'Modifica traduzione',
    removeRegion: 'Rimuovi questa regione',
    removed: 'Rimosso',
    undo: 'Annulla',
    permanentDelete: 'Elimina per sempre',
    save: 'Salva',
    cancel: 'Annulla',
    modified: 'Modificato',

    apiKeyRequired: 'Chiave API Richiesta',
    apiKeyDescription: 'Inserisci la tua chiave API Google Gemini per usare MonkeyTranslate',
    getApiKey: 'Ottieni la tua chiave API da',
    enterApiKey: 'Inserisci la tua chiave API',
    saveApiKey: 'Salva Chiave API',

    extractSuccess: 'Testo estratto con successo',
    extractError: 'Errore nell\'estrazione del testo. Controlla la configurazione della chiave API.',
    translateError: 'Errore nella traduzione del testo. Riprova.',
    generateSuccess: 'Immagine generata con successo! L\'anteprima è stata aggiornata.',
    generateError: 'Errore nella generazione dell\'immagine tradotta. Riprova.',
    renderTimeout: 'Il rendering dell\'immagine è scaduto. Questo può accadere con immagini grandi o traduzioni complesse. Prova con un\'immagine più piccola o meno regioni di testo.',
    networkError: 'Errore di rete durante il rendering dell\'immagine. Controlla la tua connessione Internet e riprova.',
    noTranslations: 'Nessuna traduzione da applicare',

    uploading: 'Caricamento...',
    configureApiKey: 'Configura Chiave API',
    apiConnected: 'API Connessa',
    apiKeyInvalid: 'Chiave API Non Valida',
    apiKeyNotConfigured: 'Chiave API Non Configurata',
    apiKeyInstructions: 'Devi configurare la tua chiave API Gemini prima di usare l\'app. Clicca su "Configura Chiave API" sopra per le istruzioni.',

    // Upload zone
    dropImagesHere: 'Trascina le immagini qui o clicca per sfogliare',
    dropImagesHereActive: 'Trascina le immagini qui...',
    supportedFormats: 'Supporta PNG, JPG, GIF e WEBP (fino a 10MB per immagine)',
    multipleUpload: 'Puoi caricare più immagini contemporaneamente',

    // Page editor
    extractText: 'Estrai Testo',
    extracting: 'Estraendo...',
    generateTranslatedImage: 'Genera Immagine Tradotta',
    generating: 'Generando...',
    downloadRegeneratedImage: 'Scarica Immagine Rigenerata',
    originalImage: 'Immagine Originale',
    regeneratedImage: 'Immagine Rigenerata',
    noRegeneratedImage: 'Nessuna immagine rigenerata ancora',
    clickToGenerate: 'Clicca su "Genera Immagine Tradotta" per crearne una',
    generateWithTranslations: 'Genera immagine con traduzioni',
    noImageAvailable: 'Nessuna immagine rigenerata disponibile. Per favore generane prima una.',

    // Page list
    deletePage: 'Elimina pagina',
    expandPages: 'Espandi pagine',
    collapsePages: 'Comprimi pagine',

    // API Key Modal
    signInGoogle: 'Accedi con il tuo account Google',
    clickGetApiKey: 'Clicca su "Ottieni Chiave API" o "Crea Chiave API"',
    copyApiKey: 'Copia la tua chiave API',
    createEnvFile: 'Crea un file chiamato .env nella directory radice del progetto',
    addToEnvFile: 'Aggiungi questa riga al file .env:',
    restartServer: 'Riavvia il server',
    apiKeyNote: 'Il file .env è già in .gitignore, quindi la tua chiave API non sarà mai inviata al controllo versione. Mantieni la tua chiave API privata e sicura.',
    hideInstructions: 'Nascondi Istruzioni',
    showInstructions: 'Mostra Istruzioni',
    configureLater: 'Lo configurerò più tardi',
    selectLanguage: 'Seleziona Lingua',

    supportDevelopment: 'Supporta lo Sviluppo',

    // Additional missing translations
    translatedTag: 'Tradotto',
    regions: 'regioni',
    uploadError: 'Errore nel caricamento delle immagini. Riprova.',
    apiKeyRequiredTitle: 'Chiave API Gemini Richiesta',
    apiKeyRequiredDescription: 'MonkeyTranslate richiede una chiave API Gemini per funzionare',
    apiKeyRequiredNote: 'Questa è un\'applicazione open-source. Devi fornire la tua chiave API Google Gemini, che verrà memorizzata localmente sul tuo computer e mai condivisa.',
    howToGetApiKey: 'Come ottenere la tua chiave API:',
    goToGoogleAIStudio: 'Vai a',

    // Zoom controls
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    doubleClickToResetZoom: 'Doppio clic per reimpostare lo zoom',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'Inserisci la tua chiave API qui sotto per iniziare.',
    enterYourApiKey: 'Inserisci La Tua Chiave API',
    currentApiKey: 'Chiave API Corrente:',
    enterNewKeyBelow: 'Inserisci una nuova chiave qui sotto per sostituirla',
    newApiKey: 'Nuova Chiave API',
    geminiApiKey: 'Chiave API Gemini',
    getApiKeyButton: 'Ottieni Chiave API',
    saving: 'Salvataggio...',
    saveAndContinue: 'Salva e Continua',
    apiKeyPlaceholder: 'Incolla qui la tua chiave API Gemini...',
    apiKeyEmpty: 'La chiave API non può essere vuota',
    apiKeySaveError: 'Impossibile salvare la chiave API o riavviare il server',
    apiKeyDesktopOnly: 'Il salvataggio diretto della chiave API è disponibile solo nell\'app desktop. Si prega di seguire le istruzioni di configurazione manuale.',
    apiKeySaveFailed: 'Impossibile salvare la chiave API: ',
    close: 'Chiudi',
    note: 'Nota',
    googleAIStudio: 'Google AI Studio',
    imageTooLarge: 'L\'immagine è troppo grande per essere elaborata. Si prega di caricare un\'immagine più piccola (consigliato: meno di 4K di risoluzione).',
  },

  ko: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'AI 기반 이미지 텍스트 번역',

    selectLanguageDescription: '인터페이스 언어를 선택하세요',
    continue: '계속',

    uploadImages: '이미지 업로드',
    pages: '페이지',

    uploadTitle: '번역할 이미지 업로드',
    uploadDescription: '이미지를 여기에 드래그하거나 클릭하여 찾아보기',
    uploadHint: 'JPEG, PNG, GIF, WebP 형식 지원',
    selectFiles: '파일 선택',

    noPages: '아직 업로드된 페이지가 없습니다',
    uploadFirst: '시작하려면 이미지를 업로드하세요',
    deleteConfirm: '이 페이지를 삭제하시겠습니까?',

    translated: '번역됨',

    textRegions: '텍스트 영역',
    noTextExtracted: '아직 추출된 텍스트가 없습니다',
    uploadAndExtract: '이미지를 업로드하고 "텍스트 추출"을 클릭하여 시작하세요',
    autoTranslate: '자동 번역',
    translating: '번역 중...',

    region: '영역',
    originalText: '원본 텍스트',
    translatedText: '번역된/대체 텍스트',
    editTranslation: '번역 편집',
    removeRegion: '이 영역 제거',
    removed: '제거됨',
    undo: '실행 취소',
    permanentDelete: '영구 삭제',
    save: '저장',
    cancel: '취소',
    modified: '수정됨',

    apiKeyRequired: 'API 키 필요',
    apiKeyDescription: 'MonkeyTranslate를 사용하려면 Google Gemini API 키를 입력하세요',
    getApiKey: 'API 키 받기:',
    enterApiKey: 'API 키 입력',
    saveApiKey: 'API 키 저장',

    extractSuccess: '텍스트 추출 성공',
    extractError: '텍스트 추출 실패. API 키 설정을 확인하세요.',
    translateError: '텍스트 번역 실패. 다시 시도하세요.',
    generateSuccess: '이미지 생성 성공! 미리보기가 업데이트되었습니다.',
    generateError: '번역된 이미지 생성 실패. 다시 시도하세요.',
    renderTimeout: '이미지 렌더링이 시간 초과되었습니다. 큰 이미지나 복잡한 번역에서 발생할 수 있습니다. 더 작은 이미지나 더 적은 텍스트 영역으로 시도해보세요.',
    networkError: '이미지 렌더링 중 네트워크 오류가 발생했습니다. 인터넷 연결을 확인하고 다시 시도하세요.',
    noTranslations: '적용할 번역이 없습니다',

    uploading: '업로드 중...',
    configureApiKey: 'API 키 구성',
    apiConnected: 'API 연결됨',
    apiKeyInvalid: '잘못된 API 키',
    apiKeyNotConfigured: 'API 키가 구성되지 않음',
    apiKeyInstructions: '앱을 사용하기 전에 Gemini API 키를 구성해야 합니다. 지침을 보려면 위의 "API 키 구성"을 클릭하세요.',

    // Upload zone
    dropImagesHere: '이미지를 여기에 드롭하거나 클릭하여 찾아보기',
    dropImagesHereActive: '이미지를 여기에 드롭...',
    supportedFormats: 'PNG, JPG, GIF, WEBP 지원 (이미지당 최대 10MB)',
    multipleUpload: '여러 이미지를 한 번에 업로드할 수 있습니다',

    // Page editor
    extractText: '텍스트 추출',
    extracting: '추출 중...',
    generateTranslatedImage: '번역된 이미지 생성',
    generating: '생성 중...',
    downloadRegeneratedImage: '재생성된 이미지 다운로드',
    originalImage: '원본 이미지',
    regeneratedImage: '재생성된 이미지',
    noRegeneratedImage: '아직 재생성된 이미지가 없습니다',
    clickToGenerate: '"번역된 이미지 생성"을 클릭하여 생성',
    generateWithTranslations: '번역이 포함된 이미지 생성',
    noImageAvailable: '재생성된 이미지가 없습니다. 먼저 생성해주세요.',

    // Page list
    deletePage: '페이지 삭제',
    expandPages: '페이지 확장',
    collapsePages: '페이지 축소',

    // API Key Modal
    signInGoogle: 'Google 계정으로 로그인',
    clickGetApiKey: '"API 키 가져오기" 또는 "API 키 생성"을 클릭',
    copyApiKey: 'API 키 복사',
    createEnvFile: '프로젝트 루트 디렉토리에 .env라는 파일 생성',
    addToEnvFile: '.env 파일에 이 줄 추가:',
    restartServer: '서버 재시작',
    apiKeyNote: '.env 파일은 이미 .gitignore에 있으므로 API 키가 버전 관리에 커밋되지 않습니다. API 키를 비공개로 안전하게 보관하세요.',
    hideInstructions: '지침 숨기기',
    showInstructions: '지침 표시',
    configureLater: '나중에 구성하겠습니다',
    selectLanguage: '언어 선택',

    supportDevelopment: '개발 지원',

    // Additional missing translations
    translatedTag: '번역됨',
    regions: '영역',
    uploadError: '이미지 업로드 실패. 다시 시도하세요.',
    apiKeyRequiredTitle: 'Gemini API 키 필요',
    apiKeyRequiredDescription: 'MonkeyTranslate는 작동하려면 Gemini API 키가 필요합니다',
    apiKeyRequiredNote: '이것은 오픈 소스 애플리케이션입니다. 자신의 Google Gemini API 키를 제공해야 하며, 이 키는 로컬 머신에 저장되며 공유되지 않습니다.',
    howToGetApiKey: 'API 키 받는 방법:',
    goToGoogleAIStudio: '로 이동',

    // Zoom controls
    zoomIn: '확대',
    zoomOut: '축소',
    doubleClickToResetZoom: '더블 클릭하여 확대/축소 재설정',

    // API Key Modal - Electron specific
    enterApiKeyBelow: '시작하려면 아래에 API 키를 입력하세요.',
    enterYourApiKey: 'API 키 입력',
    currentApiKey: '현재 API 키:',
    enterNewKeyBelow: '아래에 새 키를 입력하여 교체하세요',
    newApiKey: '새 API 키',
    geminiApiKey: 'Gemini API 키',
    getApiKeyButton: 'API 키 가져오기',
    saving: '저장 중...',
    saveAndContinue: '저장하고 계속',
    apiKeyPlaceholder: 'Gemini API 키를 여기에 붙여넣으세요...',
    apiKeyEmpty: 'API 키는 비워둘 수 없습니다',
    apiKeySaveError: 'API 키 저장 또는 서버 재시작 실패',
    apiKeyDesktopOnly: 'API 키 직접 저장은 데스크톱 앱에서만 사용할 수 있습니다. 수동 설정 지침을 따르세요.',
    apiKeySaveFailed: 'API 키 저장 실패: ',
    close: '닫기',
    note: '참고',
    googleAIStudio: 'Google AI Studio',
    imageTooLarge: '이미지가 너무 커서 처리할 수 없습니다. 더 작은 이미지를 업로드하세요 (권장: 4K 해상도 미만).',
  },

  zh: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'AI驱动的图像文本翻译',

    selectLanguageDescription: '选择您的界面语言',
    continue: '继续',

    uploadImages: '上传图片',
    pages: '页面',

    uploadTitle: '上传图片进行翻译',
    uploadDescription: '将图片拖放到此处或点击浏览',
    uploadHint: '支持JPEG、PNG、GIF和WebP格式',
    selectFiles: '选择文件',

    noPages: '还没有上传的页面',
    uploadFirst: '上传一些图片开始使用',
    deleteConfirm: '您确定要删除此页面吗？',

    translated: '已翻译',

    textRegions: '文本区域',
    noTextExtracted: '还没有提取文本',
    uploadAndExtract: '上传图片并点击"提取文本"开始',
    autoTranslate: '自动翻译',
    translating: '翻译中...',

    region: '区域',
    originalText: '原始文本',
    translatedText: '翻译/替换文本',
    editTranslation: '编辑翻译',
    removeRegion: '删除此区域',
    removed: '已移除',
    undo: '撤销',
    permanentDelete: '永久删除',
    save: '保存',
    cancel: '取消',
    modified: '已修改',

    apiKeyRequired: '需要API密钥',
    apiKeyDescription: '请输入您的Google Gemini API密钥以使用MonkeyTranslate',
    getApiKey: '获取API密钥：',
    enterApiKey: '输入您的API密钥',
    saveApiKey: '保存API密钥',

    extractSuccess: '文本提取成功',
    extractError: '文本提取失败。请检查您的API密钥配置。',
    translateError: '文本翻译失败。请重试。',
    generateSuccess: '图片生成成功！预览已更新。',
    generateError: '翻译图片生成失败。请重试。',
    renderTimeout: '图像渲染超时。这可能发生在大型图像或复杂翻译时。请尝试使用较小的图像或较少的文本区域。',
    networkError: '图像渲染期间发生网络错误。请检查您的互联网连接并重试。',
    noTranslations: '没有要应用的翻译',

    uploading: '上传中...',
    configureApiKey: '配置API密钥',
    apiConnected: 'API已连接',
    apiKeyInvalid: '无效的API密钥',
    apiKeyNotConfigured: 'API密钥未配置',
    apiKeyInstructions: '使用应用前需要配置您的Gemini API密钥。点击上方"配置API密钥"查看说明。',

    // Upload zone
    dropImagesHere: '将图片拖放到此处或点击浏览',
    dropImagesHereActive: '将图片拖放到此处...',
    supportedFormats: '支持PNG、JPG、GIF和WEBP（每张图片最大10MB）',
    multipleUpload: '您可以一次上传多张图片',

    // Page editor
    extractText: '提取文本',
    extracting: '提取中...',
    generateTranslatedImage: '生成翻译图片',
    generating: '生成中...',
    downloadRegeneratedImage: '下载重新生成的图片',
    originalImage: '原始图片',
    regeneratedImage: '重新生成的图片',
    noRegeneratedImage: '还没有重新生成的图片',
    clickToGenerate: '点击"生成翻译图片"来创建',
    generateWithTranslations: '生成带翻译的图片',
    noImageAvailable: '没有重新生成的图片可用。请先生成一个。',

    // Page list
    deletePage: '删除页面',
    expandPages: '展开页面',
    collapsePages: '折叠页面',

    // API Key Modal
    signInGoogle: '使用您的Google账户登录',
    clickGetApiKey: '点击"获取API密钥"或"创建API密钥"',
    copyApiKey: '复制您的API密钥',
    createEnvFile: '在项目根目录创建名为.env的文件',
    addToEnvFile: '将此行添加到.env文件：',
    restartServer: '重启服务器',
    apiKeyNote: '.env文件已在.gitignore中，因此您的API密钥永远不会提交到版本控制。请保持您的API密钥私密和安全。',
    hideInstructions: '隐藏说明',
    showInstructions: '显示说明',
    configureLater: '稍后配置',
    selectLanguage: '选择语言',

    supportDevelopment: '支持开发',

    // Additional missing translations
    translatedTag: '已翻译',
    regions: '区域',
    uploadError: '上传图片失败。请重试。',
    apiKeyRequiredTitle: '需要Gemini API密钥',
    apiKeyRequiredDescription: 'MonkeyTranslate需要Gemini API密钥才能运行',
    apiKeyRequiredNote: '这是一个开源应用程序。您需要提供自己的Google Gemini API密钥，该密钥将存储在您的本地机器上，永远不会被共享。',
    howToGetApiKey: '如何获取您的API密钥：',
    goToGoogleAIStudio: '前往',

    // Zoom controls
    zoomIn: '放大',
    zoomOut: '缩小',
    doubleClickToResetZoom: '双击重置缩放',

    // API Key Modal - Electron specific
    enterApiKeyBelow: '在下方输入您的API密钥以开始使用。',
    enterYourApiKey: '输入您的API密钥',
    currentApiKey: '当前API密钥:',
    enterNewKeyBelow: '在下方输入新密钥以替换',
    newApiKey: '新API密钥',
    geminiApiKey: 'Gemini API密钥',
    getApiKeyButton: '获取API密钥',
    saving: '保存中...',
    saveAndContinue: '保存并继续',
    apiKeyPlaceholder: '在此处粘贴您的Gemini API密钥...',
    apiKeyEmpty: 'API密钥不能为空',
    apiKeySaveError: '保存API密钥或重启服务器失败',
    apiKeyDesktopOnly: '直接保存API密钥仅在桌面应用程序中可用。请按照手动设置说明操作。',
    apiKeySaveFailed: '保存API密钥失败: ',
    close: '关闭',
    note: '注意',
    googleAIStudio: 'Google AI Studio',
    imageTooLarge: '图像太大，无法处理。请上传较小的图像（推荐：4K分辨率以下）。',
  },

  vi: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'Dịch văn bản hình ảnh bằng AI',

    selectLanguageDescription: 'Chọn ngôn ngữ ưa thích cho giao diện',
    continue: 'Tiếp tục',

    uploadImages: 'Tải lên hình ảnh',
    pages: 'Trang',

    uploadTitle: 'Tải lên hình ảnh để dịch',
    uploadDescription: 'Kéo và thả hình ảnh vào đây hoặc nhấp để duyệt',
    uploadHint: 'Hỗ trợ định dạng JPEG, PNG, GIF và WebP',
    selectFiles: 'Chọn tệp',

    noPages: 'Chưa có trang nào được tải lên',
    uploadFirst: 'Tải lên một số hình ảnh để bắt đầu',
    deleteConfirm: 'Bạn có chắc chắn muốn xóa trang này không?',

    translated: 'Đã dịch',

    textRegions: 'Vùng văn bản',
    noTextExtracted: 'Chưa trích xuất văn bản nào',
    uploadAndExtract: 'Tải lên hình ảnh và nhấp "Trích xuất văn bản" để bắt đầu',
    autoTranslate: 'Dịch tự động',
    translating: 'Đang dịch...',

    region: 'Vùng',
    originalText: 'Văn bản gốc',
    translatedText: 'Văn bản đã dịch / Thay thế',
    editTranslation: 'Chỉnh sửa bản dịch',
    removeRegion: 'Xóa vùng này',
    removed: 'Đã xóa',
    undo: 'Hoàn tác',
    permanentDelete: 'Xóa vĩnh viễn',
    save: 'Lưu',
    cancel: 'Hủy',
    modified: 'Đã sửa đổi',

    apiKeyRequired: 'Cần khóa API',
    apiKeyDescription: 'Vui lòng nhập khóa API Google Gemini của bạn để sử dụng MonkeyTranslate',
    getApiKey: 'Lấy khóa API của bạn từ',
    enterApiKey: 'Nhập khóa API của bạn',
    saveApiKey: 'Lưu khóa API',

    extractSuccess: 'Trích xuất văn bản thành công',
    extractError: 'Không thể trích xuất văn bản. Vui lòng kiểm tra cấu hình khóa API.',
    translateError: 'Không thể dịch văn bản. Vui lòng thử lại.',
    generateSuccess: 'Tạo hình ảnh thành công! Bản xem trước đã được cập nhật.',
    generateError: 'Không thể tạo hình ảnh đã dịch. Vui lòng thử lại.',
    renderTimeout: 'Quá trình render hình ảnh đã hết thời gian chờ. Điều này có thể xảy ra với hình ảnh lớn hoặc bản dịch phức tạp. Vui lòng thử với hình ảnh nhỏ hơn hoặc ít vùng văn bản hơn.',
    networkError: 'Lỗi mạng trong quá trình render hình ảnh. Vui lòng kiểm tra kết nối internet và thử lại.',
    noTranslations: 'Không có bản dịch nào để áp dụng',

    uploading: 'Đang tải lên...',
    configureApiKey: 'Cấu hình khóa API',
    apiConnected: 'API đã kết nối',
    apiKeyInvalid: 'Khóa API không hợp lệ',
    apiKeyNotConfigured: 'Khóa API chưa được cấu hình',
    apiKeyInstructions: 'Bạn cần cấu hình khóa API Gemini trước khi sử dụng ứng dụng. Nhấp "Cấu hình khóa API" ở trên để xem hướng dẫn.',

    // Upload zone
    dropImagesHere: 'Thả hình ảnh vào đây hoặc nhấp để duyệt',
    dropImagesHereActive: 'Thả hình ảnh vào đây...',
    supportedFormats: 'Hỗ trợ PNG, JPG, GIF và WEBP (tối đa 10MB mỗi hình)',
    multipleUpload: 'Bạn có thể tải lên nhiều hình ảnh cùng lúc',

    // Page editor
    extractText: 'Trích xuất văn bản',
    extracting: 'Đang trích xuất...',
    generateTranslatedImage: 'Tạo hình ảnh đã dịch',
    generating: 'Đang tạo...',
    downloadRegeneratedImage: 'Tải xuống hình ảnh được tạo lại',
    originalImage: 'Hình ảnh gốc',
    regeneratedImage: 'Hình ảnh được tạo lại',
    noRegeneratedImage: 'Chưa có hình ảnh được tạo lại',
    clickToGenerate: 'Nhấp "Tạo hình ảnh đã dịch" để tạo',
    generateWithTranslations: 'Tạo hình ảnh với bản dịch',
    noImageAvailable: 'Không có hình ảnh được tạo lại. Vui lòng tạo một cái trước.',

    // Page list
    deletePage: 'Xóa trang',
    expandPages: 'Mở rộng trang',
    collapsePages: 'Thu gọn trang',

    // API Key Modal
    signInGoogle: 'Đăng nhập bằng tài khoản Google của bạn',
    clickGetApiKey: 'Nhấp "Lấy khóa API" hoặc "Tạo khóa API"',
    copyApiKey: 'Sao chép khóa API của bạn',
    createEnvFile: 'Tạo tệp có tên .env trong thư mục gốc dự án',
    addToEnvFile: 'Thêm dòng này vào tệp .env:',
    restartServer: 'Khởi động lại máy chủ',
    apiKeyNote: 'Tệp .env đã có trong .gitignore, vì vậy khóa API của bạn sẽ không bao giờ được commit vào kiểm soát phiên bản. Giữ khóa API của bạn riêng tư và an toàn.',
    hideInstructions: 'Ẩn hướng dẫn',
    showInstructions: 'Hiển thị hướng dẫn',
    configureLater: 'Tôi sẽ cấu hình sau',
    selectLanguage: 'Chọn ngôn ngữ',

    supportDevelopment: 'Hỗ trợ phát triển',

    // Additional missing translations
    translatedTag: 'Đã dịch',
    regions: 'vùng',
    uploadError: 'Không thể tải lên hình ảnh. Vui lòng thử lại.',
    apiKeyRequiredTitle: 'Cần Khóa API Gemini',
    apiKeyRequiredDescription: 'MonkeyTranslate yêu cầu khóa API Gemini để hoạt động',
    apiKeyRequiredNote: 'Đây là ứng dụng mã nguồn mở. Bạn cần cung cấp khóa API Google Gemini của riêng mình, sẽ được lưu trữ cục bộ trên máy của bạn và không bao giờ được chia sẻ.',
    howToGetApiKey: 'Cách lấy khóa API của bạn:',
    goToGoogleAIStudio: 'Đi tới',

    // Zoom controls
    zoomIn: 'Phóng to',
    zoomOut: 'Thu nhỏ',
    doubleClickToResetZoom: 'Nhấp đúp để đặt lại thu phóng',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'Nhập khóa API của bạn bên dưới để bắt đầu.',
    enterYourApiKey: 'Nhập Khóa API Của Bạn',
    currentApiKey: 'Khóa API Hiện Tại:',
    enterNewKeyBelow: 'Nhập khóa mới bên dưới để thay thế',
    newApiKey: 'Khóa API Mới',
    geminiApiKey: 'Khóa API Gemini',
    getApiKeyButton: 'Lấy Khóa API',
    saving: 'Đang lưu...',
    saveAndContinue: 'Lưu và Tiếp Tục',
    apiKeyPlaceholder: 'Dán khóa API Gemini của bạn vào đây...',
    apiKeyEmpty: 'Khóa API không thể để trống',
    apiKeySaveError: 'Không thể lưu khóa API hoặc khởi động lại máy chủ',
    apiKeyDesktopOnly: 'Lưu khóa API trực tiếp chỉ có sẵn trong ứng dụng desktop. Vui lòng làm theo hướng dẫn thiết lập thủ công.',
    apiKeySaveFailed: 'Không thể lưu khóa API: ',
    close: 'Đóng',
    note: 'Lưu ý',
    googleAIStudio: 'Google AI Studio',
    imageTooLarge: 'Hình ảnh quá lớn để xử lý. Vui lòng tải lên hình ảnh nhỏ hơn (khuyến nghị: dưới độ phân giải 4K).',
  },
};

export type TranslationKey = keyof typeof translations.en;
export type LanguageCode = keyof typeof translations;
