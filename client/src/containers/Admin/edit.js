import React, { PureComponent } from 'react';
// import FormField from '../../widgetsUI/FormFields/formFields';
// import {Editor} from 'react-draft-wysiwyg';
// import {EditorState, convertFromRaw, convertToRaw} from 'draft-js';
// import {stateToHTML} from 'draft-js-export-html';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
            getSingleArticle, 
            updateArticle, 
            clearArticle, 
            deleteArticle
        } from '../../actions';

class EditArticle extends PureComponent {
    
    state = {
        // editorState: EditorState.createEmpty(),
        formdata: {
            _id: this.props.match.params.id,
            name: '',
            author: '',
            review: '',
            rating: '',
            updateAt: '',
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

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateArticle(this.state.formdata))
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

    deletePost = () => {
        this.props.dispatch(deleteArticle(this.props.match.params.id))
    }

    redirectAdminTable = () => {
        setTimeout(() => {
            this.props.history.push('/admin-posts')
        }, 1000)
    }

    componentWillMount() {
        this.props.dispatch(getSingleArticle(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps) {
        let article = nextProps.articles.article;
        this.setState({
            formdata: {
                _id: article._id,
                name: article.name,
                author: article.author,
                review: article.review,
                rating: article.rating,
                updateAt: article.updateAt
            }
        })
    }

    componentWillUnmount() {
        this.props.dispatch(clearArticle())
    }

    render() {
        let articles = this.props.articles
        return (
            <div className="dashboard">
                {
                    articles.updateArticle ?
                        <div className="edit_confirm">
                            Статья обновлена, <Link to={`/articles/${articles.article._id}`}>
                                Кликните, чтобы увидеть вашу статью
                            </Link>
                        </div>
                    : null
                }

                {
                    articles.postDeleted ?
                        <div className="red_tag">
                            Статья удалена
                            {this.redirectAdminTable()}
                        </div>
                    : null
                }
                <form onSubmit={this.submitForm}>
                    <h2>Редактировать статью</h2>
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
                    <button typt="submit">Редактировать статью</button>
                    <div className="delete-post">
                        <div className="delete-post__button"
                            onClick={this.deletePost}
                        >
                            Удалить статью
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(EditArticle);