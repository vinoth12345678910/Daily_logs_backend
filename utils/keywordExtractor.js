require('dotenv').config();

// Words that indicate positive or meaningful moments
const POSITIVE_INDICATORS = new Set([
    'happy', 'joy', 'love', 'smile', 'beautiful', 'wonderful', 'amazing', 'great',
    'excited', 'proud', 'grateful', 'blessed', 'peaceful', 'calm', 'relaxed',
    'success', 'achievement', 'progress', 'growth', 'learn', 'discover', 'create',
    'inspire', 'motivate', 'dream', 'hope', 'believe', 'achieve', 'celebrate'
]);

function findSweetMoment(text) {
    // Split into sentences
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    // Find the most meaningful sentence
    let bestSentence = '';
    let maxScore = 0;

    sentences.forEach(sentence => {
        const words = sentence.toLowerCase().split(/\s+/);
        let score = 0;
        
        // Count positive words
        words.forEach(word => {
            if (POSITIVE_INDICATORS.has(word)) {
                score += 2;
            }
        });

        // Bonus for longer meaningful sentences (but not too long)
        if (words.length >= 4 && words.length <= 10) {
            score += 1;
        }

        if (score > maxScore) {
            maxScore = score;
            bestSentence = sentence.trim();
        }
    });

    return bestSentence || text; // Return the best sentence or full text if no good sentence found
}

async function extractSweetMoment(text) {
    if (!text || text.trim().length < 3) {
        console.error('Text is too short for extraction');
        return text;
    }

    try {
        console.log('Processing text:', text);
        const sweetMoment = findSweetMoment(text);
        console.log('Extracted sweet moment:', sweetMoment);
        return sweetMoment;
    } catch (error) {
        console.error('Extraction failed:', error);
        return text;
    }
}

module.exports = extractSweetMoment;
