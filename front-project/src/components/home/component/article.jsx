import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { 
    ArticleList,
    ArticleInfo,
    MoreList
} from '../home_style'

/**
 * 文章列表组件
 */

export default class Article extends Component {

    static propTypes = {
        articleItem: PropTypes.object.isRequired,
        getMoreList: PropTypes.func.isRequired
    }

    render() {
        // 文章列表内容
        const list = this.props.articleItem.home.get("articleList")
        // 当前的分页页码
        const articlePage = this.props.articleItem.home.get("articlePage")
        // 获取更多内容的方法
        const {getMoreList} = this.props
        return (
            <div>
                {
                    list.map((item) => {
                        return(
                            <ArticleList key={item.get('id')}>
                                <img className="pic" src={item.get("imgURI")} />
                                <ArticleInfo >
                                    <h3 className="title">{item.get("title")}</h3>
                                    <p className="desc">{item.get("desc")}</p>
                                </ArticleInfo>
                            </ArticleList>
                        )
                    })
                }
                <MoreList onClick={() => getMoreList(articlePage)}>阅读更多</MoreList>
            </div>
        )
    }
}