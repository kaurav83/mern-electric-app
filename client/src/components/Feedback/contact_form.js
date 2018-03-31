import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    state = {
        message: ''
    }
    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const theme = document.getElementById('theme').value;
        const phone = document.getElementById('phone').value;

        axios({
            method: "POST",
            url: "http://localhost:8080/send",
            data: {
                name: name,
                email: email,
                message: message,
                theme: theme,
                phone: phone
            }
        })
        .then((response) => {
            if (response.data.msg === 'success') {
                this.setState({
                    message: 'Сообщение отправлено.'
                })
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                this.setState({
                    message: 'Не удалось отправить сообщение.'
                })
            }
        })

    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        // this.props = this.state.message;
        // const {message} = this.props;
        // console.log(this.props)
        
        return (
            <div className="contact-container">
                <div className="contact">
                    <h4 className="contact__title">Напишите нам</h4>
                    <div className="contact__response-msg">{this.state.message}</div>
                    <form method="POST" id="contact-form" action='/send' onSubmit={this.handleSubmit.bind(this)}>
                        <div className="contact__items">
                            <p className="contact__p">
                                <label className="contact__label">Ваше имя <span className="contact__required">*</span></label>
                                <input type="text" className="contact__field" id="name" required name="name" />
                            </p>
                            <p className="contact__p">
                                <label className="contact__label">Тема сообщения</label>
                                <input type="text" className="contact__field" id="theme" name="theme" />
                            </p>
                            <p className="contact__p">
                                <label className="contact__label">Ваш Email адресс <span className="contact__required">*</span></label>
                                <input type="email" className="contact__field" id="email" required name="email" />
                            </p>
                            <p className="contact__p">
                                <label className="contact__label">Ваш номер телефона</label>
                                <input type="text" className="contact__field" id="phone" name="phone" />
                            </p>
                            <p className="contact__full">
                                <label className="contact__label" required>Сообщение <span className="contact__required">*</span></label>
                                <textarea type="text" rows="5" className="contact__message" id="message" name="message" />
                            </p>
                            
                        </div>
                            <p className="contact__button-block">
                                <button type="submit" className="contact__button">Отправить сообщение</button>
                            </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;