const readline = require('readline');

const emotionMap = {
    angry: {
        color: '#D32F2F',
        emoji: '😡',
        quote: 'Anger merely exhausts energy without yielding results.',
        sound: '/sounds/angry_en.mp3',
    },
    happy: {
        color: '#FFD600',
        emoji: '😊',
        quote: 'Happiness is a choice, not a circumstance.',
        sound: '/sounds/happy_en.mp3',
    },
    calm: {
        color: '#4FC3F7',
        emoji: '😌',
        quote: 'When the mind is calm, clarity follows.',
        sound: '/sounds/calm_en.mp3',
    },
    sad: {
        color: '#455A64',
        emoji: '😢',
        quote: 'Sadness is an essential chapter in the journey of healing.',
        sound: '/sounds/sad_en.mp3',
    },
    love: {
        color: '#E91E63',
        emoji: '💖',
        quote: 'Love is not merely a word—it is action, pure and deliberate.',
        sound: '/sounds/love_en.mp3',
    },
    marah: {
        color: '#D32F2F',
        emoji: '😡',
        quote: 'Amarah hanya menguras energi tanpa memberikan hasil.',
        sound: '/sounds/marah_id.mp3',
    },
    bahagia: {
        color: '#FFD600',
        emoji: '😊',
        quote: 'Kebahagiaan adalah pilihan, bukan keadaan.',
        sound: '/sounds/bahagia_id.mp3',
    },
    tenang: {
        color: '#4FC3F7',
        emoji: '😌',
        quote: 'Saat pikiran tenang, kejernihan pun muncul.',
        sound: '/sounds/tenang_id.mp3',
    },
    sedih: {
        color: '#455A64',
        emoji: '😢',
        quote: 'Kesedihan adalah bab penting dalam proses penyembuhan.',
        sound: '/sounds/sedih_id.mp3',
    },
    cinta: {
        color: '#E91E63',
        emoji: '💖',
        quote: 'Cinta bukan sekadar kata—tetapi aksi yang tulus dan nyata.',
        sound: '/sounds/cinta_id.mp3',
    },
    화남: {
        color: '#D32F2F',
        emoji: '😡',
        quote: '분노는 에너지를 소모할 뿐, 아무런 결과도 가져오지 않습니다.',
        sound: '/sounds/angry_kr.mp3',
    },
    행복: {
        color: '#FFD600',
        emoji: '😊',
        quote: '행복은 선택이지, 상황이 아닙니다.',
        sound: '/sounds/happy_kr.mp3',
    },
    평온: {
        color: '#4FC3F7',
        emoji: '😌',
        quote: '마음이 평온할 때, 모든 것이 명확해집니다.',
        sound: '/sounds/calm_kr.mp3',
    },
    슬픔: {
        color: '#455A64',
        emoji: '😢',
        quote: '슬픔은 치유의 여정에서 필수적인 한 장입니다.',
        sound: '/sounds/sad_kr.mp3',
    },
    사랑: {
        color: '#E91E63',
        emoji: '💖',
        quote: '사랑은 단어가 아니라, 순수하고 의도된 행동입니다.',
        sound: '/sounds/love_kr.mp3',
    },
};

function getEmotionData(emotion) {
    const e = emotion.toLowerCase();
    return emotionMap[e] || {
        color: '#B0BEC5',
        emoji: '❓',
        quote: 'The emotion you seek is not yet known to us.',
        sound: null,
    };
}

function runEmotionCLI() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please enter an emotion: ', (answer) => {
        const data = getEmotionData(answer);
        console.log('\n✨ Emotion Insight ✨');
        console.log(`• Emoji Representation : ${data.emoji}`);
        console.log(`• Associated Color     : ${data.color}`);
        console.log(`• Thoughtful Quote     : "${data.quote}"`);
        console.log(`• Accompanying Sound   : ${data.sound || 'None available.'}`);
        rl.close();
    });
}

// Run CLI if file is executed directly
if (require.main === module) {
    runEmotionCLI();
}

module.exports = { getEmotionData, runEmotionCLI };
