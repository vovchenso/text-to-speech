import AWS from 'aws-sdk';

const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    accessKeyId: '',
    secretAccessKey: '',
    region: 'eu-west-1'
});

const playPollyAudio = (data) => {
    const uInt8Array = new Uint8Array(data.AudioStream);
    const arrayBuffer = uInt8Array.buffer;
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);

    const audio = document.createElement("AUDIO");
    audio.src = url;
    audio.play();
};

const generatePollyAudio = (text, voiceId) => {
    const params = {
        Text: text,
        OutputFormat: 'mp3',
        VoiceId: voiceId
    };

    return Polly.synthesizeSpeech(params, (err, data) => {
        if (data.AudioStream instanceof Buffer) {
            playPollyAudio(data);
        }
        else throw 'AudioStream is not a buffer'
    })
};

export default generatePollyAudio;