import React, { Component } from 'react';
// import FormField from '../../widgetsUI/FormFields/formFields';
// import {Editor} from 'react-draft-wysiwyg';
// import {EditorState, convertFromRaw, convertToRaw} from 'draft-js';
// import {stateToHTML} from 'draft-js-export-html';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addArticle, clearNewArticle} from '../../actions';

class Dashboard extends Component {
    
    state = {
        // editorState: EditorState.createEmpty(),
        formdata: {
            name: '',
            author: '',
            review: '',
            rating: ''
        }
    }
    
    handleInput = (event, name) => {
        const newFormdata = {
            ...this.state.formdata
        };
        // let handleHtml;
        
        newFormdata[name] = event.target.value;

        this.setState({
            formdata: newFormdata
        })

        // let html = this.onEditorStateChange(this.state.editorState);
        // html()
        // console.log(html())
    }

    showNewArticle = (article) => {
        return (
            article.post ?
                <div className="conf_link">
                    Отлично! <Link to={`/articles/${article.articleId}`}>
                        Нажмите, чтобы увидеть статью
                    </Link>
                </div>
            : null
        )
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addArticle({
            ...this.state.formdata,
            ownerId: this.props.admin.login.id
        }));
    }

    componentWillUnmount() {
        this.props.dispatch(clearNewArticle())
    }

    // onEditorStateChange = (editorState) => {
    //     let contentState = editorState.getCurrentContent();
    //     let rawState = convertToRaw(contentState);
    //     let html = stateToHTML(contentState);
    //     this.setState({
    //         editorState
    //     })
    //     return function() {
    //         return html;
    //     }
    //     //this.updateForm({id: 'body'}, html);
        
    // }

    render() {
        return (
            <div className="dashboard">
                <form onSubmit={this.submitForm}>
                    <h2>Добавить статью</h2>
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Введите название статьи"
                            value={this.state.formdata.name}
                            onChange={(event) => this.handleInput(event, 'name')}
                        />
                    </div>
                    <div className="form_element">
                        <input 
                            type="text"
                            placeholder="Введите автора статьи"
                            value={this.state.formdata.author}
                            onChange={(event) => this.handleInput(event, 'author')}
                        />
                    </div>
                    {/* <Editor
                        editorState={this.state.editorState}
                        wrapperClassName="myEditor-wrapper"
                        editorClassName="myEditor-editor"
                        onEditorStateChange={this.onEditorStateChange}
                        value={this.state.formdata.review}
                    /> */}
                    <div className="form_element">
                        <textarea
                            value={this.state.formdata.review}
                            onChange={(event) => this.handleInput(event, 'review')}
                        />
                    </div>
                    <div className="form_element">
                        <select
                            value={this.state.formdata.rating}
                            onChange={(event) => this.handleInput(event, 'rating')}
                        >
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>
                    <button typt="submit">Добавить статью</button>
                    {
                        this.props.articles.newArticle ?
                            this.showNewArticle(this.props.articles.newArticle)
                        : null
                    }
                </form>
                <div>
                    <Link to="/admin-posts">Таблица статей</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Dashboard);