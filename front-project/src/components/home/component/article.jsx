import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { 
    ArticleList,
    ArticleInfo
} from '../home_style'

/**
 * 文章列表组件
 */

export default class Article extends Component {

    static propTypes = {
        articleItem: PropTypes.object.isRequired
    }

    render() {
        const list = this.props.articleItem.home.get("articleList")
        console.log("当前的article对象为=", list)
        return (
            <div>
                {
                    list.map((item) => {
                        return(
                            <ArticleList key={item.get("id")}>
                                <img className="pic" src={item.get("imgURI")} />
                                <ArticleInfo >
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ArticleInfo>
                            </ArticleList>
                        )
                    })
                }
            </div>
        )
    }
}