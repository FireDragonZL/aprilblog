import React,{Component} from 'react'
import PropTypes from 'prop-types'

import {DetailWrapper,
        Title,
        Content
       } from './detail_style'

export default class Detail extends Component{

    static propTypes = {
        detailState: PropTypes.object.isRequired,
        getArticleDetail: PropTypes.func.isRequired
    }

    // 渲染前挂载
    componentDidMount(){
        // 路由 detail 携带的参数 ID
        const id = this.props.match.params.id
        this.props.getArticleDetail(id)
    }

    render(){
        const title = this.props.detailState.detail.get("title")
        const content = this.props.detailState.detail.get("content")
        return(
            <DetailWrapper>
                <Title>{title}</Title>
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }
}