const messages = [
    "I love you",
    "The thought that you exist is so divinely blissful in itself that it is ridiculous to talk about the everyday sadness of separation—a week’s, ten days’—what does it matter? Since my whole life belongs to you.",
    "Every hour we spent together lives within my heart",
    "You know, love doesn't mean 'I never want you to change.' But I don't think it means 'I don't care if you change' either. So I suppose it might mean, 'I believe that you'll always be the person I adore.' A declaration of faith, perhaps.",
    "I'm so filled with you. I want to run through meadows, bash my head against mountain rocks, give myself to ocean waves. I'm so filled with you I want to crumble into myself like a speck of dust, to gently lay my head at your feet, cling fast to your weightless shadow.",
    "It’s not myself I hand over to you—that would be too simple—what I hand over to you is yourself, yourself loved in every part.",
    "If I was miserable ever it was my own fault. I was not miserable with you.",
    "Come love, make me better than I was. Come teach me a kinder way to say my own name.",
    "I have so much of you in my heart.",
    "I look for you everywhere; small gestures made by all kinds of people in the street remind me of you, by their similarity as much as by their differences, but I cannot say what is obsessing me; it obsesses me utterly and leaves no strength to express it.",
    "I miss you, my love, and have such a need to see you. Solitude may well be of benefit to me, but how hard your absence is for me! I long for your little face, your voice, your gestures, and your tenderness. I’m quite melting with tenderness for you today — and it’s painful.",
    "For you are endearing, my darling. You are a curious case of strangeness and extraordinary loveliness.",
    "It engulfs me, your love, whole.",
    "We die together from loving each other: an open death, by dilution into the ether, a closed death of the shared grave.",
    "There is no end to love. It is an eternal river.",
    "I collect stars but have no place to put them. You take my breath away only to give back a purer one. The way you dance creates a new constellation.",
    "To have a lover’s hands within our own hands, to become those other hands as those other hands are becoming you, is to be between two mirrors, is to be placed into the abyss of touch.",
    "I believe the wound is also the place where the skin reencounters itself, asking of each end, where have you been?",
    "I went out today To look for a poem, but everywhere I turned I saw only you.",
    "i love you. you made a mistake? i dont care i love you. you made a wrong choice? love you. you don’t think you’re good for anything? guess what you’re good for loving i love you",
    "May your heart be mine, may my heart be yours. May your sorrows be mine， may my joys be yours.",
    "I miss you deeply, unfathomably, senselessly, terribly.",
    "I’ll rewrite this whole life and this time there’ll be so much love, you won’t be able to see beyond it.",
    "I want to meet you in every place I ever loved.",
    "For I have been pierced by the arrow of your love. For you, I burn with an ardent desire: it is to you that I desire to come, it is you that I long to see. ",
    "I crave your mouth, your voice, your hair. Silent and starving, I prowl through the streets. Bread does not nourish me, dawn disrupts me, all day I hunt for the liquid measure of your steps.",
    "I want to fill my mouth with your name. I want to eat you whole.",
    "You are the hand that touches my face when I awaken from death. I only ever dream of you.",
    
    
];

// Pick a random message from the array
const randomMessage = messages[Math.floor(Math.random() * messages.length)];

// Set the random message to the #message element
document.getElementById('message').innerText = randomMessage;
