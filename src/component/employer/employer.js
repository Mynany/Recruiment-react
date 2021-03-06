import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { getUserList } from '../../redux/charuser.redux'
import UserCard from '../usercard/usercard'

@connect(
    state=>state.chatuser,
    {getUserList}
)
class Employer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        this.props.getUserList('jobseeker')
    }
    render(){
        return <UserCard userlist={this.props.userlist}></UserCard>
    }
}

export default Employer