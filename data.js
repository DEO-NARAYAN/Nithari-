/**
 * data.js
 * All static data for the Nithari Documentary Screenplay Explorer.
 * Contains:
 *   - CATEGORIES  — display metadata for each character category
 *   - CHARACTERS  — full character roster with bios, motivations, etc.
 *   - SCENES      — all scenes with dialogues mapped to character IDs
 *
 * Loaded before app.js in index.html.
 */

'use strict';

/* ============================================================
   CATEGORIES
   Maps category names → { color, CSS class }
============================================================ */
const CATEGORIES = {
    'Accused': { color: '#c0392b', cls: 'cat-accused' },
    'Law Enforcement': { color: '#3498db', cls: 'cat-law' },
    'Victims/Parents': { color: '#e67e22', cls: 'cat-victims' },
    'Media/Activists': { color: '#27ae60', cls: 'cat-media' },
    'Narrative': { color: '#9b59b6', cls: 'cat-narrative' },
};

/* ============================================================
   CHARACTERS
   id, name, category, bio, motivation, costume, style
============================================================ */
const CHARACTERS = [
    {
        id: 1,
        name: 'Narrator (V.O.)',
        category: 'Narrative',
        bio: 'आवाज़ गहरी, भारी, और धीमी। एक अदृश्य उपस्थिति जो दर्शकों को सच्चाई के करीब ले जाती है। लंबे रुकाव के साथ बोलती है।',
        motivation: 'इस कहानी की गंभीरता और दुःख को समझाना। दर्शकों को हर पल की भीषणता का एहसास दिलाना।',
        costume: 'आवाज़ मात्र — कोई दृश्य उपस्थिति नहीं।',
        style: 'धीमी, गहरी, हिंदी। लंबे रुकाव। हर वाक्य के बाद सांस लेने का समय।',
    },
    {
        id: 2,
        name: 'Documentary Host',
        category: 'Narrative',
        bio: 'चालीस साल का एक तेज़ खोजी पत्रकार। सीधे कैमरे की तरफ बोलता है। शांत लेकिन दृढ़। Noida की गलियों में चलते हुए दर्शकों को गाइड करता है।',
        motivation: 'दर्शकों को असली जगहों पर ले जाना और सच्चाई सामने रखना।',
        costume: 'मिट्टी के रंग की शर्ट, ग्रे ब्लेज़र, गहरी जींस, चमड़े के जूते।',
        style: 'सीधा, तथ्यात्मक हिंदी। बिना नाटक के, लेकिन गंभीरता के साथ।',
    },
    {
        id: 3,
        name: 'Chitra Singh',
        category: 'Media/Activists',
        bio: '2006 की अपराध रिपोर्टर। ऊर्जावान और तेज़ बोलने वाली। अपनी पुरानी डायरियाँ और अखबार की कटिंग्स हमेशा साथ रखती हैं। Nithari की पहली रिपोर्टर।',
        motivation: 'पुलिस की लापरवाही उजागर करना और गरीब परिवारों की मदद करना।',
        costume: 'सूती कुर्ती, साधारण झोला, पुरानी रिपोर्टिंग डायरियाँ।',
        style: 'तेज़, आत्मविश्वास से भरी हिंदी। गुस्से में भी संयम।',
    },
    {
        id: 4,
        name: 'Sunita Devi',
        category: 'Victims/Parents',
        bio: 'Noida में घरेलू सफाई कर्मी। उनकी 7 साल की बेटी रीना 2005 में लापता हो गई थी। अपनी बेटी की फ़ोटो हमेशा साथ रखती हैं।',
        motivation: 'न्याय और राहत चाहिए। बेटी को ढूंढने की उम्मीद कभी नहीं छोड़ी।',
        costume: 'फीकी साड़ी, बेटी की घिसी हुई फ़ोटो हाथ में।',
        style: 'धीमी, कंपकंपाती आवाज़। अक्सर रोना आ जाता है। सरल हिंदी।',
    },
    {
        id: 5,
        name: 'Jaganath Prasad',
        category: 'Victims/Parents',
        bio: 'दिहाड़ी मज़दूर। गुस्से और टूटे दिल का मिश्रण। उनका बेटा छोटू 2004 में गायब हो गया था। पुलिस ने उनकी रिपोर्ट नहीं लिखी।',
        motivation: 'हत्यारों और पुलिस दोनों को सज़ा दिलाना।',
        costume: 'पुराना धूल भरा कुर्ता, घिसी हुई रबर की चप्पलें।',
        style: 'कच्ची, टूटी हुई हिंदी। आवाज़ में दर्द और गुस्सा दोनों।',
    },
    {
        id: 6,
        name: 'Moninder Singh Pandher',
        category: 'Accused',
        bio: 'D-5 का मालिक, अमीर कारोबारी। पॉलिश्ड, शांत, अंग्रेज़ी-मिश्रित हिंदी बोलता है। बाहर से बेगुनाह दिखने की कोशिश करता है।',
        motivation: 'सब कुछ नकारना। अमीर और निर्दोष की छवि बनाए रखना।',
        costume: 'महंगे सिल्क कुर्ते, बारीक चश्मा, साफ-सुथरी सफ़ेद-ग्रे दाढ़ी।',
        style: 'धीमी, मापी हुई हिंदी-English mix। हर शब्द सोचकर बोलना।',
    },
    {
        id: 7,
        name: 'Surinder Koli',
        category: 'Accused',
        bio: 'D-5 में नौकर और खाना बनाने वाला। फ्लैट, ऊँची-सी, डरावनी शांत आवाज़। जो किया उसके बारे में बिना किसी पछतावे के बताता है।',
        motivation: 'मालिक का अंधे की तरह पालन करना। जो हुआ उसे सामान्य बताना।',
        costume: 'घिसा हुआ ग्रे स्वेटर, खाली, चौड़ी आँखें।',
        style: 'सपाट, मोनोटोन हिंदी। रुककर बोलना। कोई भाव नहीं।',
    },
    {
        id: 8,
        name: 'Ram Charan',
        category: 'Law Enforcement',
        bio: '2005 का स्थानीय पुलिस अधिकारी। अपनी गलतियों का बचाव करता है। कहता है वह ज़्यादा काम के बोझ तले दब गया था।',
        motivation: 'दोष से बचना। यह साबित करना कि सब प्रक्रिया के अनुसार हुआ।',
        costume: 'झुर्रीदार खाकी वर्दी या फीकी शर्ट।',
        style: 'रक्षात्मक हिंदी। सवालों पर झुंझलाहट।',
    },
    {
        id: 9,
        name: 'S.K. Sharma',
        category: 'Law Enforcement',
        bio: 'CBI का सावधान, विस्तृत जाँचकर्ता। सिर्फ तथ्यों और विज्ञान की भाषा में बोलता है। कोर्ट में खड़े होने वाले सबूत चाहिए।',
        motivation: 'ऐसा ठोस सबूत जुटाना जो कोर्ट में टिके। सच तक पहुँचना।',
        costume: 'साफ सफ़ेद शर्ट, गहरी पतलून, स्टील के चश्मे।',
        style: 'तकनीकी, तथ्यात्मक हिंदी। बिना किसी भाव के।',
    },
    {
        id: 10,
        name: 'Advocate Anand Verma',
        category: 'Law Enforcement',
        bio: 'समर्पित सरकारी वकील। तीखी, स्पष्ट कानूनी भाषा। इकबालिया बयानों के आधार पर फाँसी चाहता है।',
        motivation: 'हत्यारों को फाँसी दिलाना। पीड़ितों के परिवारों को न्याय।',
        costume: 'काला वकालत का चोगा, सफ़ेद कॉलर बैंड।',
        style: 'तेज़, निर्णायक हिंदी। कानूनी शब्दावली।',
    },
    {
        id: 11,
        name: 'Advocate Rajesh Kaushik',
        category: 'Law Enforcement',
        bio: 'चालाक बचाव पक्ष का वकील। पुलिस की गलतियाँ ढूंढता है। सबूतों की कमज़ोरी पर नज़र।',
        motivation: 'साबित करना कि सबूत कमज़ोर हैं। मुवक्किलों को बचाना।',
        costume: 'तेज़ काला सूट, चश्मा, विश्लेषणात्मक नज़र।',
        style: 'तार्किक, प्रश्नात्मक हिंदी। हर बात पर सवाल।',
    },
    {
        id: 12,
        name: 'Leela Devi',
        category: 'Victims/Parents',
        bio: '9 साल के अमित की माँ। 2005 में बेटा गायब। थाने में रिपोर्ट लिखवाने गई तो वापस भेज दिया गया।',
        motivation: 'अपने बेटे की मौत की सच्चाई जानना। पुलिस पर गुस्सा।',
        costume: 'पुरानी सूती साड़ी, माथे पर घिसी बिंदी, आँखें सूजी हुईं।',
        style: 'रोती-बिलखती हिंदी। बीच-बीच में रुकना।',
    },
    {
        id: 13,
        name: 'Ramesh Kumar',
        category: 'Victims/Parents',
        bio: "रिक्शा चालक। 6 साल की बेटी पूजा खो गई। पुलिस ने उसे 'शायद भाग गई होगी' कहकर टरका दिया।",
        motivation: 'पुलिस की बेरुखी का बदला चाहिए। बेटी को इंसाफ।',
        costume: 'मैली धोती, गमछा कंधे पर।',
        style: 'टूटी, बिखरी हिंदी। भावनाओं का ज्वार।',
    },
    {
        id: 14,
        name: 'Dr. Vinod Mishra',
        category: 'Law Enforcement',
        bio: 'फॉरेंसिक पैथोलॉजिस्ट। UP Police के साथ काम किया। नाली में मिली हड्डियों की जाँच की।',
        motivation: 'वैज्ञानिक सच्चाई सामने रखना। DNA और हड्डियों से पहचान।',
        costume: 'सफ़ेद लैब कोट, दस्ताने, ID कार्ड।',
        style: 'धीमी, वैज्ञानिक हिंदी। हर शब्द सटीक।',
    },
    {
        id: 15,
        name: 'Priya Sharma',
        category: 'Media/Activists',
        bio: 'दिल्ली से आई NGO कार्यकर्ता। बच्चों के अधिकारों के लिए लड़ती हैं। Nithari के बाद नोएडा में डेरा जमाया।',
        motivation: 'व्यवस्था में बदलाव लाना। गरीब बच्चों की सुरक्षा।',
        costume: 'सलवार कमीज़, हाथ में कैनवास बैग, कई बैज।',
        style: 'तेज़, जोशीली हिंदी। भाषण देने का अंदाज़।',
    },
    {
        id: 16,
        name: "Santosh (Koli's Cousin)",
        category: 'Accused',
        bio: 'कोली का चचेरा भाई। D-5 में कभी-कभी आता था। कुछ जानता था पर चुप रहा।',
        motivation: 'खुद को बचाना। कोली और पंधेर दोनों से डर।',
        costume: 'साधारण कमीज़-पैंट, घबराई हुई नज़रें।',
        style: 'हकलाती, डरी हुई हिंदी।',
    },
    {
        id: 17,
        name: 'Judge R.P. Singh',
        category: 'Law Enforcement',
        bio: 'गाज़ियाबाद सत्र न्यायालय के न्यायाधीश। दोनों पक्षों को सुनने के बाद फैसला।',
        motivation: 'कानून के अनुसार न्याय। सबूतों पर आधारित फैसला।',
        costume: 'न्यायाधीश का काला चोगा।',
        style: 'भारी, औपचारिक हिंदी। हर शब्द वज़नी।',
    },
    {
        id: 18,
        name: 'Meera Devi (Survivor)',
        category: 'Victims/Parents',
        bio: 'एकमात्र जीवित बची — किसी तरह D-5 से भाग निकली। उसकी गवाही ने पूरा मामला खोला।',
        motivation: 'न्याय चाहिए। दूसरे बच्चों को बचाना।',
        costume: 'साधारण फ्रॉक, छुपी हुई नज़रें।',
        style: 'धीमी, काँपती बच्ची की हिंदी।',
    },
    {
        id: 19,
        name: 'Aakash (Local Journalist)',
        category: 'Media/Activists',
        bio: 'नोएडा का स्थानीय अखबार रिपोर्टर। सबसे पहले D-5 के बाहर पहुँचा।',
        motivation: 'सच्ची खबर छापना। शहर को जगाना।',
        costume: 'जींस, टी-शर्ट, कैमरा बैग।',
        style: 'जल्दबाज़, उत्साही हिंदी।',
    },
];

