// ─── Student Dictionary Master Dataset (Classes 1-10) ─────────────────────────
// Generated automatically from scripts/generate_dictionary_db.py

export interface StudentDictionaryEntry {
  id: number;
  word_en: string;
  word_hi: string;
  phonetic: string;
  part_of_speech: string;
  example_en: string;
  example_hi: string;
  category: 'daily' | 'academic_science' | 'academic_math' | 'exam_vocab' | 'phrases' | string;
}

export const studentDictionaryEntries: StudentDictionaryEntry[] = [
  {
    "id": 1,
    "word_en": "Ability",
    "word_hi": "क्षमता / योग्यता",
    "phonetic": "/əˈbɪlɪti/",
    "part_of_speech": "noun",
    "example_en": "She has the ability to learn languages quickly.",
    "example_hi": "उसमें भाषाएं जल्दी सीखने की क्षमता है।",
    "category": "daily"
  },
  {
    "id": 2,
    "word_en": "Accept",
    "word_hi": "स्वीकार करना",
    "phonetic": "/əkˈsept/",
    "part_of_speech": "verb",
    "example_en": "He accepted the invitation with a warm smile.",
    "example_hi": "उसने मुस्कान के साथ निमंत्रण स्वीकार किया।",
    "category": "daily"
  },
  {
    "id": 3,
    "word_en": "Accident",
    "word_hi": "दुर्घटना / हादसा",
    "phonetic": "/ˈæksɪdənt/",
    "part_of_speech": "noun",
    "example_en": "Always wear a helmet to prevent accident injuries.",
    "example_hi": "दुर्घटना से चोटों से बचने के लिए हमेशा हेलमेट पहनें।",
    "category": "daily"
  },
  {
    "id": 4,
    "word_en": "Account",
    "word_hi": "खाता / हिसाब",
    "phonetic": "/əˈkaʊnt/",
    "part_of_speech": "noun",
    "example_en": "She opened a savings account in the bank.",
    "example_hi": "उसने बैंक में एक बचत खाता खोला।",
    "category": "daily"
  },
  {
    "id": 5,
    "word_en": "Achieve",
    "word_hi": "हासिल करना / प्राप्त करना",
    "phonetic": "/əˈtʃiːv/",
    "part_of_speech": "verb",
    "example_en": "Hard work helps you achieve your goals.",
    "example_hi": "कड़ी मेहनत आपको अपने लक्ष्य हासिल करने में मदद करती है।",
    "category": "daily"
  },
  {
    "id": 6,
    "word_en": "Action",
    "word_hi": "क्रिया / कार्य",
    "phonetic": "/ˈækʃən/",
    "part_of_speech": "noun",
    "example_en": "Actions speak louder than words.",
    "example_hi": "काम शब्दों से अधिक बोलते हैं।",
    "category": "daily"
  },
  {
    "id": 7,
    "word_en": "Activity",
    "word_hi": "गतिविधि",
    "phonetic": "/ækˈtɪvɪti/",
    "part_of_speech": "noun",
    "example_en": "Outdoor activities keep children healthy and active.",
    "example_hi": "मैदानी गतिविधियां बच्चों को स्वस्थ और सक्रिय रखती हैं।",
    "category": "daily"
  },
  {
    "id": 8,
    "word_en": "Admire",
    "word_hi": "प्रशंसा करना",
    "phonetic": "/ədˈmaɪər/",
    "part_of_speech": "verb",
    "example_en": "We all admire her honesty and kindness.",
    "example_hi": "हम सभी उसकी ईमानदारी और दयालुता की प्रशंसा करते हैं।",
    "category": "daily"
  },
  {
    "id": 9,
    "word_en": "Advice",
    "word_hi": "सलाह / उपदेश",
    "phonetic": "/ədˈvaɪs/",
    "part_of_speech": "noun",
    "example_en": "Follow the doctor's advice carefully.",
    "example_hi": "डॉक्टर की सलाह का ध्यानपूर्वक पालन करें।",
    "category": "daily"
  },
  {
    "id": 10,
    "word_en": "Afraid",
    "word_hi": "डरा हुआ / भयभीत",
    "phonetic": "/əˈfreɪd/",
    "part_of_speech": "adjective",
    "example_en": "Don't be afraid to ask questions in class.",
    "example_hi": "कक्षा में प्रश्न पूछने से न डरें।",
    "category": "daily"
  },
  {
    "id": 11,
    "word_en": "Agreement",
    "word_hi": "सहमति / समझौता",
    "phonetic": "/əˈɡriːmənt/",
    "part_of_speech": "noun",
    "example_en": "Both sides came to a mutual agreement.",
    "example_hi": "दोनों पक्ष आपसी सहमति पर पहुंचे।",
    "category": "daily"
  },
  {
    "id": 12,
    "word_en": "Allow",
    "word_hi": "अनुमति देना",
    "phonetic": "/əˈlaʊ/",
    "part_of_speech": "verb",
    "example_en": "Please allow the students to enter the laboratory.",
    "example_hi": "कृपया छात्रों को प्रयोगशाला में प्रवेश करने की अनुमति दें।",
    "category": "daily"
  },
  {
    "id": 13,
    "word_en": "Alone",
    "word_hi": "अकेला",
    "phonetic": "/əˈloʊn/",
    "part_of_speech": "adjective",
    "example_en": "He managed to complete the difficult project alone.",
    "example_hi": "वह अकेले ही कठिन प्रोजेक्ट पूरा करने में सफल रहा।",
    "category": "daily"
  },
  {
    "id": 14,
    "word_en": "Always",
    "word_hi": "हमेशा / सदैव",
    "phonetic": "/ˈɔːlweɪz/",
    "part_of_speech": "adverb",
    "example_en": "Always speak the truth in every situation.",
    "example_hi": "हर परिस्थिति में हमेशा सच बोलें।",
    "category": "daily"
  },
  {
    "id": 15,
    "word_en": "Ambition",
    "word_hi": "महत्वाकांक्षा / लक्ष्य",
    "phonetic": "/æmˈbɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Her ambition is to become a top scientist.",
    "example_hi": "उसकी महत्वाकांक्षा एक शीर्ष वैज्ञानिक बनने की है।",
    "category": "daily"
  },
  {
    "id": 16,
    "word_en": "Ancient",
    "word_hi": "प्राचीन / पुराना",
    "phonetic": "/ˈeɪnʃənt/",
    "part_of_speech": "adjective",
    "example_en": "India has an ancient and rich cultural heritage.",
    "example_hi": "भारत की एक प्राचीन और समृद्ध सांस्कृतिक विरासत है।",
    "category": "daily"
  },
  {
    "id": 17,
    "word_en": "Angry",
    "word_hi": "गुस्सा / क्रोधित",
    "phonetic": "/ˈæŋɡri/",
    "part_of_speech": "adjective",
    "example_en": "Deep breathing helps when you feel angry.",
    "example_hi": "गुस्सा आने पर गहरी सांस लेना मददगार होता है।",
    "category": "daily"
  },
  {
    "id": 18,
    "word_en": "Animal",
    "word_hi": "जानवर / पशु",
    "phonetic": "/ˈænɪməl/",
    "part_of_speech": "noun",
    "example_en": "We should treat every animal with care.",
    "example_hi": "हमें हर जानवर के साथ दयालुता से पेश आना चाहिए।",
    "category": "daily"
  },
  {
    "id": 19,
    "word_en": "Answer",
    "word_hi": "उत्तर / जवाब",
    "phonetic": "/ˈɑːnsər/",
    "part_of_speech": "noun / verb",
    "example_en": "Write the correct answer in your notebook.",
    "example_hi": "अपनी नोटबुक में सही उत्तर लिखें।",
    "category": "daily"
  },
  {
    "id": 20,
    "word_en": "Anxious",
    "word_hi": "चिंतित / व्याकुल",
    "phonetic": "/ˈæŋkʃəs/",
    "part_of_speech": "adjective",
    "example_en": "Students feel anxious before important exams.",
    "example_hi": "महत्वपूर्ण परीक्षाओं से पहले छात्र चिंतित महसूस करते हैं।",
    "category": "daily"
  },
  {
    "id": 21,
    "word_en": "Apologize",
    "word_hi": "माफी मांगना",
    "phonetic": "/əˈpɒlədʒaɪz/",
    "part_of_speech": "verb",
    "example_en": "It is polite to apologize when you make a mistake.",
    "example_hi": "गलती होने पर माफी मांगना विनम्रता की निशानी है।",
    "category": "daily"
  },
  {
    "id": 22,
    "word_en": "Appear",
    "word_hi": "प्रकट होना / दिखाई देना",
    "phonetic": "/əˈpɪər/",
    "part_of_speech": "verb",
    "example_en": "A rainbow appeared after the heavy rain.",
    "example_hi": "भारी बारिश के बाद आसमान में इंद्रधनुष दिखाई दिया।",
    "category": "daily"
  },
  {
    "id": 23,
    "word_en": "Applaud",
    "word_hi": "ताली बजाना / सराहना",
    "phonetic": "/əˈplɔːd/",
    "part_of_speech": "verb",
    "example_en": "The audience applauded loudly after the drama.",
    "example_hi": "नाटक के बाद दर्शकों ने जोर-जोर से तालियां बजाईं।",
    "category": "daily"
  },
  {
    "id": 24,
    "word_en": "Arrive",
    "word_hi": "पहुंचना / आगमन",
    "phonetic": "/əˈraɪv/",
    "part_of_speech": "verb",
    "example_en": "The school bus will arrive at seven in the morning.",
    "example_hi": "स्कूल बस सुबह सात बजे पहुंचेगी।",
    "category": "daily"
  },
  {
    "id": 25,
    "word_en": "Article",
    "word_hi": "लेख / वस्तु",
    "phonetic": "/ˈɑːtɪkəl/",
    "part_of_speech": "noun",
    "example_en": "He wrote an informative article on climate change.",
    "example_hi": "उसने जलवायु परिवर्तन पर एक ज्ञानवर्धक लेख लिखा।",
    "category": "daily"
  },
  {
    "id": 26,
    "word_en": "Artist",
    "word_hi": "कलाकार",
    "phonetic": "/ˈɑːtɪst/",
    "part_of_speech": "noun",
    "example_en": "The artist painted a beautiful village scenery.",
    "example_hi": "कलाकार ने एक सुंदर ग्रामीण परिदृश्य चित्रित किया।",
    "category": "daily"
  },
  {
    "id": 27,
    "word_en": "Ashamed",
    "word_hi": "लज्जित / शर्मिंदा",
    "phonetic": "/əˈʃeɪmd/",
    "part_of_speech": "adjective",
    "example_en": "He felt ashamed of his rude behavior.",
    "example_hi": "वह अपने अभद्र व्यवहार पर शर्मिंदा महसूस कर रहा था।",
    "category": "daily"
  },
  {
    "id": 28,
    "word_en": "Assist",
    "word_hi": "सहायता करना / मदद करना",
    "phonetic": "/əˈsɪst/",
    "part_of_speech": "verb",
    "example_en": "Seniors should assist juniors in science practicals.",
    "example_hi": "वरिष्ठ छात्रों को विज्ञान प्रयोगात्मक कार्यों में कनिष्ठों की मदद करनी चाहिए।",
    "category": "daily"
  },
  {
    "id": 29,
    "word_en": "Astonish",
    "word_hi": "आश्चर्यचकित करना",
    "phonetic": "/əˈstɒnɪʃ/",
    "part_of_speech": "verb",
    "example_en": "Her magical performance astonished the judges.",
    "example_hi": "उसके जादुई प्रदर्शन ने निर्णायकों को आश्चर्यचकित कर दिया।",
    "category": "daily"
  },
  {
    "id": 30,
    "word_en": "Attempt",
    "word_hi": "प्रयास / कोशिश",
    "phonetic": "/əˈtempt/",
    "part_of_speech": "noun / verb",
    "example_en": "Make an honest attempt to solve the riddle.",
    "example_hi": "पहेली को हल करने का एक ईमानदार प्रयास करें।",
    "category": "daily"
  },
  {
    "id": 31,
    "word_en": "Attend",
    "word_hi": "उपस्थित होना",
    "phonetic": "/əˈtend/",
    "part_of_speech": "verb",
    "example_en": "Students must attend all morning assemblies.",
    "example_hi": "छात्रों को सभी सुबह की प्रार्थना सभाओं में उपस्थित होना चाहिए।",
    "category": "daily"
  },
  {
    "id": 32,
    "word_en": "Attitude",
    "word_hi": "दृष्टिकोण / रवैया",
    "phonetic": "/ˈætɪtjuːd/",
    "part_of_speech": "noun",
    "example_en": "A positive attitude leads to success.",
    "example_hi": "एक सकारात्मक दृष्टिकोण सफलता की ओर ले जाता है।",
    "category": "daily"
  },
  {
    "id": 33,
    "word_en": "Attract",
    "word_hi": "आकर्षित करना",
    "phonetic": "/əˈtrækt/",
    "part_of_speech": "verb",
    "example_en": "Bright flowers attract honeybees and butterflies.",
    "example_hi": "चमकीले फूल मधुमक्खियों और तितलियों को आकर्षित करते हैं।",
    "category": "daily"
  },
  {
    "id": 34,
    "word_en": "Author",
    "word_hi": "लेखक",
    "phonetic": "/ˈɔːθər/",
    "part_of_speech": "noun",
    "example_en": "Munshi Premchand is a legendary Hindi author.",
    "example_hi": "मुंशी प्रेमचंद एक महान हिंदी लेखक हैं।",
    "category": "daily"
  },
  {
    "id": 35,
    "word_en": "Avoid",
    "word_hi": "बचना / टालना",
    "phonetic": "/əˈvɔɪd/",
    "part_of_speech": "verb",
    "example_en": "Avoid eating junk food before sports events.",
    "example_hi": "खेल प्रतियोगिताओं से पहले जंक फूड खाने से बचें।",
    "category": "daily"
  },
  {
    "id": 36,
    "word_en": "Awake",
    "word_hi": "जागना / सचेत",
    "phonetic": "/əˈweɪk/",
    "part_of_speech": "adjective / verb",
    "example_en": "Early morning walk keeps your mind awake.",
    "example_hi": "सुबह की सैर आपके दिमाग को सचेत रखती है।",
    "category": "daily"
  },
  {
    "id": 37,
    "word_en": "Aware",
    "word_hi": "जागरूक / अवगत",
    "phonetic": "/əˈweər/",
    "part_of_speech": "adjective",
    "example_en": "Be aware of traffic safety rules.",
    "example_hi": "यातायात सुरक्षा नियमों के प्रति जागरूक रहें।",
    "category": "daily"
  },
  {
    "id": 38,
    "word_en": "Balance",
    "word_hi": "संतुलन",
    "phonetic": "/ˈbæləns/",
    "part_of_speech": "noun / verb",
    "example_en": "A balanced diet provides all necessary nutrients.",
    "example_hi": "एक संतुलित आहार सभी आवश्यक पोषक तत्व प्रदान करता है।",
    "category": "daily"
  },
  {
    "id": 39,
    "word_en": "Barrier",
    "word_hi": "बाधा / रुकावट",
    "phonetic": "/ˈbæriər/",
    "part_of_speech": "noun",
    "example_en": "Language should never become a barrier to learning.",
    "example_hi": "भाषा कभी भी सीखने में बाधा नहीं बननी चाहिए।",
    "category": "daily"
  },
  {
    "id": 40,
    "word_en": "Beautiful",
    "word_hi": "सुंदर / मनोहर",
    "phonetic": "/ˈbjuːtɪfəl/",
    "part_of_speech": "adjective",
    "example_en": "She has a beautiful handwriting.",
    "example_hi": "उसकी लिखावट बहुत सुंदर है।",
    "category": "daily"
  },
  {
    "id": 41,
    "word_en": "Beginner",
    "word_hi": "शुरुआती / नौसिखिया",
    "phonetic": "/bɪˈɡɪnər/",
    "part_of_speech": "noun",
    "example_en": "This coding tutorial is easy for beginners.",
    "example_hi": "यह कोडिंग ट्यूटोरियल शुरुआती छात्रों के लिए आसान है।",
    "category": "daily"
  },
  {
    "id": 42,
    "word_en": "Behavior",
    "word_hi": "व्यवहार / आचरण",
    "phonetic": "/bɪˈheɪvjər/",
    "part_of_speech": "noun",
    "example_en": "Good behavior earns respect everywhere.",
    "example_hi": "अच्छा व्यवहार हर जगह सम्मान दिलाता है।",
    "category": "daily"
  },
  {
    "id": 43,
    "word_en": "Believe",
    "word_hi": "विश्वास करना",
    "phonetic": "/bɪˈliːv/",
    "part_of_speech": "verb",
    "example_en": "Believe in your abilities and never give up.",
    "example_hi": "अपनी क्षमताओं पर विश्वास रखें और कभी हार न मानें।",
    "category": "daily"
  },
  {
    "id": 44,
    "word_en": "Benefit",
    "word_hi": "लाभ / फायदा",
    "phonetic": "/ˈbenɪfɪt/",
    "part_of_speech": "noun",
    "example_en": "Regular exercise brings multiple health benefits.",
    "example_hi": "नियमित व्यायाम से कई स्वास्थ्य लाभ मिलते हैं।",
    "category": "daily"
  },
  {
    "id": 45,
    "word_en": "Brave",
    "word_hi": "बहादुर / साहसी",
    "phonetic": "/breɪv/",
    "part_of_speech": "adjective",
    "example_en": "The brave soldiers protected the country borders.",
    "example_hi": "बहादुर सैनिकों ने देश की सीमाओं की रक्षा की।",
    "category": "daily"
  },
  {
    "id": 46,
    "word_en": "Brief",
    "word_hi": "संक्षिप्त / छोटा",
    "phonetic": "/briːf/",
    "part_of_speech": "adjective",
    "example_en": "Write a brief summary of the lesson.",
    "example_hi": "पाठ का एक संक्षिप्त सारांश लिखें।",
    "category": "daily"
  },
  {
    "id": 47,
    "word_en": "Bright",
    "word_hi": "उज्ज्वल / चमकीला",
    "phonetic": "/braɪt/",
    "part_of_speech": "adjective",
    "example_en": "He is a bright student with a keen interest in science.",
    "example_hi": "वह विज्ञान में गहरी रुचि रखने वाला एक मेधावी छात्र है।",
    "category": "daily"
  },
  {
    "id": 48,
    "word_en": "Build",
    "word_hi": "बनाना / निर्माण करना",
    "phonetic": "/bɪld/",
    "part_of_speech": "verb",
    "example_en": "Daily reading helps build strong vocabulary.",
    "example_hi": "प्रतिदिन पढ़ना मजबूत शब्दावली बनाने में मदद करता है।",
    "category": "daily"
  },
  {
    "id": 49,
    "word_en": "Calm",
    "word_hi": "शांत",
    "phonetic": "/kɑːm/",
    "part_of_speech": "adjective",
    "example_en": "Stay calm during exam hall pressure.",
    "example_hi": "परीक्षा हॉल के दबाव में शांत रहें।",
    "category": "daily"
  },
  {
    "id": 50,
    "word_en": "Capable",
    "word_hi": "सक्षम / समर्थ",
    "phonetic": "/ˈkeɪpəbəl/",
    "part_of_speech": "adjective",
    "example_en": "Every student is capable of scoring good marks.",
    "example_hi": "हर छात्र अच्छे अंक लाने में सक्षम है।",
    "category": "daily"
  },
  {
    "id": 51,
    "word_en": "Careful",
    "word_hi": "सावधान / सतर्क",
    "phonetic": "/ˈkeəfəl/",
    "part_of_speech": "adjective",
    "example_en": "Be careful while handling glassware in the lab.",
    "example_hi": "लैब में कांच के बर्तनों को संभालते समय सावधान रहें।",
    "category": "daily"
  },
  {
    "id": 52,
    "word_en": "Celebrate",
    "word_hi": "मनाना / उत्सव मनाना",
    "phonetic": "/ˈselɪbreɪt/",
    "part_of_speech": "verb",
    "example_en": "We celebrate Independence Day on 15th August.",
    "example_hi": "हम 15 अगस्त को स्वतंत्रता दिवस मनाते हैं।",
    "category": "daily"
  },
  {
    "id": 53,
    "word_en": "Champion",
    "word_hi": "विजेता / चैम्पियन",
    "phonetic": "/ˈtʃæmpiən/",
    "part_of_speech": "noun",
    "example_en": "Our school cricket team became the district champion.",
    "example_hi": "हमारे स्कूल की क्रिकेट टीम जिला विजेता बनी।",
    "category": "daily"
  },
  {
    "id": 54,
    "word_en": "Change",
    "word_hi": "बदलाव / बदलना",
    "phonetic": "/tʃeɪndʒ/",
    "part_of_speech": "verb / noun",
    "example_en": "Be the change you wish to see in the world.",
    "example_hi": "वह बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।",
    "category": "daily"
  },
  {
    "id": 55,
    "word_en": "Character",
    "word_hi": "चरित्र / पात्र",
    "phonetic": "/ˈkærəktər/",
    "part_of_speech": "noun",
    "example_en": "Integrity is the most essential character trait.",
    "example_hi": "सत्यनिष्ठा सबसे आवश्यक चारित्रिक गुण है।",
    "category": "daily"
  },
  {
    "id": 56,
    "word_en": "Choose",
    "word_hi": "चुनना",
    "phonetic": "/tʃuːz/",
    "part_of_speech": "verb",
    "example_en": "Choose your friends wisely.",
    "example_hi": "अपने मित्रों का चुनाव समझदारी से करें।",
    "category": "daily"
  },
  {
    "id": 57,
    "word_en": "Clean",
    "word_hi": "साफ / स्वच्छ",
    "phonetic": "/kliːn/",
    "part_of_speech": "adjective",
    "example_en": "Keep your classroom neat and clean.",
    "example_hi": "अपनी कक्षा को साफ-सुथरा रखें।",
    "category": "daily"
  },
  {
    "id": 58,
    "word_en": "Clever",
    "word_hi": "चतुर / होशियार",
    "phonetic": "/ˈklevər/",
    "part_of_speech": "adjective",
    "example_en": "The clever fox found a shortcut through the forest.",
    "example_hi": "चतुर लोमड़ी ने जंगल से एक छोटा रास्ता खोज निकाला।",
    "category": "daily"
  },
  {
    "id": 59,
    "word_en": "Collect",
    "word_hi": "एकत्र करना / जमा करना",
    "phonetic": "/kəˈlekt/",
    "part_of_speech": "verb",
    "example_en": "Collect dry leaves for your biology project.",
    "example_hi": "अपने जीव विज्ञान प्रोजेक्ट के लिए सूखी पत्तियां एकत्र करें।",
    "category": "daily"
  },
  {
    "id": 60,
    "word_en": "Comfort",
    "word_hi": "आराम / सांत्वना",
    "phonetic": "/ˈkʌmfət/",
    "part_of_speech": "noun",
    "example_en": "Books provide comfort to a lonely mind.",
    "example_hi": "किताबें अकेले मन को सांत्वना प्रदान करती हैं।",
    "category": "daily"
  },
  {
    "id": 61,
    "word_en": "Command",
    "word_hi": "आदेश देना / नियंत्रण",
    "phonetic": "/kəˈmɑːnd/",
    "part_of_speech": "verb / noun",
    "example_en": "She has great command over the English language.",
    "example_hi": "अंग्रेजी भाषा पर उसका बेहतरीन अधिकार है।",
    "category": "daily"
  },
  {
    "id": 62,
    "word_en": "Common",
    "word_hi": "सामान्य / आम",
    "phonetic": "/ˈkɒmən/",
    "part_of_speech": "adjective",
    "example_en": "Cold and cough are common during seasonal changes.",
    "example_hi": "मौसम बदलने पर सर्दी और खांसी आम हैं।",
    "category": "daily"
  },
  {
    "id": 63,
    "word_en": "Compare",
    "word_hi": "तुलना करना",
    "phonetic": "/kəmˈpeər/",
    "part_of_speech": "verb",
    "example_en": "Compare your answers with the textbook solution.",
    "example_hi": "अपने उत्तरों की तुलना पाठ्यपुस्तक के हल से करें।",
    "category": "daily"
  },
  {
    "id": 64,
    "word_en": "Complete",
    "word_hi": "पूरा / समाप्त करना",
    "phonetic": "/kəmˈpliːt/",
    "part_of_speech": "adjective / verb",
    "example_en": "Complete your homework before dinner.",
    "example_hi": "रात के खाने से पहले अपना गृहकार्य पूरा करें।",
    "category": "daily"
  },
  {
    "id": 65,
    "word_en": "Confident",
    "word_hi": "आत्मविश्वासी",
    "phonetic": "/ˈkɒnfɪdənt/",
    "part_of_speech": "adjective",
    "example_en": "Practice regularly to become confident on stage.",
    "example_hi": "मंच पर आत्मविश्वासी बनने के लिए नियमित अभ्यास करें।",
    "category": "daily"
  },
  {
    "id": 66,
    "word_en": "Connect",
    "word_hi": "जोड़ना / संपर्क करना",
    "phonetic": "/kəˈnekt/",
    "part_of_speech": "verb",
    "example_en": "Connect the wires as shown in the circuit diagram.",
    "example_hi": "सर्किट आरेख में दिखाए अनुसार तारों को जोड़ें।",
    "category": "daily"
  },
  {
    "id": 67,
    "word_en": "Consider",
    "word_hi": "विचार करना",
    "phonetic": "/kənˈsɪdər/",
    "part_of_speech": "verb",
    "example_en": "Consider all factors before making a decision.",
    "example_hi": "निर्णय लेने से पहले सभी कारकों पर विचार करें।",
    "category": "daily"
  },
  {
    "id": 68,
    "word_en": "Continue",
    "word_hi": "जारी रखना",
    "phonetic": "/kənˈtɪnjuː/",
    "part_of_speech": "verb",
    "example_en": "Continue your hard work throughout the semester.",
    "example_hi": "पूरे सत्र में अपनी कड़ी मेहनत जारी रखें।",
    "category": "daily"
  },
  {
    "id": 69,
    "word_en": "Control",
    "word_hi": "नियंत्रण करना",
    "phonetic": "/kənˈtroʊl/",
    "part_of_speech": "noun / verb",
    "example_en": "Learn to control your screen time.",
    "example_hi": "अपने स्क्रीन समय को नियंत्रित करना सीखें।",
    "category": "daily"
  },
  {
    "id": 70,
    "word_en": "Cooperate",
    "word_hi": "सहयोग करना",
    "phonetic": "/koʊˈɒpəreɪt/",
    "part_of_speech": "verb",
    "example_en": "Group projects require all team members to cooperate.",
    "example_hi": "सामूहिक परियोजनाओं में सभी सदस्यों का सहयोग आवश्यक है।",
    "category": "daily"
  },
  {
    "id": 71,
    "word_en": "Correct",
    "word_hi": "सही / शुद्ध",
    "phonetic": "/kəˈrekt/",
    "part_of_speech": "adjective / verb",
    "example_en": "Correct any spelling mistakes in your essay.",
    "example_hi": "अपने निबंध में किसी भी वर्तनी की गलती को सुधारें।",
    "category": "daily"
  },
  {
    "id": 72,
    "word_en": "Courage",
    "word_hi": "साहस / हिम्मत",
    "phonetic": "/ˈkʌrɪdʒ/",
    "part_of_speech": "noun",
    "example_en": "It takes courage to stand up against injustice.",
    "example_hi": "अन्याय के खिलाफ खड़े होने के लिए साहस की आवश्यकता होती है।",
    "category": "daily"
  },
  {
    "id": 73,
    "word_en": "Create",
    "word_hi": "रचना करना / बनाना",
    "phonetic": "/kriˈeɪt/",
    "part_of_speech": "verb",
    "example_en": "Students should create original models for science exhibition.",
    "example_hi": "छात्रों को विज्ञान प्रदर्शनी के लिए मूल मॉडल बनाने चाहिए।",
    "category": "daily"
  },
  {
    "id": 74,
    "word_en": "Curious",
    "word_hi": "जिज्ञासु / उत्सुक",
    "phonetic": "/ˈkjʊəriəs/",
    "part_of_speech": "adjective",
    "example_en": "Curious minds discover great inventions.",
    "example_hi": "जिज्ञासु मस्तिष्क महान आविष्कारों की खोज करते हैं।",
    "category": "daily"
  },
  {
    "id": 75,
    "word_en": "Danger",
    "word_hi": "खतरा / संकट",
    "phonetic": "/ˈdeɪndʒər/",
    "part_of_speech": "noun",
    "example_en": "Follow laboratory guidelines to avoid danger.",
    "example_hi": "खतरे से बचने के लिए प्रयोगशाला के दिशानिर्देशों का पालन करें।",
    "category": "daily"
  },
  {
    "id": 76,
    "word_en": "Decision",
    "word_hi": "निर्णय / फैसला",
    "phonetic": "/dɪˈsɪʒən/",
    "part_of_speech": "noun",
    "example_en": "Taking time helps you make the right decision.",
    "example_hi": "समय लेने से आपको सही निर्णय लेने में मदद मिलती है।",
    "category": "daily"
  },
  {
    "id": 77,
    "word_en": "Defend",
    "word_hi": "रक्षा करना / बचाव करना",
    "phonetic": "/dɪˈfend/",
    "part_of_speech": "verb",
    "example_en": "Defend your arguments with facts and logic.",
    "example_hi": "तथ्यों और तर्कों के साथ अपने विचारों का बचाव करें।",
    "category": "daily"
  },
  {
    "id": 78,
    "word_en": "Delicious",
    "word_hi": "स्वादिष्ट / जायकेदार",
    "phonetic": "/dɪˈlɪʃəs/",
    "part_of_speech": "adjective",
    "example_en": "Fresh fruits make a delicious and healthy snack.",
    "example_hi": "ताजे फल एक स्वादिष्ट और पौष्टिक नाश्ता हैं।",
    "category": "daily"
  },
  {
    "id": 79,
    "word_en": "Demand",
    "word_hi": "मांग / जरूरत",
    "phonetic": "/dɪˈmɑːnd/",
    "part_of_speech": "noun / verb",
    "example_en": "Good handwriting is always in high demand.",
    "example_hi": "अच्छी लिखावट की हमेशा बहुत मांग रहती है।",
    "category": "daily"
  },
  {
    "id": 80,
    "word_en": "Depend",
    "word_hi": "निर्भर होना",
    "phonetic": "/dɪˈpend/",
    "part_of_speech": "verb",
    "example_en": "Do not depend entirely on online calculators.",
    "example_hi": "पूरी तरह से ऑनलाइन कैलकुलेटर पर निर्भर न रहें।",
    "category": "daily"
  },
  {
    "id": 81,
    "word_en": "Describe",
    "word_hi": "वर्णन करना",
    "phonetic": "/dɪˈskraɪb/",
    "part_of_speech": "verb",
    "example_en": "Describe the water cycle in five simple steps.",
    "example_hi": "जल चक्र का पांच सरल चरणों में वर्णन करें।",
    "category": "daily"
  },
  {
    "id": 82,
    "word_en": "Design",
    "word_hi": "रूपांकन / बनावट",
    "phonetic": "/dɪˈzaɪn/",
    "part_of_speech": "noun / verb",
    "example_en": "She designed an attractive school magazine cover.",
    "example_hi": "उसने एक आकर्षक स्कूल पत्रिका कवर तैयार किया।",
    "category": "daily"
  },
  {
    "id": 83,
    "word_en": "Destroy",
    "word_hi": "नष्ट करना / बर्बाद करना",
    "phonetic": "/dɪˈstrɔɪ/",
    "part_of_speech": "verb",
    "example_en": "Pollution can destroy aquatic ecosystems.",
    "example_hi": "प्रदूषण जलीय पारिस्थितिकी तंत्र को नष्ट कर सकता है।",
    "category": "daily"
  },
  {
    "id": 84,
    "word_en": "Detail",
    "word_hi": "विस्तार / विवरण",
    "phonetic": "/ˈdiːteɪl/",
    "part_of_speech": "noun",
    "example_en": "Pay close attention to every detail in the question.",
    "example_hi": "प्रश्न के प्रत्येक विवरण पर पूरा ध्यान दें।",
    "category": "daily"
  },
  {
    "id": 85,
    "word_en": "Develop",
    "word_hi": "विकसित करना",
    "phonetic": "/dɪˈveləp/",
    "part_of_speech": "verb",
    "example_en": "Develop a daily habit of reading newspaper.",
    "example_hi": "प्रतिदिन समाचार पत्र पढ़ने की आदत विकसित करें।",
    "category": "daily"
  },
  {
    "id": 86,
    "word_en": "Difficult",
    "word_hi": "कठिन / मुश्किल",
    "phonetic": "/ˈdɪfɪkəlt/",
    "part_of_speech": "adjective",
    "example_en": "No chapter is difficult if you understand the basics.",
    "example_hi": "यदि आप मूल बातें समझ लें तो कोई भी अध्याय कठिन नहीं है।",
    "category": "daily"
  },
  {
    "id": 87,
    "word_en": "Direction",
    "word_hi": "दिशा / निर्देश",
    "phonetic": "/daɪˈrekʃən/",
    "part_of_speech": "noun",
    "example_en": "Read the examination directions carefully.",
    "example_hi": "परीक्षा के निर्देशों को ध्यानपूर्वक पढ़ें।",
    "category": "daily"
  },
  {
    "id": 88,
    "word_en": "Discipline",
    "word_hi": "अनुशासन",
    "phonetic": "/ˈdɪsəplɪn/",
    "part_of_speech": "noun",
    "example_en": "Discipline is the bridge between goals and achievement.",
    "example_hi": "अनुशासन लक्ष्यों और उपलब्धियों के बीच का सेतु है।",
    "category": "daily"
  },
  {
    "id": 89,
    "word_en": "Discover",
    "word_hi": "खोज करना / पता लगाना",
    "phonetic": "/dɪˈskʌvər/",
    "part_of_speech": "verb",
    "example_en": "Scientists discover new facts about space every year.",
    "example_hi": "वैज्ञानिक हर साल अंतरिक्ष के बारे में नए तथ्यों की खोज करते हैं।",
    "category": "daily"
  },
  {
    "id": 90,
    "word_en": "Discuss",
    "word_hi": "चर्चा करना",
    "phonetic": "/dɪˈskʌs/",
    "part_of_speech": "verb",
    "example_en": "Let us discuss the history chapter in groups.",
    "example_hi": "आइए हम समूहों में इतिहास के अध्याय पर चर्चा करें।",
    "category": "daily"
  },
  {
    "id": 91,
    "word_en": "Dream",
    "word_hi": "सपना / लक्ष्य",
    "phonetic": "/driːm/",
    "part_of_speech": "noun / verb",
    "example_en": "Work hard to turn your dreams into reality.",
    "example_hi": "अपने सपनों को हकीकत में बदलने के लिए कड़ी मेहनत करें।",
    "category": "daily"
  },
  {
    "id": 92,
    "word_en": "Early",
    "word_hi": "जल्दी / प्रातः काल",
    "phonetic": "/ˈɜːli/",
    "part_of_speech": "adjective / adverb",
    "example_en": "Early to bed and early to rise makes a person wise.",
    "example_hi": "जल्दी सोना और जल्दी उठना व्यक्ति को बुद्धिमान बनाता है।",
    "category": "daily"
  },
  {
    "id": 93,
    "word_en": "Easy",
    "word_hi": "सरल / आसान",
    "phonetic": "/ˈiːzi/",
    "part_of_speech": "adjective",
    "example_en": "Practice makes math easy and fun.",
    "example_hi": "अभ्यास गणित को आसान और मजेदार बनाता है।",
    "category": "daily"
  },
  {
    "id": 94,
    "word_en": "Educate",
    "word_hi": "शिक्षित करना",
    "phonetic": "/ˈedjʊkeɪt/",
    "part_of_speech": "verb",
    "example_en": "Education empowers young minds to transform society.",
    "example_hi": "शिक्षा युवा मन को समाज को बदलने के लिए सशक्त बनाती है।",
    "category": "daily"
  },
  {
    "id": 95,
    "word_en": "Effort",
    "word_hi": "प्रयास / श्रम",
    "phonetic": "/ˈefət/",
    "part_of_speech": "noun",
    "example_en": "Consistent effort brings extraordinary results.",
    "example_hi": "लगातार प्रयास असाधारण परिणाम लाता है।",
    "category": "daily"
  },
  {
    "id": 96,
    "word_en": "Elect",
    "word_hi": "चुनना / मतदान करना",
    "phonetic": "/ɪˈlekt/",
    "part_of_speech": "verb",
    "example_en": "Students elect their head boy and head girl annually.",
    "example_hi": "छात्र प्रतिवर्ष अपने हेड बॉय और हेड गर्ल का चुनाव करते हैं।",
    "category": "daily"
  },
  {
    "id": 97,
    "word_en": "Emotion",
    "word_hi": "भावना / संवेदना",
    "phonetic": "/ɪˈmoʊʃən/",
    "part_of_speech": "noun",
    "example_en": "Music has the power to express every deep emotion.",
    "example_hi": "संगीत में हर गहरी भावना को व्यक्त करने की शक्ति होती है।",
    "category": "daily"
  },
  {
    "id": 98,
    "word_en": "Encourage",
    "word_hi": "प्रोत्साहित करना",
    "phonetic": "/ɪnˈkʌrɪdʒ/",
    "part_of_speech": "verb",
    "example_en": "Teachers encourage students to participate in debates.",
    "example_hi": "शिक्षक छात्रों को वाद-विवाद में भाग लेने के लिए प्रोत्साहित करते हैं।",
    "category": "daily"
  },
  {
    "id": 99,
    "word_en": "Energy",
    "word_hi": "ऊर्जा / शक्ति",
    "phonetic": "/ˈenədʒi/",
    "part_of_speech": "noun",
    "example_en": "The Sun is the primary source of natural energy.",
    "example_hi": "सूर्य प्राकृतिक ऊर्जा का प्राथमिक स्रोत है।",
    "category": "daily"
  },
  {
    "id": 100,
    "word_en": "Enjoy",
    "word_hi": "आनंद लेना",
    "phonetic": "/ɪnˈdʒɔɪ/",
    "part_of_speech": "verb",
    "example_en": "Enjoy learning new concepts with curiosity.",
    "example_hi": "जिज्ञासा के साथ नई अवधारणाओं को सीखने का आनंद लें।",
    "category": "daily"
  },
  {
    "id": 101,
    "word_en": "Enough",
    "word_hi": "पर्याप्त / काफी",
    "phonetic": "/ɪˈnʌf/",
    "part_of_speech": "adjective",
    "example_en": "Drink enough water to keep yourself energetic.",
    "example_hi": "खुद को ऊर्जावान रखने के लिए पर्याप्त पानी पिएं।",
    "category": "daily"
  },
  {
    "id": 102,
    "word_en": "Ensure",
    "word_hi": "सुनिश्चित करना",
    "phonetic": "/ɪnˈʃɔːr/",
    "part_of_speech": "verb",
    "example_en": "Ensure that all answers are written clearly.",
    "example_hi": "सुनिश्चित करें कि सभी उत्तर स्पष्ट रूप से लिखे गए हैं।",
    "category": "daily"
  },
  {
    "id": 103,
    "word_en": "Equal",
    "word_hi": "समान / बराबर",
    "phonetic": "/ˈiːkwəl/",
    "part_of_speech": "adjective",
    "example_en": "All citizens have equal rights under the law.",
    "example_hi": "कानून की नजर में सभी नागरिकों के समान अधिकार हैं।",
    "category": "daily"
  },
  {
    "id": 104,
    "word_en": "Escape",
    "word_hi": "बच निकलना / पलायन",
    "phonetic": "/ɪˈskeɪp/",
    "part_of_speech": "verb",
    "example_en": "The tiny sparrow managed to escape from the cage.",
    "example_hi": "छोटी गौरैया पिंजरे से बच निकलने में सफल रही।",
    "category": "daily"
  },
  {
    "id": 105,
    "word_en": "Essential",
    "word_hi": "अनिवार्य / आवश्यक",
    "phonetic": "/ɪˈsenʃəl/",
    "part_of_speech": "adjective",
    "example_en": "Clean air and water are essential for human survival.",
    "example_hi": "मानव जीवन के लिए स्वच्छ हवा और पानी आवश्यक हैं।",
    "category": "daily"
  },
  {
    "id": 106,
    "word_en": "Establish",
    "word_hi": "स्थापित करना",
    "phonetic": "/ɪˈstæblɪʃ/",
    "part_of_speech": "verb",
    "example_en": "The school was established in the year 1995.",
    "example_hi": "स्कूल की स्थापना वर्ष 1995 में हुई थी।",
    "category": "daily"
  },
  {
    "id": 107,
    "word_en": "Event",
    "word_hi": "आयोजन / घटना",
    "phonetic": "/ɪˈvent/",
    "part_of_speech": "noun",
    "example_en": "Annual sports day is the most awaited school event.",
    "example_hi": "वार्षिक खेल दिवस स्कूल का सबसे प्रतीक्षित आयोजन है।",
    "category": "daily"
  },
  {
    "id": 108,
    "word_en": "Everywhere",
    "word_hi": "हर जगह / सर्वत्र",
    "phonetic": "/ˈevriweər/",
    "part_of_speech": "adverb",
    "example_en": "Knowledge can be gained from everywhere.",
    "example_hi": "ज्ञान हर जगह से प्राप्त किया जा सकता है।",
    "category": "daily"
  },
  {
    "id": 109,
    "word_en": "Exact",
    "word_hi": "सटीक / बिल्कुल सही",
    "phonetic": "/ɪɡˈzækt/",
    "part_of_speech": "adjective",
    "example_en": "Measure the exact length of the paper strip.",
    "example_hi": "कागज की पट्टी की सटीक लंबाई मापें।",
    "category": "daily"
  },
  {
    "id": 110,
    "word_en": "Examine",
    "word_hi": "जांच करना / परखना",
    "phonetic": "/ɪɡˈzæmɪn/",
    "part_of_speech": "verb",
    "example_en": "The teacher examined the science notebook carefully.",
    "example_hi": "शिक्षक ने विज्ञान की नोटबुक की सावधानीपूर्वक जांच की।",
    "category": "daily"
  },
  {
    "id": 111,
    "word_en": "Example",
    "word_hi": "उदाहरण",
    "phonetic": "/ɪɡˈzɑːmpəl/",
    "part_of_speech": "noun",
    "example_en": "Give a real-world example of Newton's third law.",
    "example_hi": "न्यूटन के तीसरे नियम का एक वास्तविक उदाहरण दें।",
    "category": "daily"
  },
  {
    "id": 112,
    "word_en": "Excellent",
    "word_hi": "उत्कृष्ट / बहुत बढ़िया",
    "phonetic": "/ˈeksələnt/",
    "part_of_speech": "adjective",
    "example_en": "Her presentation received an excellent rating.",
    "example_hi": "उसकी प्रस्तुति को उत्कृष्ट रेटिंग मिली।",
    "category": "daily"
  },
  {
    "id": 113,
    "word_en": "Exercise",
    "word_hi": "व्यायाम / अभ्यास",
    "phonetic": "/ˈeksəsaɪz/",
    "part_of_speech": "noun / verb",
    "example_en": "Do exercise daily to improve mental focus.",
    "example_hi": "मानसिक एकाग्रता बढ़ाने के लिए प्रतिदिन व्यायाम करें।",
    "category": "daily"
  },
  {
    "id": 114,
    "word_en": "Experience",
    "word_hi": "अनुभव",
    "phonetic": "/ɪkˈspɪəriəns/",
    "part_of_speech": "noun / verb",
    "example_en": "Experience teaches valuable life lessons.",
    "example_hi": "अनुभव जीवन के बहुमूल्य सबक सिखाता है।",
    "category": "daily"
  },
  {
    "id": 115,
    "word_en": "Explain",
    "word_hi": "समझाना / व्याख्या करना",
    "phonetic": "/ɪkˈspleɪn/",
    "part_of_speech": "verb",
    "example_en": "Can you explain how solar eclipse occurs?",
    "example_hi": "क्या आप समझा सकते हैं कि सूर्य ग्रहण कैसे होता है?",
    "category": "daily"
  },
  {
    "id": 116,
    "word_en": "Explore",
    "word_hi": "खोजबीन करना / जानना",
    "phonetic": "/ɪkˈsplɔːr/",
    "part_of_speech": "verb",
    "example_en": "Read library books to explore diverse cultures.",
    "example_hi": "विविध संस्कृतियों को जानने के लिए पुस्तकालय की पुस्तकें पढ़ें।",
    "category": "daily"
  },
  {
    "id": 117,
    "word_en": "Express",
    "word_hi": "व्यक्त करना",
    "phonetic": "/ɪkˈspres/",
    "part_of_speech": "verb",
    "example_en": "Poetry is a powerful way to express feelings.",
    "example_hi": "कविता भावनाओं को व्यक्त करने का एक सशक्त माध्यम है।",
    "category": "daily"
  },
  {
    "id": 118,
    "word_en": "Extraordinary",
    "word_hi": "असाधारण / अद्भुत",
    "phonetic": "/ɪkˈstrɔːdɪnəri/",
    "part_of_speech": "adjective",
    "example_en": "Ramanujan possessed extraordinary mathematical talent.",
    "example_hi": "रामानुजन के पास असाधारण गणितीय प्रतिभा थी।",
    "category": "daily"
  },
  {
    "id": 119,
    "word_en": "Famous",
    "word_hi": "प्रसिद्ध / विख्यात",
    "phonetic": "/ˈfeɪməs/",
    "part_of_speech": "adjective",
    "example_en": "The Taj Mahal is famous worldwide for its architecture.",
    "example_hi": "ताजमहल अपनी वास्तुकला के लिए दुनिया भर में प्रसिद्ध है।",
    "category": "daily"
  },
  {
    "id": 120,
    "word_en": "Fast",
    "word_hi": "तेज / शीघ्र",
    "phonetic": "/fɑːst/",
    "part_of_speech": "adjective / adverb",
    "example_en": "Cheetah is the fastest land animal.",
    "example_hi": "चीता जमीन पर सबसे तेज दौड़ने वाला जानवर है।",
    "category": "daily"
  },
  {
    "id": 121,
    "word_en": "Favorite",
    "word_hi": "पसंदीदा / प्रिय",
    "phonetic": "/ˈfeɪvərɪt/",
    "part_of_speech": "adjective / noun",
    "example_en": "Science and mathematics are my favorite subjects.",
    "example_hi": "विज्ञान और गणित मेरे पसंदीदा विषय हैं।",
    "category": "daily"
  },
  {
    "id": 122,
    "word_en": "Fearless",
    "word_hi": "निडर / निर्भीक",
    "phonetic": "/ˈfɪələs/",
    "part_of_speech": "adjective",
    "example_en": "Be fearless in voicing your constructive opinions.",
    "example_hi": "अपनी रचनात्मक राय व्यक्त करने में निडर रहें।",
    "category": "daily"
  },
  {
    "id": 123,
    "word_en": "Finish",
    "word_hi": "समाप्त करना / पूरा करना",
    "phonetic": "/ˈfɪnɪʃ/",
    "part_of_speech": "verb",
    "example_en": "Finish reading the chapter before tomorrow's class.",
    "example_hi": "कल की कक्षा से पहले अध्याय को पूरा पढ़ लें।",
    "category": "daily"
  },
  {
    "id": 124,
    "word_en": "Focus",
    "word_hi": "ध्यान केंद्रित करना",
    "phonetic": "/ˈfoʊkəs/",
    "part_of_speech": "noun / verb",
    "example_en": "Focus on conceptual understanding rather than memorization.",
    "example_hi": "रटने के बजाय वैचारिक समझ पर ध्यान केंद्रित करें।",
    "category": "daily"
  },
  {
    "id": 125,
    "word_en": "Follow",
    "word_hi": "अनुसरण करना / पालन करना",
    "phonetic": "/ˈfɒloʊ/",
    "part_of_speech": "verb",
    "example_en": "Always follow safety rules in the laboratory.",
    "example_hi": "प्रयोगशाला में हमेशा सुरक्षा नियमों का पालन करें।",
    "category": "daily"
  },
  {
    "id": 126,
    "word_en": "Forgive",
    "word_hi": "क्षमा करना / माफ करना",
    "phonetic": "/fəˈɡɪv/",
    "part_of_speech": "verb",
    "example_en": "Strong people have the capacity to forgive.",
    "example_hi": "सशक्त व्यक्तियों में क्षमा करने का सामर्थ्य होता है।",
    "category": "daily"
  },
  {
    "id": 127,
    "word_en": "Freedom",
    "word_hi": "स्वतंत्रता / आजादी",
    "phonetic": "/ˈfriːdəm/",
    "part_of_speech": "noun",
    "example_en": "Freedom comes with great responsibility.",
    "example_hi": "स्वतंत्रता अपने साथ बड़ी जिम्मेदारी लाती है।",
    "category": "daily"
  },
  {
    "id": 128,
    "word_en": "Friend",
    "word_hi": "मित्र / दोस्त",
    "phonetic": "/frend/",
    "part_of_speech": "noun",
    "example_en": "A loyal friend stands by you in times of difficulty.",
    "example_hi": "एक सच्चा मित्र कठिनाई के समय आपके साथ खड़ा रहता है।",
    "category": "daily"
  },
  {
    "id": 129,
    "word_en": "Future",
    "word_hi": "भविष्य / आगामी समय",
    "phonetic": "/ˈfjuːtʃər/",
    "part_of_speech": "noun",
    "example_en": "Your habits today shape your future tomorrow.",
    "example_hi": "आज की आपकी आदतें कल आपके भविष्य का निर्माण करती हैं।",
    "category": "daily"
  },
  {
    "id": 130,
    "word_en": "Gain",
    "word_hi": "प्राप्त करना / लाभ",
    "phonetic": "/ɡeɪn/",
    "part_of_speech": "verb / noun",
    "example_en": "Reading helps you gain vast knowledge.",
    "example_hi": "पढ़ने से आपको व्यापक ज्ञान प्राप्त करने में मदद मिलती है।",
    "category": "daily"
  },
  {
    "id": 131,
    "word_en": "Generous",
    "word_hi": "उदार / दयालु",
    "phonetic": "/ˈdʒenərəs/",
    "part_of_speech": "adjective",
    "example_en": "He was generous enough to share his study notes.",
    "example_hi": "वह अपने स्टडी नोट्स साझा करने में बहुत उदार था।",
    "category": "daily"
  },
  {
    "id": 132,
    "word_en": "Goal",
    "word_hi": "लक्ष्य / उद्देश्य",
    "phonetic": "/ɡoʊl/",
    "part_of_speech": "noun",
    "example_en": "Set achievable short-term goals for daily studies.",
    "example_hi": "दैनिक अध्ययन के लिए प्राप्त करने योग्य छोटे लक्ष्य निर्धारित करें।",
    "category": "daily"
  },
  {
    "id": 133,
    "word_en": "Gratitude",
    "word_hi": "कृतज्ञता / आभार",
    "phonetic": "/ˈɡrætɪtjuːd/",
    "part_of_speech": "noun",
    "example_en": "Express gratitude to your teachers and parents.",
    "example_hi": "अपने शिक्षकों और माता-पिता के प्रति आभार व्यक्त करें।",
    "category": "daily"
  },
  {
    "id": 134,
    "word_en": "Growth",
    "word_hi": "विकास / वृद्धि",
    "phonetic": "/ɡroʊθ/",
    "part_of_speech": "noun",
    "example_en": "Reading fuels personal and academic growth.",
    "example_hi": "अध्ययन व्यक्तिगत और शैक्षणिक विकास को गति देता है।",
    "category": "daily"
  },
  {
    "id": 135,
    "word_en": "Guidance",
    "word_hi": "मार्गदर्शन",
    "phonetic": "/ˈɡaɪdəns/",
    "part_of_speech": "noun",
    "example_en": "Seek guidance whenever you feel stuck in a problem.",
    "example_hi": "जब भी आप किसी समस्या में अटकें तो मार्गदर्शन लें।",
    "category": "daily"
  },
  {
    "id": 136,
    "word_en": "Habit",
    "word_hi": "आदत",
    "phonetic": "/ˈhæbɪt/",
    "part_of_speech": "noun",
    "example_en": "Waking up early is a healthy lifestyle habit.",
    "example_hi": "सुबह जल्दी उठना एक स्वस्थ जीवनशैली की आदत है।",
    "category": "daily"
  },
  {
    "id": 137,
    "word_en": "Happen",
    "word_hi": "घटित होना / होना",
    "phonetic": "/ˈhæpən/",
    "part_of_speech": "verb",
    "example_en": "Miracles happen when preparation meets opportunity.",
    "example_hi": "चमत्कार तब होते हैं जब तैयारी अवसर से मिलती है।",
    "category": "daily"
  },
  {
    "id": 138,
    "word_en": "Hardworking",
    "word_hi": "मेहनती / परिश्रमी",
    "phonetic": "/ˌhɑːdˈwɜːkɪŋ/",
    "part_of_speech": "adjective",
    "example_en": "Hardworking students consistently perform well.",
    "example_hi": "मेहनती छात्र लगातार अच्छा प्रदर्शन करते हैं।",
    "category": "daily"
  },
  {
    "id": 139,
    "word_en": "Healthy",
    "word_hi": "स्वस्थ / निरोगी",
    "phonetic": "/ˈhelθi/",
    "part_of_speech": "adjective",
    "example_en": "A healthy mind lives in a healthy body.",
    "example_hi": "एक स्वस्थ शरीर में ही एक स्वस्थ मस्तिष्क निवास करता है।",
    "category": "daily"
  },
  {
    "id": 140,
    "word_en": "Helpful",
    "word_hi": "सहायक / मददगार",
    "phonetic": "/ˈhelpfəl/",
    "part_of_speech": "adjective",
    "example_en": "The dictionary is very helpful for learning meanings.",
    "example_hi": "शब्दकोश अर्थ सीखने के लिए बहुत मददगार है।",
    "category": "daily"
  },
  {
    "id": 141,
    "word_en": "Honest",
    "word_hi": "ईमानदार / सच्चा",
    "phonetic": "/ˈɒnɪst/",
    "part_of_speech": "adjective",
    "example_en": "Honest effort never goes unrewarded.",
    "example_hi": "ईमानदार प्रयास कभी निष्फल नहीं होता।",
    "category": "daily"
  },
  {
    "id": 142,
    "word_en": "Hope",
    "word_hi": "आशा / उम्मीद",
    "phonetic": "/hoʊp/",
    "part_of_speech": "noun / verb",
    "example_en": "Never lose hope in tough situations.",
    "example_hi": "कठिन परिस्थितियों में कभी उम्मीद न छोड़ें।",
    "category": "daily"
  },
  {
    "id": 143,
    "word_en": "Humorous",
    "word_hi": "हास्यपूर्ण / मनोरंजक",
    "phonetic": "/ˈhjuːmərəs/",
    "part_of_speech": "adjective",
    "example_en": "The speaker shared a humorous school story.",
    "example_hi": "वक्ता ने स्कूल की एक हास्यप्रद कहानी साझा की।",
    "category": "daily"
  },
  {
    "id": 144,
    "word_en": "Identify",
    "word_hi": "पहचानना",
    "phonetic": "/aɪˈdentɪfaɪ/",
    "part_of_speech": "verb",
    "example_en": "Identify the subject and predicate in the given sentence.",
    "example_hi": "दिए गए वाक्य में उद्देश्य और विधेय की पहचान करें।",
    "category": "daily"
  },
  {
    "id": 145,
    "word_en": "Ignore",
    "word_hi": "अनदेखा करना",
    "phonetic": "/ɪɡˈnɔːr/",
    "part_of_speech": "verb",
    "example_en": "Ignore negative distractions during study hours.",
    "example_hi": "अध्ययन के घंटों के दौरान नकारात्मक भटकावों को अनदेखा करें।",
    "category": "daily"
  },
  {
    "id": 146,
    "word_en": "Imagine",
    "word_hi": "कल्पना करना",
    "phonetic": "/ɪˈmædʒɪn/",
    "part_of_speech": "verb",
    "example_en": "Imagine what life would be like without electricity.",
    "example_hi": "कल्पना करें कि बिना बिजली के जीवन कैसा होगा।",
    "category": "daily"
  },
  {
    "id": 147,
    "word_en": "Improve",
    "word_hi": "सुधारना / बेहतर बनाना",
    "phonetic": "/ɪmˈpruːv/",
    "part_of_speech": "verb",
    "example_en": "Daily practice helps improve writing skills.",
    "example_hi": "दैनिक अभ्यास लेखन कौशल में सुधार करने में मदद करता है।",
    "category": "daily"
  },
  {
    "id": 148,
    "word_en": "Include",
    "word_hi": "शामिल करना",
    "phonetic": "/ɪnˈkluːd/",
    "part_of_speech": "verb",
    "example_en": "Include diagrams to score better marks in science.",
    "example_hi": "विज्ञान में बेहतर अंक प्राप्त करने के लिए चित्रों को शामिल करें।",
    "category": "daily"
  },
  {
    "id": 149,
    "word_en": "Inspire",
    "word_hi": "प्रेरित करना",
    "phonetic": "/ɪnˈspaɪər/",
    "part_of_speech": "verb",
    "example_en": "Great leaders inspire people with their actions.",
    "example_hi": "महान नेता अपने कार्यों से लोगों को प्रेरित करते हैं।",
    "category": "daily"
  },
  {
    "id": 150,
    "word_en": "Interesting",
    "word_hi": "दिलचस्प / रोचक",
    "phonetic": "/ˈɪntrəstɪŋ/",
    "part_of_speech": "adjective",
    "example_en": "The science documentary was very interesting.",
    "example_hi": "विज्ञान की वृत्तचित्र फिल्म बहुत रोचक थी।",
    "category": "daily"
  },
  {
    "id": 151,
    "word_en": "Journey",
    "word_hi": "यात्रा / सफर",
    "phonetic": "/ˈdʒɜːni/",
    "part_of_speech": "noun",
    "example_en": "A journey of a thousand miles begins with a single step.",
    "example_hi": "हजार मील की यात्रा की शुरुआत भी एक कदम से होती है।",
    "category": "daily"
  },
  {
    "id": 152,
    "word_en": "Joy",
    "word_hi": "खुशी / आनंद",
    "phonetic": "/dʒɔɪ/",
    "part_of_speech": "noun",
    "example_en": "Sharing knowledge brings boundless joy.",
    "example_hi": "ज्ञान बांटने से असीम आनंद मिलता है।",
    "category": "daily"
  },
  {
    "id": 153,
    "word_en": "Judge",
    "word_hi": "न्याय करना / परखना",
    "phonetic": "/dʒʌdʒ/",
    "part_of_speech": "noun / verb",
    "example_en": "Do not judge a book by its cover.",
    "example_hi": "किसी पुस्तक को केवल उसके आवरण से न परखें।",
    "category": "daily"
  },
  {
    "id": 154,
    "word_en": "Kind",
    "word_hi": "दयालु / प्रकार",
    "phonetic": "/kaɪnd/",
    "part_of_speech": "adjective / noun",
    "example_en": "Be kind to everyone you meet along your way.",
    "example_hi": "अपने रास्ते में मिलने वाले हर व्यक्ति के प्रति दयालु रहें।",
    "category": "daily"
  },
  {
    "id": 155,
    "word_en": "Knowledge",
    "word_hi": "ज्ञान / विद्या",
    "phonetic": "/ˈnɒlɪdʒ/",
    "part_of_speech": "noun",
    "example_en": "Knowledge is the greatest treasure one can possess.",
    "example_hi": "ज्ञान सबसे बड़ा खजाना है जो किसी के पास हो सकता है।",
    "category": "daily"
  },
  {
    "id": 156,
    "word_en": "Atom",
    "word_hi": "परमाणु",
    "phonetic": "/ˈætəm/",
    "part_of_speech": "noun",
    "example_en": "An atom is the basic building block of all matter.",
    "example_hi": "परमाणु सभी पदार्थों का मूल निर्माण खंड है।",
    "category": "academic_science"
  },
  {
    "id": 157,
    "word_en": "Acid",
    "word_hi": "अम्ल / तेजाब",
    "phonetic": "/ˈæsɪd/",
    "part_of_speech": "noun",
    "example_en": "Hydrochloric acid is produced naturally in our stomach.",
    "example_hi": "हाइड्रोक्लोरिक अम्ल हमारे पेट में स्वाभाविक रूप से बनता है।",
    "category": "academic_science"
  },
  {
    "id": 158,
    "word_en": "Base",
    "word_hi": "क्षारक",
    "phonetic": "/beɪs/",
    "part_of_speech": "noun",
    "example_en": "Bases turn red litmus paper into blue.",
    "example_hi": "क्षारक लाल लिटमस पेपर को नीला कर देते हैं।",
    "category": "academic_science"
  },
  {
    "id": 159,
    "word_en": "Cell",
    "word_hi": "कोशिका",
    "phonetic": "/sel/",
    "part_of_speech": "noun",
    "example_en": "The cell is the structural and functional unit of life.",
    "example_hi": "कोशिका जीवन की संरचनात्मक और कार्यात्मक इकाई है।",
    "category": "academic_science"
  },
  {
    "id": 160,
    "word_en": "Chlorophyll",
    "word_hi": "पर्णहरित / क्लोरोफिल",
    "phonetic": "/ˈklɒrəfɪl/",
    "part_of_speech": "noun",
    "example_en": "Chlorophyll gives green color to leaves and absorbs sunlight.",
    "example_hi": "क्लोरोफिल पत्तियों को हरा रंग देता है और धूप को अवशोषित करता है।",
    "category": "academic_science"
  },
  {
    "id": 161,
    "word_en": "Condensation",
    "word_hi": "संघनन",
    "phonetic": "/ˌkɒndenˈseɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Condensation of water vapor leads to cloud formation.",
    "example_hi": "जलवाष्प के संघनन से बादलों का निर्माण होता है।",
    "category": "academic_science"
  },
  {
    "id": 162,
    "word_en": "Density",
    "word_hi": "घनत्व",
    "phonetic": "/ˈdensɪti/",
    "part_of_speech": "noun",
    "example_en": "Density is mass per unit volume of a substance.",
    "example_hi": "घनत्व किसी पदार्थ के प्रति इकाई आयतन का द्रव्यमान है।",
    "category": "academic_science"
  },
  {
    "id": 163,
    "word_en": "Digestion",
    "word_hi": "पाचन",
    "phonetic": "/daɪˈdʒestʃən/",
    "part_of_speech": "noun",
    "example_en": "Digestion starts in the mouth with salivary enzymes.",
    "example_hi": "पाचन मुंह में लार एंजाइमों के साथ शुरू होता है।",
    "category": "academic_science"
  },
  {
    "id": 164,
    "word_en": "Ecosystem",
    "word_hi": "पारिस्थितिकी तंत्र",
    "phonetic": "/ˈiːkoʊˌsɪstəm/",
    "part_of_speech": "noun",
    "example_en": "A forest ecosystem supports diverse plants and animals.",
    "example_hi": "एक वन पारिस्थितिकी तंत्र विविध पौधों और जानवरों का पोषण करता है।",
    "category": "academic_science"
  },
  {
    "id": 165,
    "word_en": "Electricity",
    "word_hi": "विद्युत / बिजली",
    "phonetic": "/ɪˌlekˈtrɪsɪti/",
    "part_of_speech": "noun",
    "example_en": "Electricity flows through conductors like copper wires.",
    "example_hi": "बिजली तांबे के तारों जैसे सुचालकों से होकर बहती है।",
    "category": "academic_science"
  },
  {
    "id": 166,
    "word_en": "Element",
    "word_hi": "तत्व",
    "phonetic": "/ˈelɪmənt/",
    "part_of_speech": "noun",
    "example_en": "Gold is a chemical element that does not corrode easily.",
    "example_hi": "सोना एक रासायनिक तत्व है जिसमें आसानी से जंग नहीं लगती।",
    "category": "academic_science"
  },
  {
    "id": 167,
    "word_en": "Evaporation",
    "word_hi": "वाष्पीकरण",
    "phonetic": "/ɪˌvæpəˈreɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Evaporation causes cooling on hot summer afternoons.",
    "example_hi": "गर्मियों की दोपहर में वाष्पीकरण से ठंडक महसूस होती है।",
    "category": "academic_science"
  },
  {
    "id": 168,
    "word_en": "Force",
    "word_hi": "बल",
    "phonetic": "/fɔːs/",
    "part_of_speech": "noun",
    "example_en": "Gravitational force pulls falling objects towards Earth.",
    "example_hi": "गुरुत्वाकर्षण बल गिरती वस्तुओं को पृथ्वी की ओर खींचता है।",
    "category": "academic_science"
  },
  {
    "id": 169,
    "word_en": "Friction",
    "word_hi": "घर्षण",
    "phonetic": "/ˈfrɪkʃən/",
    "part_of_speech": "noun",
    "example_en": "Friction between shoes and the road enables us to walk.",
    "example_hi": "जूते और सड़क के बीच का घर्षण हमें चलने में सक्षम बनाता है।",
    "category": "academic_science"
  },
  {
    "id": 170,
    "word_en": "Gravity",
    "word_hi": "गुरुत्वाकर्षण",
    "phonetic": "/ˈɡrævəti/",
    "part_of_speech": "noun",
    "example_en": "Sir Isaac Newton formulated the universal law of gravity.",
    "example_hi": "सर आइजैक न्यूटन ने गुरुत्वाकर्षण का सार्वभौमिक नियम प्रतिपादित किया।",
    "category": "academic_science"
  },
  {
    "id": 171,
    "word_en": "Habitat",
    "word_hi": "प्राकृतिक आवास",
    "phonetic": "/ˈhæbɪtæt/",
    "part_of_speech": "noun",
    "example_en": "The Arctic region is the natural habitat of polar bears.",
    "example_hi": "ध्रुवीय भालुओं का प्राकृतिक आवास आर्कटिक क्षेत्र है।",
    "category": "academic_science"
  },
  {
    "id": 172,
    "word_en": "Heat",
    "word_hi": "ऊष्मा / ताप",
    "phonetic": "/hiːt/",
    "part_of_speech": "noun",
    "example_en": "Heat travels from hotter objects to colder objects.",
    "example_hi": "ऊष्मा गर्म वस्तुओं से ठंडी वस्तुओं की ओर प्रवाहित होती है।",
    "category": "academic_science"
  },
  {
    "id": 173,
    "word_en": "Hormone",
    "word_hi": "हार्मोन",
    "phonetic": "/ˈhɔːmoʊn/",
    "part_of_speech": "noun",
    "example_en": "Insulin is an essential hormone regulating blood glucose.",
    "example_hi": "इंसुलिन रक्त शर्करा को नियंत्रित करने वाला एक आवश्यक हार्मोन है।",
    "category": "academic_science"
  },
  {
    "id": 174,
    "word_en": "Immunity",
    "word_hi": "रोग प्रतिरोधक क्षमता",
    "phonetic": "/ɪˈmjuːnɪti/",
    "part_of_speech": "noun",
    "example_en": "A nutrient-rich diet strengthens your body immunity.",
    "example_hi": "पोषक तत्वों से भरपूर आहार शरीर की रोग प्रतिरोधक क्षमता को बढ़ाता है।",
    "category": "academic_science"
  },
  {
    "id": 175,
    "word_en": "Inertia",
    "word_hi": "जड़त्व",
    "phonetic": "/ɪˈnɜːʃə/",
    "part_of_speech": "noun",
    "example_en": "Inertia is the resistance of an object to changes in motion.",
    "example_hi": "जड़त्व किसी वस्तु की गति में परिवर्तन का प्रतिरोध है।",
    "category": "academic_science"
  },
  {
    "id": 176,
    "word_en": "Magnetism",
    "word_hi": "चुंबकत्व",
    "phonetic": "/ˈmæɡnətɪzəm/",
    "part_of_speech": "noun",
    "example_en": "Magnetism is a fundamental physical force.",
    "example_hi": "चुंबकत्व एक मौलिक भौतिक बल है।",
    "category": "academic_science"
  },
  {
    "id": 177,
    "word_en": "Mass",
    "word_hi": "द्रव्यमान",
    "phonetic": "/mæs/",
    "part_of_speech": "noun",
    "example_en": "The mass of an object remains constant everywhere.",
    "example_hi": "किसी वस्तु का द्रव्यमान हर जगह स्थिर रहता है।",
    "category": "academic_science"
  },
  {
    "id": 178,
    "word_en": "Microscope",
    "word_hi": "सूक्ष्मदर्शी",
    "phonetic": "/ˈmaɪkrəskoʊp/",
    "part_of_speech": "noun",
    "example_en": "We viewed onion peel cells under a compound microscope.",
    "example_hi": "हमने संयुक्त सूक्ष्मदर्शी के नीचे प्याज के छिलके की कोशिकाओं को देखा।",
    "category": "academic_science"
  },
  {
    "id": 179,
    "word_en": "Mineral",
    "word_hi": "खनिज",
    "phonetic": "/ˈmɪnərəl/",
    "part_of_speech": "noun",
    "example_en": "Iron and calcium are vital dietary minerals.",
    "example_hi": "आयरन और कैल्शियम महत्वपूर्ण आहार संबंधी खनिज हैं।",
    "category": "academic_science"
  },
  {
    "id": 180,
    "word_en": "Molecule",
    "word_hi": "अणु",
    "phonetic": "/ˈmɒlɪkjuːl/",
    "part_of_speech": "noun",
    "example_en": "A water molecule consists of two hydrogen atoms and one oxygen atom.",
    "example_hi": "पानी का एक अणु दो हाइड्रोजन और एक ऑक्सीजन परमाणु से बनता है।",
    "category": "academic_science"
  },
  {
    "id": 181,
    "word_en": "Nutrient",
    "word_hi": "पोषक तत्व",
    "phonetic": "/ˈnjuːtriənt/",
    "part_of_speech": "noun",
    "example_en": "Proteins are body-building nutrients.",
    "example_hi": "प्रोटीन शरीर का निर्माण करने वाले पोषक तत्व हैं।",
    "category": "academic_science"
  },
  {
    "id": 182,
    "word_en": "Organism",
    "word_hi": "जीव",
    "phonetic": "/ˈɔːɡənɪzəm/",
    "part_of_speech": "noun",
    "example_en": "Bacteria are unicellular microscopic organisms.",
    "example_hi": "बैक्टीरिया एककोशिकीय सूक्ष्म जीव हैं।",
    "category": "academic_science"
  },
  {
    "id": 183,
    "word_en": "Oxygen",
    "word_hi": "ऑक्सीजन / प्राणवायु",
    "phonetic": "/ˈɒksɪdʒən/",
    "part_of_speech": "noun",
    "example_en": "Plants release oxygen during daytime photosynthesis.",
    "example_hi": "पौधे दिन के प्रकाश संश्लेषण के दौरान ऑक्सीजन छोड़ते हैं।",
    "category": "academic_science"
  },
  {
    "id": 184,
    "word_en": "Photosynthesis",
    "word_hi": "प्रकाश संश्लेषण",
    "phonetic": "/ˌfoʊtoʊˈsɪnθəsɪs/",
    "part_of_speech": "noun",
    "example_en": "Photosynthesis converts solar energy into chemical energy.",
    "example_hi": "प्रकाश संश्लेषण सौर ऊर्जा को रासायनिक ऊर्जा में बदलता है।",
    "category": "academic_science"
  },
  {
    "id": 185,
    "word_en": "Pollination",
    "word_hi": "परागण",
    "phonetic": "/ˌpɒlɪˈneɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Bees play a vital role in plant pollination.",
    "example_hi": "मधुमक्खियां पौधों के परागण में महत्वपूर्ण भूमिका निभाती हैं।",
    "category": "academic_science"
  },
  {
    "id": 186,
    "word_en": "Pressure",
    "word_hi": "दबाव / दाब",
    "phonetic": "/ˈpreʃər/",
    "part_of_speech": "noun",
    "example_en": "Atmospheric pressure decreases at higher altitudes.",
    "example_hi": "अधिक ऊंचाई पर वायुमंडलीय दबाव कम हो जाता है।",
    "category": "academic_science"
  },
  {
    "id": 187,
    "word_en": "Reflection",
    "word_hi": "परावर्तन",
    "phonetic": "/rɪˈflekʃən/",
    "part_of_speech": "noun",
    "example_en": "A mirror shows your image due to reflection of light.",
    "example_hi": "दर्पण प्रकाश के परावर्तन के कारण आपका प्रतिबिंब दिखाता है।",
    "category": "academic_science"
  },
  {
    "id": 188,
    "word_en": "Refraction",
    "word_hi": "अपवर्तन",
    "phonetic": "/rɪˈfrækʃən/",
    "part_of_speech": "noun",
    "example_en": "A pencil looks bent in water due to refraction of light.",
    "example_hi": "प्रकाश के अपवर्तन के कारण पानी में पेंसिल मुड़ी हुई दिखाई देती है।",
    "category": "academic_science"
  },
  {
    "id": 189,
    "word_en": "Respiration",
    "word_hi": "श्वसन",
    "phonetic": "/ˌrespəˈreɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Cellular respiration produces energy in living cells.",
    "example_hi": "कोशिकीय श्वसन जीवित कोशिकाओं में ऊर्जा उत्पन्न करता है।",
    "category": "academic_science"
  },
  {
    "id": 190,
    "word_en": "Skeleton",
    "word_hi": "कंकाल",
    "phonetic": "/ˈskelɪtən/",
    "part_of_speech": "noun",
    "example_en": "The human skeleton consists of 206 bones in adults.",
    "example_hi": "वयस्कों में मानव कंकाल 206 हड्डियों से बना होता है।",
    "category": "academic_science"
  },
  {
    "id": 191,
    "word_en": "Solute",
    "word_hi": "विलेय",
    "phonetic": "/ˈsɒljuːt/",
    "part_of_speech": "noun",
    "example_en": "In sugar water solution, sugar acts as the solute.",
    "example_hi": "चीनी और पानी के घोल में चीनी विलेय का काम करती है।",
    "category": "academic_science"
  },
  {
    "id": 192,
    "word_en": "Solvent",
    "word_hi": "विलायक",
    "phonetic": "/ˈsɒlvənt/",
    "part_of_speech": "noun",
    "example_en": "Water is known as the universal solvent.",
    "example_hi": "पानी को सार्वभौमिक विलायक के रूप में जाना जाता है।",
    "category": "academic_science"
  },
  {
    "id": 193,
    "word_en": "Species",
    "word_hi": "प्रजाति",
    "phonetic": "/ˈspiːʃiːz/",
    "part_of_speech": "noun",
    "example_en": "Many wildlife species are endangered due to deforestation.",
    "example_hi": "वनों की कटाई के कारण कई वन्यजीव प्रजातियां संकटग्रस्त हैं।",
    "category": "academic_science"
  },
  {
    "id": 194,
    "word_en": "Temperature",
    "word_hi": "तापमान",
    "phonetic": "/ˈtemprətʃər/",
    "part_of_speech": "noun",
    "example_en": "A thermometer measures body temperature accurately.",
    "example_hi": "थर्मामीटर शरीर के तापमान को सटीक रूप से मापता है।",
    "category": "academic_science"
  },
  {
    "id": 195,
    "word_en": "Tissue",
    "word_hi": "ऊतक",
    "phonetic": "/ˈtɪʃuː/",
    "part_of_speech": "noun",
    "example_en": "Muscular tissue enables movement of body parts.",
    "example_hi": "पेशी ऊतक शरीर के अंगों की गति को सक्षम बनाता है।",
    "category": "academic_science"
  },
  {
    "id": 196,
    "word_en": "Vacuum",
    "word_hi": "निर्वात / शून्य",
    "phonetic": "/ˈvækjuːm/",
    "part_of_speech": "noun",
    "example_en": "Light can travel through a vacuum, but sound cannot.",
    "example_hi": "प्रकाश निर्वात से होकर गुजर सकता है, लेकिन ध्वनि नहीं।",
    "category": "academic_science"
  },
  {
    "id": 197,
    "word_en": "Velocity",
    "word_hi": "वेग",
    "phonetic": "/vəˈlɒsɪti/",
    "part_of_speech": "noun",
    "example_en": "Velocity is speed in a given direction.",
    "example_hi": "वेग एक निश्चित दिशा में गति की चाल है।",
    "category": "academic_science"
  },
  {
    "id": 198,
    "word_en": "Virus",
    "word_hi": "विषाणु / वायरस",
    "phonetic": "/ˈvaɪrəs/",
    "part_of_speech": "noun",
    "example_en": "Viruses reproduce only inside living host cells.",
    "example_hi": "विषाणु केवल जीवित मेजबान कोशिकाओं के अंदर ही प्रजनन करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 199,
    "word_en": "Volume",
    "word_hi": "आयतन",
    "phonetic": "/ˈvɒljuːm/",
    "part_of_speech": "noun",
    "example_en": "Liquids have a definite volume but no fixed shape.",
    "example_hi": "तरल पदार्थों का आयतन निश्चित होता है लेकिन कोई निश्चित आकार नहीं होता।",
    "category": "academic_science"
  },
  {
    "id": 200,
    "word_en": "Weight",
    "word_hi": "भार / वजन",
    "phonetic": "/weɪt/",
    "part_of_speech": "noun",
    "example_en": "Weight is the force exerted on an object by gravity.",
    "example_hi": "भार वह बल है जो गुरुत्वाकर्षण द्वारा किसी वस्तु पर लगाया जाता है।",
    "category": "academic_science"
  },
  {
    "id": 201,
    "word_en": "Angle",
    "word_hi": "कोण",
    "phonetic": "/ˈæŋɡəl/",
    "part_of_speech": "noun",
    "example_en": "A right angle measures exactly ninety degrees.",
    "example_hi": "एक समकोण का माप ठीक नब्बे अंश होता है।",
    "category": "academic_math"
  },
  {
    "id": 202,
    "word_en": "Area",
    "word_hi": "क्षेत्रफल",
    "phonetic": "/ˈeəriə/",
    "part_of_speech": "noun",
    "example_en": "The area of a rectangle equals length multiplied by breadth.",
    "example_hi": "आयत का क्षेत्रफल लंबाई गुणा चौड़ाई के बराबर होता है।",
    "category": "academic_math"
  },
  {
    "id": 203,
    "word_en": "Average",
    "word_hi": "औसत",
    "phonetic": "/ˈævərɪdʒ/",
    "part_of_speech": "noun",
    "example_en": "Calculate the average marks scored in English.",
    "example_hi": "अंग्रेजी में प्राप्त अंकों के औसत की गणना करें।",
    "category": "academic_math"
  },
  {
    "id": 204,
    "word_en": "Circle",
    "word_hi": "वृत्त / घेरा",
    "phonetic": "/ˈsɜːkəl/",
    "part_of_speech": "noun",
    "example_en": "A circle has an infinite number of symmetry lines.",
    "example_hi": "एक वृत्त में समरूपता की अनंत रेखाएं होती हैं।",
    "category": "academic_math"
  },
  {
    "id": 205,
    "word_en": "Circumference",
    "word_hi": "परिधि",
    "phonetic": "/səˈkʌmfərəns/",
    "part_of_speech": "noun",
    "example_en": "Circumference of a circle equals 2 times pi times radius.",
    "example_hi": "वृत्त की परिधि 2 गुणा पाई गुणा त्रिज्या के बराबर होती है।",
    "category": "academic_math"
  },
  {
    "id": 206,
    "word_en": "Coefficient",
    "word_hi": "गुणांक",
    "phonetic": "/ˌkoʊɪˈfɪʃənt/",
    "part_of_speech": "noun",
    "example_en": "In the term 5x, the number 5 is the coefficient.",
    "example_hi": "पद 5x में संख्या 5 गुणांक है।",
    "category": "academic_math"
  },
  {
    "id": 207,
    "word_en": "Decimal",
    "word_hi": "दशमलव",
    "phonetic": "/ˈdesɪməl/",
    "part_of_speech": "noun / adjective",
    "example_en": "Convert the fraction into a decimal number.",
    "example_hi": "भिन्न को दशमलव संख्या में बदलें।",
    "category": "academic_math"
  },
  {
    "id": 208,
    "word_en": "Degree",
    "word_hi": "अंश / डिग्री",
    "phonetic": "/dɪˈɡriː/",
    "part_of_speech": "noun",
    "example_en": "The angles of an equilateral triangle are 60 degrees each.",
    "example_hi": "एक समबाहु त्रिभुज के प्रत्येक कोण 60 अंश होते हैं।",
    "category": "academic_math"
  },
  {
    "id": 209,
    "word_en": "Denominator",
    "word_hi": "हर (भिन्न का)",
    "phonetic": "/dɪˈnɒmɪneɪtər/",
    "part_of_speech": "noun",
    "example_en": "The denominator cannot be zero in a rational number.",
    "example_hi": "एक परिमेय संख्या में हर कभी शून्य नहीं हो सकता।",
    "category": "academic_math"
  },
  {
    "id": 210,
    "word_en": "Diagonal",
    "word_hi": "विकर्ण",
    "phonetic": "/daɪˈæɡənəl/",
    "part_of_speech": "noun",
    "example_en": "A square has two diagonals of equal length.",
    "example_hi": "एक वर्ग में समान लंबाई के दो विकर्ण होते हैं।",
    "category": "academic_math"
  },
  {
    "id": 211,
    "word_en": "Diameter",
    "word_hi": "व्यास",
    "phonetic": "/daɪˈæmɪtər/",
    "part_of_speech": "noun",
    "example_en": "The diameter is twice the length of the radius.",
    "example_hi": "व्यास त्रिज्या की लंबाई का दोगुना होता है।",
    "category": "academic_math"
  },
  {
    "id": 212,
    "word_en": "Division",
    "word_hi": "भाग / विभाजन",
    "phonetic": "/dɪˈvɪʒən/",
    "part_of_speech": "noun",
    "example_en": "Division is repeated subtraction of equal parts.",
    "example_hi": "भाग समान भागों का बार-बार घटाव है।",
    "category": "academic_math"
  },
  {
    "id": 213,
    "word_en": "Equation",
    "word_hi": "समीकरण",
    "phonetic": "/ɪˈkweɪʒən/",
    "part_of_speech": "noun",
    "example_en": "Solve the linear equation for the unknown variable x.",
    "example_hi": "अज्ञात चर x के लिए रैखिक समीकरण को हल करें।",
    "category": "academic_math"
  },
  {
    "id": 214,
    "word_en": "Exponent",
    "word_hi": "घातांक",
    "phonetic": "/ɪkˈspoʊnənt/",
    "part_of_speech": "noun",
    "example_en": "In 10 cubed, the number 3 is the exponent.",
    "example_hi": "10 की घात 3 में संख्या 3 घातांक है।",
    "category": "academic_math"
  },
  {
    "id": 215,
    "word_en": "Factor",
    "word_hi": "गुणनखंड",
    "phonetic": "/ˈfæktər/",
    "part_of_speech": "noun",
    "example_en": "The prime factors of 12 are 2 and 3.",
    "example_hi": "12 के अभाज्य गुणनखंड 2 और 3 हैं।",
    "category": "academic_math"
  },
  {
    "id": 216,
    "word_en": "Fraction",
    "word_hi": "भिन्न",
    "phonetic": "/ˈfrækʃən/",
    "part_of_speech": "noun",
    "example_en": "Three-fourths is an example of a proper fraction.",
    "example_hi": "तीन-चौथाई एक उचित भिन्न का उदाहरण है।",
    "category": "academic_math"
  },
  {
    "id": 217,
    "word_en": "Geometry",
    "word_hi": "ज्यामिति / रेखागणित",
    "phonetic": "/dʒiˈɒmətri/",
    "part_of_speech": "noun",
    "example_en": "Geometry helps in architectural design and mapping.",
    "example_hi": "ज्यामिति वास्तुकला डिजाइन और मानचित्रण में मदद करती है।",
    "category": "academic_math"
  },
  {
    "id": 218,
    "word_en": "Hypotenuse",
    "word_hi": "कर्ण",
    "phonetic": "/haɪˈpɒtənjuːz/",
    "part_of_speech": "noun",
    "example_en": "The hypotenuse is the longest side of a right triangle.",
    "example_hi": "कर्ण समकोण त्रिभुज की सबसे लंबी भुजा होती है।",
    "category": "academic_math"
  },
  {
    "id": 219,
    "word_en": "Integer",
    "word_hi": "पूर्णांक",
    "phonetic": "/ˈɪntɪdʒər/",
    "part_of_speech": "noun",
    "example_en": "Integers include positive numbers, negative numbers, and zero.",
    "example_hi": "पूर्णांकों में धनात्मक संख्याएं, ऋणात्मक संख्याएं और शून्य शामिल हैं।",
    "category": "academic_math"
  },
  {
    "id": 220,
    "word_en": "Intersection",
    "word_hi": "प्रतिच्छेदन",
    "phonetic": "/ˌɪntəˈsekʃən/",
    "part_of_speech": "noun",
    "example_en": "The intersection of two lines forms a single point.",
    "example_hi": "दो रेखाओं का प्रतिच्छेदन एक बिंदु बनाता है।",
    "category": "academic_math"
  },
  {
    "id": 221,
    "word_en": "Mean",
    "word_hi": "माध्य / औसत",
    "phonetic": "/miːn/",
    "part_of_speech": "noun",
    "example_en": "Find the arithmetic mean of the given data set.",
    "example_hi": "दिए गए डेटा सेट का समांतर माध्य ज्ञात कीजिए।",
    "category": "academic_math"
  },
  {
    "id": 222,
    "word_en": "Median",
    "word_hi": "माध्यिका",
    "phonetic": "/ˈmiːdiən/",
    "part_of_speech": "noun",
    "example_en": "The median is the middle value in an ordered list.",
    "example_hi": "माध्यिका एक क्रमबद्ध सूची में मध्य मान है।",
    "category": "academic_math"
  },
  {
    "id": 223,
    "word_en": "Mode",
    "word_hi": "बहुलक",
    "phonetic": "/moʊd/",
    "part_of_speech": "noun",
    "example_en": "The mode is the most frequently occurring value.",
    "example_hi": "बहुलक वह मान है जो सबसे अधिक बार आता है।",
    "category": "academic_math"
  },
  {
    "id": 224,
    "word_en": "Multiple",
    "word_hi": "गुणज",
    "phonetic": "/ˈmʌltɪpəl/",
    "part_of_speech": "noun",
    "example_en": "Fifteen is a multiple of both 3 and 5.",
    "example_hi": "पंद्रह 3 और 5 दोनों का गुणज है।",
    "category": "academic_math"
  },
  {
    "id": 225,
    "word_en": "Negative",
    "word_hi": "ऋणात्मक",
    "phonetic": "/ˈneɡətɪv/",
    "part_of_speech": "adjective",
    "example_en": "Multiplying two negative numbers gives a positive product.",
    "example_hi": "दो ऋणात्मक संख्याओं को गुणा करने पर धनात्मक गुणनफल प्राप्त होता है।",
    "category": "academic_math"
  },
  {
    "id": 226,
    "word_en": "Numerator",
    "word_hi": "अंश (भिन्न का)",
    "phonetic": "/ˈnjuːməreɪtər/",
    "part_of_speech": "noun",
    "example_en": "In the fraction 3/5, the number 3 is the numerator.",
    "example_hi": "भिन्न 3/5 में संख्या 3 अंश है।",
    "category": "academic_math"
  },
  {
    "id": 227,
    "word_en": "Parallel",
    "word_hi": "समानांतर",
    "phonetic": "/ˈpærəlel/",
    "part_of_speech": "adjective",
    "example_en": "Parallel lines never meet no matter how far they extend.",
    "example_hi": "समानांतर रेखाएं चाहे कितनी भी आगे बढ़ें, कभी नहीं मिलतीं।",
    "category": "academic_math"
  },
  {
    "id": 228,
    "word_en": "Percentage",
    "word_hi": "प्रतिशत",
    "phonetic": "/pəˈsentɪdʒ/",
    "part_of_speech": "noun",
    "example_en": "Calculate the percentage score in the final examination.",
    "example_hi": "अंतिम परीक्षा में प्रतिशत अंक की गणना करें।",
    "category": "academic_math"
  },
  {
    "id": 229,
    "word_en": "Perimeter",
    "word_hi": "परिमाप",
    "phonetic": "/pəˈrɪmɪtər/",
    "part_of_speech": "noun",
    "example_en": "The perimeter of a square equals four times its side length.",
    "example_hi": "वर्ग का परिमाप उसकी भुजा की लंबाई के चार गुना के बराबर होता है।",
    "category": "academic_math"
  },
  {
    "id": 230,
    "word_en": "Perpendicular",
    "word_hi": "लंबवत / लंब",
    "phonetic": "/ˌpɜːpənˈdɪkjʊlər/",
    "part_of_speech": "adjective / noun",
    "example_en": "Perpendicular lines intersect at ninety degrees.",
    "example_hi": "लंबवत रेखाएं नब्बे अंश पर प्रतिच्छेद करती हैं।",
    "category": "academic_math"
  },
  {
    "id": 231,
    "word_en": "Polygon",
    "word_hi": "बहुभुज",
    "phonetic": "/ˈpɒlɪɡɒn/",
    "part_of_speech": "noun",
    "example_en": "A pentagon is a five-sided geometric polygon.",
    "example_hi": "पंचभुज पांच भुजाओं वाला एक ज्यामितीय बहुभुज है।",
    "category": "academic_math"
  },
  {
    "id": 232,
    "word_en": "Positive",
    "word_hi": "धनात्मक",
    "phonetic": "/ˈpɒzətɪv/",
    "part_of_speech": "adjective",
    "example_en": "Zero is neither positive nor negative.",
    "example_hi": "शून्य न तो धनात्मक है और न ही ऋणात्मक।",
    "category": "academic_math"
  },
  {
    "id": 233,
    "word_en": "Prime",
    "word_hi": "अभाज्य",
    "phonetic": "/praɪm/",
    "part_of_speech": "adjective",
    "example_en": "Two is the only even prime number.",
    "example_hi": "दो एकमात्र सम अभाज्य संख्या है।",
    "category": "academic_math"
  },
  {
    "id": 234,
    "word_en": "Probability",
    "word_hi": "प्रायिकता / संभावना",
    "phonetic": "/ˌprɒbəˈbɪləti/",
    "part_of_speech": "noun",
    "example_en": "The probability of getting heads on a coin toss is 0.5.",
    "example_hi": "सिक्का उछालने पर चित आने की प्रायिकता 0.5 है।",
    "category": "academic_math"
  },
  {
    "id": 235,
    "word_en": "Product",
    "word_hi": "गुणनफल",
    "phonetic": "/ˈprɒdʌkt/",
    "part_of_speech": "noun",
    "example_en": "The product of 6 and 7 is 42.",
    "example_hi": "6 और 7 का गुणनफल 42 है।",
    "category": "academic_math"
  },
  {
    "id": 236,
    "word_en": "Proportion",
    "word_hi": "समानुपात",
    "phonetic": "/prəˈpɔːʃən/",
    "part_of_speech": "noun",
    "example_en": "Two ratios are in proportion if their values are equal.",
    "example_hi": "दो अनुपात समानुपात में होते हैं यदि उनके मान बराबर हों।",
    "category": "academic_math"
  },
  {
    "id": 237,
    "word_en": "Pyramid",
    "word_hi": "पिरामिड",
    "phonetic": "/ˈpɪrəmɪd/",
    "part_of_speech": "noun",
    "example_en": "A square pyramid has five faces and eight edges.",
    "example_hi": "एक वर्गाकार पिरामिड में पांच फलक और आठ किनारे होते हैं।",
    "category": "academic_math"
  },
  {
    "id": 238,
    "word_en": "Quadrilateral",
    "word_hi": "चतुर्भुज",
    "phonetic": "/ˌkwɒdrɪˈlætərəl/",
    "part_of_speech": "noun",
    "example_en": "The sum of interior angles of a quadrilateral is 360 degrees.",
    "example_hi": "चतुर्भुज के आंतरिक कोणों का योग 360 अंश होता है।",
    "category": "academic_math"
  },
  {
    "id": 239,
    "word_en": "Radius",
    "word_hi": "त्रिज्या",
    "phonetic": "/ˈreɪdiəs/",
    "part_of_speech": "noun",
    "example_en": "The radius connects the center to any point on the circle.",
    "example_hi": "त्रिज्या केंद्र को वृत्त पर स्थित किसी भी बिंदु से जोड़ती है।",
    "category": "academic_math"
  },
  {
    "id": 240,
    "word_en": "Ratio",
    "word_hi": "अनुपात",
    "phonetic": "/ˈreɪʃioʊ/",
    "part_of_speech": "noun",
    "example_en": "The ratio of boys to girls in our class is 3 to 2.",
    "example_hi": "हमारी कक्षा में लड़कों और लड़कियों का अनुपात 3:2 है।",
    "category": "academic_math"
  },
  {
    "id": 241,
    "word_en": "Remainder",
    "word_hi": "शेषफल",
    "phonetic": "/rɪˈmeɪndər/",
    "part_of_speech": "noun",
    "example_en": "When 17 is divided by 5, the remainder is 2.",
    "example_hi": "जब 17 को 5 से विभाजित किया जाता है, तो शेषफल 2 होता है।",
    "category": "academic_math"
  },
  {
    "id": 242,
    "word_en": "Square",
    "word_hi": "वर्ग",
    "phonetic": "/skweər/",
    "part_of_speech": "noun",
    "example_en": "All four sides of a square are equal in length.",
    "example_hi": "एक वर्ग की चारों भुजाएं लंबाई में समान होती हैं।",
    "category": "academic_math"
  },
  {
    "id": 243,
    "word_en": "Subtraction",
    "word_hi": "घटाव",
    "phonetic": "/səbˈtrækʃən/",
    "part_of_speech": "noun",
    "example_en": "Subtraction is the inverse operation of addition.",
    "example_hi": "घटाव जोड़ की विपरीत क्रिया है।",
    "category": "academic_math"
  },
  {
    "id": 244,
    "word_en": "Symmetry",
    "word_hi": "समरूपता",
    "phonetic": "/ˈsɪmətri/",
    "part_of_speech": "noun",
    "example_en": "The human face exhibits bilateral symmetry.",
    "example_hi": "मानव चेहरे में द्विपक्षीय समरूपता दिखाई देती है।",
    "category": "academic_math"
  },
  {
    "id": 245,
    "word_en": "Triangle",
    "word_hi": "त्रिभुज",
    "phonetic": "/ˈtraɪæŋɡəl/",
    "part_of_speech": "noun",
    "example_en": "The sum of angles in any triangle is always 180 degrees.",
    "example_hi": "किसी भी त्रिभुज के कोणों का योग सदैव 180 अंश होता है।",
    "category": "academic_math"
  },
  {
    "id": 246,
    "word_en": "Variable",
    "word_hi": "चर",
    "phonetic": "/ˈveəriəbəl/",
    "part_of_speech": "noun",
    "example_en": "In algebraic expressions, letters represent variables.",
    "example_hi": "बीजगणितीय व्यंजकों में अक्षर चर का प्रतिनिधित्व करते हैं।",
    "category": "academic_math"
  },
  {
    "id": 247,
    "word_en": "Abundance",
    "word_hi": "प्रचुरता / अधिकता",
    "phonetic": "/əˈbʌndəns/",
    "part_of_speech": "noun",
    "example_en": "India has an abundance of natural sunlight.",
    "example_hi": "भारत में प्राकृतिक धूप की प्रचुरता है।",
    "category": "exam_vocab"
  },
  {
    "id": 248,
    "word_en": "Accurate",
    "word_hi": "सटीक / बिल्कुल सही",
    "phonetic": "/ˈækjʊrət/",
    "part_of_speech": "adjective",
    "example_en": "Provide accurate data in your lab report.",
    "example_hi": "अपनी लैब रिपोर्ट में सटीक आंकड़े दें।",
    "category": "exam_vocab"
  },
  {
    "id": 249,
    "word_en": "Acquire",
    "word_hi": "अर्जित करना / पाना",
    "phonetic": "/əˈkwaɪər/",
    "part_of_speech": "verb",
    "example_en": "Read literature to acquire rich language skills.",
    "example_hi": "समृद्ध भाषा कौशल अर्जित करने के लिए साहित्य पढ़ें।",
    "category": "exam_vocab"
  },
  {
    "id": 250,
    "word_en": "Adequate",
    "word_hi": "पर्याप्त / उचित",
    "phonetic": "/ˈædɪkwət/",
    "part_of_speech": "adjective",
    "example_en": "Ensure adequate ventilation in study rooms.",
    "example_hi": "अध्ययन कक्ष में उचित वेंटिलेशन सुनिश्चित करें।",
    "category": "exam_vocab"
  },
  {
    "id": 251,
    "word_en": "Analyze",
    "word_hi": "विश्लेषण करना",
    "phonetic": "/ˈænəlaɪz/",
    "part_of_speech": "verb",
    "example_en": "Analyze the poem stanza by stanza.",
    "example_hi": "कविता का पद-दर-पद विश्लेषण करें।",
    "category": "exam_vocab"
  },
  {
    "id": 252,
    "word_en": "Appropriate",
    "word_hi": "उचित / उपयुक्त",
    "phonetic": "/əˈproʊpriət/",
    "part_of_speech": "adjective",
    "example_en": "Use appropriate vocabulary in formal essays.",
    "example_hi": "औपचारिक निबंधों में उपयुक्त शब्दावली का प्रयोग करें।",
    "category": "exam_vocab"
  },
  {
    "id": 253,
    "word_en": "Chronological",
    "word_hi": "कालानुक्रमिक",
    "phonetic": "/ˌkrɒnəˈlɒdʒɪkəl/",
    "part_of_speech": "adjective",
    "example_en": "Arrange historical events in chronological order.",
    "example_hi": "ऐतिहासिक घटनाओं को कालानुक्रमिक क्रम में व्यवस्थित करें।",
    "category": "exam_vocab"
  },
  {
    "id": 254,
    "word_en": "Clarify",
    "word_hi": "स्पष्ट करना",
    "phonetic": "/ˈklærəfaɪ/",
    "part_of_speech": "verb",
    "example_en": "Ask your teacher to clarify doubts immediately.",
    "example_hi": "अपनी शंकाओं को स्पष्ट करने के लिए तुरंत अपने शिक्षक से पूछें।",
    "category": "exam_vocab"
  },
  {
    "id": 255,
    "word_en": "Coherence",
    "word_hi": "सुसंगतता / तारतम्य",
    "phonetic": "/koʊˈhɪərəns/",
    "part_of_speech": "noun",
    "example_en": "Ensure logical coherence between paragraphs in your composition.",
    "example_hi": "अपनी रचना में अनुच्छेदों के बीच तार्किक सुसंगतता सुनिश्चित करें।",
    "category": "exam_vocab"
  },
  {
    "id": 256,
    "word_en": "Comprehensive",
    "word_hi": "व्यापक / समग्र",
    "phonetic": "/ˌkɒmprɪˈhensɪv/",
    "part_of_speech": "adjective",
    "example_en": "Our syllabus provides comprehensive coverage of modern history.",
    "example_hi": "हमारा पाठ्यक्रम आधुनिक इतिहास का व्यापक विवरण प्रदान करता है।",
    "category": "exam_vocab"
  },
  {
    "id": 257,
    "word_en": "Consequence",
    "word_hi": "परिणाम / नतीजा",
    "phonetic": "/ˈkɒnsɪkwəns/",
    "part_of_speech": "noun",
    "example_en": "Every action carries an inevitable consequence.",
    "example_hi": "प्रत्येक क्रिया का एक अपरिहार्य परिणाम होता है।",
    "category": "exam_vocab"
  },
  {
    "id": 258,
    "word_en": "Contemporary",
    "word_hi": "समकालीन / आधुनिक",
    "phonetic": "/kənˈtemprəri/",
    "part_of_speech": "adjective",
    "example_en": "We studied contemporary world politics in civics.",
    "example_hi": "हमने नागरिक शास्त्र में समकालीन विश्व राजनीति का अध्ययन किया।",
    "category": "exam_vocab"
  },
  {
    "id": 259,
    "word_en": "Contrast",
    "word_hi": "अंतर / विषमता",
    "phonetic": "/ˈkɒntrɑːst/",
    "part_of_speech": "noun / verb",
    "example_en": "Contrast rural life with urban lifestyle.",
    "example_hi": "ग्रामीण जीवन की शहरी जीवनशैली से तुलना और अंतर बताएं।",
    "category": "exam_vocab"
  },
  {
    "id": 260,
    "word_en": "Crucial",
    "word_hi": "अत्यंत महत्वपूर्ण / निर्णायक",
    "phonetic": "/ˈkruːʃəl/",
    "part_of_speech": "adjective",
    "example_en": "Revision is crucial for achieving high marks in board exams.",
    "example_hi": "बोर्ड परीक्षाओं में उच्च अंक प्राप्त करने के लिए पुनरावृत्ति अत्यंत महत्वपूर्ण है।",
    "category": "exam_vocab"
  },
  {
    "id": 261,
    "word_en": "Demonstrate",
    "word_hi": "प्रदर्शित करना / साबित करना",
    "phonetic": "/ˈdemənstreɪt/",
    "part_of_speech": "verb",
    "example_en": "The experiment demonstrates the law of conservation of momentum.",
    "example_hi": "यह प्रयोग संवेग संरक्षण के नियम को प्रदर्शित करता है।",
    "category": "exam_vocab"
  },
  {
    "id": 262,
    "word_en": "Diversity",
    "word_hi": "विविधता",
    "phonetic": "/daɪˈvɜːsəti/",
    "part_of_speech": "noun",
    "example_en": "Unity in diversity is the hallmark of Indian culture.",
    "example_hi": "विविधता में एकता भारतीय संस्कृति की पहचान है।",
    "category": "exam_vocab"
  },
  {
    "id": 263,
    "word_en": "Efficient",
    "word_hi": "कुशल / कार्यक्षम",
    "phonetic": "/ɪˈfɪʃənt/",
    "part_of_speech": "adjective",
    "example_en": "An efficient study timetable saves time and energy.",
    "example_hi": "एक कुशल अध्ययन समय सारणी समय और ऊर्जा बचाती है।",
    "category": "exam_vocab"
  },
  {
    "id": 264,
    "word_en": "Elaborate",
    "word_hi": "विस्तार से बताना",
    "phonetic": "/ɪˈlæbəreɪt/",
    "part_of_speech": "verb",
    "example_en": "Please elaborate on the main causes of the Revolt of 1857.",
    "example_hi": "कृपया 1857 के विद्रोह के मुख्य कारणों पर विस्तार से प्रकाश डालें।",
    "category": "exam_vocab"
  },
  {
    "id": 265,
    "word_en": "Emphasize",
    "word_hi": "जोर देना / महत्व देना",
    "phonetic": "/ˈemfəsaɪz/",
    "part_of_speech": "verb",
    "example_en": "The syllabus emphasizes practical application over rote learning.",
    "example_hi": "पाठ्यक्रम रटने के बजाय व्यावहारिक अनुप्रयोग पर जोर देता है।",
    "category": "exam_vocab"
  },
  {
    "id": 266,
    "word_en": "Evaluate",
    "word_hi": "मूल्यांकन करना",
    "phonetic": "/ɪˈvæljueɪt/",
    "part_of_speech": "verb",
    "example_en": "Evaluate the impact of industrialization on environment.",
    "example_hi": "पर्यावरण पर औद्योगीकरण के प्रभाव का मूल्यांकन करें।",
    "category": "exam_vocab"
  },
  {
    "id": 267,
    "word_en": "Evidence",
    "word_hi": "साक्ष्य / प्रमाण",
    "phonetic": "/ˈevɪdəns/",
    "part_of_speech": "noun",
    "example_en": "Support your scientific hypothesis with empirical evidence.",
    "example_hi": "अपने वैज्ञानिक परिकल्पना का अनुभवजन्य साक्ष्यों के साथ समर्थन करें।",
    "category": "exam_vocab"
  },
  {
    "id": 268,
    "word_en": "Fundamental",
    "word_hi": "मौलिक / आधारभूत",
    "phonetic": "/ˌfʌndəˈmentəl/",
    "part_of_speech": "adjective",
    "example_en": "Education is a fundamental right of every child.",
    "example_hi": "शिक्षा प्रत्येक बच्चे का मौलिक अधिकार है।",
    "category": "exam_vocab"
  },
  {
    "id": 269,
    "word_en": "Hypothesis",
    "word_hi": "परिकल्पना",
    "phonetic": "/haɪˈpɒθəsɪs/",
    "part_of_speech": "noun",
    "example_en": "Formulate a testable hypothesis before starting the experiment.",
    "example_hi": "प्रयोग शुरू करने से पहले एक परीक्षण योग्य परिकल्पना तैयार करें।",
    "category": "exam_vocab"
  },
  {
    "id": 270,
    "word_en": "Illustrate",
    "word_hi": "उदाहरण देकर समझाना",
    "phonetic": "/ˈɪləstreɪt/",
    "part_of_speech": "verb",
    "example_en": "Illustrate your answer with labeled diagrams.",
    "example_hi": "नामांकित चित्रों के साथ अपने उत्तर को स्पष्ट करें।",
    "category": "exam_vocab"
  },
  {
    "id": 271,
    "word_en": "Impact",
    "word_hi": "प्रभाव / असर",
    "phonetic": "/ˈɪmpækt/",
    "part_of_speech": "noun",
    "example_en": "Deforestation has a devastating impact on rainfall patterns.",
    "example_hi": "वनों की कटाई का वर्षा के पैटर्न पर विनाशकारी प्रभाव पड़ता है।",
    "category": "exam_vocab"
  },
  {
    "id": 272,
    "word_en": "Imply",
    "word_hi": "संकेत करना / अर्थ होना",
    "phonetic": "/ɪmˈplaɪ/",
    "part_of_speech": "verb",
    "example_en": "What does the poet imply in the final line of the stanza?",
    "example_hi": "पद की अंतिम पंक्ति में कवि का क्या तात्पर्य है?",
    "category": "exam_vocab"
  },
  {
    "id": 273,
    "word_en": "Justify",
    "word_hi": "उचित ठहराना / प्रमाण देना",
    "phonetic": "/ˈdʒʌstɪfaɪ/",
    "part_of_speech": "verb",
    "example_en": "Justify your choice of method in the mathematics solution.",
    "example_hi": "गणित के हल में अपनी विधि के चयन को उचित ठहराएं।",
    "category": "exam_vocab"
  },
  {
    "id": 274,
    "word_en": "Magnitude",
    "word_hi": "परिमाण / आकार",
    "phonetic": "/ˈmæɡnɪtjuːd/",
    "part_of_speech": "noun",
    "example_en": "Earthquake magnitude is measured on the Richter scale.",
    "example_hi": "भूकंप का परिमाण रिक्टर पैमाने पर मापा जाता है।",
    "category": "exam_vocab"
  },
  {
    "id": 275,
    "word_en": "Objective",
    "word_hi": "उद्देश्य / निष्पक्ष",
    "phonetic": "/əbˈdʒektɪv/",
    "part_of_speech": "noun / adjective",
    "example_en": "State the primary objective of the scientific project.",
    "example_hi": "वैज्ञानिक परियोजना का प्राथमिक उद्देश्य बताएं।",
    "category": "exam_vocab"
  },
  {
    "id": 276,
    "word_en": "Perspective",
    "word_hi": "दृष्टिकोण / परिप्रेक्ष्य",
    "phonetic": "/pəˈspektɪv/",
    "part_of_speech": "noun",
    "example_en": "Literature exposes readers to multiple human perspectives.",
    "example_hi": "साहित्य पाठकों को कई मानवीय दृष्टिकोणों से अवगत कराता है।",
    "category": "exam_vocab"
  },
  {
    "id": 277,
    "word_en": "Phenomenon",
    "word_hi": "घटना / परिघटना",
    "phonetic": "/fəˈnɒmɪnən/",
    "part_of_speech": "noun",
    "example_en": "Rainbow formation is an optical atmospheric phenomenon.",
    "example_hi": "इंद्रधनुष का बनना एक प्रकाशीय वायुमंडलीय परिघटना है।",
    "category": "exam_vocab"
  },
  {
    "id": 278,
    "word_en": "Precise",
    "word_hi": "सटीक / यथार्थ",
    "phonetic": "/prɪˈsaɪs/",
    "part_of_speech": "adjective",
    "example_en": "Use precise terminology in chemistry answers.",
    "example_hi": "रसायन विज्ञान के उत्तरों में सटीक शब्दावली का प्रयोग करें।",
    "category": "exam_vocab"
  },
  {
    "id": 279,
    "word_en": "Primary",
    "word_hi": "प्राथमिक / मुख्य",
    "phonetic": "/ˈpraɪməri/",
    "part_of_speech": "adjective",
    "example_en": "Agriculture is the primary occupation in rural areas.",
    "example_hi": "ग्रामीण क्षेत्रों में कृषि प्राथमिक व्यवसाय है।",
    "category": "exam_vocab"
  },
  {
    "id": 280,
    "word_en": "Relevant",
    "word_hi": "प्रासंगिक / उचित",
    "phonetic": "/ˈreləvənt/",
    "part_of_speech": "adjective",
    "example_en": "Write only relevant points in short answer questions.",
    "example_hi": "लघु उत्तरीय प्रश्नों में केवल प्रासंगिक बिंदु ही लिखें।",
    "category": "exam_vocab"
  },
  {
    "id": 281,
    "word_en": "Significant",
    "word_hi": "महत्वपूर्ण / उल्लेखनीय",
    "phonetic": "/sɪɡˈnɪfɪkənt/",
    "part_of_speech": "adjective",
    "example_en": "The discovery of penicillin was a significant medical milestone.",
    "example_hi": "पेनिसिलिन की खोज एक महत्वपूर्ण चिकित्सा मील का पत्थर थी।",
    "category": "exam_vocab"
  },
  {
    "id": 282,
    "word_en": "Strategy",
    "word_hi": "रणनीति / योजना",
    "phonetic": "/ˈstrætədʒi/",
    "part_of_speech": "noun",
    "example_en": "Develop a revision strategy for final board examinations.",
    "example_hi": "अंतिम बोर्ड परीक्षाओं के लिए एक पुनरावृत्ति रणनीति विकसित करें।",
    "category": "exam_vocab"
  },
  {
    "id": 283,
    "word_en": "Summarize",
    "word_hi": "संक्षेप में बताना / सारांश देना",
    "phonetic": "/ˈsʌməraɪz/",
    "part_of_speech": "verb",
    "example_en": "Summarize the chapter in your own words.",
    "example_hi": "अध्याय का अपने शब्दों में सारांश प्रस्तुत करें।",
    "category": "exam_vocab"
  },
  {
    "id": 284,
    "word_en": "Theory",
    "word_hi": "सिद्धांत",
    "phonetic": "/ˈθɪəri/",
    "part_of_speech": "noun",
    "example_en": "Einstein proposed the revolutionary Theory of Relativity.",
    "example_hi": "आइंस्टीन ने सापेक्षता के क्रांतिकारी सिद्धांत का प्रतिपादन किया।",
    "category": "exam_vocab"
  },
  {
    "id": 285,
    "word_en": "Transform",
    "word_hi": "परिवर्तित करना / रूप बदलना",
    "phonetic": "/trænsˈfɔːm/",
    "part_of_speech": "verb",
    "example_en": "Education has the power to transform lives.",
    "example_hi": "शिक्षा में जीवन को बदलने की शक्ति है।",
    "category": "exam_vocab"
  },
  {
    "id": 286,
    "word_en": "A piece of cake",
    "word_hi": "बहुत आसान काम",
    "phonetic": "/ə piːs əv keɪk/",
    "part_of_speech": "phrase",
    "example_en": "The math quiz was a piece of cake for him.",
    "example_hi": "गणित की प्रश्नोत्तरी उसके लिए बहुत आसान थी।",
    "category": "phrases"
  },
  {
    "id": 287,
    "word_en": "Actions speak louder than words",
    "word_hi": "कथनी से करनी भली",
    "phonetic": "/ˈækʃənz spiːk ˈlaʊdər/",
    "part_of_speech": "phrase",
    "example_en": "Show your commitment through hard work; actions speak louder than words.",
    "example_hi": "कड़ी मेहनत से अपनी निष्ठा साबित करें; कथनी से करनी भली होती है।",
    "category": "phrases"
  },
  {
    "id": 288,
    "word_en": "Barking up the wrong tree",
    "word_hi": "गलत दिशा में प्रयास करना",
    "phonetic": "/ˈbɑːkɪŋ ʌp ðə rɒŋ triː/",
    "part_of_speech": "phrase",
    "example_en": "Blaming him is barking up the wrong tree; he was absent.",
    "example_hi": "उसे दोष देना गलत दिशा में प्रयास है; वह उपस्थित ही नहीं था।",
    "category": "phrases"
  },
  {
    "id": 289,
    "word_en": "Bite the bullet",
    "word_hi": "कठिन परिस्थिति का साहस से सामना करना",
    "phonetic": "/baɪt ðə ˈbʊlɪt/",
    "part_of_speech": "phrase",
    "example_en": "He decided to bite the bullet and apologize for his mistake.",
    "example_hi": "उसने साहस जुटाकर अपनी गलती के लिए माफी मांगने का फैसला किया।",
    "category": "phrases"
  },
  {
    "id": 290,
    "word_en": "Break the ice",
    "word_hi": "झिझक मिटाना / बातचीत शुरू करना",
    "phonetic": "/breɪk ði aɪs/",
    "part_of_speech": "phrase",
    "example_en": "The teacher told a joke to break the ice on the first day.",
    "example_hi": "शिक्षक ने पहले दिन झिझक मिटाने के लिए एक चुटकुला सुनाया।",
    "category": "phrases"
  },
  {
    "id": 291,
    "word_en": "Burn the midnight oil",
    "word_hi": "देर रात तक कड़ी मेहनत करना",
    "phonetic": "/bɜːn ðə ˈmɪdnaɪt ɔɪl/",
    "part_of_speech": "phrase",
    "example_en": "Students burn the midnight oil during exam preparation.",
    "example_hi": "परीक्षा की तैयारी के दौरान छात्र देर रात तक कड़ी मेहनत करते हैं।",
    "category": "phrases"
  },
  {
    "id": 292,
    "word_en": "Call it a day",
    "word_hi": "आज का काम समाप्त करना",
    "phonetic": "/kɔːl ɪt ə deɪ/",
    "part_of_speech": "phrase",
    "example_en": "We have completed three chapters; let's call it a day.",
    "example_hi": "हमने तीन अध्याय पूरे कर लिए हैं; चलिए आज का काम यहीं समाप्त करते हैं।",
    "category": "phrases"
  },
  {
    "id": 293,
    "word_en": "Cry over spilt milk",
    "word_hi": "बीती बात पर पछताना",
    "phonetic": "/kraɪ ˈoʊvər spɪlt mɪlk/",
    "part_of_speech": "phrase",
    "example_en": "What is done is done; no use crying over spilt milk.",
    "example_hi": "जो हो गया सो हो गया; अब बीती बात पर पछताने से कोई लाभ नहीं।",
    "category": "phrases"
  },
  {
    "id": 294,
    "word_en": "Every cloud has a silver lining",
    "word_hi": "हर निराशा में आशा की किरण होती है",
    "phonetic": "/ˈevri klaʊd hæz ə ˈsɪlvər ˈlaɪnɪŋ/",
    "part_of_speech": "phrase",
    "example_en": "Do not lose heart after failure; every cloud has a silver lining.",
    "example_hi": "असफलता के बाद हिम्मत न हारें; हर निराशा में आशा की किरण होती है।",
    "category": "phrases"
  },
  {
    "id": 295,
    "word_en": "Hit the nail on the head",
    "word_hi": "बिल्कुल सही बात कहना",
    "phonetic": "/hɪt ðə neɪl ɒn ðə hed/",
    "part_of_speech": "phrase",
    "example_en": "Her answer hit the nail on the head during the debate.",
    "example_hi": "वाद-विवाद में उसके उत्तर ने बिल्कुल सही बात कही।",
    "category": "phrases"
  },
  {
    "id": 296,
    "word_en": "In a nutshell",
    "word_hi": "संक्षेप में / संक्षेपतः",
    "phonetic": "/ɪn ə ˈnʌtʃel/",
    "part_of_speech": "phrase",
    "example_en": "In a nutshell, hard work and consistency guarantee success.",
    "example_hi": "संक्षेप में, कड़ी मेहनत और निरंतरता सफलता की गारंटी देते हैं।",
    "category": "phrases"
  },
  {
    "id": 297,
    "word_en": "Once in a blue moon",
    "word_hi": "कभी-कभार / ईद का चांद",
    "phonetic": "/wʌns ɪn ə bluː muːn/",
    "part_of_speech": "phrase",
    "example_en": "Such golden opportunities come only once in a blue moon.",
    "example_hi": "ऐसे सुनहरे अवसर कभी-कभार ही आते हैं।",
    "category": "phrases"
  },
  {
    "id": 298,
    "word_en": "Practice makes perfect",
    "word_hi": "अभ्यास से ही निपुणता आती है",
    "phonetic": "/ˈpræktɪs meɪks ˈpɜːfɪkt/",
    "part_of_speech": "phrase",
    "example_en": "Solve math problems daily because practice makes perfect.",
    "example_hi": "प्रतिदिन गणित के प्रश्न हल करें क्योंकि अभ्यास से ही निपुणता आती है।",
    "category": "phrases"
  },
  {
    "id": 299,
    "word_en": "See eye to eye",
    "word_hi": "पूर्णतः सहमत होना",
    "phonetic": "/siː aɪ tuː aɪ/",
    "part_of_speech": "phrase",
    "example_en": "Both team members see eye to eye on the project strategy.",
    "example_hi": "प्रोजेक्ट रणनीति पर दोनों टीम के सदस्य पूर्णतः सहमत हैं।",
    "category": "phrases"
  },
  {
    "id": 300,
    "word_en": "Spill the beans",
    "word_hi": "रहस्य उजागर करना",
    "phonetic": "/spɪl ðə biːnz/",
    "part_of_speech": "phrase",
    "example_en": "Please do not spill the beans about the surprise farewell party.",
    "example_hi": "कृपया विदाई पार्टी के सरप्राइज का रहस्य उजागर न करें।",
    "category": "phrases"
  },
  {
    "id": 301,
    "word_en": "Turn over a new leaf",
    "word_hi": "सुधरना / नया जीवन शुरू करना",
    "phonetic": "/tɜːn ˈoʊvər ə njuː liːf/",
    "part_of_speech": "phrase",
    "example_en": "After the midterm results, he turned over a new leaf and focused on studies.",
    "example_hi": "सत्र परीक्षा के परिणामों के बाद उसने सुधार किया और पढ़ाई पर ध्यान केंद्रित किया।",
    "category": "phrases"
  },
  {
    "id": 302,
    "word_en": "Under the weather",
    "word_hi": "अस्वस्थ / तबीयत खराब होना",
    "phonetic": "/ˈʌndər ðə ˈweðər/",
    "part_of_speech": "phrase",
    "example_en": "She was feeling under the weather and took leave from school.",
    "example_hi": "उसकी तबीयत कुछ खराब थी इसलिए उसने स्कूल से छुट्टी ले ली।",
    "category": "phrases"
  },
  {
    "id": 303,
    "word_en": "Abrupt",
    "word_hi": "अचानक / आकस्मिक",
    "phonetic": "/əˈbrʌpt/",
    "part_of_speech": "adjective",
    "example_en": "There was an abrupt change in the evening weather.",
    "example_hi": "शाम के मौसम में अचानक बदलाव आया।",
    "category": "daily"
  },
  {
    "id": 304,
    "word_en": "Abundant",
    "word_hi": "प्रचुर / भरपूर",
    "phonetic": "/əˈbʌndənt/",
    "part_of_speech": "adjective",
    "example_en": "Fresh water is abundant in high mountain streams.",
    "example_hi": "ऊंचे पर्वतीय झरनों में ताजा पानी प्रचुर मात्रा में है।",
    "category": "daily"
  },
  {
    "id": 305,
    "word_en": "Acknowledge",
    "word_hi": "स्वीकार करना / मानना",
    "phonetic": "/əkˈnɒlɪdʒ/",
    "part_of_speech": "verb",
    "example_en": "Acknowledge the contributions of your team members.",
    "example_hi": "अपनी टीम के सदस्यों के योगदान को स्वीकार करें।",
    "category": "daily"
  },
  {
    "id": 306,
    "word_en": "Adapt",
    "word_hi": "अनुकूलित होना / ढलना",
    "phonetic": "/əˈdæpt/",
    "part_of_speech": "verb",
    "example_en": "Animals adapt to harsh winter conditions.",
    "example_hi": "जानवर कठोर सर्दियों की परिस्थितियों के अनुकूल ढल जाते हैं।",
    "category": "daily"
  },
  {
    "id": 307,
    "word_en": "Adjacent",
    "word_hi": "संलग्न / पास का",
    "phonetic": "/əˈdʒeɪsənt/",
    "part_of_speech": "adjective",
    "example_en": "Angles adjacent to each other on a straight line sum to 180 degrees.",
    "example_hi": "एक सीधी रेखा पर एक-दूसरे से सटे कोणों का योग 180 अंश होता है।",
    "category": "academic_math"
  },
  {
    "id": 308,
    "word_en": "Admit",
    "word_hi": "प्रवेश देना / स्वीकारना",
    "phonetic": "/ədˈmɪt/",
    "part_of_speech": "verb",
    "example_en": "Admit your errors honestly to improve yourself.",
    "example_hi": "खुद को सुधारने के लिए अपनी त्रुटियों को ईमानदारी से स्वीकार करें।",
    "category": "daily"
  },
  {
    "id": 309,
    "word_en": "Adopt",
    "word_hi": "अपनाना",
    "phonetic": "/əˈdɒpt/",
    "part_of_speech": "verb",
    "example_en": "Adopt good study habits early in life.",
    "example_hi": "जीवन में जल्दी अच्छी अध्ययन आदतें अपनाएं।",
    "category": "daily"
  },
  {
    "id": 310,
    "word_en": "Advance",
    "word_hi": "आगे बढ़ना / प्रगति",
    "phonetic": "/ədˈvɑːns/",
    "part_of_speech": "verb / noun",
    "example_en": "Technology advances rapidly every decade.",
    "example_hi": "प्रौद्योगिकी हर दशक में तेजी से आगे बढ़ती है।",
    "category": "daily"
  },
  {
    "id": 311,
    "word_en": "Advantage",
    "word_hi": "लाभ",
    "phonetic": "/ədˈvɑːntɪdʒ/",
    "part_of_speech": "noun",
    "example_en": "Reading books gives you an intellectual advantage.",
    "example_hi": "किताबें पढ़ने से आपको बौद्धिक लाभ मिलता है।",
    "category": "daily"
  },
  {
    "id": 312,
    "word_en": "Adversity",
    "word_hi": "विपत्ति / कठिनाई",
    "phonetic": "/ədˈvɜːsəti/",
    "part_of_speech": "noun",
    "example_en": "Courage shines brightest in times of adversity.",
    "example_hi": "विपत्ति के समय साहस सबसे अधिक चमकता है।",
    "category": "exam_vocab"
  },
  {
    "id": 313,
    "word_en": "Advise",
    "word_hi": "सलाह देना",
    "phonetic": "/ədˈvaɪz/",
    "part_of_speech": "verb",
    "example_en": "Teachers advise daily math problem-solving.",
    "example_hi": "शिक्षक प्रतिदिन गणित के प्रश्न हल करने की सलाह देते हैं।",
    "category": "daily"
  },
  {
    "id": 314,
    "word_en": "Advocate",
    "word_hi": "समर्थन करना / पक्ष लेना",
    "phonetic": "/ˈædvəkeɪt/",
    "part_of_speech": "verb / noun",
    "example_en": "Advocate for girls education in all forums.",
    "example_hi": "सभी मंचों पर बालिकाओं की शिक्षा का समर्थन करें।",
    "category": "daily"
  },
  {
    "id": 315,
    "word_en": "Affirm",
    "word_hi": "पुष्टि करना / दृढ़ता से कहना",
    "phonetic": "/əˈfɜːm/",
    "part_of_speech": "verb",
    "example_en": "He affirmed his commitment to academic excellence.",
    "example_hi": "उसने शैक्षणिक उत्कृष्टता के प्रति अपनी प्रतिबद्धता की पुष्टि की।",
    "category": "exam_vocab"
  },
  {
    "id": 316,
    "word_en": "Afford",
    "word_hi": "सामर्थ्य होना",
    "phonetic": "/əˈfɔːd/",
    "part_of_speech": "verb",
    "example_en": "Public libraries allow everyone to afford quality reading.",
    "example_hi": "सार्वजनिक पुस्तकालय सभी को गुणवत्तापूर्ण पठन सामग्री का अवसर देते हैं।",
    "category": "daily"
  },
  {
    "id": 317,
    "word_en": "Algebra",
    "word_hi": "बीजगणित",
    "phonetic": "/ˈældʒɪbrə/",
    "part_of_speech": "noun",
    "example_en": "Algebra uses letters and symbols to represent numbers.",
    "example_hi": "बीजगणित संख्याओं को दर्शाने के लिए अक्षरों और प्रतीकों का उपयोग करता है।",
    "category": "academic_math"
  },
  {
    "id": 318,
    "word_en": "Algorithm",
    "word_hi": "कलन विधि / एल्गोरिदम",
    "phonetic": "/ˈælɡərɪðəm/",
    "part_of_speech": "noun",
    "example_en": "An algorithm is a step-by-step procedure for calculations.",
    "example_hi": "एल्गोरिदम गणना के लिए चरण-दर-चरण प्रक्रिया है।",
    "category": "academic_math"
  },
  {
    "id": 319,
    "word_en": "Altitude",
    "word_hi": "ऊंचाई",
    "phonetic": "/ˈæltɪtjuːd/",
    "part_of_speech": "noun",
    "example_en": "The altitude of Mount Everest is 8,848 meters.",
    "example_hi": "माउंट एवरेस्ट की ऊंचाई 8,848 मीटर है।",
    "category": "academic_science"
  },
  {
    "id": 320,
    "word_en": "Anatomy",
    "word_hi": "शरीर रचना विज्ञान",
    "phonetic": "/əˈnætəmi/",
    "part_of_speech": "noun",
    "example_en": "Anatomy is the study of internal body structures.",
    "example_hi": "शरीर रचना विज्ञान आंतरिक शारीरिक संरचनाओं का अध्ययन है।",
    "category": "academic_science"
  },
  {
    "id": 321,
    "word_en": "Ancestor",
    "word_hi": "पूर्वज",
    "phonetic": "/ˈænsestər/",
    "part_of_speech": "noun",
    "example_en": "Our ancestors preserved traditional water harvesting systems.",
    "example_hi": "हमारे पूर्वजों ने पारंपरिक जल संचयन प्रणालियों को संरक्षित किया।",
    "category": "daily"
  },
  {
    "id": 322,
    "word_en": "Anecdote",
    "word_hi": "लघु कथा / प्रसंग",
    "phonetic": "/ˈænɪkdoʊt/",
    "part_of_speech": "noun",
    "example_en": "The speaker shared a witty historical anecdote.",
    "example_hi": "वक्ता ने एक रोचक ऐतिहासिक प्रसंग साझा किया।",
    "category": "exam_vocab"
  },
  {
    "id": 323,
    "word_en": "Antenna",
    "word_hi": "एंटीना / स्पर्शक",
    "phonetic": "/ænˈtenə/",
    "part_of_speech": "noun",
    "example_en": "Insects use antennae to sense chemical signals.",
    "example_hi": "कीड़े रासायनिक संकेतों को महसूस करने के लिए स्पर्शकों का उपयोग करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 324,
    "word_en": "Antibiotic",
    "word_hi": "प्रतिजैविक / एंटीबायोटिक",
    "phonetic": "/ˌæntibaɪˈɒtɪk/",
    "part_of_speech": "noun",
    "example_en": "Penicillin was the first discovered antibiotic.",
    "example_hi": "पेनिसिलिन पहली खोजी गई प्रतिजैविक दवा थी।",
    "category": "academic_science"
  },
  {
    "id": 325,
    "word_en": "Apex",
    "word_hi": "शिखर / शीर्ष",
    "phonetic": "/ˈeɪpeks/",
    "part_of_speech": "noun",
    "example_en": "The apex of a pyramid is its highest point.",
    "example_hi": "पिरामिड का शीर्ष उसका सबसे उच्चतम बिंदु होता है।",
    "category": "academic_math"
  },
  {
    "id": 326,
    "word_en": "Apparatus",
    "word_hi": "उपकरण / यंत्र",
    "phonetic": "/ˌæpəˈreɪtəs/",
    "part_of_speech": "noun",
    "example_en": "Set up the distillation apparatus properly in the chemistry laboratory.",
    "example_hi": "रसायन विज्ञान प्रयोगशाला में आसवन उपकरण को ठीक से स्थापित करें।",
    "category": "academic_science"
  },
  {
    "id": 327,
    "word_en": "Apparent",
    "word_hi": "प्रत्यक्ष / स्पष्ट",
    "phonetic": "/əˈpærənt/",
    "part_of_speech": "adjective",
    "example_en": "The apparent movement of stars is due to Earth's rotation.",
    "example_hi": "तारों की प्रत्यक्ष गति पृथ्वी के घूर्णन के कारण होती है।",
    "category": "academic_science"
  },
  {
    "id": 328,
    "word_en": "Approximate",
    "word_hi": "अनुमानित / लगभग",
    "phonetic": "/əˈprɒksɪmət/",
    "part_of_speech": "adjective",
    "example_en": "The approximate value of pi is 3.14.",
    "example_hi": "पाई का अनुमानित मान 3.14 है।",
    "category": "academic_math"
  },
  {
    "id": 329,
    "word_en": "Aquatic",
    "word_hi": "जलीय",
    "phonetic": "/əˈkwætɪk/",
    "part_of_speech": "adjective",
    "example_en": "Fish and dolphins are aquatic animals.",
    "example_hi": "मछलियां और डॉल्फ़िन जलीय जीव हैं।",
    "category": "academic_science"
  },
  {
    "id": 330,
    "word_en": "Arbitrary",
    "word_hi": "मनमाना / स्वेच्छाचारी",
    "phonetic": "/ˈɑːbɪtrəri/",
    "part_of_speech": "adjective",
    "example_en": "Do not choose arbitrary values while plotting graphs.",
    "example_hi": "ग्राफ बनाते समय मनमाने मान न चुनें।",
    "category": "academic_math"
  },
  {
    "id": 331,
    "word_en": "Arc",
    "word_hi": "चाप (वृत्त का)",
    "phonetic": "/ɑːk/",
    "part_of_speech": "noun",
    "example_en": "An arc is a connected part of the circumference of a circle.",
    "example_hi": "चाप वृत्त की परिधि का एक जुड़ा हुआ भाग है।",
    "category": "academic_math"
  },
  {
    "id": 332,
    "word_en": "Archaeology",
    "word_hi": "पुरातत्व विज्ञान",
    "phonetic": "/ˌɑːkiˈɒlədʒi/",
    "part_of_speech": "noun",
    "example_en": "Archaeology reveals insights into ancient civilizations.",
    "example_hi": "पुरातत्व विज्ञान प्राचीन सभ्यताओं की अंतर्दृष्टि प्रकट करता है।",
    "category": "academic_science"
  },
  {
    "id": 333,
    "word_en": "Arithmetic",
    "word_hi": "अंकगणित",
    "phonetic": "/əˈrɪθmətɪk/",
    "part_of_speech": "noun",
    "example_en": "Arithmetic deals with fundamental numerical operations.",
    "example_hi": "अंकगणित मूलभूत संख्यात्मक संक्रियाओं से संबंधित है।",
    "category": "academic_math"
  },
  {
    "id": 334,
    "word_en": "Artery",
    "word_hi": "धमनी",
    "phonetic": "/ˈɑːtəri/",
    "part_of_speech": "noun",
    "example_en": "Arteries carry oxygenated blood away from the heart.",
    "example_hi": "धमनियां हृदय से ऑक्सीजन युक्त रक्त को शरीर में ले जाती हैं।",
    "category": "academic_science"
  },
  {
    "id": 335,
    "word_en": "Artificial",
    "word_hi": "कृत्रिम",
    "phonetic": "/ˌɑːtɪˈfɪʃəl/",
    "part_of_speech": "adjective",
    "example_en": "Artificial satellites orbit Earth for weather forecasting.",
    "example_hi": "कृत्रिम उपग्रह मौसम के पूर्वानुमान के लिए पृथ्वी की परिक्रमा करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 336,
    "word_en": "Aspiration",
    "word_hi": "आकांक्षा / अभिलाषा",
    "phonetic": "/ˌæspəˈreɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Academic aspiration drives students to excel in studies.",
    "example_hi": "शैक्षणिक आकांक्षा छात्रों को पढ़ाई में उत्कृष्ट प्रदर्शन करने के लिए प्रेरित करती है।",
    "category": "exam_vocab"
  },
  {
    "id": 337,
    "word_en": "Assess",
    "word_hi": "आकलन करना",
    "phonetic": "/əˈses/",
    "part_of_speech": "verb",
    "example_en": "Periodic tests assess student progress systematically.",
    "example_hi": "आवधिक परीक्षाएं छात्रों की प्रगति का व्यवस्थित रूप से आकलन करती हैं।",
    "category": "exam_vocab"
  },
  {
    "id": 338,
    "word_en": "Assumption",
    "word_hi": "मान्यता / धारणा",
    "phonetic": "/əˈsʌmpʃən/",
    "part_of_speech": "noun",
    "example_en": "Check your mathematical assumption before drawing conclusions.",
    "example_hi": "निष्कर्ष निकालने से पहले अपनी गणितीय धारणा की जांच करें।",
    "category": "academic_math"
  },
  {
    "id": 339,
    "word_en": "Asteroid",
    "word_hi": "क्षुद्रग्रह",
    "phonetic": "/ˈæstərɔɪd/",
    "part_of_speech": "noun",
    "example_en": "The asteroid belt lies between Mars and Jupiter.",
    "example_hi": "क्षुद्रग्रह बेल्ट मंगल और बृहस्पति के बीच स्थित है।",
    "category": "academic_science"
  },
  {
    "id": 340,
    "word_en": "Astronomy",
    "word_hi": "खगोल विज्ञान",
    "phonetic": "/əˈstrɒnəmi/",
    "part_of_speech": "noun",
    "example_en": "Astronomy studies stars, planets, and galaxies.",
    "example_hi": "खगोल विज्ञान तारों, ग्रहों और आकाशगंगाओं का अध्ययन करता है।",
    "category": "academic_science"
  },
  {
    "id": 341,
    "word_en": "Atmosphere",
    "word_hi": "वायुमंडल",
    "phonetic": "/ˈætməsfɪər/",
    "part_of_speech": "noun",
    "example_en": "The ozone layer in the stratosphere shields us from UV rays.",
    "example_hi": "समताप मंडल में ओजोन परत हमें पराबैंगनी किरणों से बचाती है।",
    "category": "academic_science"
  },
  {
    "id": 342,
    "word_en": "Attain",
    "word_hi": "प्राप्त करना",
    "phonetic": "/əˈteɪn/",
    "part_of_speech": "verb",
    "example_en": "Attain excellence through consistent daily preparation.",
    "example_hi": "लगातार दैनिक तैयारी से उत्कृष्टता प्राप्त करें।",
    "category": "exam_vocab"
  },
  {
    "id": 343,
    "word_en": "Audible",
    "word_hi": "श्रव्य / सुनाई देने योग्य",
    "phonetic": "/ˈɔːdəbəl/",
    "part_of_speech": "adjective",
    "example_en": "The human audible frequency range is 20 Hz to 20,000 Hz.",
    "example_hi": "मानव श्रव्य आवृत्ति सीमा 20 हर्ट्ज से 20,000 हर्ट्ज तक है।",
    "category": "academic_science"
  },
  {
    "id": 344,
    "word_en": "Augment",
    "word_hi": "बढ़ाना / वृद्धि करना",
    "phonetic": "/ɔːɡˈment/",
    "part_of_speech": "verb",
    "example_en": "Augment your vocabulary by reading classic novels.",
    "example_hi": "क्लासिक उपन्यास पढ़कर अपनी शब्दावली बढ़ाएं।",
    "category": "exam_vocab"
  },
  {
    "id": 345,
    "word_en": "Autonomous",
    "word_hi": "स्वायत्त / स्वतंत्र",
    "phonetic": "/ɔːˈtɒnəməs/",
    "part_of_speech": "adjective",
    "example_en": "Autonomous institutions manage their own academic curricula.",
    "example_hi": "स्वायत्त संस्थान अपने शैक्षणिक पाठ्यक्रम का स्वयं प्रबंधन करते हैं।",
    "category": "exam_vocab"
  },
  {
    "id": 346,
    "word_en": "Axis",
    "word_hi": "धुरी / अक्ष",
    "phonetic": "/ˈæksɪs/",
    "part_of_speech": "noun",
    "example_en": "Earth rotates on its tilted imaginary axis once every 24 hours.",
    "example_hi": "पृथ्वी हर 24 घंटे में एक बार अपनी झुकी हुई काल्पनिक धुरी पर घूमती है।",
    "category": "academic_science"
  },
  {
    "id": 347,
    "word_en": "Barometer",
    "word_hi": "वायुदाबमापी / बैरोमीटर",
    "phonetic": "/bəˈrɒmɪtər/",
    "part_of_speech": "noun",
    "example_en": "A barometer measures atmospheric pressure.",
    "example_hi": "बैरोमीटर वायुमंडलीय दबाव को मापता है।",
    "category": "academic_science"
  },
  {
    "id": 348,
    "word_en": "Biodegradable",
    "word_hi": "जैव अपघटनीय",
    "phonetic": "/ˌbaɪoʊdɪˈɡreɪdəbəl/",
    "part_of_speech": "adjective",
    "example_en": "Paper bags are biodegradable and environmentally friendly.",
    "example_hi": "कागज की थैलियां जैव अपघटनीय और पर्यावरण के अनुकूल हैं।",
    "category": "academic_science"
  },
  {
    "id": 349,
    "word_en": "Biodiversity",
    "word_hi": "जैव विविधता",
    "phonetic": "/ˌbaɪoʊdaɪˈvɜːsəti/",
    "part_of_speech": "noun",
    "example_en": "Tropical rainforests harbor immense terrestrial biodiversity.",
    "example_hi": "उष्णकटिबंधीय वर्षावन अपार स्थलीय जैव विविधता का पोषण करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 350,
    "word_en": "Boiling point",
    "word_hi": "क्वथनांक",
    "phonetic": "/ˈbɔɪlɪŋ pɔɪnt/",
    "part_of_speech": "noun",
    "example_en": "The normal boiling point of pure water at sea level is 100°C.",
    "example_hi": "समुद्र तल पर शुद्ध जल का सामान्य क्वथनांक 100°C होता है।",
    "category": "academic_science"
  },
  {
    "id": 351,
    "word_en": "Buoyancy",
    "word_hi": "उत्प्लावकता",
    "phonetic": "/ˈbɔɪənsi/",
    "part_of_speech": "noun",
    "example_en": "Buoyancy enables heavy iron ships to float on sea water.",
    "example_hi": "उत्प्लावकता के कारण लोहे के भारी जहाज समुद्र के पानी पर तैरते हैं।",
    "category": "academic_science"
  },
  {
    "id": 352,
    "word_en": "Calorie",
    "word_hi": "कैलोरी",
    "phonetic": "/ˈkæləri/",
    "part_of_speech": "noun",
    "example_en": "A calorie is a unit of energy derived from food.",
    "example_hi": "कैलोरी भोजन से प्राप्त होने वाली ऊर्जा की एक इकाई है।",
    "category": "academic_science"
  },
  {
    "id": 353,
    "word_en": "Capillary",
    "word_hi": "केशिका",
    "phonetic": "/kəˈpɪləri/",
    "part_of_speech": "noun",
    "example_en": "Capillaries connect microscopic arteries with veins.",
    "example_hi": "केशिकाएं सूक्ष्म धमनियों को शिराओं से जोड़ती हैं।",
    "category": "academic_science"
  },
  {
    "id": 354,
    "word_en": "Carbohydrate",
    "word_hi": "कार्बोहाइड्रेट",
    "phonetic": "/ˌkɑːboʊˈhaɪdreɪt/",
    "part_of_speech": "noun",
    "example_en": "Rice and potatoes are rich sources of carbohydrates.",
    "example_hi": "चावल और आलू कार्बोहाइड्रेट के समृद्ध स्रोत हैं।",
    "category": "academic_science"
  },
  {
    "id": 355,
    "word_en": "Carbon",
    "word_hi": "कार्बन",
    "phonetic": "/ˈkɑːbən/",
    "part_of_speech": "noun",
    "example_en": "Diamond and graphite are allotropes of pure carbon.",
    "example_hi": "हीरा और ग्रेफाइट शुद्ध कार्बन के अपरूप हैं।",
    "category": "academic_science"
  },
  {
    "id": 356,
    "word_en": "Catalyst",
    "word_hi": "उत्प्रेरक",
    "phonetic": "/ˈkætəlɪst/",
    "part_of_speech": "noun",
    "example_en": "Enzymes act as biological catalysts in human metabolism.",
    "example_hi": "एंजाइम मानव चयापचय में जैविक उत्प्रेरक के रूप में कार्य करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 357,
    "word_en": "Centroid",
    "word_hi": "केन्द्रक",
    "phonetic": "/ˈsentrɔɪd/",
    "part_of_speech": "noun",
    "example_en": "The centroid of a triangle is the intersection of its three medians.",
    "example_hi": "त्रिभुज का केन्द्रक उसकी तीनों माध्यिकाओं का प्रतिच्छेदन बिंदु होता है।",
    "category": "academic_math"
  },
  {
    "id": 358,
    "word_en": "Chord",
    "word_hi": "जीवा (वृत्त की)",
    "phonetic": "/kɔːd/",
    "part_of_speech": "noun",
    "example_en": "A diameter is the longest chord of any circle.",
    "example_hi": "व्यास किसी भी वृत्त की सबसे लंबी जीवा होता है।",
    "category": "academic_math"
  },
  {
    "id": 359,
    "word_en": "Chromatography",
    "word_hi": "वर्णलेखन / क्रोमैटोग्राफी",
    "phonetic": "/ˌkroʊməˈtɒɡrəfi/",
    "part_of_speech": "noun",
    "example_en": "Paper chromatography separates different color pigments.",
    "example_hi": "पेपर क्रोमैटोग्राफी विभिन्न रंगीन वर्णकों को अलग करती है।",
    "category": "academic_science"
  },
  {
    "id": 360,
    "word_en": "Chromosome",
    "word_hi": "गुणसूत्र",
    "phonetic": "/ˈkroʊməswoʊm/",
    "part_of_speech": "noun",
    "example_en": "Humans normally possess 23 pairs of chromosomes.",
    "example_hi": "मनुष्यों में सामान्यतः गुणसूत्रों के 23 जोड़े होते हैं।",
    "category": "academic_science"
  },
  {
    "id": 361,
    "word_en": "Circuit",
    "word_hi": "परिपथ",
    "phonetic": "/ˈsɜːkɪt/",
    "part_of_speech": "noun",
    "example_en": "Current flows only through a closed electric circuit.",
    "example_hi": "विद्युत धारा केवल बंद विद्युत परिपथ से ही प्रवाहित होती है।",
    "category": "academic_science"
  },
  {
    "id": 362,
    "word_en": "Collinear",
    "word_hi": "संरेखीय / एकरेखीय",
    "phonetic": "/kəʊˈlɪniər/",
    "part_of_speech": "adjective",
    "example_en": "Three points are collinear if they lie on the same straight line.",
    "example_hi": "तीन बिंदु संरेखीय होते हैं यदि वे एक ही सीधी रेखा पर स्थित हों।",
    "category": "academic_math"
  },
  {
    "id": 363,
    "word_en": "Combustion",
    "word_hi": "दहन",
    "phonetic": "/kəmˈbʌstʃən/",
    "part_of_speech": "noun",
    "example_en": "Oxygen is necessary for combustion of fuels.",
    "example_hi": "ईंधनों के दहन के लिए ऑक्सीजन आवश्यक है।",
    "category": "academic_science"
  },
  {
    "id": 364,
    "word_en": "Commutative",
    "word_hi": "क्रमविनिमेय",
    "phonetic": "/kəˈmjuːtətɪv/",
    "part_of_speech": "adjective",
    "example_en": "Addition and multiplication obey the commutative property.",
    "example_hi": "जोड़ और गुणा क्रमविनिमेय नियम का पालन करते हैं।",
    "category": "academic_math"
  },
  {
    "id": 365,
    "word_en": "Complementary",
    "word_hi": "पूरक",
    "phonetic": "/ˌkɒmplɪˈmentəri/",
    "part_of_speech": "adjective",
    "example_en": "Two angles are complementary if their sum is 90 degrees.",
    "example_hi": "दो कोण पूरक होते हैं यदि उनका योग 90 अंश हो।",
    "category": "academic_math"
  },
  {
    "id": 366,
    "word_en": "Compound",
    "word_hi": "यौगिक",
    "phonetic": "/ˈkɒmpaʊnd/",
    "part_of_speech": "noun",
    "example_en": "Water is a chemical compound formed from hydrogen and oxygen.",
    "example_hi": "पानी हाइड्रोजन और ऑक्सीजन से बना एक रासायनिक यौगिक है।",
    "category": "academic_science"
  },
  {
    "id": 367,
    "word_en": "Concave",
    "word_hi": "अवतल",
    "phonetic": "/kɒnˈkeɪv/",
    "part_of_speech": "adjective",
    "example_en": "A concave mirror converges parallel light rays to a focal point.",
    "example_hi": "एक अवतल दर्पण समानांतर प्रकाश किरणों को एक केंद्र बिंदु पर केंद्रित करता है।",
    "category": "academic_science"
  },
  {
    "id": 368,
    "word_en": "Concentric",
    "word_hi": "संकेंद्री",
    "phonetic": "/kənˈsentrɪk/",
    "part_of_speech": "adjective",
    "example_en": "Concentric circles share the exact same center point.",
    "example_hi": "संकेंद्री वृत्त बिल्कुल एक ही केंद्र बिंदु साझा करते हैं।",
    "category": "academic_math"
  },
  {
    "id": 369,
    "word_en": "Conclusion",
    "word_hi": "निष्कर्ष",
    "phonetic": "/kənˈkluːʒən/",
    "part_of_speech": "noun",
    "example_en": "State the experimental conclusion based on observed data.",
    "example_hi": "प्रेक्षित आंकड़ों के आधार पर प्रयोगात्मक निष्कर्ष बताएं।",
    "category": "exam_vocab"
  },
  {
    "id": 370,
    "word_en": "Conduction",
    "word_hi": "चालन",
    "phonetic": "/kənˈdʌkʃən/",
    "part_of_speech": "noun",
    "example_en": "Thermal conduction transfers heat through solid metals.",
    "example_hi": "थर्मल चालन ठोस धातुओं के माध्यम से ऊष्मा का स्थानांतरण करता है।",
    "category": "academic_science"
  },
  {
    "id": 371,
    "word_en": "Cone",
    "word_hi": "शंकु",
    "phonetic": "/koʊn/",
    "part_of_speech": "noun",
    "example_en": "An ice cream cone is an everyday example of a geometric cone.",
    "example_hi": "आइसक्रीम कोन ज्यामितीय शंकु का एक रोजमर्रा का उदाहरण है।",
    "category": "academic_math"
  },
  {
    "id": 372,
    "word_en": "Congruent",
    "word_hi": "सर्वांगसम",
    "phonetic": "/ˈkɒŋɡruənt/",
    "part_of_speech": "adjective",
    "example_en": "Two triangles are congruent if all corresponding sides and angles match.",
    "example_hi": "दो त्रिभुज सर्वांगसम होते हैं यदि सभी संगत भुजाएं और कोण समान हों।",
    "category": "academic_math"
  },
  {
    "id": 373,
    "word_en": "Conjunction",
    "word_hi": "समुच्चयबोधक",
    "phonetic": "/kənˈdʒʌŋkʃən/",
    "part_of_speech": "noun",
    "example_en": "Words like 'and', 'but', and 'because' are conjunctions.",
    "example_hi": "'और', 'लेकिन' और 'क्योंकि' जैसे शब्द समुच्चयबोधक हैं।",
    "category": "daily"
  },
  {
    "id": 374,
    "word_en": "Conservation",
    "word_hi": "संरक्षण",
    "phonetic": "/ˌkɒnsəˈveɪʃən/",
    "part_of_speech": "noun",
    "example_en": "The law of conservation of mass states mass remains constant in chemical reactions.",
    "example_hi": "द्रव्यमान संरक्षण का नियम कहता है कि रासायनिक प्रतिक्रियाओं में द्रव्यमान स्थिर रहता है।",
    "category": "academic_science"
  },
  {
    "id": 375,
    "word_en": "Constant",
    "word_hi": "स्थिरांक",
    "phonetic": "/ˈkɒnstənt/",
    "part_of_speech": "noun",
    "example_en": "In mathematics, a constant has a fixed numerical value.",
    "example_hi": "गणित में, स्थिरांक का एक निश्चित संख्यात्मक मान होता है।",
    "category": "academic_math"
  },
  {
    "id": 376,
    "word_en": "Constellation",
    "word_hi": "नक्षत्र / तारामंडल",
    "phonetic": "/ˌkɒnstəˈleɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Ursa Major is an easily recognizable northern constellation.",
    "example_hi": "सप्तर्षि तारामंडल उत्तरी आकाश में आसानी से पहचाना जाने वाला नक्षत्र है।",
    "category": "academic_science"
  },
  {
    "id": 377,
    "word_en": "Convection",
    "word_hi": "संवहन",
    "phonetic": "/kənˈvekʃən/",
    "part_of_speech": "noun",
    "example_en": "Convection currents in boiling water circulate thermal energy.",
    "example_hi": "उबलते पानी में संवहन धाराएं तापीय ऊर्जा को प्रसारित करती हैं।",
    "category": "academic_science"
  },
  {
    "id": 378,
    "word_en": "Convex",
    "word_hi": "उत्तल",
    "phonetic": "/kɒnˈveks/",
    "part_of_speech": "adjective",
    "example_en": "A convex lens is used as a magnifying glass.",
    "example_hi": "उत्तल लेंस का उपयोग आवर्धक कांच के रूप में किया जाता है।",
    "category": "academic_science"
  },
  {
    "id": 379,
    "word_en": "Coordinate",
    "word_hi": "निर्देशांक",
    "phonetic": "/koʊˈɔːdɪneɪt/",
    "part_of_speech": "noun",
    "example_en": "The coordinates (x, y) locate a unique point on the Cartesian plane.",
    "example_hi": "निर्देशांक (x, y) कार्तीय तल पर एक अद्वितीय बिंदु का पता लगाते हैं।",
    "category": "academic_math"
  },
  {
    "id": 380,
    "word_en": "Core",
    "word_hi": "क्रोड / केंद्र",
    "phonetic": "/kɔːr/",
    "part_of_speech": "noun",
    "example_en": "Earth's inner core is composed of solid iron and nickel.",
    "example_hi": "पृथ्वी का आंतरिक क्रोड ठोस लोहे और निकल से बना है।",
    "category": "academic_science"
  },
  {
    "id": 381,
    "word_en": "Corrosion",
    "word_hi": "संक्षारण / जंग लगना",
    "phonetic": "/kəˈroʊʒən/",
    "part_of_speech": "noun",
    "example_en": "Rusting of iron in humid air is a common form of corrosion.",
    "example_hi": "नम हवा में लोहे पर जंग लगना संक्षारण का एक सामान्य रूप है।",
    "category": "academic_science"
  },
  {
    "id": 382,
    "word_en": "Cube",
    "word_hi": "घन",
    "phonetic": "/kjuːb/",
    "part_of_speech": "noun",
    "example_en": "A cube has six identical square faces.",
    "example_hi": "एक घन के छह समान वर्गाकार फलक होते हैं।",
    "category": "academic_math"
  },
  {
    "id": 383,
    "word_en": "Cylinder",
    "word_hi": "बेलन",
    "phonetic": "/ˈsɪlɪndər/",
    "part_of_speech": "noun",
    "example_en": "The volume of a cylinder equals pi times radius squared times height.",
    "example_hi": "बेलन का आयतन पाई गुणा त्रिज्या वर्ग गुणा ऊंचाई के बराबर होता है।",
    "category": "academic_math"
  },
  {
    "id": 384,
    "word_en": "Cytoplasm",
    "word_hi": "कोशिका द्रव्य",
    "phonetic": "/ˈsaɪtoʊplæzəm/",
    "part_of_speech": "noun",
    "example_en": "The cytoplasm holds cell organelles in place.",
    "example_hi": "कोशिका द्रव्य कोशिका के अंगों को अपने स्थान पर बनाए रखता है।",
    "category": "academic_science"
  },
  {
    "id": 385,
    "word_en": "Data",
    "word_hi": "आंकड़े / डेटा",
    "phonetic": "/ˈdeɪtə/",
    "part_of_speech": "noun",
    "example_en": "Organize collected scientific data into tables and bar graphs.",
    "example_hi": "एकत्रित वैज्ञानिक आंकड़ों को तालिकाओं और बार ग्राफ में व्यवस्थित करें।",
    "category": "academic_math"
  },
  {
    "id": 386,
    "word_en": "Decompose",
    "word_hi": "अपघटित होना / सड़ना",
    "phonetic": "/ˌdiːkəmˈpoʊz/",
    "part_of_speech": "verb",
    "example_en": "Fungi decompose dead organic matter into soil nutrients.",
    "example_hi": "कवक मृत कार्बनिक पदार्थों को मिट्टी के पोषक तत्वों में अपघटित करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 387,
    "word_en": "Deficiency",
    "word_hi": "कमी / अभाव",
    "phonetic": "/dɪˈfɪʃənsi/",
    "part_of_speech": "noun",
    "example_en": "Vitamin A deficiency causes night blindness.",
    "example_hi": "विटामिन ए की कमी से रतौंधी रोग होता है।",
    "category": "academic_science"
  },
  {
    "id": 388,
    "word_en": "Dermis",
    "word_hi": "चर्म / त्वचा",
    "phonetic": "/ˈdɜːmɪs/",
    "part_of_speech": "noun",
    "example_en": "The dermis is the inner layer of living human skin.",
    "example_hi": "डर्मिस जीवित मानव त्वचा की आंतरिक परत है।",
    "category": "academic_science"
  },
  {
    "id": 389,
    "word_en": "Diffraction",
    "word_hi": "विवर्तन",
    "phonetic": "/dɪˈfrækʃən/",
    "part_of_speech": "noun",
    "example_en": "Diffraction is the bending of waves around narrow obstacles.",
    "example_hi": "विवर्तन संकीर्ण बाधाओं के चारों ओर तरंगों का मुड़ना है।",
    "category": "academic_science"
  },
  {
    "id": 390,
    "word_en": "Diffusion",
    "word_hi": "विसरण / फैलाव",
    "phonetic": "/dɪˈfjuːʒən/",
    "part_of_speech": "noun",
    "example_en": "Diffusion causes perfume fragrance to spread across a room.",
    "example_hi": "विसरण के कारण इत्र की खुशबू पूरे कमरे में फैल जाती है।",
    "category": "academic_science"
  },
  {
    "id": 391,
    "word_en": "Displacement",
    "word_hi": "विस्थापन",
    "phonetic": "/dɪsˈpleɪsmənt/",
    "part_of_speech": "noun",
    "example_en": "Displacement is the shortest straight-line distance between two points.",
    "example_hi": "विस्थापन दो बिंदुओं के बीच की सबसे छोटी सीधी दूरी है।",
    "category": "academic_science"
  },
  {
    "id": 392,
    "word_en": "Distillation",
    "word_hi": "आसवन",
    "phonetic": "/ˌdɪstɪˈleɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Distillation purifies saltwater into drinkable fresh water.",
    "example_hi": "आसवन खारे पानी को पीने योग्य मीठे पानी में शुद्ध करता है।",
    "category": "academic_science"
  },
  {
    "id": 393,
    "word_en": "Dominant",
    "word_hi": "प्रभावी",
    "phonetic": "/ˈdɒmɪnənt/",
    "part_of_speech": "adjective",
    "example_en": "In genetics, dominant traits mask recessive traits.",
    "example_hi": "आनुवंशिकी में, प्रभावी लक्षण अप्रभावी लक्षणों को छिपा देते हैं।",
    "category": "academic_science"
  },
  {
    "id": 394,
    "word_en": "Eclipse",
    "word_hi": "ग्रहण",
    "phonetic": "/ɪˈklɪps/",
    "part_of_speech": "noun",
    "example_en": "A lunar eclipse occurs when Earth stands directly between Sun and Moon.",
    "example_hi": "चंद्र ग्रहण तब होता है जब पृथ्वी सूर्य और चंद्रमा के ठीक बीच में आ जाती है।",
    "category": "academic_science"
  },
  {
    "id": 395,
    "word_en": "Electrolysis",
    "word_hi": "विद्युत अपघटन",
    "phonetic": "/ɪˌlekˈtrɒləsɪs/",
    "part_of_speech": "noun",
    "example_en": "Electrolysis splits water into hydrogen and oxygen gases.",
    "example_hi": "विद्युत अपघटन पानी को हाइड्रोजन और ऑक्सीजन गैसों में विभाजित करता है।",
    "category": "academic_science"
  },
  {
    "id": 396,
    "word_en": "Electromagnet",
    "word_hi": "विद्युत चुंबक",
    "phonetic": "/ɪˌlektrəʊˈmæɡnɪt/",
    "part_of_speech": "noun",
    "example_en": "An electromagnet works when electric current flows through its coil.",
    "example_hi": "एक विद्युत चुंबक तब काम करता है जब उसकी कुंडली से विद्युत धारा प्रवाहित होती है।",
    "category": "academic_science"
  },
  {
    "id": 397,
    "word_en": "Electron",
    "word_hi": "इलेक्ट्रॉन",
    "phonetic": "/ɪˈlektrɒn/",
    "part_of_speech": "noun",
    "example_en": "Electrons orbit the atomic nucleus in discrete energy levels.",
    "example_hi": "इलेक्ट्रॉन असतत ऊर्जा स्तरों में परमाणु नाभिक की परिक्रमा करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 398,
    "word_en": "Ellipse",
    "word_hi": "दीर्घवृत्त",
    "phonetic": "/ɪˈlɪps/",
    "part_of_speech": "noun",
    "example_en": "Planets revolve around the Sun in elliptical orbits.",
    "example_hi": "ग्रह सूर्य के चारों ओर दीर्घवृत्ताकार कक्षाओं में चक्कर लगाते हैं।",
    "category": "academic_math"
  },
  {
    "id": 399,
    "word_en": "Embryo",
    "word_hi": "भ्रूण",
    "phonetic": "/ˈembrioʊ/",
    "part_of_speech": "noun",
    "example_en": "The seed contains an embryo that germinates under favorable moisture.",
    "example_hi": "बीज में एक भ्रूण होता है जो अनुकूल नमी में अंकुरित होता है।",
    "category": "academic_science"
  },
  {
    "id": 400,
    "word_en": "Endothermic",
    "word_hi": "ऊष्माशोषी",
    "phonetic": "/ˌendoʊˈθɜːmɪk/",
    "part_of_speech": "adjective",
    "example_en": "Photosynthesis is an endothermic chemical process absorbing light.",
    "example_hi": "प्रकाश संश्लेषण प्रकाश को अवशोषित करने वाली एक ऊष्माशोषी रासायनिक प्रक्रिया है।",
    "category": "academic_science"
  },
  {
    "id": 401,
    "word_en": "Enzyme",
    "word_hi": "एंजाइम",
    "phonetic": "/ˈenzaɪm/",
    "part_of_speech": "noun",
    "example_en": "Enzymes speed up biochemical reactions in living cells.",
    "example_hi": "एंजाइम जीवित कोशिकाओं में जैव रासायनिक प्रतिक्रियाओं को तेज करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 402,
    "word_en": "Equator",
    "word_hi": "भूमध्य रेखा / विषुवत रेखा",
    "phonetic": "/ɪˈkweɪtər/",
    "part_of_speech": "noun",
    "example_en": "The equator divides the globe into northern and southern hemispheres.",
    "example_hi": "भूमध्य रेखा पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में विभाजित करती है।",
    "category": "academic_science"
  },
  {
    "id": 403,
    "word_en": "Equilateral",
    "word_hi": "समबाहु",
    "phonetic": "/ˌiːkwɪˈlætərəl/",
    "part_of_speech": "adjective",
    "example_en": "An equilateral triangle has three equal sides and angles of 60°.",
    "example_hi": "एक समबाहु त्रिभुज की तीन समान भुजाएं और 60° के कोण होते हैं।",
    "category": "academic_math"
  },
  {
    "id": 404,
    "word_en": "Equilibrium",
    "word_hi": "संतुलन / साम्यावस्था",
    "phonetic": "/ˌiːkwɪˈlɪbriəm/",
    "part_of_speech": "noun",
    "example_en": "An object remains at rest when forces are in perfect equilibrium.",
    "example_hi": "जब बल पूर्ण संतुलन में होते हैं तो वस्तु विराम अवस्था में रहती है।",
    "category": "academic_science"
  },
  {
    "id": 405,
    "word_en": "Erosion",
    "word_hi": "अपरदन / कटाव",
    "phonetic": "/ɪˈroʊʒən/",
    "part_of_speech": "noun",
    "example_en": "Planting tree roots prevents severe topsoil erosion.",
    "example_hi": "पेड़ों की जड़ें लगाने से ऊपरी मिट्टी के गंभीर कटाव को रोका जा सकता है।",
    "category": "academic_science"
  },
  {
    "id": 406,
    "word_en": "Exothermic",
    "word_hi": "ऊष्माक्षेपी",
    "phonetic": "/ˌeksoʊˈθɜːmɪk/",
    "part_of_speech": "adjective",
    "example_en": "Burning of wood is an exothermic reaction releasing heat and light.",
    "example_hi": "लकड़ी का जलना एक ऊष्माक्षेपी प्रतिक्रिया है जो गर्मी और प्रकाश छोड़ती है।",
    "category": "academic_science"
  },
  {
    "id": 407,
    "word_en": "Filtration",
    "word_hi": "निस्पंदन / छानना",
    "phonetic": "/fɪlˈtreɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Filtration separates insoluble sand particles from water.",
    "example_hi": "निस्पंदन पानी से अघुलनशील रेत के कणों को अलग करता है।",
    "category": "academic_science"
  },
  {
    "id": 408,
    "word_en": "Fossil",
    "word_hi": "जीवाश्म",
    "phonetic": "/ˈfɒsəl/",
    "part_of_speech": "noun",
    "example_en": "Fossils provide direct evidence of prehistoric life on Earth.",
    "example_hi": "जीवाश्म पृथ्वी पर प्रागैतिहासिक जीवन के प्रत्यक्ष प्रमाण प्रदान करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 409,
    "word_en": "Frequency",
    "word_hi": "आवृत्ति",
    "phonetic": "/ˈfriːkwənsi/",
    "part_of_speech": "noun",
    "example_en": "Frequency is measured in cycles per second or Hertz (Hz).",
    "example_hi": "आवृत्ति प्रति सेकंड चक्र या हर्ट्ज (Hz) में मापी जाती है।",
    "category": "academic_science"
  },
  {
    "id": 410,
    "word_en": "Galvanize",
    "word_hi": "जस्तीकरण करना",
    "phonetic": "/ˈɡælvənaɪz/",
    "part_of_speech": "verb",
    "example_en": "Galvanizing iron with zinc prevents destructive rusting.",
    "example_hi": "लोहे पर जस्ते की परत चढ़ाने से जंग लगने से बचाव होता है।",
    "category": "academic_science"
  },
  {
    "id": 411,
    "word_en": "Generation",
    "word_hi": "पीढ़ी / उत्पादन",
    "phonetic": "/ˌdʒenəˈreɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Solar panels facilitate clean electricity generation.",
    "example_hi": "सौर पैनल स्वच्छ बिजली उत्पादन की सुविधा प्रदान करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 412,
    "word_en": "Genetics",
    "word_hi": "आनुवंशिकी",
    "phonetic": "/dʒəˈnetɪks/",
    "part_of_speech": "noun",
    "example_en": "Gregor Mendel is revered as the father of modern genetics.",
    "example_hi": "ग्रेगोर मेंडल को आधुनिक आनुवंशिकी के जनक के रूप में सम्मानित किया जाता है।",
    "category": "academic_science"
  },
  {
    "id": 413,
    "word_en": "Germination",
    "word_hi": "अंकुरण",
    "phonetic": "/ˌdʒɜːmɪˈneɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Seed germination requires moisture, air, and suitable warmth.",
    "example_hi": "बीज अंकुरण के लिए नमी, हवा और उपयुक्त गर्माहट की आवश्यकता होती है।",
    "category": "academic_science"
  },
  {
    "id": 414,
    "word_en": "Glucose",
    "word_hi": "ग्लूकोज",
    "phonetic": "/ˈɡluːkoʊs/",
    "part_of_speech": "noun",
    "example_en": "Glucose is the primary simple sugar fueling cellular energy.",
    "example_hi": "ग्लूकोज प्राथमिक सरल शर्करा है जो कोशिकीय ऊर्जा को ईंधन देती है।",
    "category": "academic_science"
  },
  {
    "id": 415,
    "word_en": "Hemoglobin",
    "word_hi": "हीमोग्लोबिन",
    "phonetic": "/ˈhiːməˌɡloʊbɪn/",
    "part_of_speech": "noun",
    "example_en": "Hemoglobin is an iron-rich protein carrying oxygen in blood.",
    "example_hi": "हीमोग्लोबिन एक आयरन युक्त प्रोटीन है जो रक्त में ऑक्सीजन ले जाता है।",
    "category": "academic_science"
  },
  {
    "id": 416,
    "word_en": "Herbivore",
    "word_hi": "शाकाहारी",
    "phonetic": "/ˈhɜːbɪvɔːr/",
    "part_of_speech": "noun",
    "example_en": "Deer and cows are plant-eating herbivores.",
    "example_hi": "हिरण और गाय पौधे खाने वाले शाकाहारी जीव हैं।",
    "category": "academic_science"
  },
  {
    "id": 417,
    "word_en": "Humidity",
    "word_hi": "आर्द्रता / नमी",
    "phonetic": "/hjuːˈmɪdəti/",
    "part_of_speech": "noun",
    "example_en": "High relative humidity makes summer days feel muggy.",
    "example_hi": "उच्च सापेक्ष आर्द्रता से गर्मियों के दिन उमस भरे महसूस होते हैं।",
    "category": "academic_science"
  },
  {
    "id": 418,
    "word_en": "Hydrocarbon",
    "word_hi": "हाइड्रोकार्बन",
    "phonetic": "/ˌhaɪdroʊˈkɑːbən/",
    "part_of_speech": "noun",
    "example_en": "Methane is the simplest gaseous hydrocarbon compound.",
    "example_hi": "मीथेन सबसे सरल गैसीय हाइड्रोकार्बन यौगिक है।",
    "category": "academic_science"
  },
  {
    "id": 419,
    "word_en": "Incidence",
    "word_hi": "आपतन",
    "phonetic": "/ˈɪnsɪdəns/",
    "part_of_speech": "noun",
    "example_en": "The angle of incidence equals the angle of reflection.",
    "example_hi": "आपतन कोण परावर्तन कोण के बराबर होता है।",
    "category": "academic_science"
  },
  {
    "id": 420,
    "word_en": "Insulator",
    "word_hi": "विद्युतरोधी / कुचालक",
    "phonetic": "/ˈɪnsjəleɪtər/",
    "part_of_speech": "noun",
    "example_en": "Rubber and plastic are effective electrical insulators.",
    "example_hi": "रबर और प्लास्टिक प्रभावी विद्युतरोधी हैं।",
    "category": "academic_science"
  },
  {
    "id": 421,
    "word_en": "Ion",
    "word_hi": "आयन",
    "phonetic": "/ˈaɪən/",
    "part_of_speech": "noun",
    "example_en": "An atom that gains or loses electrons becomes an ion.",
    "example_hi": "जो परमाणु इलेक्ट्रॉन प्राप्त करता है या खोता है वह आयन बन जाता है।",
    "category": "academic_science"
  },
  {
    "id": 422,
    "word_en": "Isotope",
    "word_hi": "समस्थानिक / आइसोटोप",
    "phonetic": "/ˈaɪsətoʊp/",
    "part_of_speech": "noun",
    "example_en": "Carbon-14 is a radioactive isotope used in carbon dating.",
    "example_hi": "कार्बन-14 एक रेडियोधर्मी समस्थानिक है जिसका उपयोग कार्बन डेटिंग में किया जाता है।",
    "category": "academic_science"
  },
  {
    "id": 423,
    "word_en": "Kilogram",
    "word_hi": "किलोग्राम",
    "phonetic": "/ˈkɪləɡræm/",
    "part_of_speech": "noun",
    "example_en": "The kilogram is the standard SI unit of physical mass.",
    "example_hi": "किलोग्राम भौतिक द्रव्यमान का मानक SI मात्रक है।",
    "category": "academic_science"
  },
  {
    "id": 424,
    "word_en": "Kinetic",
    "word_hi": "गतिज",
    "phonetic": "/kɪˈnetɪk/",
    "part_of_speech": "adjective",
    "example_en": "A speeding vehicle possesses immense kinetic energy.",
    "example_hi": "एक तेज गति वाले वाहन में अत्यधिक गतिज ऊर्जा होती है।",
    "category": "academic_science"
  },
  {
    "id": 425,
    "word_en": "Latitude",
    "word_hi": "अक्षांश",
    "phonetic": "/ˈlætɪtjuːd/",
    "part_of_speech": "noun",
    "example_en": "The equator represents zero degrees geographical latitude.",
    "example_hi": "भूमध्य रेखा शून्य अंश भौगोलिक अक्षांश का प्रतिनिधित्व करती है।",
    "category": "academic_science"
  },
  {
    "id": 426,
    "word_en": "Lens",
    "word_hi": "लेंस",
    "phonetic": "/lenz/",
    "part_of_speech": "noun",
    "example_en": "Spectacles use corrective optical lenses to improve vision.",
    "example_hi": "दृष्टि में सुधार के लिए चश्मे में सुधारात्मक ऑप्टिकल लेंस का उपयोग किया जाता है।",
    "category": "academic_science"
  },
  {
    "id": 427,
    "word_en": "Longitude",
    "word_hi": "देशांतर",
    "phonetic": "/ˈlɒŋɡɪtjuːd/",
    "part_of_speech": "noun",
    "example_en": "Prime Meridian at Greenwich represents 0° longitude.",
    "example_hi": "ग्रीनविच में प्राइम मेरिडियन 0° देशांतर का प्रतिनिधित्व करता है।",
    "category": "academic_science"
  },
  {
    "id": 428,
    "word_en": "Luminescence",
    "word_hi": "संदीप्ति / प्रकाश उत्सर्जन",
    "phonetic": "/ˌluːmɪˈnesəns/",
    "part_of_speech": "noun",
    "example_en": "Fireflies exhibit biological luminescence at night.",
    "example_hi": "जुगनू रात में जैविक संदीप्ति प्रदर्शित करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 429,
    "word_en": "Lymph",
    "word_hi": "लसिका",
    "phonetic": "/lɪmf/",
    "part_of_speech": "noun",
    "example_en": "Lymph fluid drains cellular waste and aids immune defense.",
    "example_hi": "लसिका द्रव कोशिकीय अपशिष्ट को बाहर निकालता है और प्रतिरक्षा में सहायता करता है।",
    "category": "academic_science"
  },
  {
    "id": 430,
    "word_en": "Metabolism",
    "word_hi": "चयापचय",
    "phonetic": "/məˈtæbəlɪzəm/",
    "part_of_speech": "noun",
    "example_en": "Metabolism comprises all chemical reactions inside an organism.",
    "example_hi": "चयापचय में किसी जीव के अंदर होने वाली सभी रासायनिक प्रतिक्रियाएं शामिल हैं।",
    "category": "academic_science"
  },
  {
    "id": 431,
    "word_en": "Mitochondria",
    "word_hi": "माइटोकॉन्ड्रिया",
    "phonetic": "/ˌmaɪtəˈkɒndriə/",
    "part_of_speech": "noun",
    "example_en": "Mitochondria are known as the powerhouses of the cell.",
    "example_hi": "माइटोकॉन्ड्रिया को कोशिका का ऊर्जा गृह (पावरहाउस) कहा जाता है।",
    "category": "academic_science"
  },
  {
    "id": 432,
    "word_en": "Neuron",
    "word_hi": "तंत्रिका कोशिका / न्यूरॉन",
    "phonetic": "/ˈnjʊərɒn/",
    "part_of_speech": "noun",
    "example_en": "Neurons transmit electrical impulses across the nervous system.",
    "example_hi": "न्यूरॉन्स तंत्रिका तंत्र में विद्युत आवेगों को संचारित करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 433,
    "word_en": "Neutralization",
    "word_hi": "उदासीनीकरण",
    "phonetic": "/ˌnjuːtrəlaɪˈzeɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Acid and base react together in neutralization to produce salt and water.",
    "example_hi": "अम्ल और क्षारक उदासीनीकरण में प्रतिक्रिया करके लवण और जल बनाते हैं।",
    "category": "academic_science"
  },
  {
    "id": 434,
    "word_en": "Nucleus",
    "word_hi": "केंद्रक / नाभिक",
    "phonetic": "/ˈnjuːkliəs/",
    "part_of_speech": "noun",
    "example_en": "The nucleus holds genetic DNA inside eukaryotic cells.",
    "example_hi": "केंद्रक यूकैरियोटिक कोशिकाओं के अंदर आनुवंशिक डीएनए रखता है।",
    "category": "academic_science"
  },
  {
    "id": 435,
    "word_en": "Ohm",
    "word_hi": "ओम (प्रतिरोध की इकाई)",
    "phonetic": "/oʊm/",
    "part_of_speech": "noun",
    "example_en": "Ohm is the SI unit of electrical resistance.",
    "example_hi": "ओम विद्युत प्रतिरोध का SI मात्रक है।",
    "category": "academic_science"
  },
  {
    "id": 436,
    "word_en": "Optics",
    "word_hi": "प्रकाशिकी",
    "phonetic": "/ˈɒptɪks/",
    "part_of_speech": "noun",
    "example_en": "Optics is the branch of physics studying light properties.",
    "example_hi": "प्रकाशिकी भौतिकी की वह शाखा है जो प्रकाश के गुणों का अध्ययन करती है।",
    "category": "academic_science"
  },
  {
    "id": 437,
    "word_en": "Osmosis",
    "word_hi": "परासरण",
    "phonetic": "/ɒzˈmoʊsɪs/",
    "part_of_speech": "noun",
    "example_en": "Osmosis moves water molecules across a semi-permeable membrane.",
    "example_hi": "परासरण पानी के अणुओं को अर्ध-पारगम्य झिल्ली के पार ले जाता है।",
    "category": "academic_science"
  },
  {
    "id": 438,
    "word_en": "Parasite",
    "word_hi": "परजीवी",
    "phonetic": "/ˈpærəsaɪt/",
    "part_of_speech": "noun",
    "example_en": "A tapeworm is an internal parasite living inside intestines.",
    "example_hi": "फीताकृमि आंतों के अंदर रहने वाला एक आंतरिक परजीवी है।",
    "category": "academic_science"
  },
  {
    "id": 439,
    "word_en": "Pascal",
    "word_hi": "पास्कल (दबाव की इकाई)",
    "phonetic": "/pæˈskæl/",
    "part_of_speech": "noun",
    "example_en": "Pascal is the standard metric unit of pressure.",
    "example_hi": "पास्कल दबाव का मानक मीट्रिक मात्रक है।",
    "category": "academic_science"
  },
  {
    "id": 440,
    "word_en": "Plasma",
    "word_hi": "प्लाज्मा / प्रद्रव्य",
    "phonetic": "/ˈplæzmə/",
    "part_of_speech": "noun",
    "example_en": "Plasma is the yellowish liquid component of blood.",
    "example_hi": "प्लाज्मा रक्त का पीला तरल घटक है।",
    "category": "academic_science"
  },
  {
    "id": 441,
    "word_en": "Potential",
    "word_hi": "स्थितिज / विभव",
    "phonetic": "/pəˈtenʃəl/",
    "part_of_speech": "adjective / noun",
    "example_en": "Water stored in a high reservoir possesses potential energy.",
    "example_hi": "ऊंचे जलाशय में जमा पानी में स्थितिज ऊर्जा होती है।",
    "category": "academic_science"
  },
  {
    "id": 442,
    "word_en": "Precipitation",
    "word_hi": "वर्षण / अवक्षेपण",
    "phonetic": "/prɪˌsɪpɪˈteɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Rain, snow, and hail are atmospheric forms of precipitation.",
    "example_hi": "बारिश, बर्फ और ओले वर्षण के वायुमंडलीय रूप हैं।",
    "category": "academic_science"
  },
  {
    "id": 443,
    "word_en": "Prism",
    "word_hi": "प्रिज्म",
    "phonetic": "/ˈprɪzəm/",
    "part_of_speech": "noun",
    "example_en": "A glass prism disperses white light into a rainbow spectrum.",
    "example_hi": "एक कांच का प्रिज्म सफेद प्रकाश को इंद्रधनुषी स्पेक्ट्रम में विभाजित करता है।",
    "category": "academic_science"
  },
  {
    "id": 444,
    "word_en": "Proton",
    "word_hi": "प्रोटॉन",
    "phonetic": "/ˈproʊtɒn/",
    "part_of_speech": "noun",
    "example_en": "A proton is a positively charged subatomic particle.",
    "example_hi": "प्रोटॉन एक धनात्मक रूप से आवेशित उप-परमाणु कण है।",
    "category": "academic_science"
  },
  {
    "id": 445,
    "word_en": "Radiation",
    "word_hi": "विकिरण",
    "phonetic": "/ˌreɪdiˈeɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Solar radiation warms Earth's surface across empty space.",
    "example_hi": "सौर विकिरण खाली अंतरिक्ष के पार पृथ्वी की सतह को गर्म करता है।",
    "category": "academic_science"
  },
  {
    "id": 446,
    "word_en": "Receptor",
    "word_hi": "ग्राही / रिसेप्टर",
    "phonetic": "/rɪˈseptər/",
    "part_of_speech": "noun",
    "example_en": "Sensory receptors on the tongue detect sweet, salty, and sour tastes.",
    "example_hi": "जीभ पर संवेदी ग्राही मीठे, नमकीन और खट्टे स्वाद का पता लगाते हैं।",
    "category": "academic_science"
  },
  {
    "id": 447,
    "word_en": "Rhopalia",
    "word_hi": "संवेदी अंग",
    "phonetic": "/roʊˈpeɪliə/",
    "part_of_speech": "noun",
    "example_en": "Jellyfish possess rhopalia as primitive sensory structures.",
    "example_hi": "जेलीफ़िश में आदिम संवेदी संरचनाओं के रूप में रोपालिया होते हैं।",
    "category": "academic_science"
  },
  {
    "id": 448,
    "word_en": "Sediment",
    "word_hi": "तलछट / अवसाद",
    "phonetic": "/ˈsedɪmənt/",
    "part_of_speech": "noun",
    "example_en": "Rivers deposit fertile mineral sediment along flood plains.",
    "example_hi": "नदियां बाढ़ के मैदानों में उपजाऊ खनिज तलछट जमा करती हैं।",
    "category": "academic_science"
  },
  {
    "id": 449,
    "word_en": "Spectrum",
    "word_hi": "स्पेक्ट्रम / वर्णक्रम",
    "phonetic": "/ˈspektrəm/",
    "part_of_speech": "noun",
    "example_en": "Visible light spectrum spans violet to red wavelengths.",
    "example_hi": "दृश्य प्रकाश स्पेक्ट्रम बैंगनी से लाल तरंग दैर्ध्य तक फैला हुआ है।",
    "category": "academic_science"
  },
  {
    "id": 450,
    "word_en": "Stoma",
    "word_hi": "रंध्र (पत्ती का)",
    "phonetic": "/ˈstoʊmə/",
    "part_of_speech": "noun",
    "example_en": "Stomata on leaves facilitate gas exchange and transpiration.",
    "example_hi": "पत्तियों पर मौजूद रंध्र गैस विनिमय और वाष्पोत्सर्जन की सुविधा प्रदान करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 451,
    "word_en": "Thermodynamics",
    "word_hi": "ऊष्मागतिकी",
    "phonetic": "/ˌθɜːmoʊdaɪˈnæmɪks/",
    "part_of_speech": "noun",
    "example_en": "Thermodynamics governs heat and work interconversions.",
    "example_hi": "ऊष्मागतिकी ऊष्मा और कार्य के अंतर्संबंधों को नियंत्रित करती है।",
    "category": "academic_science"
  },
  {
    "id": 452,
    "word_en": "Transpiration",
    "word_hi": "वाष्पोत्सर्जन",
    "phonetic": "/ˌtrænspəˈreɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Transpiration in tall trees pulls water up from root systems.",
    "example_hi": "ऊंचे पेड़ों में वाष्पोत्सर्जन जड़ प्रणालियों से पानी को ऊपर खींचता है।",
    "category": "academic_science"
  },
  {
    "id": 453,
    "word_en": "Ultrasonic",
    "word_hi": "पराश्रव्य / अल्ट्रासोनिक",
    "phonetic": "/ˌʌltrəˈsɒnɪk/",
    "part_of_speech": "adjective",
    "example_en": "Bats navigate in dark caves using ultrasonic echolocation.",
    "example_hi": "चमगादड़ पराश्रव्य प्रतिध्वनि का उपयोग करके अंधेरी गुफाओं में नेविगेट करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 454,
    "word_en": "Valency",
    "word_hi": "संयोजकता",
    "phonetic": "/ˈveɪlənsi/",
    "part_of_speech": "noun",
    "example_en": "Carbon has a valency of four and forms strong covalent bonds.",
    "example_hi": "कार्बन की संयोजकता चार होती है और यह मजबूत सहसंयोजक बंधन बनाता है।",
    "category": "academic_science"
  },
  {
    "id": 455,
    "word_en": "Viscosity",
    "word_hi": "श्यानता / गाढ़ापन",
    "phonetic": "/vɪˈskɒsəti/",
    "part_of_speech": "noun",
    "example_en": "Honey has much higher fluid viscosity than pure water.",
    "example_hi": "शहद में शुद्ध पानी की तुलना में बहुत अधिक तरल श्यानता होती है।",
    "category": "academic_science"
  },
  {
    "id": 456,
    "word_en": "Wavelength",
    "word_hi": "तरंग दैर्ध्य",
    "phonetic": "/ˈweɪvleŋθ/",
    "part_of_speech": "noun",
    "example_en": "Red light has the longest wavelength in the visible spectrum.",
    "example_hi": "लाल प्रकाश की दृश्य स्पेक्ट्रम में सबसे लंबी तरंग दैर्ध्य होती है।",
    "category": "academic_science"
  },
  {
    "id": 457,
    "word_en": "Xylem",
    "word_hi": "जाइलम / दारु ऊतक",
    "phonetic": "/ˈzaɪləm/",
    "part_of_speech": "noun",
    "example_en": "Xylem vessels transport water from soil roots to tree branches.",
    "example_hi": "जाइलम वाहिकाएं मिट्टी की जड़ों से पेड़ की शाखाओं तक पानी पहुंचाती हैं।",
    "category": "academic_science"
  },
  {
    "id": 458,
    "word_en": "Yeast",
    "word_hi": "खमीर / यीस्ट",
    "phonetic": "/jiːst/",
    "part_of_speech": "noun",
    "example_en": "Yeast is a single-celled fungus used in bread baking.",
    "example_hi": "यीस्ट एक एकल-कोशिकीय कवक है जिसका उपयोग ब्रेड बेकिंग में किया जाता है।",
    "category": "academic_science"
  },
  {
    "id": 459,
    "word_en": "Zygote",
    "word_hi": "युग्मनज / जाइगोट",
    "phonetic": "/ˈzaɪɡoʊt/",
    "part_of_speech": "noun",
    "example_en": "Fertilization of egg and sperm produces a single-celled zygote.",
    "example_hi": "अंडे और शुक्राणु के निषेचन से एक एकल-कोशिका युग्मनज का निर्माण होता है।",
    "category": "academic_science"
  },
  {
    "id": 460,
    "word_en": "Accelerate",
    "word_hi": "गति बढ़ाना / त्वरित करना",
    "phonetic": "/əkˈseləreɪt/",
    "part_of_speech": "verb",
    "example_en": "Pedaling harder helps accelerate the bicycle.",
    "example_hi": "जोर से पैडल मारने से साइकिल की गति बढ़ती है।",
    "category": "academic_science"
  },
  {
    "id": 461,
    "word_en": "Acre",
    "word_hi": "एकड़ (भूमि माप)",
    "phonetic": "/ˈeɪkər/",
    "part_of_speech": "noun",
    "example_en": "The school sports complex spans over five acres.",
    "example_hi": "स्कूल का खेल परिसर पांच एकड़ से अधिक में फैला हुआ है।",
    "category": "academic_math"
  },
  {
    "id": 462,
    "word_en": "Adaptation",
    "word_hi": "अनुकूलन",
    "phonetic": "/ˌædæpˈteɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Camel's hump is a desert adaptation for storing fat.",
    "example_hi": "ऊंट का कूबड़ वसा जमा करने के लिए एक रेगिस्तानी अनुकूलन है।",
    "category": "academic_science"
  },
  {
    "id": 463,
    "word_en": "Adhesion",
    "word_hi": "आसंजन / चिपकना",
    "phonetic": "/ədˈhiːʒən/",
    "part_of_speech": "noun",
    "example_en": "Adhesion causes water droplets to stick to glass surfaces.",
    "example_hi": "आसंजन के कारण पानी की बूंदें कांच की सतहों पर चिपक जाती हैं।",
    "category": "academic_science"
  },
  {
    "id": 464,
    "word_en": "Aerobic",
    "word_hi": "वायवीय / ऑक्सी",
    "phonetic": "/eəˈroʊbɪk/",
    "part_of_speech": "adjective",
    "example_en": "Aerobic respiration utilizes oxygen to release energy.",
    "example_hi": "वायवीय श्वसन ऊर्जा जारी करने के लिए ऑक्सीजन का उपयोग करता है।",
    "category": "academic_science"
  },
  {
    "id": 465,
    "word_en": "Alloy",
    "word_hi": "मिश्र धातु",
    "phonetic": "/ˈælɔɪ/",
    "part_of_speech": "noun",
    "example_en": "Brass is a durable alloy made of copper and zinc.",
    "example_hi": "पीतल तांबे और जस्ते से बनी एक टिकाऊ मिश्र धातु है।",
    "category": "academic_science"
  },
  {
    "id": 466,
    "word_en": "Amphibian",
    "word_hi": "उभयचर",
    "phonetic": "/æmˈfɪbiən/",
    "part_of_speech": "noun",
    "example_en": "Frogs and toads are amphibians capable of living on land and water.",
    "example_hi": "मेंढक उभयचर हैं जो जमीन और पानी दोनों पर रहने में सक्षम हैं।",
    "category": "academic_science"
  },
  {
    "id": 467,
    "word_en": "Amplitude",
    "word_hi": "आयाम",
    "phonetic": "/ˈæmplɪtjuːd/",
    "part_of_speech": "noun",
    "example_en": "The amplitude of a sound wave determines its loudness.",
    "example_hi": "ध्वनि तरंग का आयाम उसकी प्रबलता को निर्धारित करता है।",
    "category": "academic_science"
  },
  {
    "id": 468,
    "word_en": "Anaerobic",
    "word_hi": "अवायवीय / अनॉक्सी",
    "phonetic": "/ˌæneəˈroʊbɪk/",
    "part_of_speech": "adjective",
    "example_en": "Yeast performs anaerobic fermentation without oxygen.",
    "example_hi": "यीस्ट बिना ऑक्सीजन के अवायवीय किण्वन करता है।",
    "category": "academic_science"
  },
  {
    "id": 469,
    "word_en": "Aquifer",
    "word_hi": "जलभृत / भूजल स्तर",
    "phonetic": "/ˈækwɪfər/",
    "part_of_speech": "noun",
    "example_en": "Rainwater harvesting recharges underground aquifers.",
    "example_hi": "वर्षा जल संचयन भूमिगत जलभृतों को पुनर्भरण करता है।",
    "category": "academic_science"
  },
  {
    "id": 470,
    "word_en": "Axiom",
    "word_hi": "स्वयंसिद्ध / अभिगृहीत",
    "phonetic": "/ˈæksiəm/",
    "part_of_speech": "noun",
    "example_en": "Euclid established fundamental axioms of plane geometry.",
    "example_hi": "यूक्लिड ने समतल ज्यामिति के मूलभूत स्वयंसिद्ध स्थापित किए।",
    "category": "academic_math"
  },
  {
    "id": 471,
    "word_en": "Binary",
    "word_hi": "द्विआधारी / बाइनरी",
    "phonetic": "/ˈbaɪnəri/",
    "part_of_speech": "adjective",
    "example_en": "Computers process data using binary digits 0 and 1.",
    "example_hi": "कंप्यूटर बाइनरी अंक 0 और 1 का उपयोग करके डेटा संसाधित करते हैं।",
    "category": "academic_math"
  },
  {
    "id": 472,
    "word_en": "Biomass",
    "word_hi": "बायोमास / जैवभार",
    "phonetic": "/ˈbaɪoʊmæs/",
    "part_of_speech": "noun",
    "example_en": "Biomass is a renewable organic energy resource.",
    "example_hi": "बायोमास एक नवीकरणीय जैविक ऊर्जा संसाधन है।",
    "category": "academic_science"
  },
  {
    "id": 473,
    "word_en": "Biotic",
    "word_hi": "जैविक",
    "phonetic": "/baɪˈɒtɪk/",
    "part_of_speech": "adjective",
    "example_en": "Plants and animals constitute biotic components of nature.",
    "example_hi": "पौधे और जानवर प्रकृति के जैविक घटक हैं।",
    "category": "academic_science"
  },
  {
    "id": 474,
    "word_en": "Bisector",
    "word_hi": "समद्विभाजक",
    "phonetic": "/baɪˈsektər/",
    "part_of_speech": "noun",
    "example_en": "An angle bisector divides an angle into two equal halves.",
    "example_hi": "एक कोण समद्विभाजक किसी कोण को दो समान भागों में विभाजित करता है।",
    "category": "academic_math"
  },
  {
    "id": 475,
    "word_en": "Black hole",
    "word_hi": "ब्लैक होल / कृष्ण विवर",
    "phonetic": "/blæk hoʊl/",
    "part_of_speech": "noun",
    "example_en": "Gravity is so intense in a black hole that even light cannot escape.",
    "example_hi": "ब्लैक होल में गुरुत्वाकर्षण इतना तीव्र होता है कि प्रकाश भी बाहर नहीं निकल सकता।",
    "category": "academic_science"
  },
  {
    "id": 476,
    "word_en": "Buoyant",
    "word_hi": "उत्प्लावक / तैरने योग्य",
    "phonetic": "/ˈbɔɪənt/",
    "part_of_speech": "adjective",
    "example_en": "Light wood is naturally buoyant on water.",
    "example_hi": "हल्की लकड़ी स्वाभाविक रूप से पानी पर तैरने योग्य होती है।",
    "category": "academic_science"
  },
  {
    "id": 477,
    "word_en": "Cartesian",
    "word_hi": "कार्तीय",
    "phonetic": "/kɑːˈtiːziən/",
    "part_of_speech": "adjective",
    "example_en": "The Cartesian plane features horizontal X and vertical Y axes.",
    "example_hi": "कार्तीय तल में क्षैतिज X और ऊर्ध्वाधर Y अक्ष होते हैं।",
    "category": "academic_math"
  },
  {
    "id": 478,
    "word_en": "Centrifugal",
    "word_hi": "अपकेंद्री",
    "phonetic": "/ˌsentrɪˈfjuːɡəl/",
    "part_of_speech": "adjective",
    "example_en": "Centrifugal force pushes rotating objects outward from the center.",
    "example_hi": "अपकेंद्री बल घूमने वाली वस्तुओं को केंद्र से बाहर की ओर धकेलता है।",
    "category": "academic_science"
  },
  {
    "id": 479,
    "word_en": "Centripetal",
    "word_hi": "अभिकेंद्री",
    "phonetic": "/senˈtrɪpɪtəl/",
    "part_of_speech": "adjective",
    "example_en": "Centripetal force pulls revolving objects inward toward the center.",
    "example_hi": "अभिकेंद्री बल परिक्रमा करने वाली वस्तुओं को केंद्र की ओर अंदर खींचता है।",
    "category": "academic_science"
  },
  {
    "id": 480,
    "word_en": "Chemical",
    "word_hi": "रासायनिक",
    "phonetic": "/ˈkemɪkəl/",
    "part_of_speech": "adjective",
    "example_en": "Rusting of iron is a permanent chemical change.",
    "example_hi": "लोहे में जंग लगना एक स्थायी रासायनिक परिवर्तन है।",
    "category": "academic_science"
  },
  {
    "id": 481,
    "word_en": "Chloroplast",
    "word_hi": "हरितलवक",
    "phonetic": "/ˈklɔːrəplæst/",
    "part_of_speech": "noun",
    "example_en": "Chloroplasts are specialized plant organelles conducting photosynthesis.",
    "example_hi": "हरितलवक विशेष पादप अंगक हैं जो प्रकाश संश्लेषण करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 482,
    "word_en": "Circuit board",
    "word_hi": "परिपथ पट्टिका / सर्किट बोर्ड",
    "phonetic": "/ˈsɜːkɪt bɔːd/",
    "part_of_speech": "noun",
    "example_en": "Electronic chips are soldered onto a circuit board.",
    "example_hi": "इलेक्ट्रॉनिक चिप्स को सर्किट बोर्ड पर लगाया जाता है।",
    "category": "academic_science"
  },
  {
    "id": 483,
    "word_en": "Circulatory",
    "word_hi": "परिसंचरण",
    "phonetic": "/ˌsɜːkjəˈleɪtəri/",
    "part_of_speech": "adjective",
    "example_en": "The heart is the central organ of the circulatory system.",
    "example_hi": "हृदय परिसंचरण तंत्र का केंद्रीय अंग है।",
    "category": "academic_science"
  },
  {
    "id": 484,
    "word_en": "Climate change",
    "word_hi": "जलवायु परिवर्तन",
    "phonetic": "/ˈklaɪmət tʃeɪndʒ/",
    "part_of_speech": "noun",
    "example_en": "Planting trees helps mitigate global climate change.",
    "example_hi": "पेड़ लगाने से वैश्विक जलवायु परिवर्तन को कम करने में मदद मिलती है।",
    "category": "academic_science"
  },
  {
    "id": 485,
    "word_en": "Clone",
    "word_hi": "प्रतिरूप / क्लोन",
    "phonetic": "/kloʊn/",
    "part_of_speech": "noun / verb",
    "example_en": "Dolly the sheep was the first successfully cloned mammal.",
    "example_hi": "डॉली भेड़ पहली सफलतापूर्वक क्लोन की गई स्तनपायी थी।",
    "category": "academic_science"
  },
  {
    "id": 486,
    "word_en": "Cohesion",
    "word_hi": "संसंजन",
    "phonetic": "/koʊˈhiːʒən/",
    "part_of_speech": "noun",
    "example_en": "Cohesion is the mutual attraction between identical molecules.",
    "example_hi": "संसंजन समान अणुओं के बीच का पारस्परिक आकर्षण है।",
    "category": "academic_science"
  },
  {
    "id": 487,
    "word_en": "Commensalism",
    "word_hi": "सहभोजिता",
    "phonetic": "/kəˈmensəlɪzəm/",
    "part_of_speech": "noun",
    "example_en": "Barnacles living on whales exhibit biological commensalism.",
    "example_hi": "व्हेल पर रहने वाले बार्नाकल जैविक सहभोजिता प्रदर्शित करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 488,
    "word_en": "Compass",
    "word_hi": "परकार / दिशा सूचक",
    "phonetic": "/ˈkʌmpəs/",
    "part_of_speech": "noun",
    "example_en": "Use a compass to draw accurate circles in geometry.",
    "example_hi": "ज्यामिति में सटीक वृत्त बनाने के लिए परकार का उपयोग करें।",
    "category": "academic_math"
  },
  {
    "id": 489,
    "word_en": "Compound interest",
    "word_hi": "चक्रवृद्धि ब्याज",
    "phonetic": "/ˈkɒmpaʊnd ˈɪntrəst/",
    "part_of_speech": "noun",
    "example_en": "Compound interest yields higher returns over long durations.",
    "example_hi": "चक्रवृद्धि ब्याज लंबी अवधि में अधिक प्रतिफल देता है।",
    "category": "academic_math"
  },
  {
    "id": 490,
    "word_en": "Congruence",
    "word_hi": "सर्वांगसमता",
    "phonetic": "/ˈkɒŋɡruəns/",
    "part_of_speech": "noun",
    "example_en": "Triangle congruence can be proved using the SAS theorem.",
    "example_hi": "त्रिभुज की सर्वांगसमता को SAS प्रमेय से सिद्ध किया जा सकता है।",
    "category": "academic_math"
  },
  {
    "id": 491,
    "word_en": "Conic",
    "word_hi": "शंकु परिच्छेद",
    "phonetic": "/ˈkɒnɪk/",
    "part_of_speech": "noun / adjective",
    "example_en": "Ellipses, parabolas, and hyperbolas are conic sections.",
    "example_hi": "दीर्घवृत्त, परवलय और अतिपरवलय शंकु परिच्छेद हैं।",
    "category": "academic_math"
  },
  {
    "id": 492,
    "word_en": "Conservation of energy",
    "word_hi": "ऊर्जा संरक्षण",
    "phonetic": "/ˌkɒnsəˈveɪʃən əv ˈenədʒi/",
    "part_of_speech": "phrase",
    "example_en": "Conservation of energy dictates that total energy in a closed system is constant.",
    "example_hi": "ऊर्जा संरक्षण कहता है कि एक बंद प्रणाली में कुल ऊर्जा स्थिर रहती है।",
    "category": "academic_science"
  },
  {
    "id": 493,
    "word_en": "Coplanar",
    "word_hi": "समतलीय",
    "phonetic": "/koʊˈpleɪnər/",
    "part_of_speech": "adjective",
    "example_en": "Coplanar lines lie entirely within the exact same plane.",
    "example_hi": "समतलीय रेखाएं पूरी तरह से एक ही तल के भीतर स्थित होती हैं।",
    "category": "academic_math"
  },
  {
    "id": 494,
    "word_en": "Covalent",
    "word_hi": "सहसंयोजक",
    "phonetic": "/koʊˈveɪlənt/",
    "part_of_speech": "adjective",
    "example_en": "Molecules share electron pairs in covalent chemical bonds.",
    "example_hi": "सहसंयोजक रासायनिक बंधों में अणु इलेक्ट्रॉन युग्म साझा करते हैं।",
    "category": "academic_science"
  },
  {
    "id": 495,
    "word_en": "Crown",
    "word_hi": "शिखा / किरीट",
    "phonetic": "/kraʊn/",
    "part_of_speech": "noun",
    "example_en": "The outermost solar atmosphere is known as the corona or crown.",
    "example_hi": "सूर्य के सबसे बाहरी वायुमंडल को कोरोना या किरीट के रूप में जाना जाता है।",
    "category": "academic_science"
  },
  {
    "id": 496,
    "word_en": "Crystallize",
    "word_hi": "क्रिस्टलीकरण करना",
    "phonetic": "/ˈkrɪstəlaɪz/",
    "part_of_speech": "verb",
    "example_en": "Salt water crystallizes when water evaporates slowly.",
    "example_hi": "पानी धीरे-धीरे वाष्पित होने पर नमक का पानी क्रिस्टलीकृत हो जाता है।",
    "category": "academic_science"
  },
  {
    "id": 497,
    "word_en": "Current",
    "word_hi": "विद्युत धारा",
    "phonetic": "/ˈkʌrənt/",
    "part_of_speech": "noun",
    "example_en": "Electric current is measured in amperes (A).",
    "example_hi": "विद्युत धारा को एम्पीयर (A) में मापा जाता है।",
    "category": "academic_science"
  },
  {
    "id": 498,
    "word_en": "Deforestation",
    "word_hi": "वनों की कटाई",
    "phonetic": "/diːˌfɒrɪˈsteɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Deforestation leads to habitat destruction and climate imbalance.",
    "example_hi": "वनों की कटाई से आवास विनाश और जलवायु असंतुलन होता है।",
    "category": "academic_science"
  },
  {
    "id": 499,
    "word_en": "Dehydration",
    "word_hi": "निर्जलीकरण",
    "phonetic": "/ˌdiːhaɪˈdreɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Drink water during sports to prevent severe dehydration.",
    "example_hi": "गंभीर निर्जलीकरण से बचने के लिए खेल के दौरान पानी पिएं।",
    "category": "academic_science"
  },
  {
    "id": 500,
    "word_en": "Distributive",
    "word_hi": "वितरण (नियम)",
    "phonetic": "/dɪˈstrɪbjətɪv/",
    "part_of_speech": "adjective",
    "example_en": "The distributive law states a(b+c) equals ab + ac.",
    "example_hi": "वितरण नियम कहता है कि a(b+c) बराबर ab + ac होता है।",
    "category": "academic_math"
  },
  {
    "id": 501,
    "word_en": "Dormant",
    "word_hi": "सुप्त / निष्क्रिय",
    "phonetic": "/ˈdɔːmənt/",
    "part_of_speech": "adjective",
    "example_en": "A dormant volcano may remain inactive for centuries.",
    "example_hi": "एक सुप्त ज्वालामुखी सदियों तक निष्क्रिय रह सकता है।",
    "category": "academic_science"
  },
  {
    "id": 502,
    "word_en": "Electronegativity",
    "word_hi": "विद्युत ऋणात्मकता",
    "phonetic": "/ɪˌlektrəʊneɡəˈtɪvɪti/",
    "part_of_speech": "noun",
    "example_en": "Fluorine is the element with highest electronegativity.",
    "example_hi": "फ्लोरीन उच्चतम विद्युत ऋणात्मकता वाला तत्व है।",
    "category": "academic_science"
  },
  {
    "id": 503,
    "word_en": "Endangered",
    "word_hi": "संकटापन्न / लुप्तप्राय",
    "phonetic": "/ɪnˈdeɪndʒəd/",
    "part_of_speech": "adjective",
    "example_en": "The Bengal tiger is a critically endangered national animal.",
    "example_hi": "बंगाल टाइगर एक गंभीर रूप से संकटापन्न राष्ट्रीय पशु है।",
    "category": "academic_science"
  },
  {
    "id": 504,
    "word_en": "Epiglottis",
    "word_hi": "घांटी का ढक्कन / एपिग्लॉटिस",
    "phonetic": "/ˌepɪˈɡlɒtɪs/",
    "part_of_speech": "noun",
    "example_en": "The epiglottis prevents food particles from entering the windpipe.",
    "example_hi": "एपिग्लॉटिस भोजन के कणों को श्वासनली में प्रवेश करने से रोकता है।",
    "category": "academic_science"
  },
  {
    "id": 505,
    "word_en": "Equinox",
    "word_hi": "विषुव / समरात-दिन",
    "phonetic": "/ˈiːkwɪnɒks/",
    "part_of_speech": "noun",
    "example_en": "During equinox, day and night are of equal duration worldwide.",
    "example_hi": "विषुव के दौरान, दुनिया भर में दिन और रात की अवधि बराबर होती है।",
    "category": "academic_science"
  },
  {
    "id": 506,
    "word_en": "Exoskeleton",
    "word_hi": "बाह्य कंकाल",
    "phonetic": "/ˌeksoʊˈskelɪtən/",
    "part_of_speech": "noun",
    "example_en": "Crabs and insects possess a protective outer exoskeleton.",
    "example_hi": "केकड़ों और कीड़ों में एक सुरक्षात्मक बाहरी कंकाल होता है।",
    "category": "academic_science"
  },
  {
    "id": 507,
    "word_en": "Fission",
    "word_hi": "विखंडन",
    "phonetic": "/ˈfɪʃən/",
    "part_of_speech": "noun",
    "example_en": "Nuclear fission splits heavy atomic nuclei to release massive energy.",
    "example_hi": "परमाणु विखंडन भारी परमाणु नाभिकों को विभाजित करके भारी ऊर्जा छोड़ता है।",
    "category": "academic_science"
  },
  {
    "id": 508,
    "word_en": "Fusion",
    "word_hi": "संलयन",
    "phonetic": "/ˈfjuːʒən/",
    "part_of_speech": "noun",
    "example_en": "Nuclear fusion in the core of the Sun powers solar heat and light.",
    "example_hi": "सूर्य के केंद्र में परमाणु संलयन सौर ताप और प्रकाश को शक्ति प्रदान करता है।",
    "category": "academic_science"
  },
  {
    "id": 509,
    "word_en": "Hemisphere",
    "word_hi": "गोलार्ध",
    "phonetic": "/ˈhemɪsfɪər/",
    "part_of_speech": "noun",
    "example_en": "India is situated entirely in the northern hemisphere.",
    "example_hi": "भारत पूरी तरह से उत्तरी गोलार्ध में स्थित है।",
    "category": "academic_science"
  },
  {
    "id": 510,
    "word_en": "Heterotroph",
    "word_hi": "परपोषी",
    "phonetic": "/ˈhetərətroʊf/",
    "part_of_speech": "noun",
    "example_en": "Animals are heterotrophs relying on organic food sources.",
    "example_hi": "जानवर जैविक खाद्य स्रोतों पर निर्भर रहने वाले परपोषी हैं।",
    "category": "academic_science"
  },
  {
    "id": 511,
    "word_en": "Homeostasis",
    "word_hi": "समस्थापन / आंतरिक संतुलन",
    "phonetic": "/ˌhoʊmioʊˈsteɪsɪs/",
    "part_of_speech": "noun",
    "example_en": "Human kidneys maintain fluid homeostasis in the body.",
    "example_hi": "मानव गुर्दे शरीर में द्रव के समस्थापन को बनाए रखते हैं।",
    "category": "academic_science"
  },
  {
    "id": 512,
    "word_en": "Hydrophobic",
    "word_hi": "जल-विरोधी",
    "phonetic": "/ˌhaɪdrəˈfoʊbɪk/",
    "part_of_speech": "adjective",
    "example_en": "Oils and waxes have natural hydrophobic properties.",
    "example_hi": "तेल और मोम में प्राकृतिक जल-विरोधी गुण होते हैं।",
    "category": "academic_science"
  },
  {
    "id": 513,
    "word_en": "Invertebrate",
    "word_hi": "अकशेरुकी (बिना रीढ़ की हड्डी वाला)",
    "phonetic": "/ɪnˈvɜːtɪbrət/",
    "part_of_speech": "noun",
    "example_en": "Earthworms and jellyfish are soft-bodied invertebrates.",
    "example_hi": "केंचुए और जेलीफ़िश कोमल शरीर वाले अकशेरुकी जीव हैं।",
    "category": "academic_science"
  },
  {
    "id": 514,
    "word_en": "Monocot",
    "word_hi": "एकबीजपत्री",
    "phonetic": "/ˈmɒnəkɒt/",
    "part_of_speech": "noun",
    "example_en": "Maize and wheat are staple monocot grain crops.",
    "example_hi": "मक्का और गेहूं मुख्य एकबीजपत्री अनाज फसलें हैं।",
    "category": "academic_science"
  },
  {
    "id": 515,
    "word_en": "Omnivore",
    "word_hi": "सर्वाहारी",
    "phonetic": "/ˈɒmnɪvɔːr/",
    "part_of_speech": "noun",
    "example_en": "Bears and humans are omnivores eating plants and meat.",
    "example_hi": "भालू और मनुष्य पौधे और मांस दोनों खाने वाले सर्वाहारी हैं।",
    "category": "academic_science"
  },
  {
    "id": 516,
    "word_en": "Permeable",
    "word_hi": "पारगम्य",
    "phonetic": "/ˈpɜːmiəbəl/",
    "part_of_speech": "adjective",
    "example_en": "Sandy soil is highly permeable to rainwater.",
    "example_hi": "रेतीली मिट्टी वर्षा के पानी के लिए अत्यधिक पारगम्य होती है।",
    "category": "academic_science"
  },
  {
    "id": 517,
    "word_en": "Reflex",
    "word_hi": "प्रतिवर्ती क्रिया",
    "phonetic": "/ˈriːfleks/",
    "part_of_speech": "noun",
    "example_en": "Blinking when bright light shines is an involuntary reflex.",
    "example_hi": "तेज रोशनी चमकने पर पलकें झपकाना एक अनैच्छिक प्रतिवर्ती क्रिया है।",
    "category": "academic_science"
  },
  {
    "id": 518,
    "word_en": "Semicircle",
    "word_hi": "अर्धवृत्त",
    "phonetic": "/ˈsemisɜːkəl/",
    "part_of_speech": "noun",
    "example_en": "The angle subtended by a diameter in a semicircle is a right angle.",
    "example_hi": "अर्धवृत्त में व्यास द्वारा अंतरित कोण समकोण होता है।",
    "category": "academic_math"
  },
  {
    "id": 519,
    "word_en": "Tangent",
    "word_hi": "स्पर्शरेखा",
    "phonetic": "/ˈtændʒənt/",
    "part_of_speech": "noun",
    "example_en": "A tangent touches a circle at exactly one unique point.",
    "example_hi": "एक स्पर्शरेखा वृत्त को ठीक एक अद्वितीय बिंदु पर स्पर्श करती है।",
    "category": "academic_math"
  },
  {
    "id": 520,
    "word_en": "Thermostat",
    "word_hi": "तापस्थापी / थर्मोस्टेट",
    "phonetic": "/ˈθɜːməstæt/",
    "part_of_speech": "noun",
    "example_en": "The thermostat keeps refrigerator cooling at a constant temperature.",
    "example_hi": "थर्मोस्टेट रेफ्रिजरेटर को एक स्थिर तापमान पर ठंडा रखता है।",
    "category": "academic_science"
  },
  {
    "id": 521,
    "word_en": "Torque",
    "word_hi": "बल आघूर्ण / टॉर्क",
    "phonetic": "/tɔːk/",
    "part_of_speech": "noun",
    "example_en": "Torque is the rotational force turning a bolt with a spanner.",
    "example_hi": "टॉर्क रिंच से बोल्ट को घुमाने वाला घूर्णी बल है।",
    "category": "academic_science"
  },
  {
    "id": 522,
    "word_en": "Translucent",
    "word_hi": "पारभासी",
    "phonetic": "/trænzˈluːsənt/",
    "part_of_speech": "adjective",
    "example_en": "Frosted glass is translucent and lets partial light pass through.",
    "example_hi": "घिसा हुआ कांच पारभासी होता है और आंशिक प्रकाश को गुजरने देता है।",
    "category": "academic_science"
  },
  {
    "id": 523,
    "word_en": "Transparent",
    "word_hi": "पारदर्शी",
    "phonetic": "/trænsˈpærənt/",
    "part_of_speech": "adjective",
    "example_en": "Clean water and optical lenses are completely transparent.",
    "example_hi": "स्वच्छ पानी और ऑप्टिकल लेंस पूरी तरह से पारदर्शी होते हैं।",
    "category": "academic_science"
  },
  {
    "id": 524,
    "word_en": "Vertebrate",
    "word_hi": "कशेरुकी (रीढ़ की हड्डी वाला)",
    "phonetic": "/ˈvɜːtɪbrət/",
    "part_of_speech": "noun",
    "example_en": "Birds, reptiles, and mammals belong to the vertebrate phylum.",
    "example_hi": "पक्षी, सरीसृप और स्तनधारी कशेरुकी संघ से संबंधित हैं।",
    "category": "academic_science"
  },
  {
    "id": 525,
    "word_en": "Vortex",
    "word_hi": "भंवर",
    "phonetic": "/ˈvɔːteks/",
    "part_of_speech": "noun",
    "example_en": "A tornado creates a powerful rotating air vortex.",
    "example_hi": "बवंडर एक शक्तिशाली घूमती हवा का भंवर बनाता है।",
    "category": "academic_science"
  },
  {
    "id": 526,
    "word_en": "Zenith",
    "word_hi": "शीर्ष बिंदु / खमध्य",
    "phonetic": "/ˈzenɪθ/",
    "part_of_speech": "noun",
    "example_en": "The sun reaches its zenith directly overhead at solar noon.",
    "example_hi": "सूर्य दोपहर के समय सीधे सिर के ऊपर अपने खमध्य बिंदु पर पहुंचता है।",
    "category": "academic_science"
  }
];
