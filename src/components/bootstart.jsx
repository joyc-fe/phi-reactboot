import React from 'react'
import { Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

class bootStart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    // 选择select
    handleSelectChange = (value) => {
        console.log(`selected ${value}`)
    }

    // 提交表单
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('收到表单值：', this.props.form.getFieldsValue())

        this.props.form.resetFields()
    }


    // 显示弹框
    showModal = () => {
        this.setState({ visible: true })
    }


    // 隐藏弹框
    hideModal = () => {
        this.setState({ visible: false })
    }

    render() {
        const { getFieldDecorator } = this.props.form

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 6 }
        }

        const success = function () {
            message.success('操作成功!');
        }

        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    id="control-input"
                    label="项目名称"
                    {...formItemLayout}
                    required>
                    <Input id="control-input" placeholder="Please enter..."
                        {...getFieldDecorator('userName')} />
                </FormItem>

                <FormItem
                    label="页面模式"
                    {...formItemLayout} >
                    <RadioGroup defaultValue="b" {...getFieldDecorator('radioItem')}>
                        <Radio value="a">单页面应用(SPA)</Radio>
                        <Radio value="b">多页面(MPA)</Radio>
                    </RadioGroup>
                </FormItem>


                <FormItem
                    label="项目语言"
                    {...formItemLayout}>
                    <RadioGroup defaultValue="b" {...getFieldDecorator('radioItem')}>
                        <Radio value="a">JAVA</Radio>
                        <Radio value="b">HTML</Radio>
                        <Radio value="c">PHP</Radio>
                    </RadioGroup>
                </FormItem>



                <FormItem
                    label="状态管理"
                    {...formItemLayout}>
                    <RadioGroup defaultValue="b" {...getFieldDecorator('radioItem')}>
                        <Radio value="a">Flux</Radio>
                        <Radio value="b">Redux</Radio>

                    </RadioGroup>
                </FormItem>

                <FormItem
                    label="可选组件"
                    {...formItemLayout}
                    >
                    <Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem1')}>pace-progress</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem2')}>redux-thunk</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem3')}>jquery</Checkbox>
                    <Checkbox className="ant-checkbox-inline" {...getFieldDecorator('checkboxItem3')}>antd</Checkbox>
                </FormItem>


                <FormItem
                    label="构建工具"
                    {...formItemLayout}>
                    <RadioGroup defaultValue="b" {...getFieldDecorator('radioItem')}>
                        <Radio value="a">Webpack</Radio>
                    </RadioGroup>
                </FormItem>

                <FormItem
                    id="control-textarea"
                    label="项目说明"
                    {...formItemLayout}>
                    <Input type="textarea" id="control-textarea" rows="3"
                        {...getFieldDecorator('content')} />
                </FormItem>

                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit" onClick={success}>确定</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="ghost" onClick={this.showModal}>生成项目</Button>
                </FormItem>
                <Modal title="登录" visible={this.state.visible} onOk={this.hideModal} onCancel={this.hideModal}>
                    这是一个modal
                </Modal>





            </Form>
        )
    }
}

bootStart = Form.create()(bootStart)

export default bootStart