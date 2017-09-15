import React from 'react';
import generatePollyAudio from '../textToSpeech/textToSpeech';

class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedText: '',
            submittedHistory: []
        };
        this.onChangeSubmittedText = this.onChangeSubmittedText.bind(this);
        this.onKeyPressEnter = this.onKeyPressEnter.bind(this);
        this.onSubmitText = this.onSubmitText.bind(this);
    }

    onChangeSubmittedText(e) {
        this.setState({
            submittedText: e.target.value
        });
    };

    onKeyPressEnter(e) {
        if (e.key === 'Enter') {
            this.onSubmitText();
        }
    }

    onSubmitText() {
        generatePollyAudio(this.state.submittedText, 'Joanna');
        this.setState({
            submittedHistory: [this.state.submittedText, ...this.state.submittedHistory]
        });
        this.onChangeSubmittedText({target: {value: ''}});
    }

    render() {
        const { submittedHistory } = this.state;
        const reformattedSubmittedHistory = submittedHistory.map((previousRequest, index) =>
            <li key={index}>{previousRequest}</li>
        );

        return (
            <div>
                Enter text and click on "Submit" (or press "enter"):<br/>
                <input
                    className="poc-input"
                    type="text"
                    onChange={(e) => this.onChangeSubmittedText(e)}
                    value={this.state.submittedText}
                    onKeyPress={(e) => this.onKeyPressEnter(e)}
                /><br/>
                <button
                    className="poc-button"
                    onClick={() => {
                        this.onSubmitText();
                        this.onChangeSubmittedText({target: {value: ''}});
                    }}
                >
                    Submit
                </button>
                <ul>
                    {reformattedSubmittedHistory}
                </ul>
            </div>
        )
    }
}

export default InputArea;
