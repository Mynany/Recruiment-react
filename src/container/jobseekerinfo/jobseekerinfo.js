import React from 'react'
import {NavBar, InputItem, TextareaItem} from 'antd-mobile'
import { AvatarSelector } from '../../component/avatar-selector/avatar-selector'
class JobseekerInfo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title:''
        }
    }

    onChange(key, val){
        this.setState({
            [key]:val
        })
    }
    render() {
        return (
            <div>
                <NavBar mode="dark">Jobseeker complete info</NavBar>
               
                <InputItem onChange={(v)=>this.onChange('title',v)}>
                    Job Title
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('company',v)}>
                    Company Name
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('salary',v)}>
                    Job Salary
                </InputItem>
                <TextareaItem 
                    onChange={(v)=>this.onChange('desc',v)}
                    rows={3}
                    autoHeight
                    title='Job Description'
                >
                </TextareaItem>
            </div>
        )
    }
}

export default JobseekerInfo