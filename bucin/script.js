let quotes = [
"\'Jika aku tidak baik untukmu. Lalu, mengapa Tuhan mendekatkan kita sedekat ini?",
"\'Rasa sabar dariku bentuk ketulusan yang kuberikan padamu.",
"\'Sebab bahagiaku sekarang adalah kamu.",
"\'Aku menatapmu dalam. Tuhan tau betul cara mencontohkan bentuk keindahan",
"\'Saya berjanji untuk ke sekian kalinya pada diri saya sendiri untuk tidak bodoh karena dibutakan oleh cinta dan kesekian kalinya saya mengingkari itu",
"\'Dari sekian banyak manusia di dunia, mengapa aku yang di pilih olehmu?",
"\'Semenyakitkan apapun luka yang kamu berikan,percayalah kamu masih menjadi catatan yang terindah",
"\'Pergilah jika kamu sudah terlalu lelah dengan semua ini.",
"\'Siapapun aku di dalam hidupmu, aku bersyukur masih menjadi bagian di dalamnya",
"\'Gue yang terlalu berharap apa lu yang kaga peka sih?",
"\'bersabarlah, hati tidak semua pertanyaanmu ada jawabannya hari ini.ikhlaskan saja, sebab setiap hati yang lelah dan luka,Tuhan akan jaga.",
];

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('newQuotes').innerHTML = quotes[randomNumber];
	
	
//send to tweet button 
document.getElementById('twitterLink').href = "http://twitter.com/intent/tweet/?text=" + encodeURIComponent(quotes[randomNumber]);
}
