export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
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
    noTranslations: 'No translations to apply',

    // Additional UI
    uploading: 'Uploading...',
    configureApiKey: 'Configure API Key',
    apiConnected: 'API Connected',
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
  },

  es: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'Traducción de texto en imágenes con IA',

    selectLanguageDescription: 'Elige tu idioma preferido para la interfaz',
    continue: 'Continuar',

    uploadImages: 'Subir Imágenes',
    pages: 'Páginas',

    uploadTitle: 'Subir Imágenes para Traducir',
    uploadDescription: 'Arrastra y suelta imágenes aquí o haz clic para explorar',
    uploadHint: 'Soporta formatos JPEG, PNG, GIF y WebP',
    selectFiles: 'Seleccionar Archivos',

    noPages: 'No hay páginas subidas aún',
    uploadFirst: 'Sube algunas imágenes para comenzar',
    deleteConfirm: '¿Estás seguro de que quieres eliminar esta página?',

    translated: 'Traducido',

    textRegions: 'Regiones de Texto',
    noTextExtracted: 'No se ha extraído texto aún',
    uploadAndExtract: 'Sube una imagen y haz clic en "Extraer Texto" para comenzar',
    autoTranslate: 'Auto-Traducir',
    translating: 'Traduciendo...',

    region: 'Región',
    originalText: 'Texto Original',
    translatedText: 'Texto Traducido / Reemplazo',
    editTranslation: 'Editar traducción',
    removeRegion: 'Eliminar esta región',
    save: 'Guardar',
    cancel: 'Cancelar',
    modified: 'Modificado',

    apiKeyRequired: 'Clave API Requerida',
    apiKeyDescription: 'Por favor ingresa tu clave API de Google Gemini para usar MonkeyTranslate',
    getApiKey: 'Obtén tu clave API desde',
    enterApiKey: 'Ingresa tu clave API',
    saveApiKey: 'Guardar Clave API',

    extractSuccess: 'Texto extraído exitosamente',
    extractError: 'Error al extraer texto. Por favor verifica tu configuración de clave API.',
    translateError: 'Error al traducir texto. Por favor inténtalo de nuevo.',
    generateSuccess: '¡Imagen generada exitosamente! La vista previa ha sido actualizada.',
    generateError: 'Error al generar imagen traducida. Por favor inténtalo de nuevo.',
    noTranslations: 'No hay traducciones para aplicar',

    uploading: 'Subiendo...',
    configureApiKey: 'Configurar Clave API',
    apiConnected: 'API Conectada',
    apiKeyNotConfigured: 'Clave API No Configurada',
    apiKeyInstructions: 'Necesitas configurar tu clave API de Gemini antes de usar la aplicación. Haz clic en "Configurar Clave API" arriba para instrucciones.',
    // Upload zone
    dropImagesHere: 'Suelta imágenes aquí o haz clic para explorar',
    dropImagesHereActive: 'Suelta las imágenes aquí...',
    supportedFormats: 'Soporta PNG, JPG, GIF y WEBP (hasta 10MB por imagen)',
    multipleUpload: 'Puedes subir múltiples imágenes a la vez',

    // Page editor
    extractText: 'Extraer Texto',
    extracting: 'Extrayendo...',
    generateTranslatedImage: 'Generar Imagen Traducida',
    generating: 'Generando...',
    downloadRegeneratedImage: 'Descargar Imagen Regenerada',
    originalImage: 'Imagen Original',
    regeneratedImage: 'Imagen Regenerada',
    noRegeneratedImage: 'Aún no hay imagen regenerada',
    clickToGenerate: 'Haz clic en "Generar Imagen Traducida" para crear una',
    generateWithTranslations: 'Generar imagen con traducciones',
    noImageAvailable: 'No hay imagen regenerada disponible. Por favor genera una primero.',

    // Page list
    deletePage: 'Eliminar página',
    expandPages: 'Expandir páginas',
    collapsePages: 'Contraer páginas',

    // API Key Modal
    signInGoogle: 'Inicia sesión con tu cuenta de Google',
    clickGetApiKey: 'Haz clic en "Obtener Clave API" o "Crear Clave API"',
    copyApiKey: 'Copia tu clave API',
    createEnvFile: 'Crea un archivo llamado .env en el directorio raíz del proyecto',
    addToEnvFile: 'Agrega esta línea al archivo .env:',
    restartServer: 'Reinicia el servidor',
    apiKeyNote: 'El archivo .env ya está en .gitignore, por lo que tu clave API nunca se enviará al control de versiones. Mantén tu clave API privada y segura.',
    hideInstructions: 'Ocultar Instrucciones',
    showInstructions: 'Mostrar Instrucciones',
    configureLater: 'Lo configuraré más tarde',

    // Language selector
    selectLanguage: 'Seleccionar Idioma',

    supportDevelopment: 'Apoyar el Desarrollo',

    // Additional missing translations
    translatedTag: 'Traducido',
    regions: 'regiones',
    uploadError: 'Error al subir imágenes. Por favor inténtalo de nuevo.',
    apiKeyRequiredTitle: 'Clave API de Gemini Requerida',
    apiKeyRequiredDescription: 'MonkeyTranslate requiere una clave API de Gemini para funcionar',
    apiKeyRequiredNote: 'Esta es una aplicación de código abierto. Necesitas proporcionar tu propia clave API de Google Gemini, que se almacenará localmente en tu máquina y nunca se compartirá.',
    howToGetApiKey: 'Cómo obtener tu clave API:',
    goToGoogleAIStudio: 'Ir a',

    // Zoom controls
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    doubleClickToResetZoom: 'Doble clic para restablecer el zoom',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'Ingrese su clave API a continuación para comenzar.',
    enterYourApiKey: 'Ingrese Su Clave API',
    currentApiKey: 'Clave API Actual:',
    enterNewKeyBelow: 'Ingrese una nueva clave a continuación para reemplazarla',
    newApiKey: 'Nueva Clave API',
    geminiApiKey: 'Clave API de Gemini',
    getApiKeyButton: 'Obtener Clave API',
    saving: 'Guardando...',
    saveAndContinue: 'Guardar y Continuar',
    apiKeyPlaceholder: 'Pegue su clave API de Gemini aquí...',
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
    noTranslations: 'Aucune traduction à appliquer',

    uploading: 'Téléchargement...',
    configureApiKey: 'Configurer la Clé API',
    apiConnected: 'API Connectée',
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
    noTranslations: 'Keine Übersetzungen anzuwenden',

    uploading: 'Hochladen...',
    configureApiKey: 'API-Schlüssel konfigurieren',
    apiConnected: 'API verbunden',
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
    noTranslations: 'Nessuna traduzione da applicare',

    uploading: 'Caricamento...',
    configureApiKey: 'Configura Chiave API',
    apiConnected: 'API Connessa',
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
  },

  pt: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'Tradução de texto de imagem alimentada por IA',

    selectLanguageDescription: 'Escolha seu idioma preferido para a interface',
    continue: 'Continuar',

    uploadImages: 'Enviar Imagens',
    pages: 'Páginas',

    uploadTitle: 'Enviar Imagens para Tradução',
    uploadDescription: 'Arraste e solte imagens aqui ou clique para navegar',
    uploadHint: 'Suporta formatos JPEG, PNG, GIF e WebP',
    selectFiles: 'Selecionar Arquivos',

    noPages: 'Nenhuma página enviada ainda',
    uploadFirst: 'Envie algumas imagens para começar',
    deleteConfirm: 'Tem certeza de que deseja excluir esta página?',

    translated: 'Traduzido',

    textRegions: 'Regiões de Texto',
    noTextExtracted: 'Nenhum texto extraído ainda',
    uploadAndExtract: 'Envie uma imagem e clique em "Extrair Texto" para começar',
    autoTranslate: 'Tradução Automática',
    translating: 'Traduzindo...',

    region: 'Região',
    originalText: 'Texto Original',
    translatedText: 'Texto Traduzido / Substituição',
    editTranslation: 'Editar tradução',
    removeRegion: 'Remover esta região',
    save: 'Salvar',
    cancel: 'Cancelar',
    modified: 'Modificado',

    apiKeyRequired: 'Chave API Necessária',
    apiKeyDescription: 'Digite sua chave API do Google Gemini para usar o MonkeyTranslate',
    getApiKey: 'Obtenha sua chave API de',
    enterApiKey: 'Digite sua chave API',
    saveApiKey: 'Salvar Chave API',

    extractSuccess: 'Texto extraído com sucesso',
    extractError: 'Falha ao extrair texto. Verifique sua configuração de chave API.',
    translateError: 'Falha ao traduzir texto. Tente novamente.',
    generateSuccess: 'Imagem gerada com sucesso! A visualização foi atualizada.',
    generateError: 'Falha ao gerar imagem traduzida. Tente novamente.',
    noTranslations: 'Nenhuma tradução para aplicar',

    uploading: 'Enviando...',
    configureApiKey: 'Configurar Chave API',
    apiConnected: 'API Conectada',
    apiKeyNotConfigured: 'Chave API Não Configurada',
    apiKeyInstructions: 'Você precisa configurar sua chave API Gemini antes de usar o app. Clique em "Configurar Chave API" acima para instruções.',

    // Upload zone
    dropImagesHere: 'Solte imagens aqui ou clique para navegar',
    dropImagesHereActive: 'Solte as imagens aqui...',
    supportedFormats: 'Suporta PNG, JPG, GIF e WEBP (até 10MB por imagem)',
    multipleUpload: 'Você pode carregar múltiplas imagens de uma vez',

    // Page editor
    extractText: 'Extrair Texto',
    extracting: 'Extraindo...',
    generateTranslatedImage: 'Gerar Imagem Traduzida',
    generating: 'Gerando...',
    downloadRegeneratedImage: 'Baixar Imagem Regenerada',
    originalImage: 'Imagem Original',
    regeneratedImage: 'Imagem Regenerada',
    noRegeneratedImage: 'Nenhuma imagem regenerada ainda',
    clickToGenerate: 'Clique em "Gerar Imagem Traduzida" para criar uma',
    generateWithTranslations: 'Gerar imagem com traduções',
    noImageAvailable: 'Nenhuma imagem regenerada disponível. Por favor gere uma primeiro.',

    // Page list
    deletePage: 'Excluir página',
    expandPages: 'Expandir páginas',
    collapsePages: 'Recolher páginas',

    // API Key Modal
    signInGoogle: 'Entre com sua conta do Google',
    clickGetApiKey: 'Clique em "Obter Chave API" ou "Criar Chave API"',
    copyApiKey: 'Copie sua chave API',
    createEnvFile: 'Crie um arquivo chamado .env no diretório raiz do projeto',
    addToEnvFile: 'Adicione esta linha ao arquivo .env:',
    restartServer: 'Reinicie o servidor',
    apiKeyNote: 'O arquivo .env já está no .gitignore, então sua chave API nunca será enviada para o controle de versão. Mantenha sua chave API privada e segura.',
    hideInstructions: 'Ocultar Instruções',
    showInstructions: 'Mostrar Instruções',
    configureLater: 'Vou configurar mais tarde',
    selectLanguage: 'Selecionar Idioma',

    supportDevelopment: 'Apoiar o Desenvolvimento',

    // Additional missing translations
    translatedTag: 'Traduzido',
    regions: 'regiões',
    uploadError: 'Falha ao enviar imagens. Tente novamente.',
    apiKeyRequiredTitle: 'Chave API Gemini Necessária',
    apiKeyRequiredDescription: 'MonkeyTranslate requer uma chave API Gemini para funcionar',
    apiKeyRequiredNote: 'Esta é uma aplicação de código aberto. Você precisa fornecer sua própria chave API do Google Gemini, que será armazenada localmente em sua máquina e nunca será compartilhada.',
    howToGetApiKey: 'Como obter sua chave API:',
    goToGoogleAIStudio: 'Ir para',

    // Zoom controls
    zoomIn: 'Ampliar',
    zoomOut: 'Reduzir',
    doubleClickToResetZoom: 'Duplo clique para redefinir o zoom',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'Digite sua chave API abaixo para começar.',
    enterYourApiKey: 'Digite Sua Chave API',
    currentApiKey: 'Chave API Atual:',
    enterNewKeyBelow: 'Digite uma nova chave abaixo para substituí-la',
    newApiKey: 'Nova Chave API',
    geminiApiKey: 'Chave API Gemini',
    getApiKeyButton: 'Obter Chave API',
    saving: 'Salvando...',
    saveAndContinue: 'Salvar e Continuar',
    apiKeyPlaceholder: 'Cole sua chave API Gemini aqui...',
  },

  ru: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'Перевод текста изображений с помощью ИИ',

    selectLanguageDescription: 'Выберите предпочитаемый язык интерфейса',
    continue: 'Продолжить',

    uploadImages: 'Загрузить изображения',
    pages: 'Страницы',

    uploadTitle: 'Загрузить изображения для перевода',
    uploadDescription: 'Перетащите изображения сюда или нажмите для выбора',
    uploadHint: 'Поддерживает форматы JPEG, PNG, GIF и WebP',
    selectFiles: 'Выбрать файлы',

    noPages: 'Пока нет загруженных страниц',
    uploadFirst: 'Загрузите изображения для начала',
    deleteConfirm: 'Вы уверены, что хотите удалить эту страницу?',

    // Page editor
    extractText: 'Извлечь Текст',
    extracting: 'Извлечение...',
    generateTranslatedImage: 'Создать Переведенное Изображение',
    generating: 'Создание...',
    downloadRegeneratedImage: 'Скачать Восстановленное Изображение',
    originalImage: 'Исходное изображение',
    regeneratedImage: 'Восстановленное изображение',
    translated: 'Переведено',

    textRegions: 'Текстовые области',
    noTextExtracted: 'Текст еще не извлечен',
    uploadAndExtract: 'Загрузите изображение и нажмите "Извлечь текст" для начала',
    autoTranslate: 'Автоперевод',
    translating: 'Перевод...',

    region: 'Область',
    originalText: 'Исходный текст',
    translatedText: 'Переведенный / Заменяющий текст',
    editTranslation: 'Редактировать перевод',
    removeRegion: 'Удалить эту область',
    save: 'Сохранить',
    cancel: 'Отмена',
    modified: 'Изменено',

    apiKeyRequired: 'Требуется API ключ',
    apiKeyDescription: 'Введите ваш API ключ Google Gemini для использования MonkeyTranslate',
    getApiKey: 'Получите ваш API ключ от',
    enterApiKey: 'Введите ваш API ключ',
    saveApiKey: 'Сохранить API ключ',

    extractSuccess: 'Текст успешно извлечен',
    extractError: 'Ошибка извлечения текста. Проверьте настройки API ключа.',
    translateError: 'Ошибка перевода текста. Попробуйте снова.',
    generateSuccess: 'Изображение успешно создано! Предварительный просмотр обновлен.',
    generateError: 'Ошибка создания переведенного изображения. Попробуйте снова.',
    noTranslations: 'Нет переводов для применения',

    uploading: 'Загрузка...',
    configureApiKey: 'Настроить API ключ',
    apiConnected: 'API подключен',
    apiKeyNotConfigured: 'API ключ не настроен',
    apiKeyInstructions: 'Вам нужно настроить ваш API ключ Gemini перед использованием приложения. Нажмите "Настроить API ключ" выше для инструкций.',

    // Upload zone
    dropImagesHere: 'Перетащите изображения сюда или нажмите для выбора',
    dropImagesHereActive: 'Перетащите изображения сюда...',
    supportedFormats: 'Поддерживает PNG, JPG, GIF и WEBP (до 10МБ на изображение)',
    multipleUpload: 'Вы можете загрузить несколько изображений одновременно',

    // Page editor
    noRegeneratedImage: 'Пока нет восстановленного изображения',
    clickToGenerate: 'Нажмите "Создать переведенное изображение" для создания',
    generateWithTranslations: 'Создать изображение с переводами',
    noImageAvailable: 'Восстановленное изображение недоступно. Пожалуйста, сначала создайте его.',

    // Page list
    deletePage: 'Удалить страницу',
    expandPages: 'Развернуть страницы',
    collapsePages: 'Свернуть страницы',

    // API Key Modal
    signInGoogle: 'Войдите в свой аккаунт Google',
    clickGetApiKey: 'Нажмите "Получить API ключ" или "Создать API ключ"',
    copyApiKey: 'Скопируйте ваш API ключ',
    createEnvFile: 'Создайте файл с именем .env в корневой директории проекта',
    addToEnvFile: 'Добавьте эту строку в файл .env:',
    restartServer: 'Перезапустите сервер',
    apiKeyNote: 'Файл .env уже находится в .gitignore, поэтому ваш API ключ никогда не будет отправлен в систему контроля версий. Держите ваш API ключ в секрете и безопасности.',
    hideInstructions: 'Скрыть инструкции',
    showInstructions: 'Показать инструкции',
    configureLater: 'Настрою позже',
    selectLanguage: 'Выбрать язык',

    supportDevelopment: 'Поддержать разработку',

    // Additional missing translations
    translatedTag: 'Переведено',
    regions: 'области',
    uploadError: 'Ошибка загрузки изображений. Попробуйте снова.',
    apiKeyRequiredTitle: 'Требуется API ключ Gemini',
    apiKeyRequiredDescription: 'MonkeyTranslate требует API ключ Gemini для работы',
    apiKeyRequiredNote: 'Это приложение с открытым исходным кодом. Вам нужно предоставить свой собственный API ключ Google Gemini, который будет храниться локально на вашем компьютере и никогда не будет передан.',
    howToGetApiKey: 'Как получить ваш API ключ:',
    goToGoogleAIStudio: 'Перейти к',

    // Zoom controls
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    doubleClickToResetZoom: 'Двойной щелчок для сброса масштаба',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'Введите ваш API ключ ниже, чтобы начать.',
    enterYourApiKey: 'Введите Ваш API Ключ',
    currentApiKey: 'Текущий API Ключ:',
    enterNewKeyBelow: 'Введите новый ключ ниже, чтобы заменить его',
    newApiKey: 'Новый API Ключ',
    geminiApiKey: 'API Ключ Gemini',
    getApiKeyButton: 'Получить API Ключ',
    saving: 'Сохранение...',
    saveAndContinue: 'Сохранить и Продолжить',
    apiKeyPlaceholder: 'Вставьте ваш API ключ Gemini здесь...',
  },

  ja: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'AI搭載画像テキスト翻訳',

    selectLanguageDescription: 'インターフェースの言語を選択してください',
    continue: '続行',

    uploadImages: '画像をアップロード',
    pages: 'ページ',

    uploadTitle: '翻訳用画像をアップロード',
    uploadDescription: '画像をここにドラッグ＆ドロップするか、クリックして参照',
    uploadHint: 'JPEG、PNG、GIF、WebP形式をサポート',
    selectFiles: 'ファイルを選択',

    noPages: 'まだページがアップロードされていません',
    uploadFirst: '開始するには画像をアップロードしてください',
    deleteConfirm: 'このページを削除してもよろしいですか？',

    translated: '翻訳済み',

    textRegions: 'テキスト領域',
    noTextExtracted: 'まだテキストが抽出されていません',
    uploadAndExtract: '画像をアップロードして「テキストを抽出」をクリックして開始',
    autoTranslate: '自動翻訳',
    translating: '翻訳中...',

    region: '領域',
    originalText: '元のテキスト',
    translatedText: '翻訳/置換テキスト',
    editTranslation: '翻訳を編集',
    removeRegion: 'この領域を削除',
    save: '保存',
    cancel: 'キャンセル',
    modified: '変更済み',

    apiKeyRequired: 'APIキーが必要',
    apiKeyDescription: 'MonkeyTranslateを使用するにはGoogle Gemini APIキーを入力してください',
    getApiKey: 'APIキーを取得：',
    enterApiKey: 'APIキーを入力',
    saveApiKey: 'APIキーを保存',

    extractSuccess: 'テキストの抽出に成功しました',
    extractError: 'テキストの抽出に失敗しました。APIキーの設定を確認してください。',
    translateError: 'テキストの翻訳に失敗しました。再試行してください。',
    generateSuccess: '画像の生成に成功しました！プレビューが更新されました。',
    generateError: '翻訳画像の生成に失敗しました。再試行してください。',
    noTranslations: '適用する翻訳がありません',

    uploading: 'アップロード中...',
    configureApiKey: 'APIキーを設定',
    apiConnected: 'API接続済み',
    apiKeyNotConfigured: 'APIキーが設定されていません',
    apiKeyInstructions: 'アプリを使用する前にGemini APIキーを設定する必要があります。上の「APIキーを設定」をクリックして手順を確認してください。',

    // Upload zone
    dropImagesHere: '画像をここにドロップするかクリックして参照',
    dropImagesHereActive: '画像をここにドロップ...',
    supportedFormats: 'PNG、JPG、GIF、WEBP対応（1画像最大10MB）',
    multipleUpload: '複数の画像を一度にアップロードできます',

    // Page editor
    extractText: 'テキストを抽出',
    extracting: '抽出中...',
    generateTranslatedImage: '翻訳画像を生成',
    generating: '生成中...',
    downloadRegeneratedImage: '再生成画像をダウンロード',
    originalImage: '元画像',
    regeneratedImage: '再生成画像',
    noRegeneratedImage: 'まだ再生成画像がありません',
    clickToGenerate: '「翻訳画像を生成」をクリックして作成',
    generateWithTranslations: '翻訳付き画像を生成',
    noImageAvailable: '再生成画像がありません。まず生成してください。',

    // Page list
    deletePage: 'ページを削除',
    expandPages: 'ページを展開',
    collapsePages: 'ページを折りたたむ',

    // API Key Modal
    signInGoogle: 'Googleアカウントでサインイン',
    clickGetApiKey: '「APIキーを取得」または「APIキーを作成」をクリック',
    copyApiKey: 'APIキーをコピー',
    createEnvFile: 'プロジェクトルートディレクトリに.envという名前のファイルを作成',
    addToEnvFile: '.envファイルにこの行を追加:',
    restartServer: 'サーバーを再起動',
    apiKeyNote: '.envファイルは既に.gitignoreに含まれているため、APIキーがバージョン管理に送信されることはありません。APIキーは秘密にして安全に保管してください。',
    hideInstructions: '手順を非表示',
    showInstructions: '手順を表示',
    configureLater: '後で設定します',
    selectLanguage: '言語を選択',

    supportDevelopment: '開発をサポート',

    // Additional missing translations
    translatedTag: '翻訳済み',
    regions: '領域',
    uploadError: '画像のアップロードに失敗しました。もう一度お試しください。',
    apiKeyRequiredTitle: 'Gemini APIキーが必要',
    apiKeyRequiredDescription: 'MonkeyTranslateは機能するためにGemini APIキーが必要です',
    apiKeyRequiredNote: 'これはオープンソースアプリケーションです。独自のGoogle Gemini APIキーを提供する必要があります。このキーはローカルマシンに保存され、共有されることはありません。',
    howToGetApiKey: 'APIキーの取得方法:',
    goToGoogleAIStudio: 'に移動',

    // Zoom controls
    zoomIn: 'ズームイン',
    zoomOut: 'ズームアウト',
    doubleClickToResetZoom: 'ダブルクリックでズームをリセット',

    // API Key Modal - Electron specific
    enterApiKeyBelow: '開始するには、以下にAPIキーを入力してください。',
    enterYourApiKey: 'APIキーを入力',
    currentApiKey: '現在のAPIキー:',
    enterNewKeyBelow: '新しいキーを以下に入力して置き換えます',
    newApiKey: '新しいAPIキー',
    geminiApiKey: 'Gemini APIキー',
    getApiKeyButton: 'APIキーを取得',
    saving: '保存中...',
    saveAndContinue: '保存して続行',
    apiKeyPlaceholder: 'Gemini APIキーをここに貼り付けてください...',
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
    noTranslations: '적용할 번역이 없습니다',

    uploading: '업로드 중...',
    configureApiKey: 'API 키 구성',
    apiConnected: 'API 연결됨',
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
    noTranslations: '没有要应用的翻译',

    uploading: '上传中...',
    configureApiKey: '配置API密钥',
    apiConnected: 'API已连接',
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
  },

  ar: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'ترجمة نص الصور بالذكاء الاصطناعي',

    selectLanguageDescription: 'اختر لغتك المفضلة للواجهة',
    continue: 'متابعة',

    uploadImages: 'رفع الصور',
    pages: 'الصفحات',

    uploadTitle: 'رفع الصور للترجمة',
    uploadDescription: 'اسحب وأفلت الصور هنا أو انقر للتصفح',
    uploadHint: 'يدعم تنسيقات JPEG و PNG و GIF و WebP',
    selectFiles: 'اختيار الملفات',

    noPages: 'لا توجد صفحات مرفوعة بعد',
    uploadFirst: 'ارفع بعض الصور للبدء',
    deleteConfirm: 'هل أنت متأكد من حذف هذه الصفحة؟',

    translated: 'مترجم',

    textRegions: 'مناطق النص',
    noTextExtracted: 'لم يتم استخراج نص بعد',
    uploadAndExtract: 'ارفع صورة وانقر على "استخراج النص" للبدء',
    autoTranslate: 'ترجمة تلقائية',
    translating: 'جاري الترجمة...',

    region: 'منطقة',
    originalText: 'النص الأصلي',
    translatedText: 'النص المترجم / البديل',
    editTranslation: 'تحرير الترجمة',
    removeRegion: 'إزالة هذه المنطقة',
    save: 'حفظ',
    cancel: 'إلغاء',
    modified: 'معدّل',

    apiKeyRequired: 'مطلوب مفتاح API',
    apiKeyDescription: 'يرجى إدخال مفتاح Google Gemini API لاستخدام MonkeyTranslate',
    getApiKey: 'احصل على مفتاح API من',
    enterApiKey: 'أدخل مفتاح API',
    saveApiKey: 'حفظ مفتاح API',

    extractSuccess: 'تم استخراج النص بنجاح',
    extractError: 'فشل في استخراج النص. يرجى التحقق من إعدادات مفتاح API.',
    translateError: 'فشل في ترجمة النص. يرجى المحاولة مرة أخرى.',
    generateSuccess: 'تم إنشاء الصورة بنجاح! تم تحديث المعاينة.',
    generateError: 'فشل في إنشاء الصورة المترجمة. يرجى المحاولة مرة أخرى.',
    noTranslations: 'لا توجد ترجمات للتطبيق',

    uploading: 'جاري الرفع...',
    configureApiKey: 'تكوين مفتاح API',
    apiConnected: 'API متصل',
    apiKeyNotConfigured: 'مفتاح API غير مكون',
    apiKeyInstructions: 'تحتاج إلى تكوين مفتاح Gemini API الخاص بك قبل استخدام التطبيق. انقر على "تكوين مفتاح API" أعلاه للحصول على التعليمات.',

    // Upload zone
    dropImagesHere: 'اسحب الصور هنا أو انقر للتصفح',
    dropImagesHereActive: 'اسحب الصور هنا...',
    supportedFormats: 'يدعم PNG و JPG و GIF و WEBP (حتى 10 ميجابايت لكل صورة)',
    multipleUpload: 'يمكنك رفع عدة صور في مرة واحدة',

    // Page editor
    extractText: 'استخراج النص',
    extracting: 'جاري الاستخراج...',
    generateTranslatedImage: 'إنشاء صورة مترجمة',
    generating: 'جاري الإنشاء...',
    downloadRegeneratedImage: 'تحميل الصورة المُعاد إنشاؤها',
    originalImage: 'الصورة الأصلية',
    regeneratedImage: 'الصورة المُعاد إنشاؤها',
    noRegeneratedImage: 'لا توجد صورة مُعاد إنشاؤها بعد',
    clickToGenerate: 'انقر على "إنشاء صورة مترجمة" للإنشاء',
    generateWithTranslations: 'إنشاء صورة مع الترجمات',
    noImageAvailable: 'لا توجد صورة مُعاد إنشاؤها متاحة. يرجى إنشاء واحدة أولاً.',

    // Page list
    deletePage: 'حذف الصفحة',
    expandPages: 'توسيع الصفحات',
    collapsePages: 'طي الصفحات',

    // API Key Modal
    signInGoogle: 'سجل الدخول بحساب Google الخاص بك',
    clickGetApiKey: 'انقر على "الحصول على مفتاح API" أو "إنشاء مفتاح API"',
    copyApiKey: 'انسخ مفتاح API الخاص بك',
    createEnvFile: 'أنشئ ملفاً باسم .env في الدليل الجذر للمشروع',
    addToEnvFile: 'أضف هذا السطر إلى ملف .env:',
    restartServer: 'أعد تشغيل الخادم',
    apiKeyNote: 'ملف .env موجود بالفعل في .gitignore، لذا لن يتم إرسال مفتاح API الخاص بك إلى نظام التحكم في الإصدارات. احتفظ بمفتاح API الخاص بك سرياً وآمناً.',
    hideInstructions: 'إخفاء التعليمات',
    showInstructions: 'إظهار التعليمات',
    configureLater: 'سأقوم بتكوينه لاحقاً',
    selectLanguage: 'اختر اللغة',

    supportDevelopment: 'دعم التطوير',

    // Additional missing translations
    translatedTag: 'مترجم',
    regions: 'مناطق',
    uploadError: 'فشل في رفع الصور. يرجى المحاولة مرة أخرى.',
    apiKeyRequiredTitle: 'مطلوب مفتاح API Gemini',
    apiKeyRequiredDescription: 'MonkeyTranslate يتطلب مفتاح API Gemini للعمل',
    apiKeyRequiredNote: 'هذا تطبيق مفتوح المصدر. تحتاج إلى توفير مفتاح Google Gemini API الخاص بك، والذي سيتم تخزينه محلياً على جهازك ولن يتم مشاركته أبداً.',
    howToGetApiKey: 'كيفية الحصول على مفتاح API الخاص بك:',
    goToGoogleAIStudio: 'انتقل إلى',

    // Zoom controls
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    doubleClickToResetZoom: 'انقر نقرًا مزدوجًا لإعادة تعيين التكبير',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'أدخل مفتاح API الخاص بك أدناه للبدء.',
    enterYourApiKey: 'أدخل مفتاح API الخاص بك',
    currentApiKey: 'مفتاح API الحالي:',
    enterNewKeyBelow: 'أدخل مفتاحًا جديدًا أدناه لاستبداله',
    newApiKey: 'مفتاح API جديد',
    geminiApiKey: 'مفتاح API Gemini',
    getApiKeyButton: 'الحصول على مفتاح API',
    saving: 'جاري الحفظ...',
    saveAndContinue: 'حفظ ومتابعة',
    apiKeyPlaceholder: 'الصق مفتاح API الخاص بـ Gemini هنا...',
  },

  hi: {
    appTitle: 'MonkeyTranslate',
    appSubtitle: 'AI-संचालित छवि पाठ अनुवाद',

    selectLanguageDescription: 'इंटरफ़ेस के लिए अपनी पसंदीदा भाषा चुनें',
    continue: 'जारी रखें',

    uploadImages: 'छवियां अपलोड करें',
    pages: 'पृष्ठ',

    uploadTitle: 'अनुवाद के लिए छवियां अपलोड करें',
    uploadDescription: 'छवियों को यहां खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें',
    uploadHint: 'JPEG, PNG, GIF और WebP प्रारूपों का समर्थन करता है',
    selectFiles: 'फ़ाइलें चुनें',

    noPages: 'अभी तक कोई पृष्ठ अपलोड नहीं किया गया',
    uploadFirst: 'शुरू करने के लिए कुछ छवियां अपलोड करें',
    deleteConfirm: 'क्या आप वाकई इस पृष्ठ को हटाना चाहते हैं?',

    translated: 'अनुवादित',

    textRegions: 'पाठ क्षेत्र',
    noTextExtracted: 'अभी तक कोई पाठ निकाला नहीं गया',
    uploadAndExtract: 'एक छवि अपलोड करें और शुरू करने के लिए "पाठ निकालें" पर क्लिक करें',
    autoTranslate: 'स्वचालित अनुवाद',
    translating: 'अनुवाद हो रहा है...',

    region: 'क्षेत्र',
    originalText: 'मूल पाठ',
    translatedText: 'अनुवादित / प्रतिस्थापन पाठ',
    editTranslation: 'अनुवाद संपादित करें',
    removeRegion: 'इस क्षेत्र को हटाएं',
    save: 'सहेजें',
    cancel: 'रद्द करें',
    modified: 'संशोधित',

    apiKeyRequired: 'API कुंजी आवश्यक',
    apiKeyDescription: 'MonkeyTranslate का उपयोग करने के लिए कृपया अपनी Google Gemini API कुंजी दर्ज करें',
    getApiKey: 'अपनी API कुंजी प्राप्त करें',
    enterApiKey: 'अपनी API कुंजी दर्ज करें',
    saveApiKey: 'API कुंजी सहेजें',

    extractSuccess: 'पाठ सफलतापूर्वक निकाला गया',
    extractError: 'पाठ निकालने में विफल। कृपया अपनी API कुंजी कॉन्फ़िगरेशन जांचें।',
    translateError: 'पाठ अनुवाद में विफल। कृपया पुनः प्रयास करें।',
    generateSuccess: 'छवि सफलतापूर्वक बनाई गई! पूर्वावलोकन अपडेट किया गया है।',
    generateError: 'अनुवादित छवि बनाने में विफल। कृपया पुनः प्रयास करें।',
    noTranslations: 'लागू करने के लिए कोई अनुवाद नहीं',

    uploading: 'अपलोड हो रहा है...',
    configureApiKey: 'API की कॉन्फ़िगर करें',
    apiConnected: 'API कनेक्ट हो गया',
    apiKeyNotConfigured: 'API की कॉन्फ़िगर नहीं की गई',
    apiKeyInstructions: 'ऐप का उपयोग करने से पहले आपको अपनी Gemini API की कॉन्फ़िगर करनी होगी। निर्देशों के लिए ऊपर "API की कॉन्फ़िगर करें" पर क्लिक करें।',

    // Upload zone
    dropImagesHere: 'छवियों को यहाँ खींचें या ब्राउज़ करने के लिए क्लिक करें',
    dropImagesHereActive: 'छवियों को यहाँ खींचें...',
    supportedFormats: 'PNG, JPG, GIF और WEBP समर्थित (प्रति छवि अधिकतम 10MB)',
    multipleUpload: 'आप एक साथ कई छवियां अपलोड कर सकते हैं',

    // Page editor
    extractText: 'टेक्स्ट निकालें',
    extracting: 'निकाला जा रहा है...',
    generateTranslatedImage: 'अनुवादित छवि जेनरेट करें',
    generating: 'जेनरेट हो रहा है...',
    downloadRegeneratedImage: 'पुनर्जनित छवि डाउनलोड करें',
    originalImage: 'मूल छवि',
    regeneratedImage: 'पुनर्जनित छवि',
    noRegeneratedImage: 'अभी तक कोई पुनर्जनित छवि नहीं',
    clickToGenerate: 'बनाने के लिए "अनुवादित छवि जेनरेट करें" पर क्लिक करें',
    generateWithTranslations: 'अनुवाद के साथ छवि जेनरेट करें',
    noImageAvailable: 'कोई पुनर्जनित छवि उपलब्ध नहीं है। कृपया पहले एक जेनरेट करें।',

    // Page list
    deletePage: 'पृष्ठ हटाएं',
    expandPages: 'पृष्ठ विस्तृत करें',
    collapsePages: 'पृष्ठ संक्षिप्त करें',

    // API Key Modal
    signInGoogle: 'अपने Google खाते से साइन इन करें',
    clickGetApiKey: '"API की प्राप्त करें" या "API की बनाएं" पर क्लिक करें',
    copyApiKey: 'अपनी API की कॉपी करें',
    createEnvFile: 'प्रोजेक्ट रूट डायरेक्टरी में .env नाम की फ़ाइल बनाएं',
    addToEnvFile: '.env फ़ाइल में यह लाइन जोड़ें:',
    restartServer: 'सर्वर को पुनः आरंभ करें',
    apiKeyNote: '.env फ़ाइल पहले से ही .gitignore में है, इसलिए आपकी API की कभी भी संस्करण नियंत्रण में कमिट नहीं होगी। अपनी API की को निजी और सुरक्षित रखें।',
    hideInstructions: 'निर्देश छुपाएं',
    showInstructions: 'निर्देश दिखाएं',
    configureLater: 'मैं इसे बाद में कॉन्फ़िगर करूंगा',
    selectLanguage: 'भाषा चुनें',

    supportDevelopment: 'विकास का समर्थन करें',

    // Additional missing translations
    translatedTag: 'अनुवादित',
    regions: 'क्षेत्र',
    uploadError: 'छवियां अपलोड करने में विफल। कृपया पुनः प्रयास करें।',
    apiKeyRequiredTitle: 'Gemini API कुंजी आवश्यक',
    apiKeyRequiredDescription: 'MonkeyTranslate को काम करने के लिए Gemini API कुंजी की आवश्यकता है',
    apiKeyRequiredNote: 'यह एक ओपन-सोर्स एप्लिकेशन है। आपको अपनी खुद की Google Gemini API कुंजी प्रदान करनी होगी, जो आपकी मशीन पर स्थानीय रूप से संग्रहीत की जाएगी और कभी साझा नहीं की जाएगी।',
    howToGetApiKey: 'अपनी API कुंजी कैसे प्राप्त करें:',
    goToGoogleAIStudio: 'पर जाएं',

    // Zoom controls
    zoomIn: 'ज़ूम इन',
    zoomOut: 'ज़ूम आउट',
    doubleClickToResetZoom: 'ज़ूम रीसेट करने के लिए डबल क्लिक करें',

    // API Key Modal - Electron specific
    enterApiKeyBelow: 'शुरू करने के लिए नीचे अपनी API कुंजी दर्ज करें।',
    enterYourApiKey: 'अपनी API कुंजी दर्ज करें',
    currentApiKey: 'वर्तमान API कुंजी:',
    enterNewKeyBelow: 'इसे बदलने के लिए नीचे एक नई कुंजी दर्ज करें',
    newApiKey: 'नई API कुंजी',
    geminiApiKey: 'Gemini API कुंजी',
    getApiKeyButton: 'API कुंजी प्राप्त करें',
    saving: 'सहेजा जा रहा है...',
    saveAndContinue: 'सहेजें और जारी रखें',
    apiKeyPlaceholder: 'अपनी Gemini API कुंजी यहाँ पेस्ट करें...',
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
    noTranslations: 'Không có bản dịch nào để áp dụng',

    uploading: 'Đang tải lên...',
    configureApiKey: 'Cấu hình khóa API',
    apiConnected: 'API đã kết nối',
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
  },
};

export type TranslationKey = keyof typeof translations.en;
export type LanguageCode = keyof typeof translations;
