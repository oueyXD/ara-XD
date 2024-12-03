// calendarMessages.js

// Date-specific messages (you can add more for different dates)
const dateMessages = {
    "07-13": "Happy anniversary, baby",
    "06-13": "First usap natin! Happy birthday din Jinsoul",
    "06-24": "First inom (pero natulog ka agad)",
    "06-27": "First breakfast natin!",
    "07-19": "Sinamahan mo ako magpa pierce sa 1/2 snakebites ko",
    "08-07": "In-adopt tayo ni Sisig<3",
    "08-15": "First piercing mo! Yung nose piercing eto, tas 2/2 na rin sa snakebites ko",
    "08-22": "Happy birthday, baby",
    "09-19": "Inaway mo kami ni Gemma :/",
    "10-09": "In-adopt natin si Siomai<3 we miss u Siom",
    "10-15": "Nagpa earl piercing ka!",
    "11-29": "Dinala natin sila Sisig at Siomai sa VETMED building para sa free anti-rabies. Nauna ka umalis sa klase mo kasi inuna mo kabadingan dahil nasa labas ako",
    "11-24": "Nagdate tayo sa Baybay after palitan piercing mo. Naka striped sweatshirt ako tas purple pa buhok mo",
    "12-04": "Lighting ceremony sa VSU! Nagkiss tayo sa Christmas tree, pinicturan tayo nung mga bading, tas nawala yung isang polaroid natin :(",
    "12-10": "Nagdate tayo sa oval. Sa date na to galing yung fav pic ko nating dalawa",
    "12-12": "Long exam sa ITEC natin tas pinakopya mo ako. Mas malaki pa rin score mo :/",
    "12-17": "Beach date na sobrang aga",
    "01-22": "Pinulot ko si Buwad hahaha",
    "02-08": "Sinamahan mo ako magpic para sa ENVI lab ko tas ikaw lang pinicturan ko",
    "02-10": "Binigyan mo ako cake ang halatang sobrang saya mo non kasi nagssparkle mga mata mo",
    "02-22": "Nanganak si Gemma!",
    "02-28": "Magkatabi kayo ni Siomai matulog pero naka 69 position nyo and inaamoy nya paa mo and vice versa",
    "03-15": "Pinasuot natin ng harness si Siomai pero ayaw nya lumakad kaya dinala natin sha tas nag ice cream tayo",
    "03-27": "May nakasalubong tayong orange posa and pinicturan ko kayo. Isa yon sa fav pics ko sayo",
    "03-28": "Bumili ka ng sobrang daming chocolate na nasa cup (yung may spoon basta alam mo yon) and sa sobrang saya mo nakatulog ka agad matapos ka kumain",
    "04-15": "Dumating na yung matching I <3 my gf t-shirt natin",
    "04-18": "First suot natin sa matching I <3 my gf t-shirt natin!", 
    "04-24": "Naglakad (naglandian) tayo sa oval kasi 100th anniv sa VSU",
    "04-25": "Napulot natin si Shawarma! we miss u shaw shaw :( naka match rin tayo t-shirt nyan, and dami tumingin na naccringe HAHAHA",
    "04-26": "Naglandian na naman tayo sa oval sa harap ng madaming tao. Nag away din tayo syempre. Ang ganda mo sa mga pics. Bumili ka rin ng mangga at sobrang hyped ka",
    "04-27": "Ginawan mo ng brief si Siomai ahahaha",
    "04-29": "Binilhan natin sila Sisig at Siomai ng dino costume at unan",
    "05-01": "Ginawan mo ng outfit si Shawarma 10/10",
    "05-04": "Naging croptop yung t-shirt dapat ni Shawarma ahahaha",
    "05-08": "Nag inom tayo kasama sila ate Amiel and ininterview nya ako malala tungkol satin. Naging #1 fan sha satin after",
    "06-02": "Beach date na naman, except hapon na. Naligo din tayo and binantayan nung stray cat yung mga gamit natin",
    "06-10": "Day sa grad pic ko. Minakeupan at sinamahan mo ako :)",
    "07-09": "Sinamahan kita magpa medical. Match outfits natin. Napulot din natin si Bangus!",
    "07-17": "Pinatanggal ko na snakebites ko :( an angel lost its wings...",
    "08-03": "Nag late night date tayo sa 7/11; naabutan ng bagyo and umuwing basang basa",




    // Add more specific dates here...
};

// Get the current date in MM-DD format
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

// Default message if no specific message for the date
const defaultMessage = "Hello, baby! Wala tayong ginawa today hahaha. Baka sa future meron na :)";

// Set the date-specific message in the calendar section
document.getElementById('dateMessage').innerText = dateMessages[formattedDate] || defaultMessage;

// Calendar creation and highlight of current date
const calendarContainer = document.getElementById('calendar');
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

// Clear the calendar
calendarContainer.innerHTML = "";

// Add days to the calendar
for (let i = 0; i < firstDayOfMonth; i++) {
    calendarContainer.innerHTML += `<div></div>`;  // Empty cells for alignment
}
for (let day = 1; day <= daysInMonth; day++) {
    const isCurrentDay = (day === currentDate.getDate());
    calendarContainer.innerHTML += `<div class="${isCurrentDay ? 'current-day' : ''}">${day}</div>`;
}