/* ============================================================
   SCENES
   Each scene has:
     id, num, act, location, year, time, context,
     dialogues: [{ charId, text, tone }]
============================================================ */
const SCENES = [
    {
        id: 'S01',
        num: 'Scene 1',
        act: 'Act I',
        location: 'Nithari Village, Noida',
        year: '2006',
        time: 'Dawn',
        context: "Black screen. Distant sounds of dogs barking. A child's laughter fades out. Camera slowly reveals the grey, misty lanes of Nithari at dawn. Static shot of D-5 bungalow gate.",
        dialogues: [
            {
                charId: 1,
                text: 'यह एक शहर की कहानी है... जो रात को सोया... और सुबह उठा तो उसे पता चला कि उसके बच्चे... कहाँ गए।',
                tone: 'बहुत धीमे, गहरे रुकाव के साथ। जैसे दर्द को शब्दों में ढाला जा रहा हो।',
            },
        ],
    },
    {
        id: 'S02',
        num: 'Scene 2',
        act: 'Act I',
        location: 'D-5 Bungalow Gate, Nithari',
        year: '2006',
        time: 'Morning',
        context: 'Host walks slowly toward the D-5 gate. Camera follows over his shoulder. The lane is silent. He turns to face the camera.',
        dialogues: [
            {
                charId: 2,
                text: 'यह है D-5, सेक्टर 31, नोएडा। साल 2006 के दिसंबर महीने में इस घर की नाली से जो मिला — वो इस देश का दिल दहला देने वाला था। मैं यहाँ हूँ ये समझने के लिए कि आखिर हुआ क्या।',
                tone: 'शांत, सीधी आवाज़। कोई नाटक नहीं — बस तथ्य।',
            },
        ],
    },
    {
        id: 'S03',
        num: 'Scene 3',
        act: 'Act I',
        location: 'Press Conference Hall, Noida',
        year: '2006',
        time: 'Afternoon',
        context: "Archive footage inter-cut with present-day interview. Chitra Singh sits in a journalist's office, surrounded by old files and press clippings. Camera close on her face.",
        dialogues: [
            {
                charId: 3,
                text: 'मैं दिसंबर 2006 में पहली बार नितहारी पहुँची थी। पुलिस ने मुझे अंदर नहीं जाने दिया। लेकिन बाहर खड़ी माँओं की आँखें देखकर मैं समझ गई — यहाँ कुछ बहुत बड़ा हुआ है।',
                tone: 'तेज़, पक्का लेकिन आवाज़ में भारीपन।',
            },
        ],
    },
    {
        id: 'S04',
        num: 'Scene 4',
        act: 'Act I',
        location: 'CBI Interrogation Room (Reconstruction)',
        year: '2007',
        time: 'Night',
        context: "Dramatized interrogation. Dim light on Koli's face. His eyes are empty. The camera holds on his hands, folded on the table.",
        dialogues: [
            {
                charId: 7,
                text: 'साहब ने कहा था... देखना है कि कुछ होता है क्या। मैंने किया। मुझे नहीं पता था कि यह... इतना बड़ा होगा।',
                tone: 'सपाट, बिना किसी भाव के। जैसे रोज़ की बात हो।',
            },
            {
                charId: 7,
                text: 'मैंने कुछ गलत नहीं किया। जो साहब ने कहा। मैंने वही किया।',
                tone: 'मोनोटोन। आँखें झुकी हुईं।',
            },
        ],
    },
    {
        id: 'S05',
        num: 'Scene 5',
        act: 'Act I',
        location: 'D-5 Interior (Reconstruction)',
        year: '2005',
        time: 'Evening',
        context: "Dramatized scene. Pandher sits in his study, reading a newspaper. Koli brings tea. Chitra Singh's voice-over from archive interview narrates over the scene.",
        dialogues: [
            {
                charId: 6,
                text: 'I was... देखिए, मेरे घर में जो हुआ, मुझे उसकी कोई जानकारी नहीं थी। मैं ज़्यादातर Delhi में रहता था। Koli सब देखता था।',
                tone: 'धीमे, मापे हुए शब्द। हर वाक्य के बाद रुकना।',
            },
            {
                charId: 7,
                text: 'साहब बाहर थे। मैं अकेला था घर पर। बच्चा आया था दरवाज़े पर। मैंने अंदर बुला लिया।',
                tone: 'सपाट। बिल्कुल शांत। जैसे कोई सामान्य घटना बता रहा हो।',
            },
            {
                charId: 3,
                text: 'हमें बाद में पता चला कि Pandher अक्सर बाहर होते थे। लेकिन सवाल यह है — क्या वो सच में नहीं जानते थे? या जानबूझकर आँखें मूंद लेते थे?',
                tone: 'गंभीर, सवालिया लहजा।',
            },
        ],
    },
    {
        id: 'S06',
        num: 'Scene 6',
        act: 'Act I',
        location: 'Nithari Lane (Night Footage)',
        year: '2006',
        time: 'Midnight',
        context: 'Night-vision camera. Slow pan across the empty lane. A lone streetlight flickers. Children\'s missing posters on the wall.',
        dialogues: [
            {
                charId: 1,
                text: 'तीन साल तक... तीन साल तक बच्चे गायब होते रहे। माँएँ रोती रहीं। पुलिस के चक्कर लगाती रहीं। और वो घर... वो घर चुप रहा।',
                tone: 'बेहद धीमे। हर शब्द पर ज़ोर।',
            },
        ],
    },
    {
        id: 'S07',
        num: 'Scene 7',
        act: 'Act II',
        location: 'Slum Area, Nithari',
        year: '2007',
        time: 'Day',
        context: 'Present-day interview. Sunita Devi sits outside her small home. She holds a faded photograph. Her hands tremble.',
        dialogues: [
            {
                charId: 4,
                text: 'मेरी रीना... सात साल की थी। बस गई थी बाज़ार से चिप्स लेने। फिर... फिर वो नहीं आई।',
                tone: 'टूटती आवाज़। रोते हुए शुरू करें।',
            },
            {
                charId: 4,
                text: 'मैं पाँच बार गई थाने। उन्होंने कहा — बच्चे खो जाते हैं। मिल जाएगी। क्या खो जाते हैं? क्या मेरी बच्ची कोई सामान थी?',
                tone: 'रोते हुए गुस्सा भी आता है।',
            },
            {
                charId: 7,
                text: '(जाँचकर्ता का सवाल: बच्चों के साथ क्या होता था?) वो... आ जाते थे। फिर... नहीं जाते थे।',
                tone: 'ठंडी, खाली आवाज़। सबसे डरावना जवाब।',
            },
        ],
    },
    {
        id: 'S08',
        num: 'Scene 8',
        act: 'Act II',
        location: 'Slum Area, Nithari',
        year: '2007',
        time: 'Day',
        context: 'Jaganath and Sunita both sit together for interview. Old, broken plastic chairs. A child runs past in the background.',
        dialogues: [
            {
                charId: 4,
                text: 'जब मुझे पता चला कि... (रुकती हैं) ...कि उसकी हड्डियाँ मिली हैं... मैं समझ नहीं पाई। वो मेरी बच्ची थी।',
                tone: 'रोते हुए, आवाज़ टूटती है।',
            },
            {
                charId: 5,
                text: 'मेरा छोटू — मेरा बेटा। उसे इन्होंने मारा और पुलिस ने हमें रोज़ भगाया। भगाया जैसे हम जानवर हों।',
                tone: 'गुस्से में काँपती आवाज़।',
            },
        ],
    },
    {
        id: 'S09',
        num: 'Scene 9',
        act: 'Act II',
        location: 'Noida Police Station',
        year: '2007',
        time: 'Day',
        context: 'Present-day interview. Ram Charan, now in civilian clothes, sits defensively. He fidgets with a pen.',
        dialogues: [
            {
                charId: 8,
                text: 'देखिए, हमारे पास तब बहुत काम था। एक-एक अफसर पर पचासों केस थे। हम क्या करते? हर लापता बच्चे पर FIR लिखें?',
                tone: 'रक्षात्मक, थोड़ा चिड़चिड़ा।',
            },
            {
                charId: 5,
                text: 'यह झूठ है! मैं खुद गया था। मेरे हाथ जोड़े थे। उसने कहा — "जाओ, आराम करो।" मेरे बेटे का केस लिखने से मना कर दिया।',
                tone: 'उठकर खड़े होने जैसा गुस्सा।',
            },
        ],
    },
    {
        id: 'S10',
        num: 'Scene 10',
        act: 'Act II',
        location: 'Police Station (Archive Footage)',
        year: '2006',
        time: 'Day',
        context: 'Archive news footage. Police spokesperson at podium. Subtitles show translation.',
        dialogues: [
            {
                charId: 8,
                text: 'नोएडा पुलिस ने सभी शिकायतों पर उचित कार्रवाई की। यदि कोई चूक हुई, तो उसकी जाँच होगी।',
                tone: 'औपचारिक, बचाव में, आँखें कैमरे से हटी हुईं।',
            },
        ],
    },
    {
        id: 'S12',
        num: 'Scene 12',
        act: 'Act II',
        location: "Pandher's Lawyer's Office, Delhi",
        year: '2007',
        time: 'Afternoon',
        context: 'Pandher gives interview through his lawyer. Polished setting. His hands are clasped. He looks directly at camera with practiced calm.',
        dialogues: [
            {
                charId: 6,
                text: 'देखिए, Koli ने जो किया, वो उसने मेरी जानकारी के बिना किया। मैं तो उस बंदे पर भरोसा करता था। मुझे नहीं पता था।',
                tone: 'शांत, नियंत्रित। हर शब्द वकील से सोचकर।',
            },
        ],
    },
    {
        id: 'S13',
        num: 'Scene 13',
        act: 'Act II',
        location: 'Court Corridor, Ghaziabad',
        year: '2009',
        time: 'Morning',
        context: 'Documentary camera follows families outside court. Jaganath stands outside, waiting for verdict updates.',
        dialogues: [
            {
                charId: 5,
                text: 'तीन साल से आ रहे हैं। हर तारीख़ पर। बस सुनते हैं — अगली तारीख़। न्याय कब मिलेगा?',
                tone: 'थका हुआ, निराश।',
            },
            {
                charId: 7,
                text: '(Court deposition, read-back) मैंने किया। मुझे पश्चाताप नहीं है। जो होना था, हो गया।',
                tone: 'सपाट। न रोना, न गुस्सा। बस शून्य।',
            },
        ],
    },
    {
        id: 'S14',
        num: 'Scene 14',
        act: 'Act II',
        location: 'Nithari Street (Archive Footage)',
        year: '2006',
        time: 'Afternoon',
        context: 'Chitra Singh is seen in 2006 archive footage reporting live from outside D-5.',
        dialogues: [
            {
                charId: 3,
                text: 'मैं अभी D-5 के सामने खड़ी हूँ। यहाँ पुलिस ने अभी तक media को अंदर जाने नहीं दिया। लेकिन जो परिवार बाहर खड़े हैं — उनकी आँखें सब कुछ बता रही हैं।',
                tone: 'Live reporting energy. तेज़ और उत्साहित।',
            },
        ],
    },
    {
        id: 'S19',
        num: 'Scene 19',
        act: 'Act III',
        location: 'Ghaziabad Sessions Court',
        year: '2011',
        time: 'Day',
        context: 'Court scene. Both accused are brought in. Camera on their faces as they enter.',
        dialogues: [
            {
                charId: 6,
                text: 'मैंने कुछ नहीं किया। मैं निर्दोष हूँ। यह सब Koli ने किया। मुझे फँसाया जा रहा है।',
                tone: 'आवाज़ में घबराहट। पहली बार crack दिखती है।',
            },
            {
                charId: 7,
                text: 'मैंने सब बताया है। जो साहब ने कहा, वो किया।',
                tone: 'पहले जैसा सपाट।',
            },
        ],
    },
    {
        id: 'S20',
        num: 'Scene 20',
        act: 'Act III',
        location: 'Outside Ghaziabad Court',
        year: '2011',
        time: 'Day',
        context: 'Families gathered outside the court for verdict. Media frenzy.',
        dialogues: [
            {
                charId: 5,
                text: 'इंसाफ मिला या नहीं — यह तो अदालत बताएगी। लेकिन मेरा छोटू... वो तो वापस नहीं आएगा।',
                tone: 'खाली आँखें। आवाज़ में जीत का कोई जश्न नहीं।',
            },
        ],
    },
    {
        id: 'S22',
        num: 'Scene 22',
        act: 'Act III',
        location: 'Jail Interview Room',
        year: '2012',
        time: 'Day',
        context: 'Pandher sits across a glass partition for interview. His silk kurta has been replaced by prison clothes.',
        dialogues: [
            {
                charId: 6,
                text: 'मैं अपील करूँगा। हाई कोर्ट में, Supreme Court में। जब तक साँस है। मैं बेगुनाह हूँ।',
                tone: 'दृढ़, लेकिन आँखों में डर दिखता है।',
            },
        ],
    },
    {
        id: 'S25',
        num: 'Scene 25',
        act: 'Act II',
        location: 'Forensic Lab, Lucknow',
        year: '2007',
        time: 'Day',
        context: 'S.K. Sharma points to a map of D-5 drain on a whiteboard. Koli is brought in for questioning.',
        dialogues: [
            {
                charId: 9,
                text: 'हमें कुल अट्ठाईस बच्चों के अवशेष मिले। DNA matching से सत्रह की पहचान हुई। प्रत्येक केस में मृत्यु का कारण — manual strangulation।',
                tone: 'वैज्ञानिक, ठंडा। हर शब्द का वज़न महसूस होता है।',
            },
            {
                charId: 7,
                text: '(CBI interrogation) नाली में... बहा दिया था। जो बचा था। पूछ रहे हैं तो बता रहा हूँ।',
                tone: 'उतना ही सपाट जितना हमेशा।',
            },
        ],
    },
    {
        id: 'S26',
        num: 'Scene 26',
        act: 'Act II',
        location: 'Forensic Lab',
        year: '2007',
        time: 'Day',
        context: 'Sharma shows evidence to documentary camera. He holds a folder carefully.',
        dialogues: [
            {
                charId: 9,
                text: 'इस केस में सबसे बड़ी चुनौती यह थी कि बहुत देर हो गई थी। Evidence contaminated हो चुका था। नाली साफ़ की जा चुकी थी। हमें पहले से मौजूद जो मिला, उसी से काम चलाना था।',
                tone: 'प्रोफेशनल, frustrated लेकिन controlled।',
            },
        ],
    },
    {
        id: 'S27',
        num: 'Scene 27',
        act: 'Act III',
        location: 'Ghaziabad Court',
        year: '2009',
        time: 'Day',
        context: 'Courtroom drama. Both lawyers address the judge.',
        dialogues: [
            {
                charId: 10,
                text: 'माननीय न्यायालय, अभियुक्त सुरेंद्र कोली ने स्वयं अपने जुर्म कबूल किए हैं। यह confession voluntary है, दबाव में नहीं। और इस confession के साथ forensic evidence भी match करता है। हम फाँसी की माँग करते हैं।',
                tone: 'तेज़, निर्णायक। हर शब्द कोर्ट में गूँजता है।',
            },
            {
                charId: 11,
                text: 'माननीय न्यायालय, मेरे मुवक्किल का confession police custody में लिया गया, जहाँ torture की possibility से इनकार नहीं किया जा सकता। DNA evidence incomplete है। यह केस reasonable doubt से भरा हुआ है।',
                tone: 'तर्कसंगत, प्रश्नात्मक।',
            },
        ],
    },
    {
        id: 'S28',
        num: 'Scene 28',
        act: 'Act III',
        location: 'Ghaziabad Court',
        year: '2010',
        time: 'Day',
        context: 'Verma delivers closing arguments. Families watch from gallery.',
        dialogues: [
            {
                charId: 10,
                text: 'इन परिवारों ने अपने बच्चों को खोया। इन गरीब माँ-बाप ने थाने के चक्कर लगाए। और फिर अपने बच्चों की हड्डियाँ नाली में से निकलती देखीं। यदि यह फाँसी का केस नहीं है... तो कौन सा है?',
                tone: 'भावनात्मक लेकिन नियंत्रित।',
            },
        ],
    },
    {
        id: 'S29',
        num: 'Scene 29',
        act: 'Act III',
        location: 'CBI Office (Archive)',
        year: '2007',
        time: 'Day',
        context: 'Archive CBI press briefing footage. Koli brought before media briefly.',
        dialogues: [
            {
                charId: 7,
                text: 'हाँ, मैंने किया। मुझे पता था गलत है। फिर भी किया।',
                tone: 'मीडिया के सामने भी वही सपाट tone। लगभग रोबोटिक।',
            },
        ],
    },
    {
        id: 'S30',
        num: 'Scene 30',
        act: 'Act III',
        location: "Kaushik's Chambers, Delhi",
        year: '2010',
        time: 'Day',
        context: 'Kaushik gives interview to documentary. Books and files surround him.',
        dialogues: [
            {
                charId: 11,
                text: 'मेरा काम कानून की रक्षा करना है। अगर confession में दबाव था, अगर evidence chain में gaps हैं — तो वो कहना मेरी ज़िम्मेदारी है। Pandher के बारे में मेरा यही मानना है।',
                tone: 'शांत, professional।',
            },
        ],
    },
    {
        id: 'S32',
        num: 'Scene 32',
        act: 'Act IV',
        location: 'Allahabad High Court',
        year: '2014',
        time: 'Day',
        context: "Pandher's acquittal hearing. He emerges from court.",
        dialogues: [
            {
                charId: 6,
                text: 'मैंने कहा था। मैं बेगुनाह हूँ। High Court ने माना। सच को दबाया नहीं जा सकता।',
                tone: 'जीत का भाव, लेकिन भीड़ के बीच डरा हुआ भी।',
            },
        ],
    },
    {
        id: 'S33',
        num: 'Scene 33',
        act: 'Act IV',
        location: "Chitra Singh's Office, Delhi",
        year: '2020',
        time: 'Day',
        context: 'Present day interview. Chitra now older, surrounded by her years of work.',
        dialogues: [
            {
                charId: 3,
                text: 'मैं आज भी नींद में उन परिवारों के चेहरे देखती हूँ। Pandher को High Court ने छोड़ दिया। Koli की फाँसी अटकी हुई है। क्या यही न्याय है?',
                tone: 'थकान और दर्द दोनों। आवाज़ में उम्र दिखती है।',
            },
            {
                charId: 3,
                text: 'सिस्टम ने उन बच्चों को एक बार मरने दिया — जब कोई नहीं बचाने आया। और दूसरी बार मरने दिया — जब न्याय नहीं मिला।',
                tone: 'रुककर बोलना। यह उनकी ज़िंदगी की सबसे बड़ी बात है।',
            },
        ],
    },
    {
        id: 'S34',
        num: 'Scene 34',
        act: 'Act IV',
        location: 'Nithari Lane, Present Day',
        year: '2023',
        time: 'Dusk',
        context: 'Host stands in the same lane as Scene 2. The lane is now slightly more developed. Children play in the distance.',
        dialogues: [
            {
                charId: 2,
                text: 'यह 2023 है। Surinder Koli अभी भी jail में है। Pandher बाहर हैं। और इस गली में जो बच्चे खेल रहे हैं — उन्हें शायद पता भी नहीं कि उनसे पहले यहाँ किसने अपने बच्चे खोए।',
                tone: 'शांत, लेकिन सवाल हवा में लटका रहता है।',
            },
            {
                charId: 2,
                text: 'Nithari सिर्फ एक crime case नहीं है। यह उस सिस्टम का आईना है जो गरीबों की तरफ पीठ करके खड़ा रहता है।',
                tone: 'सीधे कैमरे में। अंतिम पंक्ति की तरह।',
            },
        ],
    },
    {
        id: 'S35',
        num: 'Scene 35',
        act: 'Epilogue',
        location: 'Memorial Wall, Nithari',
        year: '2023',
        time: 'Golden Hour',
        context: 'Multiple families stand before a makeshift memorial. Photos of missing children on the wall. Sunita, Jaganath and others place flowers.',
        dialogues: [
            {
                charId: 4,
                text: 'रीना... माँ आई थी। माँ हमेशा आती रहेगी।',
                tone: 'फुसफुसाते हुए। कैमरे से नज़रें हटाकर।',
            },
            {
                charId: 5,
                text: 'छोटू, तेरे लिए लड़ा। पूरी ज़िंदगी लड़ूँगा।',
                tone: 'शांत दृढ़ता। पहली बार रोते नहीं।',
            },
            {
                charId: 1,
                text: 'इस देश में... कुछ सवाल कभी नहीं मरते। वो माँओं की आँखों में जीते रहते हैं। पिताओं के हाथों की लकीरों में। और उन गलियों में... जहाँ बच्चे आज भी खेलते हैं।',
                tone: 'अंतिम पंक्तियाँ। बहुत धीमे। फिर लंबा रुकाव।',
            },
        ],
    },
];