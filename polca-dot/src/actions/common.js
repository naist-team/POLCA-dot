import HttpClient from '../server/httpClient';

export function onChange(checked) {
  this.setState({ activeSwitch: checked });
}

export function sendMessage(content) {
  HttpClient.Post('/send_massage', { content: content })
    .then(res => {
      if (res.result == 'ok') {
        console.log('mes', content);
        get_message.bind(this)()
      };
    });
}

export function get_message() {
  HttpClient.Post('/get_message', {})
    .then(res => {
      if (res.result === 'ok') {
        this.setState({
          messages: res.msgs
        });
      }
    })
}
